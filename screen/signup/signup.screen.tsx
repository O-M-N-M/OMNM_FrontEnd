import { Box, Typography, Stepper, Step, StepLabel, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { NextPage } from "next";

import Image from "next/image";
import logo from '../../public/logo.png';

import { AccountBox } from './account';
import { EmailBox } from './email';
import { ProfileBox } from './profile';

import axios from "axios";

const steps = [
  '계정 생성',
  '이메일 인증',
  '프로필 작성'
];

export const SignUpScreen: NextPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [pwCheck, setPwCheck] = useState('');
  const [school, setSchool] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [name, setName] = useState('');
  const [gender, setGender] = useState(-1);
  const [kakao, setKakao] = useState('');
  const [dormitory, setDormitory] = useState(-1);
  const [isAgree, setIsAgree] = useState(false);

  const [one, setOne] = useState(false);
  const [two, setTwo] = useState<boolean | number>(-1);
  const [three, setThree] = useState(false);

  const handleNext = () => {
    let pwReg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,12}$/;

    if (activeStep === 0 && !isAgree) alert('개인정보 수집 및 이용 동의를 선택해주세요');
    else if (activeStep === 0 && !one) alert('아이디 중복확인을 해주세요');
    else if (activeStep === 0 && !pwReg.test(pw)) alert('올바른 비밀번호가 아닙니다');
    else if (activeStep === 0 && pw !== pwCheck) alert('비밀번호가 같지 않습니다');

    else if (activeStep === 1 && (!two || two === -1)) alert('이메일 인증을 완료해주세요');
    else setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name === '') alert('이름을 입력해주세요.');
    else if (gender === -1) alert('성별을 선택해주세요.');
    else if (kakao === '') alert('카카오톡 아이디를 입력해주세요.');
    else if (dormitory === -1) alert('기숙사를 선택해주세요.');
    else {
      const formData = new FormData();
      const userDto = {
        loginId: `${id}`,
        password: `${pw}`,
        name: `${name}`,
        email: `${email}@cau.ac.kr`,
        school: `${school}`,
        gender: gender,
        kakaoId: `${kakao}`,
        dormitory: dormitory
      };

      if (image !== null) {
        formData.append('file', image);
      }
      formData.append(
        'key',
        new Blob([JSON.stringify(userDto)],
          { type: "application/json" }
        )
      );

      const url = '/api/join';
      const headers = { headers: { 'Content-Type': 'multipart/form-data' } };

      await axios.post(url, formData, headers)
        .then(res => {
          if (res.data === '회원가입 완료') {
            setThree(true);
          } else {
            alert('회원가입 실패');
          }
        }).catch(err => console.error(err));
    }
  }

  useEffect(() => {
    if (three) document.location = '/signup_success';
  }, [three]);

  return (
    <Box className="flex justify-center items-center min-h-[calc(100vh-70px)]">
      <Box className="flex flex-col items-center my-[5%]">
        <Image src={logo} width={60} height={61} />
        <Typography className="text-black text-2xl font-medium mt-5">회원가입</Typography>

        <Box className="border border-solid border-gray0 rounded-2xl labtop:w-full mobile:w-[355px] labtop:px-20 mobile:px-3 py-14 mt-6">
          <Stepper activeStep={activeStep} alternativeLabel>
            {
              steps.map((label) => (
                <Step key={label}>
                  <StepLabel>
                    <Typography className="text-black text-xs font-medium">{label}</Typography>
                  </StepLabel>
                </Step>
              ))
            }
          </Stepper>

          {
            activeStep === 0 ? (<AccountBox id={id} setId={setId} pw={pw} setPw={setPw} pwCheck={pwCheck} setPwCheck={setPwCheck} isAgree={isAgree} setIsAgree={setIsAgree} pass={one} setPass={setOne} />) :
              activeStep === 1 ? (<EmailBox school={school} setSchool={setSchool} email={email} setEmail={setEmail} pass={two} setPass={setTwo} />) :
                (<ProfileBox image={image} setImage={setImage} name={name} setName={setName} gender={gender} setGender={setGender} kakao={kakao} setKakao={setKakao} dormitory={dormitory} setDormitory={setDormitory} />)
          }
          <Box className='flex flex-row w-full'>
            {
              activeStep !== 0 && (
                <Box className='mt-10'>
                  <Button onClick={handleBack} className='bg-gray1 rounded-full text-white text-base font-medium block px-8 py-3.5'>이전</Button>
                </Box>
              )
            }

            <Box className="ml-auto mt-10">
              {activeStep !== 2 ?
                (<Button onClick={handleNext} className="bg-accent1 rounded-full text-white text-base font-medium block px-8 py-3.5">
                  다음
                </Button>)
                :
                (
                  <form onSubmit={onSubmit} >
                    <Button type="submit" className="bg-accent1 rounded-full text-white text-base font-medium block px-8 py-3.5">
                      완료
                    </Button>
                  </form>
                )
              }
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};