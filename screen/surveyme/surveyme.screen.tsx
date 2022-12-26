import { useState } from "react";
import { NextPage } from "next";
import { getCookie } from "cookies-next";
import Image from 'next/image';
import axios from "axios";

import { Box, Button, Typography } from "@mui/material";

import SurveyIcon from '../../public/Component10.png';
import FirstComponent from "@/components/surveyme/first";
import SecondComponent from "@/components/surveyme/second";
import ThirdComponent from "@/components/surveyme/third";
import FourthComponent from "@/components/surveyme/fourth";
import FifthComponent from "@/components/surveyme/fifth";
import SixthComponent from "@/components/surveyme/sixth";
// import SeventhComponent from "@/components/surveyme/seventh";
// import EighthComponent from "@/components/surveyme/eighth";
// import NinethComponent from "@/components/surveyme/nineth";

const questions = [
  '당신의 나이를 적어 주세요.',
  '당신의 MBTI를 알려주세요.',
  '당신의 흡연 여부를 선택해주세요.',
  '당신의 학과를 선택해주세요.',
  '당신의 생활 패턴을 선택해주세요.',
  '당신의 수면 패턴을 선택해주세요',
  '당신의 방 청소 빈도를 선택해주세요.',
  '당신의 국적을 선택해주세요',
  '당신의 군복무 여부를 선택해주세요.',
];
const infos = [
  '',
  '',
  '',
  '',
  '',
  '중복 선택 가능',
  '',
  '',
  '여성일 경우 미필 선택'
];

export const SurveyMeScreen: NextPage = () => {
  const [age, setAge] = useState<number | string>();
  const [mbti, setMbti] = useState<string | undefined>('');
  const [isSmoking, setIsSmoking] = useState<number | undefined>();
  const [department, setDepartment] = useState<string>('');
  const [lifeCycle, setLifeCycle] = useState<number | undefined>();
  const [sleepingPattern, setSleepingPattern] = useState<object>({
    '0': false,
    '1': false,
    '2': false,
    '3': false
  });
  const [isCleaning, setIsCleaning] = useState<number | undefined>();
  const [nationality, setNationality] = useState<number | undefined>();
  const [armyService, setArmyService] = useState<number | undefined>();
  const [introduction, setIntroduction] = useState<string | undefined>('');

  const onClick = async () => {
    const selectedSleepingPattern = `{${Object.keys(sleepingPattern).filter((v) => sleepingPattern[v as keyof typeof sleepingPattern]).join(',')}}`;
    const data = {
      age: age,
      mbti: mbti,
      isSmoking: isSmoking,
      department: department,
      lifeCycle: lifeCycle,
      sleepingPattern: selectedSleepingPattern,
      cleaning: isCleaning,
      nationality: nationality,
      armyService: armyService,
      introduction: introduction
    }

    const url = '/api/myPersonality';
    const token = getCookie('OMNM');
    const headers = {
      headers: {
        "Content-Type": "multipart/form-data",
        'OMNM': `${token}`
      }
    };

    await axios.post(url, data, headers)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Box className='w-full h-fit min-h-[calc(100vh-50px)] px-[15%] my-[5%]'>
      <Box className='flex flex-row items-center mb-3'>
        <Image src={SurveyIcon} width={57} height={72} />

        <Box className='flex flex-col ml-5'>
          <Typography className='text-black text-xl font-regular'>딱 맞는 룸메 찾기를 위한 성향 조사</Typography>
          <Typography className='text-accent1 text-4xl font-medium'>
            당신
            <Typography component='span' className='text-black text-4xl font-medium'>을 소개해주세요.</Typography>
          </Typography>
        </Box>
      </Box>

      {
        questions.map((v, index) => {
          return (
            <Box key={index} className='flex flex-row flex-wrap items-center border border-solid border-gray0 rounded-[1.25rem] w-full px-[4.5rem] py-10 mt-7'>
              <Box className='bg-accent2 rounded-full w-fit h-fit px-3 py-0.5'>
                <Typography className='text-white text-base font-bold'>문항 {index + 1}</Typography>
              </Box>

              <Typography className='text-black text-xl font-medium ml-5'>{v}</Typography>
              <Typography className='text-gray1 text-base font-medium ml-5'>{infos[index]}</Typography>

              {
                index === 0 ? <FirstComponent props={{ age: age, setAge: setAge }} /> :
                  index === 1 ? <SecondComponent props={{ mbti: mbti, setMbti: setMbti }} /> :
                    index === 2 ? <ThirdComponent props={{ isSmoking: isSmoking, setIsSmoking: setIsSmoking }} /> :
                      index === 3 ? <FourthComponent props={{ department: department, setDepartment: setDepartment }} /> :
                        index === 4 ? <FifthComponent props={{ lifeCycle: lifeCycle, setLifeCycle: setLifeCycle }} /> :
                          index === 5 ? <SixthComponent props={{ sleepingPattern: sleepingPattern, setSleepingPattern: setSleepingPattern }} /> : <></>
                //           index === 6 ? <SeventhComponent props={{ isCleaning: isCleaning, setIsCleaning: setIsCleaning }} /> :
                //             index === 7 ? <EighthComponent props={{ nationality: nationality, setNationality: setNationality }} /> :
                //               index === 8 && <NinethComponent props={{ armyService: armyService, setArmyService: setArmyService }} />
              }
            </Box>
          )
        })
      }

      <Box className='flex flex-col border border-solid border-gray0 rounded-[1.25rem] w-full px-[4.5rem] py-10 mt-7'>
        <Box className='flex flex-row flex-wrap items-center'>
          <Box className='bg-accent2 rounded-full w-fit h-fit px-3 py-0.5'>
            <Typography className='text-white text-base font-bold'>소개글</Typography>
          </Box>

          <Typography className='text-black text-xl font-medium ml-5'>간단한 한 줄 자기소개를 적어주세요.</Typography>
          <Typography className='text-gray1 text-base font-medium ml-5'>50자 이내</Typography>
        </Box>

        <textarea
          name='introduction'
          placeholder='자기소개 입력'
          value={introduction}
          onChange={(e) => setIntroduction(e.target.value)}
          style={{ fontFamily: 'Spoqa Han Sans Neo' }}
          className='border border-solid border-accent2 rounded-[1.25rem] text-gray1 text-lg font-regular min-w-[100%] max-w-[100%] min-h-[90px] max-h-[90px] px-5 py-4 mt-5 focus:outline-none'
        />
      </Box>

      <Box className='flex w-full justify-end'>
        <Button onClick={onClick} className='bg-accent1 rounded-full px-10 py-3.5 mt-10'>
          <Typography className='text-white text-base font-medium'>완료</Typography>
        </Button>
      </Box>
    </Box>
  )
}