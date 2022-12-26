import { NextPage } from "next";
import Image from 'next/image';
import { getCookie } from "cookies-next";

import { Box, Button, Typography } from "@mui/material";

import SurveyIcon from '../../public/Component10.png';
import FirstComponent from "@/components/surveymate/first";
import SecondComponent from "@/components/surveymate/second";
// import ThirdComponent from "@/components/surveymate/third";
// import FourthComponent from "@/components/surveymate/fourth";
// import FifthComponent from "@/components/surveymate/fifth";
// import SixthComponent from "@/components/surveymate/sixth";
// import SeventhComponent from "@/components/surveymate/seventh";
// import EighthComponent from "@/components/surveymate/eighth";

import { useState } from "react";
import axios from "axios";

const questions = [
  '선호하는 룸메의 나이를 선택해주세요.',
  '선호하는 룸메의 MBTI를 선택해주세요.',
  '선호하는 룸메의 흡연 여부를 선택해주세요.',
  '선호하는 룸메의 학과를 선택해주세요.',
  '선호하는 룸메의 생활패턴을 선택해주세요.',
  '선호하는 룸메의 방 청소 빈도를 선택해주세요.',
  '선호하는 룸메의 국적을 선택해주세요',
  '선호하는 룸메의 군복무 여부를 선택해주세요.',
];
const infos = [
  '중복 선택 가능',
  '중복 선택 가능',
  '',
  '',
  '',
  '',
  '',
  '여성일 경우 미필 선택'
];

type mbtiType = {
  'ENFJ': boolean, 'ENFP': boolean, 'ENTJ': boolean, 'ENTP': boolean, 'ESFJ': boolean, 'ESFP': boolean, 'ESTJ': boolean, 'ESTP': boolean,
  'INFJ': boolean, 'INFP': boolean, 'INTJ': boolean, 'INTP': boolean, 'ISFJ': boolean, 'ISFP': boolean, 'ISTJ': boolean, 'ISTP': boolean,
  'ALL': boolean
}

type ageType = {
  '0': boolean, '1': boolean, '2': boolean, '3': boolean, '4': boolean
}
const initialAge = {
  '0': false, '1': false, '2': false, '3': false, '4': false
}
const initialMbti = {
  'ENFJ': false, 'ENFP': false, 'ENTJ': false, 'ENTP': false, 'ESFJ': false, 'ESFP': false, 'ESTJ': false, 'ESTP': false,
  'INFJ': false, 'INFP': false, 'INTJ': false, 'INTP': false, 'ISFJ': false, 'ISFP': false, 'ISTJ': false, 'ISTP': false,
  'ALL': false
}

export const SurveyMateScreen: NextPage = () => {
  const [age, setAge] = useState<ageType>(initialAge);
  const [mbti, setMbti] = useState<mbtiType>(initialMbti);
  const [isSmoking, setIsSmoking] = useState<number | undefined>(-1);
  const [department, setDepartment] = useState<number | undefined>(-1);
  const [lifeCycle, setLifeCycle] = useState<number | undefined>(-1);
  const [isCleaning, setIsCleaning] = useState<number | undefined>(-1);
  const [nationality, setNationality] = useState<number | undefined>(-1);
  const [armyService, setArmyService] = useState<number | undefined>(-1);

  const onClick = async () => {
    if (
      age === initialAge ||
      mbti === initialMbti ||
      isSmoking === -1 ||
      department === -1 ||
      lifeCycle === -1 ||
      isCleaning === -1 ||
      nationality === -1 ||
      armyService === -1
    ) alert('모두 선택해주세요.');

    else {
      const selectedAge = `{${Object.keys(age).filter((v) => age[v as keyof typeof age]).join(',')}}`;
      const selectedMbti = `{${Object.keys(mbti).filter((v) => mbti[v as keyof typeof mbti]).join(',')}}`;
      const data = {
        age: selectedAge,
        mbti: selectedMbti,
        isSmoking: isSmoking,
        department: department,
        lifeCycle: lifeCycle,
        cleaning: isCleaning,
        nationality: nationality,
        armyService: armyService
      }

      const formData = new FormData();
      formData.append(
        'data',
        new Blob([JSON.stringify(data)],
          { type: "application/json" }
        )
      )

      const url = '/api/yourPersonality';
      const token = getCookie('OMNM');
      const headers = {
        headers: {
          "Content-Type": "multipart/form-data",
          'OMNM': `${token}`
        }
      };

      await axios.post(url, data, headers)
        .then((res) => console.log(res.data));
    }
  };

  return (
    <Box className='w-full h-fit min-h-[calc(100vh-50px)] px-[15%] my-[5%]'>
      <Box className='flex flex-row items-center mb-3'>
        <Image src={SurveyIcon} width={57} height={72} />

        <Box className='flex flex-col ml-5'>
          <Typography className='text-black text-xl font-regular'>딱 맞는 룸메 찾기를 위한 성향 조사</Typography>
          <Typography className='text-accent1 text-4xl font-medium'>
            선호하는 룸메
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
                  index === 1 ? <SecondComponent props={{ mbti: mbti, setMbti: setMbti }} /> : <></>
                //   index === 2 ? <ThirdComponent props={{ isSmoking: isSmoking, setIsSmoking: setIsSmoking }} /> :
                //     index === 3 ? <FourthComponent props={{ department: department, setDepartment: setDepartment }} /> :
                //       index === 4 ? <FifthComponent props={{ lifeCycle: lifeCycle, setLifeCycle: setLifeCycle }} /> :
                //         index === 5 ? <SixthComponent props={{ isCleaning: isCleaning, setIsCleaning: setIsCleaning }} /> :
                //           index === 6 ? <SeventhComponent props={{ nationality: nationality, setNationality: setNationality }} /> :
                //             index === 7 && <EighthComponent props={{ armyService: armyService, setArmyService: setArmyService }} />
              }
            </Box>
          )
        })
      }

      <Box className='flex w-full justify-end'>
        <Button onClick={onClick} className='bg-accent1 rounded-full px-10 py-3.5 mt-10'>
          <Typography className='text-white text-base font-medium'>완료</Typography>
        </Button>
      </Box>
    </Box>
  );
};

