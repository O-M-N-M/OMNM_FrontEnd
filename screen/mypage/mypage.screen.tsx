import { Box, Button, Typography } from "@mui/material";

import { NextPage } from "next";
import Image from "next/image";

import React from "react";

import basicProfile from "../../public/basicProfile.png";
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
  const receiveFirstKey = Object.keys(fakeData)[0];
  const receiveSecondKey = Object.keys(fakeData)[1];

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
              <Link href='/'>
                <a className='ml-auto'>
                  <Typography className='text-gray1 text-xs font-medium'>더보기</Typography>
                </a>
              </Link>
            </Box>

            <Box className='flex flex-wrap'>
              <Box className='mx-3.5'>
                <Typography className='text-gray1 text-xs font-regular mt-6'>{receiveFirstKey}</Typography>
                {
                  fakeData[receiveFirstKey as keyof typeof fakeData].map((v, index) => {
                    return (
                      <Box key={index} className='flex flex-row items-center border border-solid border-gray0 rounded-xl w-fit h-fit mt-4 mb-1.5 px-6 py-3'>
                        {
                          v.profileUrl === null ?
                            <Image src={basicProfile} width={24} height={24} />
                            :
                            <Image src={basicProfile} width={24} height={24} />
                        }
                        <Typography className='text-black text-base font-medium ml-3'>{v.name}</Typography>
                        <Typography className='text-gray1 text-xs font-regular ml-1'>· {v.age}</Typography>
                        <Button className='bg-white border border-solid border-accent1 rounded-full ml-32'>
                          <Typography className='text-accent1 text-xs font-regular'>프로필 보기</Typography>
                        </Button>
                      </Box>
                    )
                  })
                }
              </Box>
              <Box className='mx-3.5'>
                <Typography className='text-gray1 text-xs font-regular mt-6'>{receiveSecondKey}</Typography>
                <>
                  {
                    fakeData[receiveSecondKey as keyof typeof fakeData].map((v, index) => {
                      return (
                        <Box key={index} className='flex flex-row items-center border border-solid border-gray0 rounded-xl w-fit h-fit mt-4 mb-1.5 px-6 py-3'>
                          {
                            v.profileUrl === null ?
                              <Image src={basicProfile} width={24} height={24} />
                              :
                              <Image src={basicProfile} width={24} height={24} />
                          }
                          <Typography className='text-black text-base font-medium ml-3'>{v.name}</Typography>
                          <Typography className='text-gray1 text-xs font-regular ml-1'>· {v.age}</Typography>
                          <Button className='bg-white border border-solid border-accent1 rounded-full ml-32'>
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
                <Typography className='text-gray1 text-xs font-regular mt-6'>{receiveFirstKey}</Typography>
                <>
                  {
                    fakeData[receiveFirstKey as keyof typeof fakeData].map((v, index) => {
                      return (
                        <Box key={index} className='flex flex-row items-center border border-solid border-gray0 rounded-xl w-fit h-fit mt-4 mb-1.5 px-6 py-3'>
                          {
                            v.profileUrl === null ?
                              <Image src={basicProfile} width={24} height={24} />
                              :
                              <Image src={basicProfile} width={24} height={24} />
                          }
                          <Typography className='text-black text-base font-medium ml-3'>{v.name}</Typography>
                          <Typography className='text-gray1 text-xs font-regular ml-1'>· {v.age}</Typography>
                          <Button className='bg-white border border-solid border-accent1 rounded-full ml-32'>
                            <Typography className='text-accent1 text-xs font-regular'>프로필 보기</Typography>
                          </Button>
                        </Box>
                      )
                    })
                  }
                </>
              </Box>
              <Box className='mx-3.5'>
                <Typography className='text-gray1 text-xs font-regular mt-6'>{receiveSecondKey}</Typography>
                <>
                  {
                    fakeData[receiveSecondKey as keyof typeof fakeData].map((v, index) => {
                      return (
                        <Box key={index} className='flex flex-row items-center border border-solid border-gray0 rounded-xl w-fit h-fit mt-4 mb-1.5 px-6 py-3'>
                          {
                            v.profileUrl === null ?
                              <Image src={basicProfile} width={24} height={24} />
                              :
                              <Image src={basicProfile} width={24} height={24} />
                          }
                          <Typography className='text-black text-base font-medium ml-3'>{v.name}</Typography>
                          <Typography className='text-gray1 text-xs font-regular ml-1'>· {v.age}</Typography>
                          <Button className='bg-white border border-solid border-accent1 rounded-full ml-32'>
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
    </Box>
  );
};
