import { NextPage } from "next";
import Image from "next/image";

import { Box, Typography, Button } from "@mui/material";

import LogoString from '../../public/logo3.png';
import LogoBoth from '../../public/logo.png';
import Link from "next/link";

export const LadingScreen: NextPage = () => {
  return (
    <>
      <Box className='flex flex-row mt-40'>
        <Box className="ml-[15%]">
          <Typography className="text-[3.3rem] font-bold">
            {`오늘 만나고 내일 만나는\n기숙사 `}
            <Typography component="span" className="text-accent1 text-[3.3rem] font-bold">
              룸메 매칭
            </Typography>
            {" 서비스"}
          </Typography>

          <Typography className="text-[1.68rem] font-normal mt-3">
            <Image src={LogoString} width={114.67} height={19.65} />
            {` 에서 나와 잘맞는 룸메를 찾아보세요.`}
          </Typography>

          <Link href='/login'>
            <Button className='bg-accent1 w-40 h-[4.5rem] rounded-full text-white text-xl mt-16'>
              시작하기
            </Button>
          </Link>
        </Box>

        <Box className="ml-auto mr-[15%]">
          <Image src={LogoBoth} width={275} height={280} />
        </Box>
      </Box>
    </>
  );
};
