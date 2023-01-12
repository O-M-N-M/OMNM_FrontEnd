import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

import { Box, Typography, Button } from "@mui/material";

import landingMiddleContent from '../../public/landingMiddleContent.jpg';
import landingMiddleContentMobile from '../../public/landingMiddleContentMobile.png';
import LogoString1 from '../../public/logo3.png';
import LogoString2 from '../../public/logo4.png';
import LogoBoth from '../../public/logo.png';

import { useEffect, useState } from "react";
import { hasCookie } from "cookies-next";
import axios from "axios";

export const LadingScreen: NextPage = () => {
  const [totalUser, setTotalUser] = useState(0);
  const [isCookie, setIsCookie] = useState<boolean>();
  const [innerWidth, setInnerWidth] = useState<number | undefined>();

  useEffect(() => {
    const getTotalUser = async () => {
      const url = '/api/home';
      await axios.get(url).then((res) => {
        setTotalUser(res.data.userCount);
      });
    }

    const getIsCookie = async () => {
      if (hasCookie('OMNM')) setIsCookie(true);
      else setIsCookie(false);
    }

    setInnerWidth(window.innerWidth);
    getTotalUser();
    getIsCookie();
  }, [totalUser]);

  useEffect(() => {
    const resizeListener = () => {
      setInnerWidth(window.innerWidth);
    };

    window.addEventListener("resize", resizeListener);
  }, [innerWidth]);

  return (
    <Box>
      {
        (typeof innerWidth !== 'undefined' && innerWidth >= 768) ? (
          <>
            <Box className='flex flex-row flex-wrap-reverse justify-center items-center min-h-[calc(100vh-70px)]'>
              <Box className="ml-[15%]">
                <Typography className="text-[3.3rem] font-bold">
                  {`오늘 만나고 내일 만나는\n기숙사 `}
                  <Typography component="span" className="text-accent1 text-[3.3rem] font-bold">
                    룸메이트 매칭
                  </Typography>
                  {" 서비스"}
                </Typography>

                <Typography className="text-[1.68rem] font-normal mt-3">
                  <Image src={LogoString1} width={114.67} height={19.65} />
                  {` 에서 나와 잘맞는 룸메를 찾아보세요.`}
                </Typography>

                {
                  isCookie ? (
                    <Link href='/main'>
                      <Button className='bg-accent1 w-40 h-[4.5rem] rounded-full text-white text-xl mt-16'>
                        시작하기
                      </Button>
                    </Link>
                  ) : (
                    <Link href='/login'>
                      <Button className='bg-accent1 w-40 h-[4.5rem] rounded-full text-white text-xl mt-16'>
                        시작하기
                      </Button>
                    </Link>
                  )
                }
              </Box>

              <Box className="ml-auto mr-[15%]">
                <Image src={LogoBoth} width={275} height={280} />
              </Box>
            </Box>

            <Box className="flex flex-row flex-wrap">
              <Box className='my-36 ml-[15%]'>
                <Typography className="text-black text-2xl">지금까지</Typography>

                <Box className="flex flex-row items-center mt-3">
                  <Image src={LogoString2} width={195.73} height={33.52} />
                  <Typography className="text-accent1 text-4xl font-bold ml-6">누적 가입자 수</Typography>
                  <Typography className="text-black text-4xl font-bold">는?</Typography>
                </Box>
              </Box>

              <Box className='flex bg-white w-80 h-36 rounded-full drop-shadow-[0px_4px_10px_rgba(0,0,0,0.14)] justify-center items-center my-36 ml-auto mr-[15%]'>
                <Typography className="text-black text-5xl font-bold">{totalUser} 명</Typography>
              </Box>
            </Box>

            <Image src={landingMiddleContent} />

            <Box className='bg-landing-last-background flex flex-col justify-center items-center py-24 mt-56'>
              <Typography className='text-black text-3xl font-regular'>가장 간편한 기숙사 룸메이트 매칭 서비스</Typography>

              <Box className='flex flex-row justify-center items-center mt-6'>
                <Typography className='text-accent1 text-6xl font-medium mr-2'>너도?</Typography>
                <Typography className='text-accent2 text-6xl font-medium mr-2'>나도!</Typography>
                <Image src={LogoString1} width={299.52} height={50.52} />
              </Box>

              <Link href='/login'>
                <Button className='bg-accent1 w-64 h-20 rounded-full mt-14'>
                  <Typography className='text-white text-xl font-medium'>룸메이트 만나러 가기</Typography>
                </Button>
              </Link>
            </Box>
          </>
        ) : (
          <>
            <Box className='flex flex-col justify-center items-center min-h-[calc(100vh-70px)] py-20'>
              <Image src={LogoBoth} width={70} height={71.27} />

              <Typography className='text-black text-2xl font-regular mt-12'>오늘 만나고 내일 만나는</Typography>
              <Typography className='text-black text-2xl font-bold'>
                기숙사 &nbsp;
                <Typography component='span' className='text-accent1 text-2xl font-bold'>룸메 매칭&nbsp;</Typography>
                서비스
              </Typography>

              <Box className='flex flex-row items-center mt-4'>
                <Image src={LogoString1} width={65.24} height={11.23} />
                <Typography className='text-black text-sm font-medium'>에서 나와 딱 맞는 룸메를 만나보세요</Typography>
              </Box>

              <Button onClick={() => document.location = '/login'} className='bg-accent1 rounded-full px-7 py-3 mt-12'>
                <Typography className='text-white text-xs font-regular'>시작하기</Typography>
              </Button>
            </Box>

            <Box className='flex flex-col justify-center items-center py-14'>
              <Box className='flex flex-row justify-center items-center'>
                <Typography className='text-black text-sm font-medium'>
                  지금까지&nbsp;
                  <Box component='span'>
                    <Image src={LogoString2} width={67} height={12} />
                  </Box>
                  <Typography component='span' className='text-accent1 text-sm font-bold'>&nbsp;누적 가입자 수</Typography>
                  는?
                </Typography>
              </Box>

              <Box className='flex bg-white w-36 h-16 rounded-full drop-shadow-[0px_4px_10px_rgba(0,0,0,0.14)] justify-center items-center mt-12'>
                <Typography className="text-black text-lg font-bold">{totalUser} 명</Typography>
              </Box>
            </Box>

            <Image src={landingMiddleContentMobile} />

            <Box className='bg-landing-last-backgrund-mobile bg-cover flex flex-col justify-center items-center py-16'>
              <Typography className='text-black text-sm font-regular'>가장 간편한 기숙사 룸메이트 매칭 서비스</Typography>

              <Box className='flex flex-row items-center mt-5'>
                <Typography className='text-accent1 text-lg font-medium mr-2'>너도?</Typography>
                <Typography className='text-accent2 text-lg font-medium mr-2'>나도?</Typography>
                <Image src={LogoString1} width={103.79} height={17.77} />
              </Box>

              <Button onClick={() => document.location = '/login'} className='bg-accent1 rounded-full px-5 py-3 mt-7'>
                <Typography className='text-white text-xs font-regular'>룸메이트 만나러 가기</Typography>
              </Button>
            </Box>
          </>
        )
      }
    </Box>
  );
};

