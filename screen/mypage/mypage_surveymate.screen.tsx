import Image from "next/image";

import { Box, Typography } from "@mui/material"

import EditIcon from '../../public/edit.png';
import MyPageLeft from "@/components/mypage/mypage_left"
import Footer from "@/components/footer"

const questions = ['선호하는 룸메의 나이', '선호하는 룸메의 MBTI', '선호하는 룸메의 흡연 여부', '선호하는 룸메의 학과', '선호하는 룸메의 생활 패턴', '선호하는 룸메의 방 청소 빈도', '선호하는 룸메의 국적', '선호하는 룸메의 군복무 여부'];
const answers = [['20대 초반', '20대 후반', '20대 중반'], ['ENFJ', 'ENTJ', 'INFP'], ['비흡연'], ['상관없음'], '']

export const MyPageSurveyMateScreen = () => {
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
                  <Typography className='text-black text-base font-regular underline underline-offset-4 decoration-1 decoration-accent2 ml-auto'>ㅁㅁ</Typography>
                </Box>
              )
            })
          }
        </Box>
      </Box>

      <Footer />
    </>
  )
}