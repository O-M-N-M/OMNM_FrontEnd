import { deleteCookie, setCookie } from "cookies-next";
import { NextPage } from "next";
import Image from "next/image";
import Link from 'next/link';

import { Box, Button, Stack, Divider, Typography, IconButton, useMediaQuery } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

import { useEffect, useState } from "react";
import axios from "axios";

import failIcon from '../../public/failIcon.png';
import logo from '../../public/logo.png';

export const LoginScreen: NextPage = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [fail, setFail] = useState(false);
  const [innerWidth, setInnerWidth] = useState<number | undefined>();

  const isLabtop = useMediaQuery('(min-width: 1024px)');

  const isSurvey = async (token: string) => {
    const url = '/api/yourPersonality';
    const headers = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        'OMNM': `${token}`
      }
    };

    await axios.get(url, headers)
      .then((res) => {
        if (Object.keys(res.data).length !== 0) movePage(true);
        else {
          movePage(false);
        }
      })
      .catch((err) => console.log(err));
  };

  const movePage = (tf: boolean) => {
    if (tf) document.location = '/main';
    else document.location = '/surveyme';
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const url = '/api/login';
    const body = `loginId=${id}&password=${pw}`;
    const headers = { headers: { "Content-Type": "application/x-www-form-urlencoded" } };

    await axios.post(url, body, headers)
      .then((res) => {
        if (res.data === '비밀번호 틀림' || res.data === '아이디 없음') {
          setFail(true);
        } else {
          setCookie('OMNM', res.data['accessToken']);
          setCookie('refreshToken', res.data['refreshToken']);

          isSurvey(res.data['accessToken']);
        }
      })
      .catch(err => console.log(err.response));
  }

  useEffect(() => {
    deleteCookie('OMNM');
    deleteCookie('refreshToken');
    setInnerWidth(window.innerWidth);
  }, []);

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
          <Box className="flex justify-center items-center min-h-[calc(100vh-70px)]">
            <Box className='flex flex-col items-center my-[5%]'>
              <Image src={logo} width={54} height={55} />

              <form onSubmit={onSubmit}>
                <Stack direction="column">
                  <input
                    type="text"
                    name="id"
                    placeholder="아이디 입력"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    autoComplete="off"
                    className="text-gray1 text-sm font-regular rounded-full border border-solid border-gray0 block w-[19rem] h-12 p-4 mt-9 focus:outline-none" required />
                  <input
                    type="password"
                    name="pw"
                    placeholder="비밀번호 입력"
                    value={pw}
                    onChange={(e) => setPw(e.target.value)}
                    autoComplete="off"
                    className="text-gray1 text-sm font-regular rounded-full border border-solid border-gray0 block w-[19rem] h-12 p-4 mt-4 focus:outline-none" required />
                  {
                    (!isLabtop && fail) &&
                    <Typography className='text-red text-xs font-regular mt-2'>아이디 또는 비밀번호를 잘못 입렸했습니다.</Typography>
                  }

                  <Button type="submit" className="bg-accent1 rounded-full border border-gray2 text-white text-base font-medium block w-[19rem] p-4 mt-4">로그인</Button>
                </Stack>
              </form>

              <Stack
                direction="row"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={2}
                className="mt-9"
              >
                <Link href="/findid">
                  <a className="no-underline">
                    <Typography className="text-gray1 text-sm font-medium">아이디 찾기</Typography>
                  </a>
                </Link>
                <Link href="/findpw">
                  <a className="no-underline">
                    <Typography className="text-gray1 text-sm font-medium">비밀번호 찾기</Typography>
                  </a>
                </Link>
              </Stack>

              <Box className="flex items-center mt-3.5">
                <Typography className="text-gray1 text-xs font-medium">회원이 아니신가요?</Typography>
                <Link href="/signup">
                  <a className="ml-2">
                    <Typography className="text-accent1 text-xs font-medium">회원가입하러 가기</Typography>
                  </a>
                </Link>
              </Box>

              {
                (isLabtop && fail) &&
                <Box className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded border border-solid border-gray0 pt-5 p-10 w-[27rem]">
                  <Box className="flex justify-end">
                    <IconButton onClick={() => setFail(false)}>
                      <CloseIcon aria-label="close" />
                    </IconButton>
                  </Box>

                  <Box className="text-center">
                    <Image src={failIcon} width={72} height={72} />
                  </Box>

                  <Box className="text-center">
                    <Typography className="text-sm text-black">아이디 또는 비밀번호를 잘못 입력하였습니다.</Typography>
                  </Box>
                </Box>
              }
            </Box>
          </Box>
        ) : (
          <Box className="bg-preparing-background-mobile bg-cover bg-center flex flex-col justify-center items-center min-h-[calc(100vh-49px)]">
            <Image src={logo} width={115} height={118} />
            <Typography className='text-black text-lg font-regular mt-7'>모바일 버전은 준비중이에요!</Typography>
            <Typography className='text-black text-lg font-medium mt-1'>
              현재&nbsp;
              <Typography component='span' className='text-accent1 text-lg font-medium'>PC</Typography>
              로만 접속이 가능합니다</Typography>

            <Button onClick={() => document.location = '/'} className='bg-accent1 rounded-full px-8 py-3.5 mt-12'>
              <Typography className='text-white text-base font-regular'>서비스 소개 보러가기</Typography>
            </Button>
          </Box>
        )
      }
    </Box>
  );
};