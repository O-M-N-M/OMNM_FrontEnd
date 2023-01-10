import { Box, Button, Typography } from "@mui/material";

import { NextPage } from "next";
import Image from "next/image";

import splash from '../../public/splash.gif';
import logo from '../../public/logo.png';
import { useEffect, useState } from "react";

export const SignUpSuccessScreen: NextPage = () => {
  const [isSplash, setIsSplash] = useState<boolean>(true);

  const onClick = () => {
    document.location = '/login';
  };

  const showSplash = () => {
    setTimeout(() => {
      setIsSplash(false);
    }, 3000);
  };

  useEffect(() => {
    showSplash();
  })

  return (
    <Box>
      {
        isSplash ? (
          <Box className='bg-sky0 flex flex-col justify-center items-center w-full h-[calc(100vh-50px)]'>
            <Image src={splash} />
          </Box>
        ) : (
          <Box className='flex flex-col justify-center items-center w-full h-[calc(100vh-70px)]'>

            <Box className="flex flex-col justify-center items-center border border-solid border-gray0 rounded-2xl h-max mt-5 px-96 py-14 text-center">
              <Image width={60} height={61} src={logo} />

              <Box className="flex justify-center items-center mt-10">
                <Typography className="text-black text-4xl font-medium">회원가입이 완료되었습니다</Typography>
              </Box>

              <Box className="mt-4">
                <Typography className="text-black text-base font-regular">회원가입을 축하합니다</Typography>
                <Typography className="text-black text-base font-regular">로그인한 후 룸메 찾기를 위한 설문조사를 진행해주세요</Typography>
              </Box>

              <Button onClick={onClick} className="bg-accent1 rounded-full text-white text-base font-medium px-20 py-3.5 mt-11">로그인</Button>
            </Box>
          </Box>
        )
      }
    </Box>
  );
}