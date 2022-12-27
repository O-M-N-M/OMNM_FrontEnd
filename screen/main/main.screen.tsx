import { NextPage } from "next";
import { deleteCookie, getCookie } from "cookies-next";
import Image from "next/image";
import Router from "next/router";

import Footer from '../../components/footer';
import profile from '../../public/basicProfile.png';
import profile2 from '../../public/reverseProfile.png';
import percent from '../../public/percentIcon.png';
import displayNone from '../../public/displayNone.png';

import { Box, Button, CircularProgress, FormControl, IconButton, MenuItem, Modal, Select, SelectChangeEvent, Tooltip, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import React, { useEffect, useState } from "react";
import axios from "axios";

export const MainScreen: NextPage = () => {
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
  const [armyService, setArmyService] = useState('');
  const [dormitory, setDormitory] = useState('');
  const [detailProfile, setDetailProfile] = useState<any | null>(null);
  const [matchPercent, setMatchPercent] = useState(-1.1);
  const [mbti, setMbti] = useState('');
  const [department, setDepartment] = useState('');


  const token = getCookie('OMNM');

  const onClick = async (index: number) => {
    setLoading(true);

    const userId = list[index].userId;
    const url = `/api/main/${userId}`;
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
        res.data.armyService === 0 ? setArmyService('군필') : setArmyService('미필');

        const sp = res.data.sleepingPattern.replace(/[{}]/g, '').split(',');
        if (sp.length === 0) setSleepingPattern(['수면패턴 없음']);
        else {
          let newSP: String[] = [];
          sp.forEach((v: string) => {
            if (v === '0') newSP.push('코골이');
            else if (v === '1') newSP.push('이갈이');
            else newSP.push('몸부림');
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
            deleteCookie('OMNM');
            alert('세션이 만료되었습니다.\n로그인을 다시해주세요.');
            Router.push('/login');
          }
        });
    }

    loadRecommandList();
    getUserId();
  }, [count, open])

  return (
    <Box className="bg-main-background">
      <Box className="flex flex-col justify-center items-centerw-full h-[calc(100vh-50px)] py-28">
        <Box className="flex flex-row">
          <Typography className="text-5xl font-bold ml-[15%]">{userName}님을 위한</Typography>

          <Box className="flex flex-row ml-auto mr-[15%]">
            <Typography className="text-xs text-accent1 font-medium mt-3 mr-2">성향 일치 개수</Typography>
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
                className="w-28 h-10 round rounded-xl text-accent1 text-sm"
              >
                <MenuItem value={'4'} className="text-xs">4개 이상</MenuItem>
                <MenuItem value={'5'} className="text-xs">5개 이상</MenuItem>
                <MenuItem value={'6'} className="text-xs">6개 이상</MenuItem>
                <MenuItem value={'7'} className="text-xs">7개 이상</MenuItem>
                <MenuItem value={'8'} className="text-xs">8개</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Typography className="text-5xl font-bold px-[15%] mt-1">추천 룸메 리스트</Typography>
        <Typography className="text-2xl font-normal mt-4 px-[15%]">{userName}님의 성향과 가장 높은 일치율을 보이는 룸메들을 선별한 리스트입니다.</Typography>

        <Box className="flex justify-center items-center bg-transparent w-full mt-14 px-[15%]">
          <Swiper
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
                    <SwiperSlide onClick={() => { onClick(index); handleOpen() }} key={index} className="flex flex-row justify-center items-center bg-transparent w-full">
                      <Box className="flex flex-col justify-center items-center bg-white rounded-lg w-[22rem] h-64">
                        <Box className="flex flex-row justify-center items-center">
                          {
                            roomMate.profileUrl === null ? (
                              <Image src={profile} width={100} height={100} />
                            ) : (
                              <Image src={roomMate.profileUrl} width={100} height={100} />
                            )
                          }
                          <Box className="ml-14">
                            <Box className="flex flex-row items-center">
                              <Typography className="text-black text-2xl font-bold">{roomMate.name}</Typography>
                              <Typography className="text-gray1 text-xl font-regular">&nbsp;· {roomMate.age}</Typography>
                            </Box>
                            <Box className="flex flex-row justify-center items-center mt-2">
                              <Typography className="text-black text-base font-medium mr-auto">{roomMate.mbti}</Typography>
                              <>
                                <Image src={percent} width={16} height={16} />
                                <Typography className="text-black text-base font-medium ml-2">{roomMate.percent}%</Typography>
                              </>
                            </Box>
                          </Box>
                        </Box>
                        <Box className="w-full ml-[25%] mt-6">
                          <Typography className="text-xs font-regular">{roomMate.introduction}</Typography>
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
            <Box sx={{ position: 'absolute', backgroundColor: 'white', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', borderRadius: '10px', width: '30%', minWidth: '400px', height: '70%', minHeight: '650px', outline: 'none' }}>
              {
                loading ? (
                  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
                    <CircularProgress color="inherit" />
                  </Box>
                ) : (
                  <>
                    <IconButton onClick={() => setOpen(false)} sx={{ float: 'right' }}>
                      <CloseIcon aria-label="close" />
                    </IconButton>

                    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', height: '90%', justifyContent: 'center', alignItems: 'center' }} >
                      {
                        detailProfile === null ? (
                          <Image src={profile} width={80} height={80} />
                        ) : (
                          <Image src={detailProfile} width={80} height={80} />
                        )
                      }
                      <Typography sx={{ color: '#383838', fontSize: '1.25rem', fontWeight: '500', marginTop: '0.75rem' }}>{name}</Typography>
                      <Typography sx={{ color: '#9B9EA1', fontSize: '0.75rem', fontWeight: '500', marginTop: '0.25rem' }}>{age}</Typography>

                      <Box sx={{ border: 'solid 1px #DBDBDB', borderRadius: '10px', width: '50%', height: 'fit-content', padding: '1.5rem', marginTop: '0.75rem' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                          <Typography sx={{ color: '#383838', fontSize: '0.875rem', fontWeight: '400', marginRight: 'auto' }}>카카오톡 ID</Typography>
                          <Tooltip title='룸메를 신청해야 볼 수 있습니다.' sx={{ padding: '0px' }}>
                            <IconButton>
                              <Image src={displayNone} width={18} height={18} />
                            </IconButton>
                          </Tooltip>
                        </Box>

                        <Box sx={{ display: 'flex', justifyContent: 'flex-start', marginTop: '1rem' }}>
                          <Typography sx={{ color: '#383838', fontSize: '0.875rem', fontWeight: '400', marginRight: 'auto' }}>국적</Typography>
                          <Typography sx={{ color: '#383838', fontSize: '0.875rem', fontWeight: '500' }}>{nationality}</Typography>
                        </Box>

                        <Box sx={{ display: 'flex', justifyContent: 'flex-start', marginTop: '1rem' }}>
                          <Typography sx={{ color: '#383838', fontSize: '0.875rem', fontWeight: '400', marginRight: 'auto' }}>생활관 정보</Typography>
                          <Typography sx={{ color: '#383838', fontSize: '0.875rem', fontWeight: '500' }}>{dormitory}</Typography>
                        </Box>
                      </Box>

                      <Button sx={{ backgroundColor: '#4B99EB !important', width: '50%', height: 'fit-content', borderRadius: '200px', color: 'white', marginTop: '1rem', paddingY: '0.625rem' }}>룸메 신청하기</Button>

                      <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: '2rem' }}>
                        <Typography sx={{ color: '#383838', fontSize: '1rem', fontWeight: '500' }}>{userName}님과 {name}님의 성향은&nbsp;</Typography>
                        <Typography sx={{ color: '#1CDDAD', fontSize: '1rem', fontWeight: '500' }}>{matchPercent}%&nbsp;</Typography>
                        <Typography sx={{ color: '#383838', fontSize: '1rem', fontWeight: '500' }}>일치합니다.</Typography>
                      </Box>

                      <Box sx={{ display: 'flex', flexWrap: 'wrap', marginTop: '0.5rem', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography sx={{ border: 'solid 1px #DBDBDB', borderRadius: '100px', color: '#7DD3FC', fontSize: '1rem', fontWeight: '500', paddingX: '0.875rem', paddingY: '0.375rem', marginX: '0.625rem', marginTop: '0.75rem' }}>{mbti}</Typography>
                        <Typography sx={{ border: 'solid 1px #DBDBDB', borderRadius: '100px', color: '#EA9B76', fontSize: '1rem', fontWeight: '500', paddingX: '0.875rem', paddingY: '0.375rem', marginX: '0.625rem', marginTop: '0.75rem' }}>{department}</Typography>
                        <Typography sx={{ border: 'solid 1px #DBDBDB', borderRadius: '100px', color: '#FC7DD3', fontSize: '1rem', fontWeight: '500', paddingX: '0.875rem', paddingY: '0.375rem', marginX: '0.625rem', marginTop: '0.75rem' }}>{lifeCycle}</Typography>
                        <Typography sx={{ border: 'solid 1px #DBDBDB', borderRadius: '100px', color: '#D16EE7', fontSize: '1rem', fontWeight: '500', paddingX: '0.875rem', paddingY: '0.375rem', marginX: '0.625rem', marginTop: '0.75rem' }}>{isCleaning}</Typography>
                        {
                          sleepingPattern.map((v: any, index: number): any => {
                            return (
                              <Typography key={index} sx={{ border: 'solid 1px #DBDBDB', borderRadius: '100px', color: '#7CD869', fontSize: '1rem', fontWeight: '500', paddingX: '0.875rem', paddingY: '0.375rem', marginX: '0.625rem', marginTop: '0.75rem' }}>{v}</Typography>
                            )
                          })
                        }
                        <Typography sx={{ border: 'solid 1px #DBDBDB', borderRadius: '100px', color: '#308CED', fontSize: '1rem', fontWeight: '500', paddingX: '0.875rem', paddingY: '0.375rem', marginX: '0.625rem', marginTop: '0.75rem' }}>{isSmoking}</Typography>
                        <Typography sx={{ border: 'solid 1px #DBDBDB', borderRadius: '100px', color: '#2DD4BF', fontSize: '1rem', fontWeight: '500', paddingX: '0.875rem', paddingY: '0.375rem', marginX: '0.625rem', marginTop: '0.75rem' }}>{armyService}</Typography>
                      </Box>
                    </Box>
                  </>
                )
              }
            </Box>
          </Modal>
        }
      </Box>

      <Footer />
    </Box >
  );
}