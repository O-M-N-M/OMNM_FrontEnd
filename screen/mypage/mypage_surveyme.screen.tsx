import Image from "next/image";

import { Box, CircularProgress, Typography } from "@mui/material"

import EditIcon from '../../public/edit.png';
import MyPageLeft from "@/components/mypage/mypage_left"
import Footer from "@/components/footer"
import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import axios from "axios";

const questions: string[] = ['나이', 'MBTI', '흡연 여부', '학과', '생활 패턴', '수면 패턴', '방 청소 빈도', '국적', '군복무 여부'];
let answers: any = [];

export const MyPageSurveyMeScreen = () => {
  const [loading, setLoading] = useState(false);
  const [introduction, setIntroduction] = useState('');

  useEffect(() => {
    setLoading(true);

    const getSurveyMe = async () => {
      const url = '/api/myPersonality';
      const token = getCookie('OMNM');
      const headers = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          'OMNM': `${token}`
        }
      };

      await axios.get(url, headers)
        .then((res) => {
          answers = [];

          answers.push(res.data.age);
          answers.push(res.data.mbti);

          answers.push(res.data.isSmoking === 0 ? '흡연' : '비흡연');
          answers.push(res.data.department);
          answers.push(res.data.lifeCycle === 0 ? '아침형' : '저녁형');

          const sp = res.data.sleepingPattern.replace(/[{}]/g, '').split(',');
          if (sp.length === 0) answers.push('수면패턴 없음');
          else {
            let newSP: String[] = [];
            sp.forEach((v: string) => {
              if (v === '0') newSP.push('코골이');
              else if (v === '1') newSP.push('이갈이');
              else newSP.push('몸부림');
            });

            answers.push(newSP.join(' / '));
          }

          res.data.isCleaning === 0 ? answers.push('주 5회 이상 청소') :
            res.data.isCleaning === 1 ? answers.push('주 2-3회 청소') :
              res.data.isCleaning === 2 ? answers.push('주 1회 청소') :
                answers.push('월 1회 청소');

          answers.push(res.data.nationality);
          answers.push(res.data.armyService === 0 ? '군필' : '미필');

          setIntroduction(res.data.introduction);
        })

      setLoading(false);
    };

    getSurveyMe();
  }, [])

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
            loading ? (
              <Box className='flex justify-center items-center w-full h-full'>
                <CircularProgress color="inherit" />
              </Box>
            ) : (
              <>
                {
                  questions.map((v, idx) => {
                    return (
                      <Box key={idx} className='flex flex-row border border-solid border-gray0 rounded-[1.25rem] w-full px-10 py-5 mt-5'>
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
                    <Typography className='text-black text-base font-regular'>{introduction}</Typography>
                  </Box>
                </Box>
              </>
            )
          }
        </Box>
      </Box>

      <Footer />
    </>
  )
}