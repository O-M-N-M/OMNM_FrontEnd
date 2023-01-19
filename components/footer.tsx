import Image from "next/image";

import { Box, Typography } from "@mui/material";
import logo from '../public/logo.png';
import Link from "next/link";

const Footer = () => {
  return (
    <Box className="flex labtop:flex-row mobile:flex-col labtop:items-center bg-gray5 w-full labtop:h-[180px] mobile:h-fit labtop:py-0 mobile:py-9">
      <Box className="labtop:ml-[15%] mobile:ml-[5%]">
        <Image src={logo} width={60} height={61} />
        <Typography className="text-gray4 text-sm font-regular mt-1">ⓒ 2023. omnm. All rights reserved.</Typography>
      </Box>

      <Box className="flex labtop:flex-row mobile:flex-col flex-wrap labtop:ml-auto mobile:ml-[5%] labtop:mr-[15%] labtop:mt-0 mobile:mt-9">
        <Link href='/'>
          <a>
            <Typography className="font-medium text-base">서비스 소개</Typography>
          </a>
        </Link>

        <Link href='/main'>
          <a className="labtop:ml-14 labtop:mt-0 mobile:mt-8">
            <Typography className="font-medium text-base">메인페이지</Typography>
          </a>
        </Link>

        <Box className="labtop:ml-14 labtop:mt-0 mobile:mt-8">
          <Link href='/mypage'>
            <a>
              <Typography className="font-medium text-base labtop:mb-2 mobile:mb-4">마이페이지</Typography>
            </a>
          </Link>

          <Link href='/mypage_surveyme'>
            <a>
              <Typography className="font-regular text-base labtop:mb-2 mobile:mb-4">성향 설문조사</Typography>
            </a>
          </Link>
          <Link href='/mypage_edit'>
            <a>
              <Typography className="font-regular text-base">설정</Typography>
            </a>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;