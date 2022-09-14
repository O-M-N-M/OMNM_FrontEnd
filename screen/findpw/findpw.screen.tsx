import { Box, Typography, Button } from "@mui/material";
import { NextPage } from "next";
import Image from "next/image";
import React, { useState } from "react";
import logo from '../../public/logo.png';

export const FindPwScreen: NextPage = () => {
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');

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
            alert('이메일이 존재하지 않습니다.');
          }
          else if (txt === '이메일과 아이디가 일치하지 않음') {
            alert('이메일과 아이디가 일치하지 않습니다.');
          }
          else if (txt === '인증번호 발송 성공') {
            alert('임시 비밀번호를 발송했습니다.');
            document.location = '/login';
          }
        });
    } catch (err) {
      console.log(err);
    }
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
          <Typography className="text-black text-sm font-medium mt-4">학교 이메일</Typography>
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
      </Box>
    </Box>
  );
};
