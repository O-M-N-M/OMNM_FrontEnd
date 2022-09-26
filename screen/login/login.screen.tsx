import { Box, Button, Stack, Divider, Typography, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";

import axios from "axios";
import { setCookie } from "cookies-next";

import Link from 'next/link';
import { NextPage } from "next";
import Image from "next/image";
import logo from '../../public/logo.png';
import failIcon from '../../public/failIcon.png';


export const LoginScreen: NextPage = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [fail, setFail] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const url = '/api/login';
    const body = `loginId=${id}&password=${pw}`;
    const headers = { headers: { "Content-Type": "application/x-www-form-urlencoded" } }

    await axios.post(url, body, headers)
      .then(res => {
        console.log(res.data);
        if (res.data === '비밀번호 틀림' || res.data === '아이디 없음') {
          setFail(true);
        } else {
          setCookie('OMNM', res.data);
          document.location = '/';
        }
      })
      .catch(err => console.log(err.response))
  }

  return (
    <Box className="flex justify-center items-center min-h-screen">
      <Box className="flex flex-col items-center">
        <Image src={logo} width={75} height={75} />

        <form onSubmit={onSubmit}>
          <Stack direction="column">
            <input
              type="text"
              name="id"
              placeholder="아이디 입력"
              value={id}
              onChange={(e) => setId(e.target.value)}
              className="text-gray1 text-xs rounded-full border border-solid border-gray0 block w-64 p-4 mt-6 focus:outline-none" required />
            <input
              type="password"
              name="pw"
              placeholder="비밀번호 입력"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              className="text-gray1 text-xs rounded-full border border-solid border-gray0 block w-64 p-4 mt-2 focus:outline-none" required />
            <Button type="submit" className="bg-accent1 rounded-full text-white border border-gray2 text-sm font-medium block w-64 p-4 mt-2">로그인</Button>
          </Stack>
        </form>

        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
          className="mt-2"
        >
          <Link href="/findid">
            <a className="no-underline">
              <Typography className="text-gray3 text-xs font-medium">아이디 찾기</Typography>
            </a>
          </Link>
          <Link href="/findpw">
            <a className="no-underline">
              <Typography className="text-gray3 text-xs font-medium">비밀번호 찾기</Typography>
            </a>
          </Link>
        </Stack>

        <Box className="flex items-center mt-2">
          <Typography className="text-gray1 text-xxs font-regular">회원이 아니신가요?</Typography>
          <Link href="/signup">
            <a className="ml-2">
              <Typography className="text-accent1 text-xxs font-regular">회원가입하러 가기</Typography>
            </a>
          </Link>
        </Box>

        {
          fail === true ?
            <Box className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded border border-solid border-gray0 pt-5 p-10 w-[27rem]">
              <Box className="flex justify-end">
                <IconButton onClick={() => setFail(false)}>
                  <CloseIcon aria-label="close" />
                </IconButton>
              </Box>

              <Box className="text-center">
                <Image src={failIcon} />
              </Box>

              <Box className="text-center">
                <Typography className="text-sm text-black">아이디 또는 비밀번호를 잘못 입력하였습니다.</Typography>
              </Box>
            </Box>
            : <></>
        }
      </Box>
    </Box>
  );
};
