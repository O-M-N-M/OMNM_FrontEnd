import { NextPage } from "next";
import { deleteCookie, getCookie, setCookie } from "cookies-next";
import Image from "next/image";
import Router from "next/router";

import React, { useEffect, useState } from "react";
import axios from "axios";

import Footer from '../../components/footer';
import DetailProfile from "../../components/detailProfile";

import profile from '../../public/basicProfile.png';
import profile2 from '../../public/reverseProfile.png';
import percent from '../../public/percentIcon.png';

import { Box, FormControl, MenuItem, Modal, Select, SelectChangeEvent, Typography } from "@mui/material";

import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

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

  const token = getCookie('OMNM');

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
        let newSP: String[] = [];
        sp.forEach((v: string) => {
          if (v === '0') newSP.push('코골이');
          else if (v === '1') newSP.push('이갈이');
          else if (v === '2') newSP.push('몸부림');
          else if (v === '3') newSP.push('수면패턴 없음');
        });

        setSleepingPattern(newSP);

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
      const headers = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          'OMNM': `${token}`
        }
      };

      await axios.get(url, headers)
        .then((res) => {
          setUserName(res.data.name);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    const loadRecommandList = async () => {
      const url = '/api/main';
      const body = `criteria=${parseInt(count)}`;
      const headers = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          'OMNM': `${token}`
        }
      };

      await axios.post(url, body, headers)
        .then((res) => {
          for (let i = res.data.length; i < 9; i++) {
            res.data.push({});
          }
          setList(res.data);
        })
        .catch((err) => {
          if (err.response.status === 403) {
            checkRefreshToken();
          }
        });
    }

    const checkRefreshToken = async () => {
      const url = '/api/token';
      const body = `accessToken=${getCookie('OMNM')}&refreshToken=${getCookie('refreshToken')}`;
      await axios.post(url, body)
        .then((res) => {
          if (res.data === '재로그인 요청') {
            deleteCookie('OMNM');
            alert('세션이 만료되었습니다.\n로그인을 다시해주세요.');
            Router.push('/login');
          }
          else {
            setCookie('OMNM', res.data);
          }
        });
    };

    const isSurvey = async () => {
      const url = '/api/yourPersonality';
      const headers = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          'OMNM': `${token}`
        }
      };

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
  }, [count, open])

  return (
    <>
      <Box className="bg-main-move-background bg-cover">
        <Box className="flex flex-col justify-center items-centerw-full h-[calc(100vh-70px)] py-28">
          <Box className="flex flex-row">
            <Typography className="text-accent1 text-4xl font-bold ml-[15%]">
              {userName}
              <Typography component='span' className='text-black text-4xl font-bold'>님을 위한</Typography>
            </Typography>

            <Box className="flex flex-row ml-auto mr-[15%]">
              <Typography className="text-accent1 text-base font-medium mt-2 mr-5">성향 일치 개수</Typography>
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
                  className="w-28 h-10 round rounded-xl text-accent1 text-base"
                >
                  <MenuItem value={'4'} className="text-base">4개 이상</MenuItem>
                  <MenuItem value={'5'} className="text-base">5개 이상</MenuItem>
                  <MenuItem value={'6'} className="text-base">6개 이상</MenuItem>
                  <MenuItem value={'7'} className="text-base">7개 이상</MenuItem>
                  <MenuItem value={'8'} className="text-base">8개</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Typography className="text-black text-4xl font-bold px-[15%] mt-2">추천 룸메 리스트</Typography>
          <Typography className="text-black text-xl font-normal mt-4 px-[15%]">{userName}님의 성향과 가장 높은 일치율을 보이는 룸메들을 선별한 리스트입니다.</Typography>

          <Box className="flex justify-center items-center bg-transparent w-full mt-14 px-[15%]">
            <Swiper
              initialSlide={0}
              navigation={true}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                "@0.10": {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                  spaceBetween: 10,
                },
                "@0.95": {
                  slidesPerView: 2,
                  slidesPerGroup: 2,
                  spaceBetween: 20,
                },
                "@1.50": {
                  slidesPerView: 3,
                  slidesPerGroup: 3,
                  spaceBetween: 30,
                }
              }}
              modules={[Pagination, Navigation]}

              className="flex flex-row flex-wrap items-center"
            >
              {
                list.map((roomMate: any, index: number): any => {
                  {
                    return Object.keys(roomMate).length === 0 ?
                      <SwiperSlide key={index} className="flex flex-row justify-center items-center bg-transparent w-full">
                        <Box className="flex flex-col justify-center items-center bg-white rounded-lg w-[22rem] h-64">
                          <Image src={profile2} width={100} height={100} />
                          <Typography className='text-black text-base font-medium mt-6'>딱 맞는 룸메가 없어요!</Typography>
                          <Typography className='text-black text-base font-regular mt-1'>최적의 룸메만 선별해 보여드릴게요</Typography>
                        </Box>
                      </SwiperSlide>
                      :
                      <SwiperSlide onClick={() => { onClick(index); handleOpen(); }} key={index} className="flex flex-row justify-center items-center bg-transparent w-full cursor-pointer drop-shadow-lg">
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
                                <Typography className="text-black text-2xl font-bold">{roomMate.name}</Typography>
                                <Typography className="text-gray1 text-base font-regular ml-3">{roomMate.age}세</Typography>
                              </Box>
                              <Box className="flex flex-row justify-center items-center mt-2">
                                <Typography className="text-black text-base font-medium mr-auto">{roomMate.mbti}</Typography>
                                <>
                                  <Image src={percent} width={16} height={16} />
                                  <Typography className="text-black text-base font-bold ml-1">{roomMate.percent}%</Typography>
                                </>
                              </Box>
                            </Box>
                          </Box>
                          <Box className="w-[75%] mt-6">
                            <Typography className="text-black text-base font-regular">{roomMate.introduction}</Typography>
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
              <DetailProfile props={{ name: name, mbti: mbti, userName: userName, lifeCycle: lifeCycle, isSmoking: isSmoking, dormitory: dormitory, department: department, isCleaning: isCleaning, nationality: nationality, age: age, matchingId: matchingId, matchPercent: matchPercent, loading: loading, sleepingPattern: sleepingPattern, detailProfile: detailProfile, armyService: armyService, kakaoId: '', setOpen: setOpen }} />
            </Modal>
          }
        </Box>
      </Box >

      <Footer />
    </>
  );
}