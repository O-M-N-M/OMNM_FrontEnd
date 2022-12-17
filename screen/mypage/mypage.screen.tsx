import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import { getCookie } from "cookies-next";

import { NextPage } from "next";
import Image from "next/image";

import React, { useEffect, useState } from "react";

import basicProfile from "../../public/basicProfile.png";
import check from "../../public/check.png";

import MyPageLeft from '../../components/mypage/mypage_left';
import Footer from '../../components/footer';
import Link from "next/link";

const fakeData = {
  '09.24': [
    {
      'userId': 99,
      'name': '김민지',
      'age': 24,
      'profileUrl': null,
      'percent': 78.0
    },
    {
      'userId': 99,
      'name': '김민지',
      'age': 24,
      'profileUrl': null,
      'percent': 78.0
    }
  ],
  '09.18': [
    {
      'userId': 99,
      'name': '김민지',
      'age': 24,
      'profileUrl': null,
      'percent': 78.0
    },
    {
      'userId': 99,
      'name': '김민지',
      'age': 24,
      'profileUrl': null,
      'percent': 78.0
    },
    {
      'userId': 99,
      'name': '김민지',
      'age': 24,
      'profileUrl': null,
      'percent': 78.0
    },
    {
      'userId': 99,
      'name': '김민지',
      'age': 24,
      'profileUrl': null,
      'percent': 78.0
    }
  ]
}

