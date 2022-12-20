import Image from "next/image";

import { Box, Typography } from "@mui/material"

import EditIcon from '../../public/edit.png';
import MyPageLeft from "@/components/mypage/mypage_left"
import Footer from "@/components/footer"

const questions = ['나이', 'MBTI', '흡연 여부', '학과', '생활 패턴', '수명 패턴', '방 청소 빈도', '국적', '군복무 여부'];
const answers = ['23', 'ENFJ', '흡연', '융합소프트웨어학부', '아침형', '코골이', '주 5회 이상', '내국인', '군필'];

export const MyPageSurveyMeScreen = () => {
  return (
    <>
      <Box className='flex flex-row justify-center min-h-[calc(100vh-50px)] mx-[15%] my-[5%]'>
        <Box>
          <MyPageLeft />
        </Box>

        <Box className='flex flex-col border border-solid border-gray0 rounded-[1.25rem] w-full h-fit px-14 py-16 ml-6'>
          <Box className='flex flex-row items-center mb-4'>
            <Typography className='text-black text-xl font-medium'>나의 성향 설문조사</Typography>
            <Box className='ml-auto'>
              <Image src={EditIcon} width={20} height={20} />
            </Box>
          </Box>

          {
            questions.map((v, idx) => {
              return (
                <Box className='flex flex-row border border-solid border-gray0 rounded-[1.25rem] w-full px-10 py-5 mt-5'>
                  <Typography className='bg-accent2 rounded-full text-white text-xs font-medium px-2.5 py-1'>문항 {idx + 1}</Typography>
                  <Typography className='text-black text-base font-medium ml-3'>{v}</Typography>
                  <Typography className='text-black text-base font-regular underline underline-offset-4 decoration-1 decoration-accent2 ml-auto'>{answers[idx]}</Typography>
                </Box>
              )
            })
          }
          <Box className='flex flex-col border border-solid border-gray0 rounded-[1.25rem] w-full px-10 py-5 mt-5'>
            <Box className='flex flex-row'>
              <Typography className='bg-accent2 rounded-full text-white text-xs font-medium px-2.5 py-1'>소개글</Typography>
              <Typography className='text-black text-base font-medium ml-3'>한 줄 자기소개</Typography>
            </Box>

            <Box className='border border-solid border-accent2 rounded-[1.25rem] px-5 py-4 mt-3'>
              <Typography className='text-black text-base font-regular'>안녕하세요 저는 이효인이구요! 룸메 되면 맛있는거 같이 먹구 잘 생활해봐요~!~! <br /> 정말 정말 좋아요!</Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Footer />
    </>
  )
}