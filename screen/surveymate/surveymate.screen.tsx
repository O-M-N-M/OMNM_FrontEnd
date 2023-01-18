import { NextPage } from "next";
import { getCookie } from "cookies-next";
import Image from 'next/image';

import { useEffect, useState } from "react";
import axios from "axios";

import { Box, Button, createTheme, Modal, Typography, useMediaQuery } from "@mui/material";

import SurveyIcon from '../../public/signupSuccess.png';
import FirstComponent from "@/components/surveymate/first";
import SecondComponent from "@/components/surveymate/second";
import ThirdComponent from "@/components/surveymate/third";
import FourthComponent from "@/components/surveymate/fourth";
import FifthComponent from "@/components/surveymate/fifth";
import SixthComponent from "@/components/surveymate/sixth";
import SeventhComponent from "@/components/surveymate/seventh";
import EighthComponent from "@/components/surveymate/eighth";
import { ThemeProvider } from "@emotion/react";

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
  '선호하는 룸메이트의 나이를 선택해주세요.',
  '선호하는 룸메이트의 MBTI를 선택해주세요.',
  '선호하는 룸메이트의 흡연 여부를 선택해주세요.',
  '선호하는 룸메이트의 학과를 선택해주세요.',
  '선호하는 룸메이트의 생활패턴을 선택해주세요.',
  '선호하는 룸메이트의 방 청소 빈도를 선택해주세요.',
  '선호하는 룸메이트의 국적을 선택해주세요',
  '선호하는 룸메이트의 군복무 여부를 선택해주세요.',
];
const mobileQuestions = [
  '선호하는 룸메이트의 나이는?',
  '선호하는 룸메이트의 MBTI는?',
  '선호하는 룸메이트의 흡연 여부는?',
  '선호하는 룸메이트의 학과는?',
  '선호하는 룸메이트의 생활패턴은?',
  '선호하는 룸메이트의 방 청소 빈도는?',
  '선호하는 룸메이트의 국적은?',
  '선호하는 룸메이트의 군복무 여부는?',
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
  const [isMale, setIsMale] = useState<boolean>();
  const [open, setOpen] = useState<boolean>(false);
  const [isPatch, setIsPatch] = useState<boolean>(false);

  const [age, setAge] = useState<object>(initialAge);
  const [mbti, setMbti] = useState<object>(initialMbti);
  const [isSmoking, setIsSmoking] = useState<number | undefined>();
  const [department, setDepartment] = useState<number | undefined>();
  const [lifeCycle, setLifeCycle] = useState<number | undefined>();
  const [isCleaning, setIsCleaning] = useState<number | undefined>();
  const [nationality, setNationality] = useState<number | undefined>();
  const [armyService, setArmyService] = useState<number | undefined | null>();

  const isLabtop = useMediaQuery('(min-width: 1024px)');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

      const url = '/api/yourPersonality';
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

            setIsPatch(true);
          }
        });
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
            선호하는 룸메이트
            <Typography component='span' className='text-black labtop:text-4xl mobile:text-lg font-medium'>를 소개해주세요.</Typography>
          </Typography>
        </Box>
      </Box>

      {
        questions.map((v, index) => {
          return (
            (!isMale && index === 7) ? <></> :
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
                  (index === 0 && isPatch) ? <FirstComponent props={{ age: age, setAge: setAge, isPatch: true }} /> :
                    (index === 0 && !isPatch) ? <FirstComponent props={{ age: age, setAge: setAge, isPatch: false }} /> :
                      (index === 1 && isPatch) ? <SecondComponent props={{ mbti: mbti, setMbti: setMbti, isPatch: true }} /> :
                        (index === 1 && !isPatch) ? <SecondComponent props={{ mbti: mbti, setMbti: setMbti, isPatch: false }} /> :
                          (index === 2 && isPatch) ? <ThirdComponent props={{ isSmoking: isSmoking, setIsSmoking: setIsSmoking, isPatch: true }} /> :
                            (index === 2 && !isPatch) ? <ThirdComponent props={{ isSmoking: isSmoking, setIsSmoking: setIsSmoking, isPatch: false }} /> :
                              (index === 3 && isPatch) ? <FourthComponent props={{ department: department, setDepartment: setDepartment, isPatch: true }} /> :
                                (index === 3 && !isPatch) ? <FourthComponent props={{ department: department, setDepartment: setDepartment, isPatch: false }} /> :
                                  (index === 4 && isPatch) ? <FifthComponent props={{ lifeCycle: lifeCycle, setLifeCycle: setLifeCycle, isPatch: true }} /> :
                                    (index === 4 && !isPatch) ? <FifthComponent props={{ lifeCycle: lifeCycle, setLifeCycle: setLifeCycle, isPatch: false }} /> :
                                      (index === 5 && isPatch) ? <SixthComponent props={{ isCleaning: isCleaning, setIsCleaning: setIsCleaning, isPatch: true }} /> :
                                        (index === 5 && !isPatch) ? <SixthComponent props={{ isCleaning: isCleaning, setIsCleaning: setIsCleaning, isPatch: false }} /> :
                                          (index === 6 && isPatch) ? <SeventhComponent props={{ nationality: nationality, setNationality: setNationality, isPatch: true }} /> :
                                            (index === 6 && !isPatch) ? <SeventhComponent props={{ nationality: nationality, setNationality: setNationality, isPatch: false }} /> :
                                              (index === 7 && isPatch) ? <EighthComponent props={{ armyService: armyService, setArmyService: setArmyService, isPatch: true }} /> :
                                                (index === 7 && !isPatch) && <EighthComponent props={{ armyService: armyService, setArmyService: setArmyService, isPatch: false }} />
                }
              </Box>
          )
        })
      }

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
  );
};