export const MyPageScreen: NextPage = () => {
  const [kakaoId, setKaKaoId] = useState('');
  const [name, setName] = useState('');
  const [dormitory, setDormitory] = useState('');
  const [profile, setProfile] = useState('');

  const receiveFirstKey = Object.keys(fakeData)[0];
  const receiveSecondKey = Object.keys(fakeData)[1];

  const applicationHistory = ['신청 받은 리스트', '신청 보낸 리스트', '찜한 룸메 리스트'];
  const survey = ['나의 성향 설문조사', '룸메 성향 설문조사'];
  const settings = ['개인정보 수정', '비밀번호 변경', '회원 탈퇴', '로그아웃'];

  useEffect(() => {
    const getMyData = async () => {
      const url = '/api/myInfo';
      const token = getCookie('OMNM');
      const headers = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          'OMNM': `${token}`
        }
      };

      await axios.get(url, headers)
        .then((res) => {
          console.log(res.data);
          setKaKaoId(res.data.kakaoId);
          setName(res.data.name);
          setProfile(res.data.profileUrl);

          res.data.dormitory === 0 ? setDormitory('308관 2인실') :
            res.data.dormitory === 1 ? setDormitory('308관 4인실') :
              setDormitory('309관 2인실');
        })
        .catch((err) => {
          console.log(err);
        });
    }

    getMyData();
  }, [])

  return (
    <>
      <Box className='flex flex-row justify-center min-h-[calc(100vh-50px)] my-[5%]'>
        <Box>
          <MyPageLeft />
        </Box>

        <Box className='border border-solid border-gray0 rounded-[1.25rem] w-fit h-fit px-[3.75rem] py-16 ml-6'>
          <Box>
            <Box className='flex flex-row items-center'>
              <Typography className='text-black text-xl font-medium'>룸메 신청 받은 리스트</Typography>
              <Link href='/'>
                <a className='ml-auto'>
                  <Typography className='text-gray1 text-xs font-medium'>더보기</Typography>
                </a>
              </Link>
            </Box>

            <Box className='flex flex-row'>
              <Box>
                <Typography className='text-gray1 text-xs font-regular mt-6'>{receiveFirstKey}</Typography>
                <>
                  {
                    fakeData[receiveFirstKey as keyof typeof fakeData].map((v) => {
                      return (
                        <Box className='flex flex-row items-center border border-solid border-gray0 rounded-xl w-[23rem] h-fit mt-4 mb-1.5 px-6 py-3'>
                          {
                            v.profileUrl === null ?
                              <Image src={basicProfile} width={24} height={24} />
                              :
                              <Image src={basicProfile} width={24} height={24} />
                          }
                          <Typography className='text-black text-base font-medium ml-3'>{v.name}</Typography>
                          <Typography className='text-gray1 text-xs font-regular ml-1'>· {v.age}</Typography>
                          <Box className='ml-7'>
                            <Image src={check} width={14} height={14} />
                          </Box>
                          <Typography className='text-black text-sm font-regular ml-2'>{v.percent}%</Typography>
                          <Button className='bg-white border border-solid border-accent1 rounded-full ml-12'>
                            <Typography className='text-accent1 text-xs font-regular'>프로필 보기</Typography>
                          </Button>
                        </Box>
                      )
                    })
                  }
                </>
              </Box>
              <Box className='ml-7'>
                <Typography className='text-gray1 text-xs font-regular mt-6'>{receiveSecondKey}</Typography>
                <>
                  {
                    fakeData[receiveSecondKey as keyof typeof fakeData].map((v) => {
                      return (
                        <Box className='flex flex-row items-center border border-solid border-gray0 rounded-xl w-[23rem] h-fit mt-4 mb-1.5 px-6 py-3'>
                          {
                            v.profileUrl === null ?
                              <Image src={basicProfile} width={24} height={24} />
                              :
                              <Image src={basicProfile} width={24} height={24} />
                          }
                          <Typography className='text-black text-base font-medium ml-3'>{v.name}</Typography>
                          <Typography className='text-gray1 text-xs font-regular ml-1'>· {v.age}</Typography>
                          <Box className='ml-7'>
                            <Image src={check} width={14} height={14} />
                          </Box>
                          <Typography className='text-black text-sm font-regular ml-2'>{v.percent}%</Typography>
                          <Button className='bg-white border border-solid border-accent1 rounded-full ml-12'>
                            <Typography className='text-accent1 text-xs font-regular'>프로필 보기</Typography>
                          </Button>
                        </Box>
                      )
                    })
                  }
                </>
              </Box>
            </Box>
          </Box>

          <Box className='mt-14'>
            <Box className='flex flex-row items-center'>
              <Typography className='text-black text-xl font-medium'>룸메 신청 보낸 리스트</Typography>
              <Link href='/'>
                <a className='ml-auto'>
                  <Typography className='text-gray1 text-xs font-medium'>더보기</Typography>
                </a>
              </Link>
            </Box>

            <Box className='flex flex-row'>
              <Box>
                <Typography className='text-gray1 text-xs font-regular mt-6'>{receiveFirstKey}</Typography>
                <>
                  {
                    fakeData[receiveFirstKey as keyof typeof fakeData].map((v) => {
                      return (
                        <Box className='flex flex-row items-center border border-solid border-gray0 rounded-xl w-[23rem] h-fit mt-4 mb-1.5 px-6 py-3'>
                          {
                            v.profileUrl === null ?
                              <Image src={basicProfile} width={24} height={24} />
                              :
                              <Image src={basicProfile} width={24} height={24} />
                          }
                          <Typography className='text-black text-base font-medium ml-3'>{v.name}</Typography>
                          <Typography className='text-gray1 text-xs font-regular ml-1'>· {v.age}</Typography>
                          <Box className='ml-7'>
                            <Image src={check} width={14} height={14} />
                          </Box>
                          <Typography className='text-black text-sm font-regular ml-2'>{v.percent}%</Typography>
                          <Button className='bg-white border border-solid border-accent1 rounded-full ml-12'>
                            <Typography className='text-accent1 text-xs font-regular'>프로필 보기</Typography>
                          </Button>
                        </Box>
                      )
                    })
                  }
                </>
              </Box>
              <Box className='ml-7'>
                <Typography className='text-gray1 text-xs font-regular mt-6'>{receiveSecondKey}</Typography>
                <>
                  {
                    fakeData[receiveSecondKey as keyof typeof fakeData].map((v) => {
                      return (
                        <Box className='flex flex-row items-center border border-solid border-gray0 rounded-xl w-[23rem] h-fit mt-4 mb-1.5 px-6 py-3'>
                          {
                            v.profileUrl === null ?
                              <Image src={basicProfile} width={24} height={24} />
                              :
                              <Image src={basicProfile} width={24} height={24} />
                          }
                          <Typography className='text-black text-base font-medium ml-3'>{v.name}</Typography>
                          <Typography className='text-gray1 text-xs font-regular ml-1'>· {v.age}</Typography>
                          <Box className='ml-7'>
                            <Image src={check} width={14} height={14} />
                          </Box>
                          <Typography className='text-black text-sm font-regular ml-2'>{v.percent}%</Typography>
                          <Button className='bg-white border border-solid border-accent1 rounded-full ml-12'>
                            <Typography className='text-accent1 text-xs font-regular'>프로필 보기</Typography>
                          </Button>
                        </Box>
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
    </>
  );
};
