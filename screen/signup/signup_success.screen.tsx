import { Box, Button, Typography } from "@mui/material";

import { NextPage } from "next";
import Image from "next/image";

import signupSuccess from '../../public/signupSuccess.png';
import logo from '../../public/logo.png';

export const SignUpSuccessScreen: NextPage = () => {
  const onClick = () => {
    document.location = '/login';
  }

  return (
    <Box className='flex flex-col justify-center items-center w-full h-[calc(100vh-50px)]'>
      <Image width={60} height={61} src={logo} />

      <Box className="flex flex-col justify-center items-center border border-solid border-gray0 rounded-2xl h-max mt-5 px-96 py-14 text-center">
        <Image width={81} height={75} src={signupSuccess} />

        <Box className="flex justify-center items-center mt-2">
          <Typography className="text-4xl font-medium text-black">회원가입</Typography>
          <Typography className="text-4xl font-regular text-black">이</Typography>
          <Typography className="text-4xl font-medium text-black">&nbsp;완료</Typography>
          <Typography className="text-4xl font-regular text-black">되었습니다.</Typography>
        </Box>

        <Box className="mt-4">
          <Typography className="text-base text-black font-regular">회원가입을 축하합니다.</Typography>
          <Typography className="text-base text-black font-regular">로그인한 후 룸메 찾기를 위한 설문조사를 진행해주세요.</Typography>
        </Box>

        <Button onClick={onClick} className="bg-accent1 rounded-full text-white text-sm font- block w-52 h-12 mt-11">로그인</Button>
      </Box>
    </Box>
  );
}