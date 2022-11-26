import { Box, Typography, Stepper, Step, StepLabel, Button } from "@mui/material";
import { useState } from "react";
import { NextPage } from "next";

import Image from "next/image";
import logo from '../../public/logo.png';
import signupSuccess from '../../public/signupSuccess.png';

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
  const [gender, setGender] = useState(0);
  const [kakao, setKakao] = useState('');
  const [dormitory, setDormitory] = useState(0);

  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);

  const handleNext = () => {
    let pwReg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,12}$/;

    if (activeStep === 0 && !one) alert('아이디 중복확인을 해주세요');
    else if (activeStep === 0 && !pwReg.test(pw)) alert('올바른 비밀번호가 아닙니다.');
    else if (activeStep === 0 && pw !== pwCheck) alert('비밀번호가 같지 않습니다.');

    else if (activeStep === 1 && !two) alert('이메일 인증을 완료해주세요');
    else setActiveStep(activeStep + 1);
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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

    formData.forEach((v) => {
      console.log(v)
    })

    const url = '/api/join';
    const headers = { headers: { 'Content-Type': 'multipart/form-data' } };

    await axios.post(url, formData, headers)
      .then(res => {
        if (res.data === '회원가입 완료') {
          setThree(true);
        } else {
          alert('회원가입 실패');
        }
      }).catch(err => console.error(err))
  }

  return (
    <Box className="flex justify-center items-center min-h-screen">
      <Box className="flex flex-col items-center">
        <Image src={logo} width={75} height={75} />
        <Typography className="text-lg mt-4">회원가입</Typography>

        <Box className="border border-solid border-gray0 rounded-lg pt-14 pr-14 pl-14 pb-10 mt-8 w-full">
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>
                  <Typography className="text-xs">{label}</Typography>
                </StepLabel>
              </Step>
            ))}
          </Stepper>

          {
            activeStep === 0 ? (<AccountBox id={id} setId={setId} pw={pw} setPw={setPw} pwCheck={pwCheck} setPwCheck={setPwCheck} pass={one} setPass={setOne} />) :
              activeStep === 1 ? (<EmailBox school={school} setSchool={setSchool} email={email} setEmail={setEmail} pass={two} setPass={setTwo} />) :
                (<ProfileBox image={image} setImage={setImage} name={name} setName={setName} gender={gender} setGender={setGender} kakao={kakao} setKakao={setKakao} dormitory={dormitory} setDormitory={setDormitory} />)
          }

          <Box className="flex justify-end mt-8">
            {activeStep !== 2 ?
              (<Button onClick={handleNext} className="bg-accent1 rounded-full text-white text-xs block w-20 p-2.5">
                다음
              </Button>)
              :
              (
                <form onSubmit={onSubmit} >
                  <Button type="submit" className="bg-accent1 rounded-full text-white text-xs block w-20 p-2.5">
                    완료
                  </Button>
                </form>
              )
            }
          </Box>
        </Box>

        {
          three === true ?
            <Box className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded border border-solid border-gray0 pt-5 p-10 w-[27rem]">
              <Box className="text-center">
                <Image width={76} height={70} src={signupSuccess} />
              </Box>

              <Box className="flex justify-center items-center mt-2">
                <Typography className="text-2xl font-medium text-black">회원가입</Typography>
                <Typography className="text-2xl font-regular text-black">이</Typography>
                <Typography className="text-2xl font-medium text-black">&nbsp;완료</Typography>
                <Typography className="text-2xl font-regular text-black">되었습니다.</Typography>
              </Box>

              <Box className="text-center mt-4">
                <Typography className="text-xs text-black">{name}님 회원가입을 축하합니다.</Typography>
                <Typography className="text-xs text-black">로그인한 후 룸메 찾기를 위한 설문조사를 진행해주세요.</Typography>
              </Box>

              <Button className="bg-accent1 rounded-full text-white text-xs block w-20 p-2.5">로그인</Button>
            </Box>
            : <></>
        }
      </Box>
    </Box>
  );
};