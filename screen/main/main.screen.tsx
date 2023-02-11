import { NextPage } from "next";
import { getCookie } from "cookies-next";
import Image from "next/image";

import axios from "axios";
import React, { useEffect, useState } from "react";

import Footer from '../../components/footer';
import DetailProfile from "../../components/detailProfile";

import splash from '../../public/splash.gif';
import percent from '../../public/percentIcon.png';
import profile from '../../public/basicProfile.png';
import profile2 from '../../public/reverseProfile.png';

import { Box, FormControl, MenuItem, Modal, Select, SelectChangeEvent, Typography } from "@mui/material";

import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const MainScreen: NextPage = () => {
  const [matchingId, setMatchingId] = useState('');
  const [userName, setUserName] = useState('');
  const [count, setCount] = useState('4');
  const [open, setOpen] = useState(false);
  const [list, setList] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [isSplash, setIsSplash] = useState<boolean>(true);
  const [isMatched, setIsMatched] = useState<boolean>();
  const [swiper, setSwiper] = useState<SwiperCore>();

  const [name, setName] = useState('');
  const [age, setAge] = useState(-1);
  const [nationality, setNationality] = useState('');
  const [isSmoking, setIsSmoking] = useState('');
  const [lifeCycle, setLifeCycle] = useState('');
  const [sleepingPattern, setSleepingPattern] = useState<String[]>([]);
  const [isCleaning, setIsCleaning] = useState('');
  const [armyService, setArmyService] = useState<string | null>('');
  const [dormitory, setDormitory] = useState('');
  const [detailProfile, setDetailProfile] = useState<any | null>(null);
  const [matchPercent, setMatchPercent] = useState(-1.1);
  const [mbti, setMbti] = useState('');
  const [department, setDepartment] = useState('');
  const [message, setMessage] = useState<string | null | undefined>('');

  const token = getCookie('OMNM');
  const headers = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      'OMNM': `${token}`
    }
  };

  const onClick = async (index: number) => {
    setLoading(true);

    setMatchingId(list[index].userId)
    const url = `/api/main/${list[index].userId}`;
    const headers = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        'OMNM': `${token}`
      }
    };

    await axios.get(url, headers)
      .then((res) => {
        setName(res.data.name);
        setAge(res.data.age);
        setMessage(res.data.message);
        setNationality(res.data.nationality === 0 ? '내국인' : '외국인');
        setMatchPercent(res.data.percent);
        res.data.profileUrl === null ? setDetailProfile(null) : setDetailProfile(res.data.profileUrl);
        res.data.dormitory === 0 ? setDormitory('308관 2인실') :
          res.data.dormitory === 1 ? setDormitory('308관 4인실') :
            setDormitory('309관 2인실');

        setMbti(res.data.mbti);
        setDepartment(res.data.department);

        res.data.isSmoking === 0 ? setIsSmoking('흡연') : setIsSmoking('비흡연');
        res.data.lifeCycle === 0 ? setLifeCycle('아침형') : setLifeCycle('저녁형');
        res.data.armyService === null ? setArmyService(null) :
          res.data.armyService === 0 ? setArmyService('군필') : setArmyService('미필');

        const sp = res.data.sleepingPattern.replace(/[{}]/g, '').split(',');
        if (sp.length === 0) setSleepingPattern(['수면패턴 없음']);
        else {
          const newSP: String[] = [];
          sp.forEach((v: string) => {
            if (v === '0') newSP.push('코골이');
            else if (v === '1') newSP.push('이갈이');
            else if (v === '2') newSP.push('몸부림');
            else if (v === '3') newSP.push('수면패턴 없음');
          });

          setSleepingPattern(newSP);
        }

        res.data.isCleaning === 0 ? setIsCleaning('주 5회 이상 청소') :
          res.data.isCleaning === 1 ? setIsCleaning('주 2-3회 청소') :
            res.data.isCleaning === 2 ? setIsCleaning('주 1회 청소') :
              setIsCleaning('월 1회 청소');
      });

    setLoading(false);
  }

  const handleChange = (event: SelectChangeEvent) => {
    setCount(event.target.value);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const getUserId = async () => {
      const url = '/api/myInfo';

      await axios.get(url, headers)
        .then((res) => {
          setUserName(res.data.name);
        })
        .catch((err) => console.log(err));
    }

    const loadRecommandList = async () => {
      const url = '/api/main';
      const body = `criteria=${parseInt(count)}`;

      await axios.post(url, body, headers)
        .then((res) => {
          for (let i = res.data.length; i < 9; i++) {
            res.data.push({});
          }
          setList(res.data);

          if (swiper) swiper.slideTo(1);
        })
        .catch((err) => console.log(err));
    }

    const isSurvey = async () => {
      const url = '/api/yourPersonality';

      await axios.get(url, headers)
        .then((res) => {
          if (Object.keys(res.data).length !== 0) {
            loadRecommandList();
            getUserId();
          }
          else {
            alert('설문조사를 진행해 주세요.');
            movePage(false);
          }
        })
        .catch((err) => console.log(err));
    };

    const movePage = (tf: boolean) => {
      if (!tf) document.location = '/surveyme';
    }

    isSurvey();
  }, [count]);

  useEffect(() => {
    const showSplash = () => {
      setTimeout(() => {
        setIsSplash(false);
      }, 3000);
    };

    showSplash();
  }, []);

  useEffect(() => {
    const getIsMatched = async () => {
      const url = '/api/myInfo/isMatched';

      await axios.get(url, headers)
        .then((res) => {
          setIsMatched(res.data);
        })
        .catch((err) => console.log(err));
    };

    getIsMatched();
  }, [isMatched]);

  return (
    <>
      {
        (isSplash) ? (
          <Box className='bg-sky0 flex flex-col justify-center items-center w-full labtop:h-[calc(100vh-70px)] mobile:h-[calc(100vh-53px)]'>
            <Image src={splash} width={400} height={400} />
          </Box>
        ) : (typeof isMatched !== 'undefined' && isMatched) ? (
          <Box className="labtop:bg-main-move-background mobile:bg-sky0 bg-cover labtop:px-0 mobile:px-[5%]">
            <Box className="flex flex-col justify-center items-center w-full labtop:h-[calc(100vh-70px)] mobile:h-[calc(100vh-53px)] py-28">
              <Box className='flex flex-col justify-center items-center bg-white2 labtop:rounded-full mobile:rounded-xl w-fit labtop:px-60 mobile:px-4 labtop:py-28 mobile:py-12'>
                <Box className='flex flex-row flex-wrap justify-center'>
                  <Typography className='text-accent1 labtop:text-4xl mobile:text-xl font-medium'>
                    {userName}
                    <Typography component='span' className='text-black labtop:text-4xl mobile:text-xl font-medium'>님은 이미&nbsp;</Typography>
                  </Typography>
                  <Typography className='text-black labtop:text-4xl mobile:text-xl font-medium'>딱 맞는 룸메이트를 구하셨군요!</Typography>
                </Box>

                <Box className='flex flex-row flex-wrap justify-center bg-sky1 rounded-xl labtop:px-6 mobile:px-3 py-2 mt-8'>
                  <Typography className='text-accent1 labtop:text-xl mobile:text-sm labtop:font-medium mobile:font-regular'>룸메이트를 다시 구하고 싶다면&nbsp;</Typography>
                  <Typography className='text-accent1 labtop:text-xl mobile:text-sm labtop:font-medium mobile:font-regular'>마이페이지에서 매칭 상태 버튼을 전환해주세요</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        ) : (
          <>
            <Box className="labtop:bg-main-move-background mobile:bg-sky0 bg-cover">
              <Box className="flex flex-col justify-center w-full labtop:h-[calc(100vh-70px)] mobile:h-[calc(100vh-53px)] mobile:py-16">
                <Box className="flex flex-row flex-wrap labtop:ml-[15%] mobile:ml-[5%] labtop:mr-[15%] mobile:mr-[5%]">
                  <Box className='flex flex-col'>
                    <Typography className="text-accent1 labtop:text-4xl mobile:text-2xl font-bold">
                      {userName}
                      <Typography component='span' className='text-black labtop:text-4xl mobile:text-2xl font-bold'>님을 위한</Typography>
                    </Typography>
                    <Typography className="text-black labtop:text-4xl mobile:text-2xl font-bold mt-2">추천 룸메이트 리스트</Typography>
                    <Box className='flex flex-row flex-wrap mt-4'>
                      <Typography className="text-black labtop:text-xl mobile:text-sm font-normal">{userName}님의 성향과 가장 높은 일치율을&nbsp;</Typography>
                      <Typography className="text-black labtop:text-xl mobile:text-sm font-normal">보이는 룸메이트들을 선별한 리스트입니다.</Typography>
                    </Box>
                  </Box>

                  <Box className="flex flex-row ml-auto labtop:mt-0 mobile:mt-5">
                    <Typography className="text-accent1 labtop:text-base mobile:text-sm font-medium mt-2 mr-5">성향 일치 개수</Typography>
                    <FormControl size="small">
                      <Select
                        value={count}
                        displayEmpty
                        onChange={handleChange}
                        MenuProps={{
                          disablePortal: true,
                          PaperProps: {
                            sx: {
                              color: '#9B9EA1',
                              borderColor: 'white',
                              marginTop: '10px',
                              boxShadow: 'none',
                              border: 'solid 1px #DBDBDB',
                            }
                          }
                        }}
                        sx={{
                          "&:hover": {
                            "&& fieldset": {
                              borderColor: "#4B99EB"
                            }
                          },
                          '.MuiOutlinedInput-notchedOutline': {
                            borderColor: '#4B99EB',
                            borderWidth: '1.5px'
                          }
                        }}
                        className="w-28 h-10 round rounded-xl text-accent1 labtop:text-base mobile:text-sm"
                      >
                        <MenuItem value={'4'} className="labtop:text-base mobile:text-sm">4개 이상</MenuItem>
                        <MenuItem value={'5'} className="labtop:text-base mobile:text-sm">5개 이상</MenuItem>
                        <MenuItem value={'6'} className="labtop:text-base mobile:text-sm">6개 이상</MenuItem>
                        <MenuItem value={'7'} className="labtop:text-base mobile:text-sm">7개 이상</MenuItem>
                        <MenuItem value={'8'} className="labtop:text-base mobile:text-sm">8개</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Box>

                <Box className="flex justify-center items-center bg-transparent w-full labtop:px-[15%] mobile:px-[5%]">
                  <Swiper
                    onSwiper={setSwiper}
                    initialSlide={1}
                    navigation={true}
                    pagination={{
                      clickable: true,
                    }}
                    breakpoints={{
                      0: {
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                        spaceBetween: 10,
                      },
                      1200: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                        spaceBetween: 20,
                      },
                      1500: {
                        slidesPerView: 3,
                        slidesPerGroup: 3,
                        spaceBetween: 30,
                      }
                    }}
                    modules={[Pagination, Navigation]}

                    className="flex flex-row flex-wrap justify-center items-center"
                  >
                    {
                      list.map((roomMate: any, index: number): any => {
                        {
                          return Object.keys(roomMate).length === 0 ?
                            <SwiperSlide key={index} className="flex flex-row justify-center items-center bg-transparent w-full">
                              <Box className="flex flex-col justify-center items-center bg-white rounded-lg w-[22rem] h-64">
                                <Image src={profile2} width={100} height={100} />
                                <Typography className='text-black text-base font-medium mt-6'>딱 맞는 룸메이트가 없어요!</Typography>
                                <Typography className='text-black text-base font-regular mt-1'>최적의 룸메이트만 선별해 보여드릴게요</Typography>
                              </Box>
                            </SwiperSlide>
                            :
                            <SwiperSlide key={index} onClick={() => { onClick(index); handleOpen(); }} className="flex flex-row justify-center items-center bg-transparent w-full cursor-pointer drop-shadow-lg">
                              <Box className="flex flex-col justify-center items-center bg-white rounded-[1.25rem] w-[22rem] h-64">
                                <Box className="flex flex-row justify-center items-center">
                                  {
                                    roomMate.profileUrl === null ? (
                                      <Image src={profile} width={100} height={100} />
                                    ) : (
                                      <Box className='border border-gray1 border-solid rounded-full w-[100px] h-[100px]'>
                                        <Image src={roomMate.profileUrl} width={100} height={100} className='rounded-full' />
                                      </Box>
                                    )
                                  }
                                  <Box className="ml-14">
                                    <Box className="flex flex-row items-center">
                                      <Typography className="text-black text-2xl font-bold w-[6rem]">{roomMate.name}</Typography>
                                      <Typography className="text-gray1 text-base font-regular ml-3">{roomMate.age}세</Typography>
                                    </Box>
                                    <Box className="flex flex-row justify-center items-center mt-2">
                                      <Typography className="text-black text-base font-medium mr-auto w-10">{roomMate.mbti}</Typography>
                                      <>
                                        <Image src={percent} width={16} height={16} />
                                        <Typography className="text-black text-base font-bold ml-2">{roomMate.percent}%</Typography>
                                      </>
                                    </Box>
                                  </Box>
                                </Box>
                                <Box className="w-[75%] mt-6">
                                  <Typography className="text-black text-base font-regular h-12">{roomMate.introduction}</Typography>
                                </Box>
                              </Box>
                            </SwiperSlide>
                        }
                      })
                    }
                  </Swiper>
                </Box>

                {
                  open &&
                  <Modal
                    open={open}
                    onClose={handleClose}
                  >
                    <DetailProfile props={{ name: name, mbti: mbti, message: message, userName: userName, lifeCycle: lifeCycle, isSmoking: isSmoking, dormitory: dormitory, department: department, isCleaning: isCleaning, nationality: nationality, age: age, matchingId: matchingId, matchPercent: matchPercent, loading: loading, sleepingPattern: sleepingPattern, detailProfile: detailProfile, armyService: armyService, kakaoId: '', setOpen: setOpen }} />
                  </Modal>
                }
              </Box>
            </Box >
          </>)
      }

      <Footer />
    </>
  );
}