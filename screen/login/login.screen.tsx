import { Box, Button, Stack, Divider, Typography } from "@mui/material";
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
            <input type="text" placeholder="아이디 입력" className="text-gray1 text-xs rounded-full border border-solid border-gray0 block w-64 p-4 mt-6 focus:outline-none" required />
            <input type="password" placeholder="비밀번호 입력" className="text-gray1 text-xs rounded-full border border-solid border-gray0 block w-64 p-4 mt-2 focus:outline-none" required />
            <Button className="bg-accent1 rounded-full text-white border border-gray2 text-sm block w-64 p-4 mt-2">로그인</Button>
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
      </Box>
    </Box>
  );
};
