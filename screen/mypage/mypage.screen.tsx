import { Box, CircularProgress, Typography } from "@mui/material";

import { NextPage } from "next";
import { getCookie } from "cookies-next";
import Link from "next/link";

import React, { useEffect, useState } from "react";
import axios from "axios";

import Footer from '../../components/footer';
import MyPageLeft from '../../components/mypage/mypage_left';
import MyPageList from "../../components/mypage/mypage_list";

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
      <Box className='flex flex-row justify-center min-h-[calc(100vh-50px)] mx-[15%] my-[5%]'>
        <Box>
          <MyPageLeft />
        </Box>

        <Box className='border border-solid border-gray0 rounded-[1.25rem] w-full px-[2.875rem] py-16 ml-6'>
          <Box>
            <Box className='flex flex-row items-center mx-3.5'>
              <Typography className='text-black text-xl font-medium'>룸메 신청 받은 리스트</Typography>
              <Link href='/mypage_receivelist'>
                <a className='ml-auto'>
                  <Typography className='text-gray1 text-xs font-medium'>더보기</Typography>
                </a>
              </Link>
            </Box>

            {
              (Array.isArray(receiveFirstData) && receiveFirstData.length === 0) ? (
                <Box className='flex justify-center items-center w-full h-full mt-10'>
                  <CircularProgress color="inherit" />
                </Box>
              ) : (
                <Box className='flex flex-wrap'>
                  <Box className='w-[45%] mx-3.5'>
                    <Typography className='text-gray1 text-xs font-regular mt-6'>{receiveFirstKey}</Typography>
                    {
                      receiveFirstData && receiveFirstData.map((v: any, index: number) => {
                        return (
                          <MyPageList props={{ v: v, index: index, userName: userName }} />
                        )
                      })
                    }
                  </Box>
                  <Box className='w-[45%] mx-3.5'>
                    <Typography className='text-gray1 text-xs font-regular mt-6'>{receiveSecondKey}</Typography>
                    <>
                      {
                        receiveSecondData && receiveSecondData.map((v: any, index: number) => {
                          return (
                            <MyPageList props={{ v: v, index: index, userName: userName }} />
                          )
                        })
                      }
                    </>
                  </Box>
                </Box>
              )
            }
          </Box>

          <Box className='mt-14'>
            <Box className='flex flex-row items-center mx-3.5'>
              <Typography className='text-black text-xl font-medium'>룸메 신청 보낸 리스트</Typography>
              <Link href='/'>
                <a className='ml-auto'>
                  <Typography className='text-gray1 text-xs font-medium'>더보기</Typography>
                </a>
              </Link>
            </Box>

            {
              (Array.isArray(receiveSecondData) && receiveSecondData.length === 0) ? (
                <Box className='flex justify-center items-center w-full h-full mt-10'>
                  <CircularProgress color="inherit" />
                </Box>
              ) : (
                <Box className='flex flex-wrap'>
                  <Box className='w-[45%] mx-3.5'>
                    <Typography className='text-gray1 text-xs font-regular mt-6'>{sendFirstKey}</Typography>
                    <>
                      {
                        sendFirstData && sendFirstData.map((v: any, index: number) => {
                          return (
                            <MyPageList props={{ v: v, index: index, userName: userName }} />
                          )
                        })
                      }
                    </>
                  </Box>
                  <Box className='w-[45%] mx-3.5'>
                    <Typography className='text-gray1 text-xs font-regular mt-6'>{sendSecondKey}</Typography>
                    <>
                      {
                        sendSecondData && sendSecondData.map((v: any, index: number) => {
                          return (
                            <MyPageList props={{ v: v, index: index, userName: userName }} />
                          )
                        })
                      }
                    </>
                  </Box>
                </Box>
              )
            }
          </Box>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};