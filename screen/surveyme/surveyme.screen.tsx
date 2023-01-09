import { NextPage } from "next";
import { getCookie } from "cookies-next";
import Image from 'next/image';

import { useEffect, useState } from "react";
import axios from "axios";

import { Box, Button, Typography } from "@mui/material";

import SurveyIcon from '../../public/Component10.png';
import FirstComponent from "@/components/surveyme/first";
import SecondComponent from "@/components/surveyme/second";
import ThirdComponent from "@/components/surveyme/third";
import FourthComponent from "@/components/surveyme/fourth";
import FifthComponent from "@/components/surveyme/fifth";
import SixthComponent from "@/components/surveyme/sixth";
import SeventhComponent from "@/components/surveyme/seventh";
import EighthComponent from "@/components/surveyme/eighth";
import NinethComponent from "@/components/surveyme/nineth";

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

const initialSleepingPattern = {
  '0': false, '1': false, '2': false, '3': false
}

export const SurveyMeScreen: NextPage = () => {
  const [tf, setTf] = useState(false);
  const [isNext, setIsNext] = useState(false);
  const [isMale, setIsMale] = useState<boolean>();

  const [age, setAge] = useState<number | string>();
  const [mbti, setMbti] = useState<string | undefined>('');
  const [isSmoking, setIsSmoking] = useState<number | undefined>();
  const [department, setDepartment] = useState<string>('');
  const [lifeCycle, setLifeCycle] = useState<number | undefined>();
  const [sleepingPattern, setSleepingPattern] = useState<object>(initialSleepingPattern);
  const [isCleaning, setIsCleaning] = useState<number | undefined>();
  const [nationality, setNationality] = useState<number | undefined>();
  const [armyService, setArmyService] = useState<number | undefined | null>();
  const [introduction, setIntroduction] = useState<string | undefined>('');

  const onClick = async () => {
    if (
      sleepingPattern === initialSleepingPattern ||
      mbti === '' ||
      department === '' ||
      introduction === '' ||
      typeof age === 'undefined' ||
      typeof isSmoking === 'undefined' ||
      typeof lifeCycle === 'undefined' ||
      typeof isCleaning === 'undefined' ||
      typeof nationality === 'undefined' ||
      typeof armyService === 'undefined'
    ) alert('모두 선택해주세요');

    else {
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

      if (tf) {
        await axios.patch(url, data, headers)
          .then((res) => {
            if (res.data === '나의 성향 설문 수정 완료') {
              if (isNext) document.location = '/mypage_surveyme';
              else document.location = '/surveymate';
            }
          })
          .catch((err) => console.log(err));
      }
      else {
        await axios.post(url, data, headers)
          .then((res) => {
            if (res.data === '나의 성향 설문 등록 완료') {
              document.location = '/surveymate';
            }
          })
          .catch((err) => console.log(err));
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
      const url = '/api/myPersonality';

      await axios.get(url, headers)
        .then((res) => {
          if (res.data) {
            setAge(res.data.age);
            setMbti(res.data.mbti);
            setIsSmoking(+res.data.isSmoking);
            setDepartment(res.data.department);
            setLifeCycle(+res.data.lifeCycle);

            const arrSp = res.data.sleepingPattern.replace(/[{}]/g, '').split(',');
            setSleepingPattern({
              '0': arrSp.includes('0'),
              '1': arrSp.includes('1'),
              '2': arrSp.includes('2'),
              '3': arrSp.includes('3'),
            })

            console.log('처음 보내는', sleepingPattern);
            setIsCleaning(+res.data.cleaning);
            setNationality(+res.data.nationality);
            setIntroduction(res.data.introduction);

            setArmyService(res.data.armyService === null ? 1 : +res.data.armyService);

            setTf(true);
          }
        });
    };

    const checkNextSurvey = async () => {
      const url = '/api/yourPersonality';
      const headers = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          'OMNM': `${token}`
        }
      };

      await axios.get(url, headers)
        .then((res) => {
          if (Object.keys(res.data).length !== 0) setIsNext(true);
          else setIsNext(false);
        })
        .catch((err) => console.log(err));
    };

    const checkIsMale = async () => {
      const url = '/api/myInfo/isMale';

      await axios.get(url, headers)
        .then((res) => {
          setIsMale(res.data);
          setArmyService(1);
        })
        .catch((err) => console.log(err));
    }

    checkNextSurvey();
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
            당신
            <Typography component='span' className='text-black text-4xl font-medium'>을 소개해주세요.</Typography>
          </Typography>
        </Box>
      </Box>

      {
        questions.map((v, index) => {
          return (
            (!isMale && index === 8) ? <></> :
              <Box key={index} className='flex flex-row flex-wrap items-center border border-solid border-gray0 rounded-[1.25rem] w-full px-[4.5rem] py-10 mt-7'>
                <Box className='bg-accent2 rounded-full w-fit h-fit px-3 py-0.5'>
                  <Typography className='text-white text-base font-bold'>문항 {index + 1}</Typography>
                </Box>

                <Typography className='text-black text-xl font-medium ml-5'>{v}</Typography>
                <Typography className='text-gray1 text-base font-medium ml-5'>{infos[index]}</Typography>

                {
                  index === 0 ? <FirstComponent props={{ age: age, setAge: setAge }} /> :
                    index === 1 ? <SecondComponent props={{ mbti: mbti, setMbti: setMbti }} /> :
                      (index === 2 && tf) ? <ThirdComponent props={{ isSmoking: isSmoking, setIsSmoking: setIsSmoking, tf: true }} /> :
                        (index === 2 && !tf) ? <ThirdComponent props={{ isSmoking: isSmoking, setIsSmoking: setIsSmoking, tf: false }} /> :
                          index === 3 ? <FourthComponent props={{ department: department, setDepartment: setDepartment }} /> :
                            (index === 4 && tf) ? <FifthComponent props={{ lifeCycle: lifeCycle, setLifeCycle: setLifeCycle, tf: true }} /> :
                              (index === 4 && !tf) ? <FifthComponent props={{ lifeCycle: lifeCycle, setLifeCycle: setLifeCycle, tf: false }} /> :
                                (index === 5 && tf) ? <SixthComponent props={{ sleepingPattern: sleepingPattern, setSleepingPattern: setSleepingPattern, tf: true }} /> :
                                  (index === 5 && !tf) ? <SixthComponent props={{ sleepingPattern: sleepingPattern, setSleepingPattern: setSleepingPattern, tf: false }} /> :
                                    (index === 6 && tf) ? <SeventhComponent props={{ isCleaning: isCleaning, setIsCleaning: setIsCleaning, tf: true }} /> :
                                      (index === 6 && !tf) ? <SeventhComponent props={{ isCleaning: isCleaning, setIsCleaning: setIsCleaning, tf: false }} /> :
                                        (index === 7 && tf) ? <EighthComponent props={{ nationality: nationality, setNationality: setNationality, tf: true }} /> :
                                          (index === 7 && !tf) ? <EighthComponent props={{ nationality: nationality, setNationality: setNationality, tf: false }} /> :
                                            (index === 8 && tf) ? <NinethComponent props={{ armyService: armyService, setArmyService: setArmyService, tf: true }} /> :
                                              (index === 8 && !tf) && <NinethComponent props={{ armyService: armyService, setArmyService: setArmyService, tf: false }} />
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