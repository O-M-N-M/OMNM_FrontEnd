import { Box, Button, Stack, Divider, Typography } from "@mui/material";
import Link from 'next/link';
import { NextPage } from "next";
import Image from "next/image";
import logo from '../../public/logo.png';
import { useState } from "react";
import axios from "axios";
import { setCookie } from "cookies-next";

export const LoginScreen: NextPage = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const url = '/api/login';
    const body = `loginId=${id}&password=${pw}`;
    const headers = { headers: { "Content-Type": "application/x-www-form-urlencoded" } }

    await axios.post(url, body, headers)
      .then(res => {
        console.log(res.data);
        setCookie('OMNM', res.data);
        document.location = '/survey_me';
      })
      .catch(err => console.log(err.response))
  }

  return (
    <Box className="flex items-center justify-center min-h-screen">
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
              className="block w-64 p-4 mt-6 text-xs border border-solid rounded-full text-gray1 border-gray0 focus:outline-none" required />
            <input
              type="password"
              name="pw"
              placeholder="비밀번호 입력"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              className="block w-64 p-4 mt-2 text-xs border border-solid rounded-full text-gray1 border-gray0 focus:outline-none" required />
            <Button type="submit" className="block w-64 p-4 mt-2 text-sm font-medium text-white border rounded-full bg-accent1 border-gray2">로그인</Button>
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
              <Typography className="text-xs font-medium text-gray3">아이디 찾기</Typography>
            </a>
          </Link>
          <Link href="/findpw">
            <a className="no-underline">
              <Typography className="text-xs font-medium text-gray3">비밀번호 찾기</Typography>
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
      </Box>
    </Box>
  );
};
