import Image from "next/image";

import { Box, CircularProgress, IconButton, Typography } from "@mui/material"

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

  // const mbti = ['ENFJ', 'ENFP', 'ENTJ', 'ENTP', 'ESFJ', 'ESFP', 'ESTJ', 'ESTP', 'INFJ', 'INFP', 'INTJ', 'INTP', 'ISFJ', 'ISFP', 'ISTJ', 'ISTP'];
  const isSmoking = ['흡연', '비흡연'];
  const lifeCycle = ['아침형', '저녁형'];
  const sleepingPattern = ['코골이', '이갈이', '몸부림', '수면패턴 없음'];
  const isCleaning = ['주 5회 이상 청소', '주 2-3회 청소', '주 1회 청소', '월 1회 청소'];
  const nationality = ['내국인', '외국인'];
  const armyService = ['군필', '미필'];

  const onClick = () => {
    document.location = '/surveyme';
  };

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

          answers.push(isSmoking[res.data.isSmoking]);
          answers.push(res.data.department);
          answers.push(lifeCycle[res.data.lifeCycle]);

          const sp = res.data.sleepingPattern.replace(/[{}]/g, '').split(',');
          if (sp[0] === '3') answers.push(sleepingPattern[3]);
          else {
            let newSP: string[] = [];

            sp.forEach((v: string) => newSP.push(sleepingPattern[parseInt(v)]));
            answers.push(newSP.join(' / '));
          }

          answers.push(isCleaning[res.data.cleaning])
          answers.push(nationality[res.data.nationality]);
          answers.push(armyService[res.data.armyService]);

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
            <IconButton onClick={onClick} className='ml-auto'>
              <Image src={EditIcon} width={20} height={20} />
            </IconButton>
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