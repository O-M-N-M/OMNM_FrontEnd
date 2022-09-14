import { Box, Typography, Stepper, Step, StepLabel, Button } from "@mui/material";
import { NextPage } from "next";
import Image from "next/image";
import logo from '../../public/logo.png';

import { AccountBox } from './account';
import { EmailBox } from './email';
import { useState } from "react";

const steps = [
  '계정 생성',
  '이메일 인증',
  '프로필 작성'
];

export const SignUpScreen: NextPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [school, setSchool] = useState('');
  const [email, setEmail] = useState('');

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  }

  return (
    <Box className="flex justify-center items-center min-h-screen">
      <Box className="flex flex-col items-center">
        <Image src={logo} width={75} height={75} />
        <Typography className="text-lg mt-4 font-sans">회원가입</Typography>

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
            activeStep === 0 ? (<AccountBox id={id} setId={setId} pw={pw} setPw={setPw} />) :
              activeStep === 1 ? (<EmailBox school={school} setSchool={setSchool} email={email} setEmail={setEmail} />) :
                (<Typography>3</Typography>)
          }

          <Box className="flex justify-end mt-8">
            {activeStep !== 2 ?
              (<Button onClick={handleNext} className="bg-accent1 rounded-full text-white text-xs block w-20 p-2.5">
                다음
              </Button>)
              :
              (<Button className="bg-accent1 rounded-full text-white text-xs block w-20 p-2.5">
                완료
              </Button>)}
          </Box>
        </Box>

        {/* </form> */}
      </Box>
    </Box>
  );
};
