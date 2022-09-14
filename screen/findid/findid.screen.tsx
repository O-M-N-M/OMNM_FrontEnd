import { Box, Typography, Button } from "@mui/material";
import { NextPage } from "next";
import Image from "next/image";
import React, { useState } from "react";
import logo from '../../public/logo.png';

export const FindIdScreen: NextPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await fetch(`/api/find/loginId`, {
        method: 'POST',
        body: `name=${name}&email=${email}@cau.ac.kr`,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(res => res.text())
        .then(txt => {
          if (txt === null) {
            alert('조회 실패');
          }
        });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Box className="flex items-center justify-center min-h-screen">
      <Box className="flex flex-col items-center">
        <Image src={logo} width={75} height={75} />

        <form onSubmit={onSubmit} className="mt-10 border border-solid rounded-lg border-gray0 p-14">
          <Typography className="text-black text-xl font-medium">아이디 찾기</Typography>
          <Typography className="text-black text-sm font-medium mt-6">이름</Typography>
          <input
            type="text"
            name="name"
            placeholder="이름 입력"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-full text-gray1 border border-solid border-gray0 text-xs block w-32 p-2.5 pl-4 mt-2 focus:outline-none" required />
          <Typography className="text-black text-sm font-medium mt-4">학교 이메일</Typography>
          <Box className="flex items-center">
            <input
              type="text"
              name="email"
              placeholder="학교 아이디"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-full text-gray1 border border-solid border-gray0 text-xs block w-32 p-2.5 pl-4 mt-2 focus:outline-none" required />
            <Typography className="ml-4 mt-2 text-black text-sm font-regular">@cau.ac.kr</Typography>
          </Box>
          <Button type="submit" className="bg-accent1 rounded-full text-white border border-gray2 text-sm block w-60 p-2.5 mt-6">확인</Button>
        </form>
      </Box>
    </Box>
  );
};
