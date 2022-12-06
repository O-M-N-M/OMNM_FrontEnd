import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

import logo from "../public/logo.png";

const Footer = () => {
  return (
    <Box className="flex items-center bg-gray5 w-full h-[180px]">
      <Box className="ml-[15%]">
        <Image src={logo} width={60} height={61} />
        <Typography className="text-gray4 text-xs font-regular mt-1">
          ⓒ 2022. omnm. All rights reserved.
        </Typography>
      </Box>

      <Box className="flex flex-row ml-auto mr-[15%]">
        <Link href="/main">
          <a>
            <Typography className="font-medium text-xs">메인</Typography>
          </a>
        </Link>

        <Box className="ml-14">
          <Link href="/mypage">
            <a>
              <Typography className="font-medium text-xs mb-2">
                마이페이지
              </Typography>
            </a>
          </Link>

          <Link href="/mypage_receive">
            <a>
              <Typography className="font-regular text-xs mb-2">
                룸메 신청 내역
              </Typography>
            </a>
          </Link>
          <Link href="/survey_me">
            <a>
              <Typography className="font-regular text-xs mb-2">
                성향 설문조사
              </Typography>
            </a>
          </Link>
          <Link href="/">
            <a>
              <Typography className="font-regular text-xs">설정</Typography>
            </a>
          </Link>
        </Box>
      </Box>
    </Box>

    // <Box className="bg-gray2 flex flex-row m-5 ml-[15%]">
    //   <Box className="w-[50%]">
    //     <Image src={logo} width={60} height={61} />
    //     <Typography className="text-gray4 text-xs font-regular mt-1">ⓒ 2022. omnm. All rights reserved.</Typography>
    //   </Box>
    /* <Box className="w-[50%]">
      <Box className="flex flex-row">
        <Typography className="text-xs font-bold mr-16">홈</Typography>
        <Typography className="text-xs font-bold mr-16">기숙사 소개</Typography>
        <Typography className="text-xs font-bold mr-16">게시판</Typography>
        <Typography className="text-xs font-bold mr-16">채팅</Typography>
        <Typography className="text-xs font-bold mr-16">마이페이지</Typography>
      </Box>

      <Box className="flex flex-row">
        <Typography className="text-xs font-bold mr-16">&nbsp;&nbsp;&nbsp;&nbsp;</Typography>
        <Typography className="text-xs font-bold mr-16">생활관 소개</Typography>
        <Typography className="text-xs font-bold mr-16">자유</Typography>
      </Box>

      <Box className="flex flex-row">
        <Typography className="text-xs font-bold mr-16">&nbsp;&nbsp;&nbsp;&nbsp;</Typography>
        <Typography className="text-xs font-bold mr-16">편의시설 소개</Typography>
        <Typography className="text-xs font-bold mr-16">물건나눔</Typography>
      </Box>

      <Box className="flex flex-row">
        <Typography className="text-xs font-bold mr-16">&nbsp;&nbsp;&nbsp;&nbsp;</Typography>
        <Typography className="text-xs font-bold mr-16">찾아오시는 길</Typography>
        <Typography className="text-xs font-bold mr-16">공지사항</Typography>
      </Box>
    </Box> */
    // </Box>
  );
};

export default Footer;
