import { Box, Typography, Button, IconButton, useMediaQuery, Modal, ThemeProvider, createTheme } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

import React, { useState } from "react";
import axios from "axios";

import { NextPage } from "next";
import Image from "next/image";

import logo from '../../public/logo.png';
import FailIcon from '../../public/failIcon.png';
import magnifying from '../../public/magnifying.png';

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

export const FindIdScreen: NextPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [id, setId] = useState('');
  const [open, setOpen] = useState(false);
  const [failOpen, setFailOpen] = useState(false);
  const [fail, setFail] = useState(false);

  const isLabtop = useMediaQuery('(min-width: 1024px)');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleFailOpen = () => setFailOpen(true);
  const handleFailClose = () => setFailOpen(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const url = '/api/find/loginId';
    const body = `name=${name}&email=${email}@cau.ac.kr`;
    const headers = { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } };

    await axios.post(url, body, headers)
      .then(res => {
        if (res.data.length > 0) {
          setId(res.data);
          handleOpen();
        } else {
          setFail(true);
          handleFailOpen();
        }
      })
      .catch(err => console.log(err.response));
  };

  const onClick = () => {
    setOpen(false);
  };

  return (
    <Box className="flex items-center justify-center min-h-[calc(100vh-70px)]">
      <Box className="flex flex-col items-center labtop:my-[5%] mobile:my-11">
        <Image src={logo} width={60} height={61} />

        <form onSubmit={onSubmit} className="border border-solid rounded-2xl border-gray0 labtop:px-20 mobile:px-[15%] py-14 mt-8 ">
          <Typography className="text-black labtop:text-2xl mobile:text-xl font-medium">아이디 찾기</Typography>
          <Typography className="text-black text-lg font-medium labtop:mt-10 mobile:mt-8">이름</Typography>
          <input
            type="text"
            name="name"
            placeholder="이름 입력"
            value={name}
            onChange={(e) => { setName(e.target.value); setFail(false); }}
            className="rounded-full border border-solid border-gray0 text-gray1 text-sm font-regular block w-44 h-12 p-2.5 pl-4 mt-2 focus:outline-none" required />
          <Typography className="text-black text-lg font-medium labtop:mt-9 mobile:mt-8">학교 이메일</Typography>
          <Box className="flex items-center">
            <input
              type="text"
              name="email"
              placeholder="학교 아이디"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setFail(false); }}
              className="rounded-full border border-solid border-gray0 text-gray1 text-sm font-regular block w-44 h-12 p-2.5 pl-4 mt-2 focus:outline-none" required />
            <Typography className=" text-black text-sm font-regular ml-5 mt-2">@cau.ac.kr</Typography>
          </Box>
          {
            (!isLabtop && fail) &&
            <Typography className='text-red text-xs font-regular mt-4'>입력하신 정보와 일치하는 아이디가 없습니다.</Typography>
          }
          <Button type="submit" className="bg-accent1 rounded-full text-white border border-gray2 text-sm block w-full h-12 p-2.5 labtop:mt-10 mobile:mt-8">확인</Button>
        </form>

        {
          open &&
          <ThemeProvider theme={theme}>
            <Modal
              open={open}
              onClose={handleClose}
            >
              <Box sx={{ position: 'absolute', backgroundColor: 'white', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', borderRadius: '10px', width: { xs: '327px', md: '512px' }, paddingTop: '20px !important', padding: '40px', outline: 'none' }}>
                <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                  <IconButton onClick={onClick}>
                    <CloseIcon aria-label="close" />
                  </IconButton>
                </Box>

                <Box sx={{ textAlign: 'center' }}>
                  {
                    isLabtop ?
                      <Image src={magnifying} width={120} height={120} /> :
                      <Image src={magnifying} width={56} height={56} />
                  }
                </Box>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', marginTop: { xs: '16px', md: '24px' } }}>
                  <Typography sx={{ color: '#383838', fontSize: '16px', fontWeight: '400' }}>입력한 정보로 조회된 아이디는</Typography>
                  <Typography sx={{ color: '#4B99EB', fontSize: '16px', fontWeight: '400' }}>&nbsp;{id}&nbsp;</Typography>
                  <Typography sx={{ color: '#383838', fontSize: '16px', fontWeight: '400' }}> 입니다.</Typography>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: { xs: '16px', md: '24px' } }}>
                  <Button onClick={() => document.location = '/login'} sx={{ backgroundColor: '#4B99EB', borderRadius: '200px', width: '140px', height: '40px' }}>
                    <Typography sx={{ color: 'white', fontSize: '14px', fontWeight: '500', textAlign: 'center' }}>로그인하기</Typography>
                  </Button>

                  <Button onClick={() => document.location = '/findpw'} sx={{ backgroundColor: 'white', border: '1px solid #4B99EB', borderRadius: '200px', width: '140px', height: '40px', marginLeft: '24px' }}>
                    <Typography sx={{ color: '#383838', fontSize: '14px', fontWeight: '500', textAlign: 'center' }}>비밀번호 찾기</Typography>
                  </Button>
                </Box>
              </Box>
            </Modal>
          </ThemeProvider>
        }

        {
          (isLabtop && fail) && (
            <Modal
              open={failOpen}
              onClose={handleFailClose}
            >
              <Box sx={{ position: 'absolute', backgroundColor: 'white', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', borderRadius: '10px', paddingX: '34px', paddingBottom: '41px', paddingTop: '10px', outline: 'none' }}>
                <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                  <IconButton onClick={handleFailClose}>
                    <CloseIcon aria-label="close" />
                  </IconButton>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }} >
                  <Image src={FailIcon} width={72} height={72} />
                  <Typography sx={{ color: '#383838', fontSize: '18px', fontWeight: '400', marginTop: '10px' }}>입력하신 정보와 일치하는 아이디가 없습니다</Typography>
                </Box>
              </Box>
            </Modal>
          )
        }
      </Box>
    </Box>
  );
};