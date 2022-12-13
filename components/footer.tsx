import Image from "next/image";

import { Box, Typography } from "@mui/material";
import logo from '../public/logo.png';
import Link from "next/link";

const Footer = () => {
  return (
    <Box className="flex items-center bg-gray5 w-full h-[180px]">
      <Box className="ml-[15%]">
        <Image src={logo} width={60} height={61} />
        <Typography className="text-gray4 text-xs font-regular mt-1">ⓒ 2022. omnm. All rights reserved.</Typography>
      </Box>

      <Box className="flex flex-row ml-auto mr-[15%]">
        <Link href='/main'>
          <a>
            <Typography className="font-medium text-xs">메인</Typography>
          </a>
        </Link>

        <Box className="ml-14">
          <Link href='/mypage'>
            <a>
              <Typography className="font-medium text-xs mb-2">마이페이지</Typography>
            </a>
          </Link>

          <Link href='/'>
            <a>
              <Typography className="font-regular text-xs mb-2">룸메 신청 내역</Typography>
            </a>
          </Link>
          <Link href='/'>
            <a>
              <Typography className="font-regular text-xs mb-2">성향 설문조사</Typography>
            </a>
          </Link>
          <Link href='/'>
            <a>
              <Typography className="font-regular text-xs">설정</Typography>
            </a>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;