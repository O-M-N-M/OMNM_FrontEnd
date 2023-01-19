import { Box, Typography, Button, IconButton, useMediaQuery, Modal, ThemeProvider, createTheme } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

import React, { useState } from "react";

import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

import logo from '../../public/logo.png';
import failIcon from '../../public/failIcon.png';
import emailIcon from '../../public/emailIcon.png';
import axios from "axios";
import SimpleModal from "@/components/simpleModal";

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

export const FindPwScreen: NextPage = () => {
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [noEmail, setNoEmail] = useState(false);
  const [notMatch, setNotMatch] = useState(false);

  const isLabtop = useMediaQuery('(min-width: 1024px)');

  const handleOpen = () => setSuccess(true);
  const handleClose = () => setSuccess(false);
  const handleNoEmailOpen = () => setNoEmail(true);
  const handleNoEmailClose = () => setNoEmail(false);
  const handleNotMatchOpen = () => setNotMatch(true);
  const handleNotMatchClose = () => setNotMatch(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const url = '/api/find/loginPw';
    const body = `email=${email}@cau.ac.kr&loginId=${id}`;
    const headers = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };

    await axios.post(url, body, headers)
      .then((res) => {
        if (res.data === '존재하지 않는 이메일') {
          handleNoEmailOpen();
        }
        else if (res.data === '이메일과 아이디가 일치하지 않음') {
          handleNotMatchOpen();
        }
        else if (res.data === '인증번호 발송 성공') {
          handleOpen();
        }
      })
      .catch((err) => {
        console.log(err);
      })
  };

  return (
    <Box className="flex justify-center items-center min-h-[calc(100vh-70px)]">
      <Box className="flex flex-col items-center labtop:my-[5%] mobile:my-11">
        <Image src={logo} width={60} height={61} />

        <form onSubmit={onSubmit} className="border border-solid rounded-2xl border-gray0 labtop:px-20 mobile:px-[15%] py-14 mt-8">
          <Typography className="text-black labtop:text-2xl mobile:text-xl font-medium">비밀번호 찾기</Typography>
          <Typography className="text-black text-lg font-medium labtop:mt-10 mobile:mt-8">아이디</Typography>
          <input
            type="text"
            name="id"
            placeholder="아이디 입력"
            value={id}
            onChange={(e) => { setId(e.target.value); setNoEmail(false); setNotMatch(false); }}
            className="rounded-full border border-solid border-gray0 text-gray1 text-sm font-regular block w-44 h-12 p-2.5 pl-4 mt-2 focus:outline-none" required />

          <Box>
            <Typography className="text-black text-lg font-medium labtop:mt-9 mobile:mt-8">학교 이메일</Typography>
            <Typography className="text-gray1 text-xs font-regular">학교 이메일로 임시 비밀번호가 전송됩니다.</Typography>
          </Box>
          <Box className="flex items-center">
            <input
              type="text"
              name="email"
              placeholder="학교 아이디"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setNoEmail(false); setNotMatch(false); }}
              className="rounded-full border border-solid border-gray0 text-gray1 text-sm font-regular block w-44 h-12 p-2.5 pl-4 mt-4 focus:outline-none" required />
            <Typography className="text-black text-sm font-regular ml-5 mt-2">@cau.ac.kr</Typography>
          </Box>

          {
            (!isLabtop && noEmail) &&
            <Typography className='text-red text-xs font-regular mt-4'>이메일이 존재하지 않습니다.</Typography>
          }
          {
            (!isLabtop && notMatch) &&
            <Typography className='text-red text-xs font-regular mt-4'>이메일과 아이디가 일치하지 않습니다.</Typography>
          }

          <Button type="submit" className="bg-accent1 rounded-full text-white border border-gray2 text-sm block w-full h-12 p-2.5 labtop:mt-10 mobile:mt-8">확인</Button>
        </form>

        {
          success &&
          <ThemeProvider theme={theme}>
            <Modal
              open={success}
              onClose={handleClose}
            >
              <Box sx={{ position: 'absolute', backgroundColor: 'white', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', borderRadius: '10px', width: { xs: '327px', md: '512px' }, paddingX: { xs: '62px', md: '87px' }, paddingY: { xs: '32px', md: '42px' }, outline: 'none' }}>
                <Box sx={{ textAlign: 'center' }}>
                  {
                    isLabtop ?
                      <Image src={emailIcon} width={80} height={80} /> :
                      <Image src={emailIcon} width={56} height={56} />
                  }
                </Box>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', marginTop: '24px' }}>
                  <Typography sx={{ color: '#383838', fontSize: { xs: '16px', md: '18px' }, fontWeight: '400' }}>학교 이메일로</Typography>
                  <Typography sx={{ color: '#4B99EB', fontSize: { xs: '16px', md: '18px' }, fontWeight: '400' }}>&nbsp;임시 비밀번호를</Typography>
                  <Typography sx={{ color: '#383838', fontSize: { xs: '16px', md: '18px' }, fontWeight: '400' }}>발송했습니다.</Typography>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Button onClick={() => document.location = '/login'} sx={{ backgroundColor: '#4B99EB !important', borderRadius: '200px', paddingX: '37px', paddingY: '11px', marginTop: '24px' }}>
                    <Typography sx={{ color: 'white', fontSize: '14px', fontWeight: '500' }}>확인</Typography>
                  </Button>
                </Box>
              </Box>
            </Modal>
          </ThemeProvider>
        }
        {
          (isLabtop && noEmail) &&
          <SimpleModal props={{ open: noEmail, onClose: handleNoEmailClose, src: 'fail', sentence: '이메일이 존재하지 않습니다.' }} />
        }
        {
          (isLabtop && notMatch) &&
          <SimpleModal props={{ open: notMatch, onClose: handleNotMatchClose, src: 'fail', sentence: '이메일과 아이디가 일치하지 않습니다.' }} />
        }
      </Box>
    </Box>
  );
};