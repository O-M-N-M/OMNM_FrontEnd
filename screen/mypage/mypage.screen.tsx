import { Box, CircularProgress, Typography, useMediaQuery } from "@mui/material";

import { NextPage } from "next";
import { getCookie } from "cookies-next";
import Link from "next/link";
import Image from 'next/image';

import React, { useEffect, useState } from "react";
import axios from "axios";

import Footer from '../../components/footer';
import MyPageList from "../../components/mypage/mypage_list";
import NoListIcon from '../../public/noListIcon.png';
import MyPageMenu from "@/components/mypage/mypage_menu";
import MyPageProfile from "@/components/mypage/mypage_profile";
import MyPageMobileMenu from "@/components/mypage/mypage_mobilemenu";

export const MyPageScreen: NextPage = () => {
  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');

  const [receiveFirstData, setReceiveFirstData] = useState<any[]>([]);
  const [receiveSecondData, setReceiveSecondData] = useState<any[]>([]);
  const [receiveFirstKey, setReceiveFirstKey] = useState('');
  const [receiveSecondKey, setReceiveSecondKey] = useState('');

  const [sendFirstData, setSendFirstData] = useState<any[]>([]);
  const [sendSecondData, setSendSecondData] = useState<any[]>([]);
  const [sendFirstKey, setSendFirstKey] = useState('');
  const [sendSecondKey, setSendSecondKey] = useState('');

  const isLabtop = useMediaQuery('(min-width: 1024px)');

  useEffect(() => {
    const token = getCookie('OMNM');
    const headers = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        'OMNM': `${token}`
      }
    };

    const getMyData = async () => {
      const url = '/api/myInfo';

      await axios.get(url, headers)
        .then((res) => {
          setUserId(res.data.userId);
          setUserName(res.data.name);
        })
        .catch((err) => console.log(err));

      getReceiveData();
      getSendData();
    };

    const getReceiveData = async () => {
      const url = `/api/users/${userId}/connection`;

      await axios.get(url, headers)
        .then((res) => {
          setReceiveFirstData(res.data[Object.keys(res.data)[0]]);
          setReceiveSecondData(res.data[Object.keys(res.data)[1]]);
          setReceiveFirstKey(Object.keys(res.data)[0]);
          setReceiveSecondKey(Object.keys(res.data)[1]);
        })
    };

    const getSendData = async () => {
      const url = `/api/users/${userId}/propose`;

      await axios.get(url, headers)
        .then((res) => {
          setSendFirstData(res.data[Object.keys(res.data)[0]]);
          setSendSecondData(res.data[Object.keys(res.data)[1]]);
          setSendFirstKey(Object.keys(res.data)[0]);
          setSendSecondKey(Object.keys(res.data)[1]);
        })
    };

    const isSurvey = async () => {
      const url = '/api/yourPersonality';

      await axios.get(url, headers)
        .then((res) => {
          if (Object.keys(res.data).length !== 0) getMyData();
          else {
            alert('설문조사를 진행해 주세요.');
            document.location = '/surveyme';
          }
        })
        .catch((err) => console.log(err));
    };

    isSurvey();
  }, [userId]);

  return (
    <Box>
      <Box className='flex flex-row labtop:flex-nowrap mobile:flex-wrap justify-center min-h-[calc(100vh-70px)] labtop:mx-[15%] mobile:mx-[5%] my-[5%]'>
        <Box>
          <MyPageProfile />
          {
            isLabtop &&
            <MyPageMenu />
          }
        </Box>

        <Box className='flex flex-col labtop:w-full mobile:w-[355px] labtop:min-w-min mobile:min-w-[355px]'>
          {
            isLabtop &&
            <Box className='flex flex-row border border-solid border-accent2 rounded-[14px] w-full h-fit px-4 py-4 ml-6'>
              <Typography className='text-accent2 text-sm font-regular'>서비스 이용방법</Typography>
              <Typography className='text-black text-sm font-regular ml-4'>룸메이트 신청을 받은 상대방의 카카오톡 ID를 확인하고 자유롭게 연락하여 룸메이트를 구하세요!</Typography>
            </Box>
          }

          <Box className='border border-solid border-gray0 labtop:rounded-[1.25rem] mobile:rounded-lg w-full h-fit labtop:px-[2.875rem] mobile:px-3 labtop:py-16 mobile:py-8 labtop:ml-6 mt-3'>
            {
              (Array.isArray(receiveFirstData) && receiveFirstData.length === 0) ? (
                <Box className='flex justify-center items-center w-full h-full mt-10'>
                  <CircularProgress color="inherit" />
                </Box>
              ) :
                (typeof receiveFirstData === 'undefined' && typeof receiveSecondData === 'undefined'
                  && typeof sendFirstData === 'undefined' && typeof sendSecondData === 'undefined') ? (
                  <Box className='flex flex-col justify-center items-center w-full labtop:h-[786px] mobile:h-[200px] labtop:mt-6 mobile:mt-5'>
                    {
                      isLabtop ?
                        <Image src={NoListIcon} width={44} height={55} /> :
                        <Image src={NoListIcon} width={26} height={33} />
                    }
                    <Typography className='text-gray0 labtop:text-base mobile:text-sm font-regular mt-4'>신청을 주고 받은 룸메이트가 없습니다</Typography>
                  </Box>
                ) : (
                  <>
                    <Box>
                      <Box className='flex flex-row items-center mx-3.5'>
                        <Typography className='text-black labtop:text-xl mobile:text-base font-medium'>룸메이트 신청 받은 리스트</Typography>
                        <Link href='/mypage_receivelist'>
                          <a className='ml-auto'>
                            <Typography className='text-gray1 text-xs font-medium'>더보기</Typography>
                          </a>
                        </Link>
                      </Box>

                      {
                        (typeof receiveFirstData === 'undefined' && typeof receiveSecondData === 'undefined') ? (
                          <Box className='flex flex-col justify-center items-center w-full mt-6 labtop:mt-6 mobile:mt-5'>
                            {
                              isLabtop ?
                                <Image src={NoListIcon} width={44} height={55} /> :
                                <Image src={NoListIcon} width={26} height={33} />
                            }
                            <Typography className='text-gray0 labtop:text-base mobile:text-sm font-regular mt-4'>신청 받은 룸메이트가 없습니다</Typography>
                          </Box>
                        ) : (
                          <Box className='flex flex-wrap'>
                            <Box className='labtop:w-[45%] mobile:w-full mx-3.5'>
                              {
                                typeof receiveFirstKey !== 'undefined' && (
                                  <Box className='border border-solid border-gray1 rounded-full w-fit px-1 py-0.5 mt-6'>
                                    {
                                      receiveFirstKey[0] === '0' ?
                                        <Typography className='text-gray1 text-xs font-regular text-center min-w-[2rem]'>{receiveFirstKey[1]}.{receiveFirstKey.slice(3)}</Typography> :
                                        <Typography className='text-gray1 text-xs font-regular text-center min-w-[2rem]'>{receiveFirstKey.slice(0, 2)}.{receiveFirstKey.slice(3)}</Typography>
                                    }
                                  </Box>
                                )
                              }
                              {
                                receiveFirstData && receiveFirstData.map((v: any, index: number) => {
                                  return (
                                    <MyPageList key={index} props={{ v: v, index: index, userName: userName, isReceive: true }} />
                                  )
                                })
                              }
                            </Box>
                            <Box className='labtop:w-[45%] mobile:w-full mx-3.5'>
                              {
                                typeof receiveSecondKey !== 'undefined' && (
                                  <Box className='border border-solid border-gray1 rounded-full w-fit px-1 py-0.5 mt-6'>
                                    {
                                      receiveSecondKey[0] === '0' ?
                                        <Typography className='text-gray1 text-xs font-regular text-center min-w-[2rem]'>{receiveSecondKey[1]}.{receiveSecondKey.slice(3)}</Typography> :
                                        <Typography className='text-gray1 text-xs font-regular text-center min-w-[2rem]'>{receiveSecondKey.slice(0, 2)}.{receiveSecondKey.slice(3)}</Typography>

                                    }
                                  </Box>)
                              }
                              {
                                receiveSecondData && receiveSecondData.map((v: any, index: number) => {
                                  return (
                                    <MyPageList key={index} props={{ v: v, index: index, userName: userName, isReceive: true }} />
                                  )
                                })
                              }
                            </Box>
                          </Box>
                        )
                      }
                    </Box>

                    <Box className='labtop:mt-14 mobile:mt-7'>
                      <Box className='flex flex-row items-center mx-3.5'>
                        <Typography className='text-black labtop:text-xl mobile:text-base font-medium'>룸메이트 신청 보낸 리스트</Typography>
                        <Link href='/mypage_sendlist'>
                          <a className='ml-auto'>
                            <Typography className='text-gray1 text-xs font-medium'>더보기</Typography>
                          </a>
                        </Link>
                      </Box>

                      {
                        (typeof sendFirstData === 'undefined' && typeof sendSecondData === 'undefined') ? (
                          <Box className='flex flex-col justify-center items-center w-full mt-6 labtop:mt-6 mobile:mt-5'>
                            {
                              isLabtop ?
                                <Image src={NoListIcon} width={44} height={55} /> :
                                <Image src={NoListIcon} width={26} height={33} />
                            }
                            <Typography className='text-gray0 labtop:text-base mobile:text-sm font-regular mt-4'>신청 보낸 룸메이트가 없습니다</Typography>
                          </Box>
                        ) : (
                          <Box className='flex flex-wrap'>
                            <Box className='labtop:w-[45%] mobile:w-full mx-3.5'>
                              {
                                typeof sendFirstKey !== 'undefined' && (
                                  <Box className='border border-solid border-gray1 rounded-full w-fit px-1 py-0.5 mt-6'>
                                    {
                                      sendFirstKey[0] === '0' ?
                                        <Typography className='text-gray1 text-xs font-regular text-center min-w-[2rem]'>{sendFirstKey[1]}.{sendFirstKey.slice(3)}</Typography> :
                                        <Typography className='text-gray1 text-xs font-regular text-center min-w-[2rem]'>{sendFirstKey.slice(0, 2)}.{sendFirstKey.slice(3)}</Typography>
                                    }
                                  </Box>
                                )
                              }
                              {
                                sendFirstData && sendFirstData.map((v: any, index: number) => {
                                  return (
                                    <MyPageList key={index} props={{ v: v, index: index, userName: userName, isReceive: false }} />
                                  )
                                })
                              }
                            </Box>
                            <Box className='labtop:w-[45%] mobile:w-full mx-3.5'>
                              {
                                typeof sendSecondKey !== 'undefined' && (
                                  <Box className='border border-solid border-gray1 rounded-full w-fit px-1 py-0.5 mt-6'>
                                    {
                                      sendSecondKey[0] === '0' ?
                                        <Typography className='text-gray1 text-xs font-regular text-center min-w-[2rem]'>{sendSecondKey[1]}.{sendSecondKey.slice(3)}</Typography> :
                                        <Typography className='text-gray1 text-xs font-regular text-center min-w-[2rem]'>{sendSecondKey.slice(0, 2)}.{sendSecondKey.slice(3)}</Typography>
                                    }
                                  </Box>
                                )
                              }
                              {
                                sendSecondData && sendSecondData.map((v: any, index: number) => {
                                  return (
                                    <MyPageList key={index} props={{ v: v, index: index, userName: userName, isReceive: false }} />
                                  )
                                })
                              }
                            </Box>
                          </Box>
                        )
                      }
                    </Box>
                  </>
                )
            }
          </Box>
        </Box>

        {
          !isLabtop &&
          <Box className='w-[355px] min-w-[355px]'>
            <MyPageMobileMenu />
          </Box>
        }
      </Box>

      <Footer />
    </Box>
  );
};