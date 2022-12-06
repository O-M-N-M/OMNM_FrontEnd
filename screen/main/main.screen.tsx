import { NextPage } from "next";
import Image from "next/image";
import Router from "next/router";

import Footer from '../../components/footer';
import profile from '../../public/basicProfile.png';
import percent from '../../public/percentIcon.png';

import { Box, FormControl, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";

import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { getCookie } from "cookies-next";

export const MainScreen: NextPage = () => {
  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');
  const [count, setCount] = useState('4');
  const [list, setList] = useState([]);

  // const onClick = () => {
  //   const loadDetailInfo = async () => {
  //     const url = '/api/'
  //   }
  // }

  const handleChange = (event: SelectChangeEvent) => {
    setCount(event.target.value);
  };

  useEffect(() => {
    const token = getCookie('OMNM');

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
          setUserId(res.data.userId);
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
            alert('세션이 만료되었습니다.\n로그인을 다시해주세요.');
            Router.push('/login');
          }
        });
    }

    loadRecommandList();
    getUserId();
  }, [count])

  return (
    <Box className="bg-main-background">
      <Box className="w-full h-fit py-28">
        <Box className="flex flex-row w-screen">
          <Typography className="text-4xl font-bold mx-[15%]">{userName}님을 위한</Typography>

          <Box className="flex flex-row">
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
        <Typography className="text-4xl font-bold px-[15%] mt-1">추천 룸메 리스트</Typography>
        <Typography className="text-base font-normal mt-4 px-[15%]">홍길동님의 성향과 가장 높은 일치율을 보이는 룸메들을 선별한 리스트입니다.</Typography>

        <Box className="flex justify-center items-center bg-transparent w-full mt-14 px-[13%]">
          <Swiper
            slidesPerView={3}
            slidesPerGroup={3}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Navigation]}
            className="items-center"
          >
            {
              list.map((roomMate: any, index: number): any => {
                {
                  return Object.keys(roomMate).length === 0 ?
                    <SwiperSlide key={index} className="flex flex-row justify-center items-center bg-transparent w-full">
                      <Box className="flex flex-col justify-center items-center bg-white rounded-lg w-[22rem] h-64" />
                    </SwiperSlide>
                    :
                    <SwiperSlide key={index} className="flex flex-row justify-center items-center bg-transparent w-full">
                      <Box className="flex flex-col justify-center items-center bg-white rounded-lg w-[22rem] h-64">
                        <Box className="flex flex-row justify-center items-center">
                          {
                            roomMate.profileUrl === null ? (
                              <Image src={profile} width={100} height={100} />
                            ) : (
                              <Image src={roomMate.profileUrl} width={100} height={100} />
                            )
                          }
                          <Box className="ml-5">
                            <Box className="flex flex-row items-center">
                              <Typography className="font-bold text-xl text-black">{roomMate.name}</Typography>
                              <Typography className="text-lg">({roomMate.age})</Typography>
                            </Box>
                            <Box className="flex flex-row items-center">
                              <Typography className="text-lg mr-3">{roomMate.mbti}</Typography>
                              <Image src={percent} width={15} height={15} />
                              <Typography className="text-xs font-regular">{roomMate.percent}%</Typography>
                            </Box>
                          </Box>
                        </Box>
                        <Box className="w-[60%] mt-5">
                          <Typography className="text-xs font-regular">{roomMate.introduction}</Typography>
                        </Box>
                      </Box>
                    </SwiperSlide>
                }
              })
            }
          </Swiper>
        </Box>
      </Box>
      <Footer />
    </Box >
  );
}