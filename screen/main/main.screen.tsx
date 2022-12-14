import { NextPage } from "next";
import { deleteCookie, getCookie, setCookie } from "cookies-next";
import Image from "next/image";
import Router from "next/router";

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
        setNationality(res.data.nationality === 0 ? '?????????' : '?????????');
        setMatchPercent(res.data.percent);
        res.data.profileUrl === null ? setDetailProfile(null) : setDetailProfile(res.data.profileUrl);
        res.data.dormitory === 0 ? setDormitory('308??? 2??????') :
          res.data.dormitory === 1 ? setDormitory('308??? 4??????') :
            setDormitory('309??? 2??????');

        setMbti(res.data.mbti);
        setDepartment(res.data.department);

        res.data.isSmoking === 0 ? setIsSmoking('??????') : setIsSmoking('?????????');
        res.data.lifeCycle === 0 ? setLifeCycle('?????????') : setLifeCycle('?????????');
        res.data.armyService === null ? setArmyService(null) :
          res.data.armyService === 0 ? setArmyService('??????') : setArmyService('??????');

        const sp = res.data.sleepingPattern.replace(/[{}]/g, '').split(',');
        let newSP: String[] = [];
        sp.forEach((v: string) => {
          if (v === '0') newSP.push('?????????');
          else if (v === '1') newSP.push('?????????');
          else if (v === '2') newSP.push('?????????');
          else if (v === '3') newSP.push('???????????? ??????');
        });

        setSleepingPattern(newSP);

        res.data.isCleaning === 0 ? setIsCleaning('??? 5??? ?????? ??????') :
          res.data.isCleaning === 1 ? setIsCleaning('??? 2-3??? ??????') :
            res.data.isCleaning === 2 ? setIsCleaning('??? 1??? ??????') :
              setIsCleaning('??? 1??? ??????');
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
        .catch((err) => {
          console.log(err);
        });
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
            alert('??????????????? ????????? ?????????.');
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
          <Box className='bg-sky0 flex flex-col justify-center items-center w-full h-[calc(100vh-70px)]'>
            <Image src={splash} width={400} height={400} />
          </Box>
        ) : (typeof isMatched !== 'undefined' && isMatched) ? (
          <Box className="bg-main-move-background bg-cover">
            <Box className="flex flex-col justify-center items-center w-full h-[calc(100vh-70px)] py-28">
              <Box className='flex flex-col justify-center items-center bg-white2 rounded-full w-fit px-60 py-28'>
                <Typography className='text-accent1 text-4xl font-medium'>
                  {userName}
                  <Typography component='span' className='text-black text-4xl font-medium'>?????? ?????? ??? ?????? ??????????????? ???????????????!</Typography>
                </Typography>

                <Box className='bg-sky1 rounded-xl px-6 py-2 mt-8'>
                  <Typography className='text-accent1 text-xl font-medium'>??????????????? ?????? ????????? ????????? ????????????????????? ?????? ?????? ????????? ??????????????????</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        ) : (
          <>
            <Box className="bg-main-move-background bg-cover">
              <Box className="flex flex-col justify-center items-centerw-full h-[calc(100vh-70px)] py-28">
                <Box className="flex flex-row">
                  <Typography className="text-accent1 text-4xl font-bold ml-[15%]">
                    {userName}
                    <Typography component='span' className='text-black text-4xl font-bold'>?????? ??????</Typography>
                  </Typography>

                  <Box className="flex flex-row ml-auto mr-[15%]">
                    <Typography className="text-accent1 text-base font-medium mt-2 mr-5">?????? ?????? ??????</Typography>
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
                        <MenuItem value={'4'} className="text-base">4??? ??????</MenuItem>
                        <MenuItem value={'5'} className="text-base">5??? ??????</MenuItem>
                        <MenuItem value={'6'} className="text-base">6??? ??????</MenuItem>
                        <MenuItem value={'7'} className="text-base">7??? ??????</MenuItem>
                        <MenuItem value={'8'} className="text-base">8???</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Box>
                <Typography className="text-black text-4xl font-bold px-[15%] mt-2">?????? ???????????? ?????????</Typography>
                <Typography className="text-black text-xl font-normal mt-4 px-[15%]">{userName}?????? ????????? ?????? ?????? ???????????? ????????? ?????????????????? ????????? ??????????????????.</Typography>

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
                                <Typography className='text-black text-base font-medium mt-6'>??? ?????? ??????????????? ?????????!</Typography>
                                <Typography className='text-black text-base font-regular mt-1'>????????? ??????????????? ????????? ??????????????????</Typography>
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
                                      <Typography className="text-gray1 text-base font-regular ml-3">{roomMate.age}???</Typography>
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
          </>)
      }

      <Footer />
    </>
  );
}