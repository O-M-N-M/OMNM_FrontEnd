import { Box, Typography, Button, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from "react";

import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import emailIcon from '../../public/emailIcon.png';
import failIcon from '../../public/failIcon.png';
import logo from '../../public/logo.png';

export const FindPwScreen: NextPage = () => {
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [noEmail, setNoEmail] = useState(false);
  const [notMatch, setNotMatch] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await fetch(`/api/find/loginPw`, {
        method: 'POST',
        body: `email=${email}@cau.ac.kr&loginId=${id}`,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(res => res.text())
        .then(txt => {
          if (txt === '존재하지 않는 이메일') {
            setNoEmail(true);
          }
          else if (txt === '이메일과 아이디가 일치하지 않음') {
            setNotMatch(true);
          }
          else if (txt === '인증번호 발송 성공') {
            setSuccess(true);
          }
        });
    } catch (err) {
      console.log(err);
    }
  }

  const noEmailClick = () => {
    setNoEmail(false);
  }

  return (
    <Box className="flex justify-center items-center min-h-screen">
      <Box className="flex flex-col items-center">
        <Image src={logo} width={75} height={75} />

        <form onSubmit={onSubmit} className="border border-solid border-gray0 rounded-lg p-14 mt-10">
          <Typography className="text-black text-xl font-medium">비밀번호 찾기</Typography>
          <Typography className="text-black text-sm font-medium mt-6">아이디</Typography>
          <input
            type="text"
            name="id"
            placeholder="아이디 입력"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="rounded-full text-gray1 border border-solid border-gray0 text-xs block w-60 p-2.5 mt-2 focus:outline-none" required />

          <Box>
            <Typography className="text-black text-sm font-medium mt-4">학교 이메일</Typography>
            <Typography className="text-gray1 text-xxs font-regular">학교 이메일로 임시 비밀번호가 전송됩니다.</Typography>
          </Box>
          <Box className="flex items-center">
            <input
              type="text"
              name="email"
              placeholder="학교 아이디"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-full text-gray1 border border-solid border-gray0 text-xs block w-32 p-2.5 mt-2 focus:outline-none" required />
            <Typography className="text-black text-sm font-regular ml-4 mt-2">@cau.ac.kr</Typography>
          </Box>

          <Button type="submit" className="bg-accent1 rounded-full text-white border border-gray2 text-sm block w-60 p-2.5 mt-6">확인</Button>
        </form>

        {
          success === true ?
            <Box className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded border border-solid border-gray0 p-10 w-[27rem]">
              <Box className="text-center">
                <Image src={emailIcon} />
              </Box>

              <Box className="flex justify-center items-center mt-2">
                <Typography className="text-sm text-black">학교 이메일로</Typography>
                <Typography className="text-sm text-accent1">&nbsp;임시 비밀번호</Typography>
                <Typography className="text-sm text-black">를 발송했습니다.</Typography>
              </Box>

              <Box className="flex justify-center items-center mt-4">
                <Link href="/login">
                  <a className="bg-accent1 rounded-full w-32 p-2">
                    <Typography className="text-white text-sm text-center">확인</Typography>
                  </a>
                </Link>
              </Box>
            </Box>
            : <></>
        }
        {
          noEmail === true ?
            <Box className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded border border-solid border-gray0 pt-5 p-10 w-[27rem]">
              <Box className="flex justify-end">
                <IconButton onClick={() => setNoEmail(false)}>
                  <CloseIcon aria-label="close" />
                </IconButton>
              </Box>

              <Box className="text-center">
                <Image src={failIcon} />
              </Box>

              <Box className="text-center">
                <Typography className="text-sm text-black">이메일이 존재하지 않습니다.</Typography>
              </Box>
            </Box>
            : <></>
        }
        {
          notMatch === true ?
            <Box className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded border border-solid border-gray0 pt-5 p-10 w-[27rem]">
              <Box className="flex justify-end">
                <IconButton onClick={() => setNotMatch(false)}>
                  <CloseIcon aria-label="close" />
                </IconButton>
              </Box>

              <Box className="text-center">
                <Image src={failIcon} />
              </Box>

              <Box className="text-center">
                <Typography className="text-sm text-black">이메일과 아이디가 일치하지 않습니다.</Typography>
              </Box>
            </Box>
            : <></>
        }
      </Box>
    </Box>
  );
};