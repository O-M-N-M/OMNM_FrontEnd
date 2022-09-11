import { Box, Typography, Stepper, Step, StepLabel, Button } from "@mui/material";
import { NextPage } from "next";
import { v1 } from "uuid";
import { atom, useRecoilState } from 'recoil';
import Image from "next/image";
import logo from '../../public/logo.png';

import { AccountBox } from './account';

const steps = [
  '계정 생성',
  '이메일 인증',
  '프로필 작성'
];

const counter = atom({
  key: `myCounter${v1()}`,
  default: 0
});

export const SignUpScreen: NextPage = () => {
  const [activeStep, setActiveStep] = useRecoilState(counter);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  }

  return (
    <Box className="flex justify-center items-center min-h-screen">
      <Box className="flex flex-col items-center">
        <Image src={logo} width={75} height={75} />
        <Typography className="text-lg mt-4">회원가입</Typography>

        <form className="w-96 h-96 mt-4 shadow-[0_4px_20px_0_rgba(0,0,0,0.1)] p-10">
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>
                  <Typography className="text-xs">{label}</Typography>
                </StepLabel>
              </Step>
            ))}
          </Stepper>
          <Box>
            {activeStep === 0 ? (<Typography><AccountBox /></Typography>)
              : activeStep === 1 ? (<Typography>2</Typography>)
                : (<Typography>3</Typography>)}

            <Box className="flex justify-end">
              {activeStep !== 2 ?
                (<Button onClick={handleNext} className="bg-accent1 rounded-full text-white text-xs block w-24 p-2.5">
                  다음
                </Button>)
                :
                (<Button className="bg-accent1 rounded-full text-white text-xs block w-24 p-2.5">
                  완료
                </Button>)}
            </Box>
          </Box>
        </form>

        {/* <form className="shadow-[0_4px_20px_0_rgba(0,0,0,0.1)] rounded-lg p-14 mt-4">
          <Typography className="text-sm mt-4">아이디</Typography>
          <input type="text" placeholder="아이디 입력" className="rounded-full text-gray1 border border-gray2 ring-gray2 text-xs block w-60 p-2.5 mt-2" required />
          <Typography className="text-sm mt-4">학교 이메일</Typography>
          <input type="text" placeholder="학교 이메일 입력" className="rounded-full text-gray1 border border-gray2 ring-gray2 text-xs block w-60 p-2.5 mt-2" required />

          <Button className="bg-accent1 rounded-full text-white border border-gray2 text-sm block w-60 p-2.5 mt-6">확인</Button>
        </form> */}
      </Box>
    </Box>
  );
};
