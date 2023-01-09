import { NextPage } from "next";
import { getCookie } from "cookies-next";
import Image from 'next/image';

import { useEffect, useState } from "react";
import axios from "axios";

import { Box, Button, Typography } from "@mui/material";

import SurveyIcon from '../../public/Component10.png';
import FirstComponent from "@/components/surveymate/first";
import SecondComponent from "@/components/surveymate/second";
import ThirdComponent from "@/components/surveymate/third";
import FourthComponent from "@/components/surveymate/fourth";
import FifthComponent from "@/components/surveymate/fifth";
import SixthComponent from "@/components/surveymate/sixth";
import SeventhComponent from "@/components/surveymate/seventh";
import EighthComponent from "@/components/surveymate/eighth";


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

const initialAge = {
  '0': false, '1': false, '2': false, '3': false, '4': false
}
const initialMbti = {
  'ENFJ': false, 'ENFP': false, 'ENTJ': false, 'ENTP': false, 'ESFJ': false, 'ESFP': false, 'ESTJ': false, 'ESTP': false,
  'INFJ': false, 'INFP': false, 'INTJ': false, 'INTP': false, 'ISFJ': false, 'ISFP': false, 'ISTJ': false, 'ISTP': false,
  'ALL': false
}

export const SurveyMateScreen: NextPage = () => {
  const [tf, setTf] = useState(false);
  const [isMale, setIsMale] = useState<boolean>();

  const [age, setAge] = useState<object>(initialAge);
  const [mbti, setMbti] = useState<object>(initialMbti);
  const [isSmoking, setIsSmoking] = useState<number | undefined>();
  const [department, setDepartment] = useState<number | undefined>();
  const [lifeCycle, setLifeCycle] = useState<number | undefined>();
  const [isCleaning, setIsCleaning] = useState<number | undefined>();
  const [nationality, setNationality] = useState<number | undefined>();
  const [armyService, setArmyService] = useState<number | undefined | null>();

  const onClick = async () => {
    if (
      age === initialAge ||
      mbti === initialMbti ||
      typeof isSmoking === 'undefined' ||
      typeof department === 'undefined' ||
      typeof lifeCycle === 'undefined' ||
      typeof isCleaning === 'undefined' ||
      typeof nationality === 'undefined' ||
      typeof armyService === 'undefined'
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

      if (tf) {
        await axios.patch(url, data, headers)
          .then((res) => {
            if (res.data === '상대 성향 설문 수정 완료') {
              document.location = '/mypage_surveymate';
            }
          })
          .catch((err) => console.log(err));
      }
      else {
        await axios.post(url, data, headers)
          .then((res) => {
            if (res.data === '상대 성향 설문 등록 완료') {
              document.location = '/main';
            }
          });
      }
    }
  };

  useEffect(() => {
    const token = getCookie('OMNM');
    const headers = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        'OMNM': `${token}`
      }
    };

    const checkSurvey = async () => {
      const url = '/api/yourPersonality';

      await axios.get(url, headers)
        .then((res) => {
          if (res.data) {
            const arrAge = res.data.age.replace(/[{}]/g, '').split(',');
            setAge({
              '0': arrAge.includes('0'),
              '1': arrAge.includes('1'),
              '2': arrAge.includes('2'),
              '3': arrAge.includes('3'),
              '4': arrAge.includes('4')
            });

            const arrMbti = res.data.mbti.replace(/[{}]/g, '').split(',');
            setMbti({
              'ENFJ': arrMbti.includes('ENFJ'), 'ENFP': arrMbti.includes('ENFP'),
              'ENTJ': arrMbti.includes('ENTJ'), 'ENTP': arrMbti.includes('ENTP'),
              'ESFJ': arrMbti.includes('ESFJ'), 'ESFP': arrMbti.includes('ESFP'),
              'ESTJ': arrMbti.includes('ESTJ'), 'ESTP': arrMbti.includes('ESTP'),
              'INFJ': arrMbti.includes('INFJ'), 'INFP': arrMbti.includes('INFP'),
              'INTJ': arrMbti.includes('INTJ'), 'INTP': arrMbti.includes('INTP'),
              'ISFJ': arrMbti.includes('ISFJ'), 'ISFP': arrMbti.includes('ISFP'),
              'ISTJ': arrMbti.includes('ISTJ'), 'ISTP': arrMbti.includes('ISTP'),
              'ALL': arrMbti.includes('ALL')
            });

            setIsSmoking(+res.data.isSmoking);
            setDepartment(+res.data.department);
            setLifeCycle(+res.data.lifeCycle);
            setIsCleaning(+res.data.cleaning);
            setNationality(+res.data.nationality);

            setArmyService(res.data.armyService === null ? 1 : +res.data.armyService);

            setTf(true);
          }
        });
    };

    const checkIsMale = async () => {
      const url = '/api/myInfo/isMale';

      await axios.get(url, headers)
        .then((res) => setIsMale(res.data))
        .catch((err) => console.log(err));
    }

    checkSurvey();
    checkIsMale();
  }, [])

  return (
    <Box className='w-full h-fit min-h-[calc(100vh-70px)] px-[15%] my-[5%]'>
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
            (!isMale && index === 7) ? <></> :
              <Box key={index} className='flex flex-row flex-wrap items-center border border-solid border-gray0 rounded-[1.25rem] w-full px-[4.5rem] py-10 mt-7'>
                <Box className='bg-accent2 rounded-full w-fit h-fit px-3 py-0.5'>
                  <Typography className='text-white text-base font-bold'>문항 {index + 1}</Typography>
                </Box>

                <Typography className='text-black text-xl font-medium ml-5'>{v}</Typography>
                <Typography className='text-gray1 text-base font-medium ml-5'>{infos[index]}</Typography>

                {
                  (index === 0 && tf) ? <FirstComponent props={{ age: age, setAge: setAge, tf: true }} /> :
                    (index === 0 && !tf) ? <FirstComponent props={{ age: age, setAge: setAge, tf: false }} /> :
                      (index === 1 && tf) ? <SecondComponent props={{ mbti: mbti, setMbti: setMbti, tf: true }} /> :
                        (index === 1 && !tf) ? <SecondComponent props={{ mbti: mbti, setMbti: setMbti, tf: false }} /> :
                          (index === 2 && tf) ? <ThirdComponent props={{ isSmoking: isSmoking, setIsSmoking: setIsSmoking, tf: true }} /> :
                            (index === 2 && !tf) ? <ThirdComponent props={{ isSmoking: isSmoking, setIsSmoking: setIsSmoking, tf: false }} /> :
                              (index === 3 && tf) ? <FourthComponent props={{ department: department, setDepartment: setDepartment, tf: true }} /> :
                                (index === 3 && !tf) ? <FourthComponent props={{ department: department, setDepartment: setDepartment, tf: false }} /> :
                                  (index === 4 && tf) ? <FifthComponent props={{ lifeCycle: lifeCycle, setLifeCycle: setLifeCycle, tf: true }} /> :
                                    (index === 4 && !tf) ? <FifthComponent props={{ lifeCycle: lifeCycle, setLifeCycle: setLifeCycle, tf: false }} /> :
                                      (index === 5 && tf) ? <SixthComponent props={{ isCleaning: isCleaning, setIsCleaning: setIsCleaning, tf: true }} /> :
                                        (index === 5 && !tf) ? <SixthComponent props={{ isCleaning: isCleaning, setIsCleaning: setIsCleaning, tf: false }} /> :
                                          (index === 6 && tf) ? <SeventhComponent props={{ nationality: nationality, setNationality: setNationality, tf: true }} /> :
                                            (index === 6 && !tf) ? <SeventhComponent props={{ nationality: nationality, setNationality: setNationality, tf: false }} /> :
                                              (index === 7 && tf) ? <EighthComponent props={{ armyService: armyService, setArmyService: setArmyService, tf: true }} /> :
                                                (index === 7 && !tf) && <EighthComponent props={{ armyService: armyService, setArmyService: setArmyService, tf: false }} />
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

