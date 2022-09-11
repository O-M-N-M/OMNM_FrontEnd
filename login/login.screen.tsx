import { Box, Button, Stack, Divider } from "@mui/material";
import Link from 'next/link';
import { NextPage } from "next";
import Image from "next/image";
import logo from '../../public/logo.png';

export const LoginScreen: NextPage = () => {
  return (
    <Box className="flex justify-center items-center min-h-screen">
      <Box className="flex flex-col items-center">
        <Image src={logo} width={75} height={75} />

        <form>
          <Stack direction="column">
            <input type="text" placeholder="아이디 입력" className="rounded-full text-gray1 border border-solid border-gray0 text-sm block w-60 p-2.5 mt-6 focus:outline-none" required />
            <input type="password" placeholder="비밀번호 입력" className="rounded-full text-gray1 border border-solid border-gray0 text-sm block w-60 p-2.5 mt-2 focus:outline-none" required />
            <Button className="bg-accent1 rounded-full text-white border border-gray2 text-sm block w-60 p-2.5 mt-2">로그인</Button>
          </Stack>
        </form>

        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
          className="mt-2"
        >
          <Link href="/findid">
            <a className="text-gray3 hover:text-gray1 visited:text-gray3 text-xs no-underline">아이디 찾기</a>
          </Link>
          <Link href="/findpw">
            <a className="text-gray3 hover:text-gray1 visited:text-gray3 text-xs no-underline">비밀번호 찾기</a>
          </Link>
        </Stack>
      </Box>
    </Box>
  );
};
