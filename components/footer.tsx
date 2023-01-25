import Image from "next/image";

import { Box, Typography, useMediaQuery } from "@mui/material";
import logo from '../public/logo.png';
import Link from "next/link";

const Footer = () => {
  const isLabtop = useMediaQuery('(min-width: 1024px)');

  return (
    <Box className="flex flex-row flex-wrap-reverse labtop:items-center bg-gray5 w-full labtop:h-[180px] mobile:h-fit labtop:py-0 mobile:py-9">
      <Box className="labtop:w-fit mobile:w-full labtop:ml-[15%] mobile:ml-[5%] labtop:mt-0 mobile:mt-7">
        {
          isLabtop ?
            <Image src={logo} width={60} height={61} /> :
            <Image src={logo} width={33} height={34} />
        }
        <Typography className="text-gray4 labtop:text-sm mobile:text-xs font-regular mt-1">ⓒ 2023. omnm. All rights reserved.</Typography>
      </Box>

      <Box className="flex labtop:flex-row mobile:flex-col flex-wrap labtop:ml-auto mobile:ml-[5%] labtop:mr-[15%]">
        <Link href='/'>
          <a>
            <Typography className="font-medium labtop:text-base mobile:text-sm">서비스 소개</Typography>
          </a>
        </Link>

        <Link href='/main'>
          <a className="labtop:ml-14 labtop:mt-0 mobile:mt-7">
            <Typography className="font-medium labtop:text-base mobile:text-sm">메인페이지</Typography>
          </a>
        </Link>

        <Box className="labtop:ml-14 labtop:mt-0 mobile:mt-7">
          <Link href='/mypage'>
            <a>
              <Typography className="font-medium labtop:text-base mobile:text-sm labtop:mb-2 mobile:mb-4">마이페이지</Typography>
            </a>
          </Link>

          <Link href='/mypage_surveyme'>
            <a>
              <Typography className="font-regular labtop:text-base mobile:text-sm labtop:mb-2 mobile:mb-4">성향 설문조사</Typography>
            </a>
          </Link>
          <Link href='/mypage_edit'>
            <a>
              <Typography className="font-regular labtop:text-base mobile:text-sm">설정</Typography>
            </a>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;