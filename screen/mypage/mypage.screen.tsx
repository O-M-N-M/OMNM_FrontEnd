import { Box, Button, Typography } from "@mui/material";

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
          getReceiveData();
          getSendData();
        })
        .catch((err) => {
          console.log(err);
        });
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

    getMyData();
    console.log(receiveFirstData[receiveFirstKey as keyof typeof receiveFirstData]);
  }, [userId]);

  return (
    <Box>
      <Box className='flex flex-row justify-center min-h-[calc(100vh-50px)] w-screen my-[5%]'>
        <Box>
          <MyPageLeft />
        </Box>

        <Box className='border border-solid border-gray0 rounded-[1.25rem] px-[2.875rem] py-16 ml-6'>
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
              Object.keys(receiveFirstData).length !== 0 && (
                <Box className='flex flex-wrap'>
                  <Box className='mx-3.5'>
                    <Typography className='text-gray1 text-xs font-regular mt-6'>{receiveFirstKey}</Typography>
                    {
                      receiveFirstData.map((v: any, index: number) => {
                        return (
                          <MyPageList props={{ v: v, index: index }} />
                        )
                      })
                    }
                  </Box>
                  <Box className='mx-3.5'>
                    <Typography className='text-gray1 text-xs font-regular mt-6'>{receiveSecondKey}</Typography>
                    <>
                      {
                        receiveSecondData.map((v: any, index: number) => {
                          return (
                            <MyPageList props={{ v: v, index: index }} />
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

            <Box className='flex flex-wrap'>
              <Box className='mx-3.5'>
                <Typography className='text-gray1 text-xs font-regular mt-6'>{sendFirstKey}</Typography>
                <>
                  {
                    sendFirstData.map((v: any, index: number) => {
                      return (
                        <MyPageList props={{ v: v, index: index }} />
                      )
                    })
                  }
                </>
              </Box>
              <Box className='mx-3.5'>
                <Typography className='text-gray1 text-xs font-regular mt-6'>{sendSecondKey}</Typography>
                <>
                  {
                    sendSecondData.map((v: any, index: number) => {
                      return (
                        <MyPageList props={{ v: v, index: index }} />
                      )
                    })
                  }
                </>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};
