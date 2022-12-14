import { Box, CircularProgress, Typography } from "@mui/material";

import { NextPage } from "next";
import { getCookie } from "cookies-next";
import Link from "next/link";
import Image from 'next/image';

import React, { useEffect, useState } from "react";
import axios from "axios";

import Footer from '../../components/footer';
import MyPageLeft from '../../components/mypage/mypage_left';
import MyPageList from "../../components/mypage/mypage_list";
import NoListIcon from '../../public/noListIcon.png';

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
          console.log(res.data);
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
          console.log(res.data);
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
            alert('??????????????? ????????? ?????????.');
            document.location = '/surveyme';
          }
        })
        .catch((err) => console.log(err));
    };

    isSurvey();
  }, [userId]);

  return (
    <Box>
      <Box className='flex flex-row justify-center min-h-[calc(100vh-70px)] mx-[15%] my-[5%]'>
        <Box>
          <MyPageLeft />
        </Box>

        <Box className='border border-solid border-gray0 rounded-[1.25rem] w-full h-fit px-[2.875rem] py-16 ml-6'>
          {
            (Array.isArray(receiveFirstData) && receiveFirstData.length === 0) ? (
              <Box className='flex justify-center items-center w-full h-full mt-10'>
                <CircularProgress color="inherit" />
              </Box>
            ) :
              (typeof receiveFirstData === 'undefined' && typeof receiveSecondData === 'undefined'
                && typeof sendFirstData === 'undefined' && typeof sendSecondData === 'undefined') ? (
                <Box className='flex flex-col justify-center items-center w-full h-[786px]'>
                  <Image src={NoListIcon} width={44} height={55} />
                  <Typography className='text-gray0 text-base font-regular mt-4'>????????? ?????? ?????? ??????????????? ????????????</Typography>
                </Box>
              ) : (
                <>
                  <Box>
                    <Box className='flex flex-row items-center mx-3.5'>
                      <Typography className='text-black text-xl font-medium'>???????????? ?????? ?????? ?????????</Typography>
                      <Link href='/mypage_receivelist'>
                        <a className='ml-auto'>
                          <Typography className='text-gray1 text-xs font-medium'>?????????</Typography>
                        </a>
                      </Link>
                    </Box>

                    {
                      (typeof receiveFirstData === 'undefined' && typeof receiveSecondData === 'undefined') ? (
                        <Box className='flex flex-col justify-center items-center w-full mt-6'>
                          <Image src={NoListIcon} width={44} height={55} />
                          <Typography className='text-gray0 text-base font-regular mt-4'>?????? ?????? ??????????????? ????????????</Typography>
                        </Box>
                      ) : (
                        <Box className='flex flex-wrap'>
                          <Box className='w-[45%] mx-3.5'>
                            <Box className='border border-solid border-gray1 rounded-full w-fit px-1 py-0.5 mt-6'>
                              {
                                typeof receiveFirstKey !== 'undefined' && (receiveFirstKey[0] === '0' ?
                                  <Typography className='text-gray1 text-xs font-regular text-center min-w-[2rem]'>{receiveFirstKey[1]}.{receiveFirstKey.slice(3)}</Typography> :
                                  <Typography className='text-gray1 text-xs font-regular text-center min-w-[2rem]'>{receiveFirstKey.slice(0, 2)}.{receiveFirstKey.slice(3)}</Typography>)
                              }
                            </Box>
                            {
                              receiveFirstData && receiveFirstData.map((v: any, index: number) => {
                                return (
                                  <MyPageList key={index} props={{ v: v, index: index, userName: userName, isReceive: true }} />
                                )
                              })
                            }
                          </Box>
                          <Box className='w-[45%] mx-3.5'>
                            <Box className='border border-solid border-gray1 rounded-full w-fit px-1 py-0.5 mt-6'>
                              {
                                typeof receiveSecondKey !== 'undefined' && (receiveSecondKey[0] === '0' ?
                                  <Typography className='text-gray1 text-xs font-regular text-center min-w-[2rem]'>{receiveSecondKey[1]}.{receiveSecondKey.slice(3)}</Typography> :
                                  <Typography className='text-gray1 text-xs font-regular text-center min-w-[2rem]'>{receiveSecondKey.slice(0, 2)}.{receiveSecondKey.slice(3)}</Typography>)
                              }
                            </Box>
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

                  <Box className='mt-14'>
                    <Box className='flex flex-row items-center mx-3.5'>
                      <Typography className='text-black text-xl font-medium'>???????????? ?????? ?????? ?????????</Typography>
                      <Link href='/mypage_sendlist'>
                        <a className='ml-auto'>
                          <Typography className='text-gray1 text-xs font-medium'>?????????</Typography>
                        </a>
                      </Link>
                    </Box>

                    {
                      (typeof sendFirstData === 'undefined' && typeof sendSecondData === 'undefined') ? (
                        <Box className='flex flex-col justify-center items-center w-full mt-6'>
                          <Image src={NoListIcon} width={44} height={55} />
                          <Typography className='text-gray0 text-base font-regular mt-4'>?????? ?????? ??????????????? ????????????</Typography>
                        </Box>
                      ) : (
                        <Box className='flex flex-wrap'>
                          <Box className='w-[45%] mx-3.5'>
                            <Box className='border border-solid border-gray1 rounded-full w-fit px-1 py-0.5 mt-6'>
                              {
                                typeof sendFirstKey !== 'undefined' && (sendFirstKey[0] === '0' ?
                                  <Typography className='text-gray1 text-xs font-regular text-center min-w-[2rem]'>{sendFirstKey[1]}.{sendFirstKey.slice(3)}</Typography> :
                                  <Typography className='text-gray1 text-xs font-regular text-center min-w-[2rem]'>{sendFirstKey.slice(0, 2)}.{sendFirstKey.slice(3)}</Typography>)
                              }
                            </Box>
                            {
                              sendFirstData && sendFirstData.map((v: any, index: number) => {
                                return (
                                  <MyPageList key={index} props={{ v: v, index: index, userName: userName, isReceive: false }} />
                                )
                              })
                            }
                          </Box>
                          <Box className='w-[45%] mx-3.5'>
                            <Box className='border border-solid border-gray1 rounded-full w-fit px-1 py-0.5 mt-6'>
                              {
                                typeof sendSecondKey !== 'undefined' && (sendSecondKey[0] === '0' ?
                                  <Typography className='text-gray1 text-xs font-regular text-center min-w-[2rem]'>{sendSecondKey[1]}.{sendSecondKey.slice(3)}</Typography> :
                                  <Typography className='text-gray1 text-xs font-regular text-center min-w-[2rem]'>{sendSecondKey.slice(0, 2)}.{sendSecondKey.slice(3)}</Typography>)
                              }
                            </Box>                              {
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

      <Footer />
    </Box>
  );
};