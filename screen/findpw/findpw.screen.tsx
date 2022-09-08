import { Box, Typography, Button } from "@mui/material";
import { NextPage } from "next";
import Image from "next/image";
import logo from '../../public/logo.png';

export const FindPwScreen: NextPage = () => {
  return (
    <Box className="flex justify-center items-center min-h-screen">
      <Box className="flex flex-col items-center">
        <Image src={logo} width={75} height={75} />

        <form className="border border-solid border-gray0 rounded-lg p-14 mt-10">
          <Typography className="text-xl font-bold">비밀번호 찾기</Typography>
          <Typography className="text-sm mt-6">아이디</Typography>
          <input type="text" placeholder="아이디 입력" className="rounded-full text-gray1 border border-solid border-gray0 text-xs block w-60 p-2.5 mt-2 focus:outline-none" required />
          <Typography className="text-sm mt-4">학교 이메일</Typography>
          <Box className="flex items-center">
            <input type="text" placeholder="학교 아이디" className="rounded-full text-gray1 border border-solid border-gray0 text-xs block w-32 p-2.5 mt-2 focus:outline-none" required />
            <Typography className="text-black text-sm ml-4">@cau.ac.kr</Typography>
          </Box>

          <Button className="bg-accent1 rounded-full text-white border border-gray2 text-sm block w-60 p-2.5 mt-6">확인</Button>
        </form>
      </Box>
    </Box>
  );
};
