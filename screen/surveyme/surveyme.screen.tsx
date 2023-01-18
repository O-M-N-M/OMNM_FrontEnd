import { NextPage } from "next";
import { getCookie } from "cookies-next";
import Image from 'next/image';

import { useEffect, useState } from "react";
import axios from "axios";

import { Box, Button, createTheme, Modal, ThemeProvider, Typography, useMediaQuery } from "@mui/material";

import SurveyIcon from '../../public/signupSuccess.png';
import FirstComponent from "@/components/surveyme/first";
import SecondComponent from "@/components/surveyme/second";
import ThirdComponent from "@/components/surveyme/third";
import FourthComponent from "@/components/surveyme/fourth";
import FifthComponent from "@/components/surveyme/fifth";
import SixthComponent from "@/components/surveyme/sixth";
import SeventhComponent from "@/components/surveyme/seventh";
import EighthComponent from "@/components/surveyme/eighth";
import NinethComponent from "@/components/surveyme/nineth";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1024,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: [
      'Spoqa Han Sans Neo'
    ].join(',')
  }
});

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
const mobileQuestions = [
  '당신의 나이는?',
  '당신의 MBTI는?',
  '당신의 흡연 여부는?',
  '당신의 학과는?',
  '당신의 생활 패턴은?',
  '당신의 수면 패턴은?',
  '당신의 방 청소 빈도는?',
  '당신의 국적은?',
  '당신의 군복무 여부는?',
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
  const [isPatch, setIsPatch] = useState<boolean>(false);
  const [isMale, setIsMale] = useState<boolean>();
  const [open, setOpen] = useState<boolean>(false);
  const [isNext, setIsNext] = useState<boolean>(false);

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

  const isLabtop = useMediaQuery('(min-width: 1024px)');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

      if (isPatch) {
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

            setIsCleaning(+res.data.cleaning);
            setNationality(+res.data.nationality);
            setIntroduction(res.data.introduction);

            setArmyService(res.data.armyService === null ? 1 : +res.data.armyService);

            setIsPatch(true);
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
    <Box className='w-full h-fit min-h-[calc(100vh-70px)] labtop:px-[15%] mobile:px-[5%] my-[5%]'>
      <Box className='flex flex-row items-center mb-3'>
        {
          isLabtop ?
            <Image src={SurveyIcon} width={68} height={68} /> :
            <Image src={SurveyIcon} width={42} height={42} />
        }

        <Box className='flex flex-col labtop:ml-5 mobile:ml-2'>
          <Typography className='text-black labtop:text-xl mobile:text-xs font-regular'>딱 맞는 룸메이트 찾기를 위한 성향 조사</Typography>
          <Typography className='text-accent1 labtop:text-4xl mobile:text-lg font-medium'>
            당신
            <Typography component='span' className='text-black labtop:text-4xl mobile:text-lg font-medium'>을 소개해주세요.</Typography>
          </Typography>
        </Box>
      </Box>

      {
        questions.map((v, index) => {
          return (
            (!isMale && index === 8) ? <></> :
              <Box key={index} className='flex flex-row flex-wrap items-center border border-solid border-gray0 rounded-[1.25rem] w-full labtop:px-[4.5rem] mobile:px-3 labtop:py-10 mobile:py-5 labtop:mt-7 mobile:mt-4'>
                <Box className='bg-accent2 rounded-full w-fit h-fit labtop:px-3 mobile:px-2 py-0.5'>
                  {
                    isLabtop ?
                      <Typography className='text-white text-base font-bold'>문항 {index + 1}</Typography> :
                      <Typography className='text-white text-xs font-bold'>{index + 1}</Typography>
                  }
                </Box>

                {
                  isLabtop ?
                    <Typography className='text-black text-xl font-medium ml-5'>{v}</Typography> :
                    <Typography className='text-black text-base font-medium ml-2'>{mobileQuestions[index]}</Typography>
                }
                <Typography className='text-gray1 labtop:text-base mobile:text-xs font-medium labtop:ml-5 mobile:ml-2'>{infos[index]}</Typography>

                {
                  index === 0 ? <FirstComponent props={{ age: age, setAge: setAge }} /> :
                    index === 1 ? <SecondComponent props={{ mbti: mbti, setMbti: setMbti }} /> :
                      (index === 2 && isPatch) ? <ThirdComponent props={{ isSmoking: isSmoking, setIsSmoking: setIsSmoking, isPatch: true }} /> :
                        (index === 2 && !isPatch) ? <ThirdComponent props={{ isSmoking: isSmoking, setIsSmoking: setIsSmoking, isPatch: false }} /> :
                          index === 3 ? <FourthComponent props={{ department: department, setDepartment: setDepartment }} /> :
                            (index === 4 && isPatch) ? <FifthComponent props={{ lifeCycle: lifeCycle, setLifeCycle: setLifeCycle, isPatch: true }} /> :
                              (index === 4 && !isPatch) ? <FifthComponent props={{ lifeCycle: lifeCycle, setLifeCycle: setLifeCycle, isPatch: false }} /> :
                                (index === 5 && isPatch) ? <SixthComponent props={{ sleepingPattern: sleepingPattern, setSleepingPattern: setSleepingPattern, isPatch: true }} /> :
                                  (index === 5 && !isPatch) ? <SixthComponent props={{ sleepingPattern: sleepingPattern, setSleepingPattern: setSleepingPattern, isPatch: false }} /> :
                                    (index === 6 && isPatch) ? <SeventhComponent props={{ isCleaning: isCleaning, setIsCleaning: setIsCleaning, isPatch: true }} /> :
                                      (index === 6 && !isPatch) ? <SeventhComponent props={{ isCleaning: isCleaning, setIsCleaning: setIsCleaning, isPatch: false }} /> :
                                        (index === 7 && isPatch) ? <EighthComponent props={{ nationality: nationality, setNationality: setNationality, isPatch: true }} /> :
                                          (index === 7 && !isPatch) ? <EighthComponent props={{ nationality: nationality, setNationality: setNationality, isPatch: false }} /> :
                                            (index === 8 && isPatch) ? <NinethComponent props={{ armyService: armyService, setArmyService: setArmyService, isPatch: true }} /> :
                                              (index === 8 && !isPatch) && <NinethComponent props={{ armyService: armyService, setArmyService: setArmyService, isPatch: false }} />
                }
              </Box>
          )
        })
      }

      <Box className='flex flex-col border border-solid border-gray0 rounded-[1.25rem] w-full labtop:px-[4.5rem] mobile:px-3 labtop:py-10 mobile:py-5 labtop:mt-7 mobile:mt-4'>
        <Box className='flex flex-row flex-wrap items-center'>
          <Box className='bg-accent2 rounded-full w-fit h-fit labtop:px-3 mobile:px-2 py-0.5'>
            {
              isLabtop ? <Typography className='text-white text-base font-bold'>소개글</Typography> :
                isMale ? <Typography className='text-white text-xs font-bold'>10</Typography> :
                  <Typography className='text-white text-xs font-bold'>9</Typography>
            }
          </Box>

          {
            isLabtop ?
              <Typography className='text-black text-xl font-medium ml-5'>간단한 한 줄 자기소개를 적어주세요.</Typography> :
              <Typography className='text-black text-base font-medium ml-2'>한 줄 자기 소개</Typography>
          }
          <Typography className='text-gray1 labtop:text-base mobile:text-xs font-medium labtop:ml-5 mobile:ml-2'>50자 이내</Typography>
        </Box>

        <textarea
          name='introduction'
          placeholder='자기소개 입력'
          value={introduction}
          maxLength={50}
          onChange={(e) => setIntroduction(e.target.value)}
          style={{ fontFamily: 'Spoqa Han Sans Neo' }}
          className='border border-solid border-accent2 rounded-[1.25rem] text-gray1 labtop:text-lg mobile:text-base font-regular min-w-[100%] max-w-[100%] min-h-[90px] max-h-[90px] px-5 py-4 labtop:mt-5 mobile:mt-2 focus:outline-none'
        />
      </Box>

      <Box className='flex w-full justify-end'>
        {
          isPatch ? (
            <Button onClick={handleOpen} className='bg-accent1 rounded-full px-10 py-3.5 mt-10'>
              <Typography className='text-white text-base font-medium'>완료</Typography>
            </Button>
          ) : (
            <Button onClick={onClick} className='bg-accent1 rounded-full px-10 py-3.5 mt-10'>
              <Typography className='text-white text-base font-medium'>완료</Typography>
            </Button>
          )
        }
      </Box>

      {
        open &&
        <Modal
          open={open}
          onClose={handleClose}
        >
          <ThemeProvider theme={theme}>
            <Box sx={{ position: 'absolute', backgroundColor: 'white', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', borderRadius: '10px', width: '30%', minWidth: { xs: '355px', md: '530px' }, height: '20%', minHeight: '220px', outline: 'none' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }} >
                <Typography sx={{ color: '#383838', fontSize: '18px', fontWeight: '400' }}>설문조사 수정을 완료하였습니다</Typography>
                <Button onClick={onClick} sx={{ backgroundColor: '#4B99EB !important', borderRadius: '200px', paddingX: '37px', paddingY: '11px', marginTop: '24px' }}>
                  <Typography sx={{ color: 'white', fontSize: '14px', fontWeight: '500', textAlign: 'center' }}>확인</Typography>
                </Button>
              </Box>
            </Box>
          </ThemeProvider>
        </Modal>
      }
    </Box>
  )
}