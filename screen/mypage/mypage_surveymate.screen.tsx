import Image from "next/image";

import { Box, CircularProgress, IconButton, Typography } from "@mui/material"

import EditIcon from '../../public/edit.png';
import MyPageLeft from "@/components/mypage/mypage_left"
import Footer from "@/components/footer"
import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import axios from "axios";

const questions = [
  '선호하는 룸메이트의 나이',
  '선호하는 룸메이트의 MBTI',
  '선호하는 룸메이트의 흡연 여부',
  '선호하는 룸메이트의 학과',
  '선호하는 룸메이트의 생활 패턴',
  '선호하는 룸메이트의 방 청소 빈도',
  '선호하는 룸메이트의 국적',
  '선호하는 룸메이트의 군복무 여부'
];
let answers: any[] = [];

export const MyPageSurveyMateScreen = () => {
  const [loading, setLoading] = useState(false);

  const doNotCare = '상관없음';

  const age = ['20대 초반', '20대 중반', '20대 후반', '30대 후반', doNotCare];
  const isSmoking = ['흡연', '비흡연', doNotCare];
  const department = ['같은 학과', '다른 학과', doNotCare];
  const lifeCycle = ['아침형', '저녁형', doNotCare];
  const isCleaning = ['주 5회 이상 청소', '주 2-3회 청소', '주 1회 청소', '월 1회 청소', doNotCare];
  const nationality = ['대한민국', doNotCare];
  const armyService = ['군필', '미필', doNotCare];

  const onClick = () => {
    document.location = '/surveymate';
  };

  useEffect(() => {
    setLoading(true);

    const getSurveyMate = async () => {
      const url = '/api/yourPersonality';
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

          const ages = res.data.age.replace(/[{}]/g, '').split(',');
          if (ages[0] === '4') answers.push(age[4]);
          else {
            let newAge: string[] = [];

            ages.forEach((v: string) => newAge.push(age[parseInt(v)]));
            answers.push(newAge.join(' / '));
          }

          const mbtis = res.data.mbti.replace(/[{}]/g, '').split(',');
          if (mbtis[0] === 'ALL') answers.push(doNotCare);
          else {
            answers.push(mbtis.join(' / '));
          }

          answers.push(isSmoking[res.data.isSmoking]);
          answers.push(department[res.data.department]);
          answers.push(lifeCycle[res.data.lifeCycle]);
          answers.push(isCleaning[res.data.cleaning]);
          answers.push(nationality[res.data.nationality]);
          if (res.data.armyService !== null) answers.push(armyService[res.data.armyService]);
        })

      setLoading(false);
    };

    getSurveyMate();
  }, [])

  return (
    <>
      <Box className='flex flex-row justify-center min-h-[calc(100vh-70px)] mx-[15%] my-[5%]'>
        <Box>
          <MyPageLeft />
        </Box>

        <Box className='flex flex-col border border-solid border-gray0 rounded-[1.25rem] w-full h-fit px-14 py-16 ml-6'>
          <Box className='flex flex-row items-center mb-4'>
            <Typography className='text-black text-xl font-medium'>룸메이트 성향 설문조사</Typography>
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
                  answers.map((v: any, index: number) => {
                    return (
                      <Box className='flex flex-row items-center border border-solid border-gray0 rounded-[1.25rem] w-full px-10 py-5 mt-5'>
                        <Typography className='bg-accent2 rounded-full text-white text-xs font-medium px-2.5 py-1'>문항 {index + 1}</Typography>
                        <Typography className='text-black text-base font-medium ml-3'>{questions[index]}</Typography>
                        <Typography className='text-black text-base font-regular underline underline-offset-4 decoration-1 decoration-accent2 max-w-[50%] ml-auto'>{v}</Typography>
                      </Box>
                    )
                  })
                }
              </>
            )
          }
        </Box>
      </Box>

      <Footer />
    </>
  )
}