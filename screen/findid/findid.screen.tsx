import { Box, Typography, Button, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

import React, { useState } from "react";
import axios from "axios";

import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

import magnifying from '../../public/magnifying.png';
import logo from '../../public/logo.png';

export const FindIdScreen: NextPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [id, setId] = useState('');
  const [open, setOpen] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const url = '/api/find/loginId';
    const body = `name=${name}&email=${email}@naver.com`;
    const headers = { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } };

    await axios.post(url, body, headers)
      .then(res => {
        if (res.data === '') alert('입력하신 정보와 일치하는 아이디가 없습니다.');
        else {
          setId(res.data);
          setOpen(true);
        }
      })
      .catch(err => console.log(err.response));
  };

  const onClick = () => {
    setOpen(false);
  };

  return (
    <Box className="flex items-center justify-center min-h-[calc(100vh-70px)]">
      <Box className="flex flex-col items-center my-[5%]">
        <Image src={logo} width={60} height={61} />

        <form onSubmit={onSubmit} className="border border-solid rounded-2xl border-gray0 px-20 py-14 mt-8 ">
          <Typography className="text-black text-2xl font-medium">아이디 찾기</Typography>
          <Typography className="text-black text-lg font-medium mt-10">이름</Typography>
          <input
            type="text"
            name="name"
            placeholder="이름 입력"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-full border border-solid border-gray0 text-gray1 text-sm font-regular block w-44 h-12 p-2.5 pl-4 mt-2 focus:outline-none" required />
          <Typography className="text-black text-lg font-medium mt-9">학교 이메일</Typography>
          <Box className="flex items-center">
            <input
              type="text"
              name="email"
              placeholder="학교 아이디"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-full border border-solid border-gray0 text-gray1 text-sm font-regular block w-44 h-12 p-2.5 pl-4 mt-2 focus:outline-none" required />
            <Typography className=" text-black text-sm font-regular ml-5 mt-2">@naver.com</Typography>
          </Box>
          <Button type="submit" className="bg-accent1 rounded-full text-white border border-gray2 text-sm block w-full h-12 p-2.5 mt-10">확인</Button>
        </form>
        {open === true ?
          <Box className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded border border-solid border-gray0 pt-5 p-10 w-[27rem]">
            <Box className="flex justify-end">
              <IconButton onClick={onClick}>
                <CloseIcon aria-label="close" />
              </IconButton>
            </Box>

            <Box className="text-center">
              <Image src={magnifying} />
            </Box>

            <Box className="flex justify-center items-center mt-2">
              <Typography className="text-sm text-black">입력한 정보로 조회된 아이디는</Typography>
              <Typography className="text-sm text-accent1">&nbsp;{id}&nbsp;</Typography>
              <Typography className="text-sm text-black"> 입니다.</Typography>
            </Box>

            <Box className="flex justify-center items-center mt-4">
              <Link href="/login">
                <a className="bg-accent1 rounded-full w-32 p-2">
                  <Typography className="text-white text-sm text-center">로그인하기</Typography>
                </a>
              </Link>
              <Link href="/findpw">
                <a className="bg-white rounded-full text-black border border-solid border-accent1 w-32 p-2 ml-4">
                  <Typography className="text-black text-sm text-center">비밀번호 찾기</Typography>
                </a>
              </Link>
            </Box>
          </Box>
          : <></>}
      </Box>
    </Box>
  );
};