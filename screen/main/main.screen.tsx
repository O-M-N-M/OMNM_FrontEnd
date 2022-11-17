import { NextPage } from "next";
import Image from "next/image";

import Header from '../../components/header';
import Footer from '../../components/footer';
import profile from '../../public/basicProfile.png';
import percent from '../../public/percentIcon.png';

import { Box, Typography } from "@mui/material";

import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const MainScreen: NextPage = () => {
  return (
    <Box>
      <Header />
      {/* 
      <Box className="bg-sky1 pt-16 pb-16 pl-10 pr-10">
        <Typography className="text-3xl font-bold">추천 룸메 리스트</Typography>
        <Typography className="text-sm font-medium mt-4">홍길동님과 잘 맞을 룸메 리스트입니다.</Typography>

        <Box className="flex flex-col justify-center items-center bg-white rounded-lg w-60 h-60 mt-5">
          <Image src={profile} width={80} height={80} />
          <Typography className="text-xl mt-4">홍길동</Typography>
          <Typography className="text-lg">24  .  ENFJ</Typography>
          <Typography className="text-xs text-accent2">12% 일치</Typography>
        </Box>

        <Box className="flex flex-col justify-center items-center bg-white rounded-lg w-64 h-52 mt-5">
          <Box className="flex flex-row justify-center items-center">
            <Image src={profile} width={80} height={80} />
            <Box className="ml-5">
              <Box className="flex flex-row items-center">
                <Typography className="font-bold text-xl text-black">홍길동</Typography>
                <Typography className="text-lg">(24)</Typography>
              </Box>
              <Box className="flex flex-row items-center">
                <Typography className="text-lg mr-3">ENFJ</Typography>
                <Image src={percent} width={15} height={15} />
                <Typography className="text-xs font-regular">78%</Typography>
              </Box>
            </Box>
          </Box>
          <Box className="w-[80%] mt-5">
            <Typography className="text-xs font-regular">안녕 나는 홍길동이야. 룸메를 구하고 있어~ 주로 기숙사는 밤에만 가 나랑 룸메해~!</Typography>
          </Box>
        </Box>

        <Box className="flex justify-center items-center content-center bg-transparent w-5/6 mt-5">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Navigation]}
            className="items-center"
          >
            <SwiperSlide className="flex flex-col justify-center items-center bg-white rounded-lg w-60 h-60">
              <Image src={profile} width={80} height={80} />
              <Typography className="text-xl mt-4">1</Typography>
              <Typography className="text-lg">24  .  ENFJ</Typography>
              <Typography className="text-xs text-accent2">12% 일치</Typography>
            </SwiperSlide>
            <SwiperSlide className="flex flex-col justify-center items-center bg-white rounded-lg w-60 h-60">
              <Image src={profile} width={80} height={80} />
              <Typography className="text-xl mt-4">2</Typography>
              <Typography className="text-lg">24  .  ENFJ</Typography>
              <Typography className="text-xs text-accent2">12% 일치</Typography>
            </SwiperSlide>
            <SwiperSlide className="flex flex-col justify-center items-center bg-white rounded-lg w-60 h-60">
              <Image src={profile} width={80} height={80} />
              <Typography className="text-xl mt-4">3</Typography>
              <Typography className="text-lg">24  .  ENFJ</Typography>
              <Typography className="text-xs text-accent2">12% 일치</Typography>
            </SwiperSlide>
            <SwiperSlide className="flex flex-col justify-center items-center bg-white rounded-lg w-60 h-60">
              <Image src={profile} width={80} height={80} />
              <Typography className="text-xl mt-4">4</Typography>
              <Typography className="text-lg">24  .  ENFJ</Typography>
              <Typography className="text-xs text-accent2">12% 일치</Typography>
            </SwiperSlide>
            <SwiperSlide className="flex flex-col justify-center items-center bg-white rounded-lg w-60 h-60">
              <Image src={profile} width={80} height={80} />
              <Typography className="text-xl mt-4">5</Typography>
              <Typography className="text-lg">24  .  ENFJ</Typography>
              <Typography className="text-xs text-accent2">12% 일치</Typography>
            </SwiperSlide>
            <SwiperSlide className="flex flex-col justify-center items-center bg-white rounded-lg w-60 h-60">
              <Image src={profile} width={80} height={80} />
              <Typography className="text-xl mt-4">6</Typography>
              <Typography className="text-lg">24  .  ENFJ</Typography>
              <Typography className="text-xs text-accent2">12% 일치</Typography>
            </SwiperSlide>
            <SwiperSlide className="flex flex-col justify-center items-center bg-white rounded-lg w-60 h-60">
              <Image src={profile} width={80} height={80} />
              <Typography className="text-xl mt-4">7</Typography>
              <Typography className="text-lg">24  .  ENFJ</Typography>
              <Typography className="text-xs text-accent2">12% 일치</Typography>
            </SwiperSlide>
            <SwiperSlide className="flex flex-col justify-center items-center bg-white rounded-lg w-60 h-60">
              <Image src={profile} width={80} height={80} />
              <Typography className="text-xl mt-4">8</Typography>
              <Typography className="text-lg">24  .  ENFJ</Typography>
              <Typography className="text-xs text-accent2">12% 일치</Typography>
            </SwiperSlide>
            <SwiperSlide className="flex flex-col justify-center items-center bg-white rounded-lg w-60 h-60">
              <Image src={profile} width={80} height={80} />
              <Typography className="text-xl mt-4">9</Typography>
              <Typography className="text-lg">24  .  ENFJ</Typography>
              <Typography className="text-xs text-accent2">12% 일치</Typography>
            </SwiperSlide>
          </Swiper>
        </Box>

      </Box>

      <Box className="bg-sky0 h-40">
      </Box> */}
      <Footer />
    </Box>
  );
}