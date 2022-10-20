import { Box, Typography, Button } from "@mui/material";
import axios from "axios";
import React, { Dispatch, SetStateAction, useState } from "react";

interface props {
  id: string;
  pw: string;
  pwCheck: string;
  pass: boolean;
  setId: Dispatch<SetStateAction<string>>;
  setPw: Dispatch<SetStateAction<string>>;
  setPwCheck: Dispatch<SetStateAction<string>>;
  setPass: Dispatch<SetStateAction<boolean>>;
}

export const AccountBox: React.FunctionComponent<props> = ({ id, setId, pw, setPw, pwCheck, setPwCheck, pass, setPass }) => {
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let idReg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,12}$/;
    if (!idReg.test(id)) alert('올바른 아이디가 아닙니다.');
    else {
      const url = '/api/join/idDuplicateCheck';
      const body = `loginId=${id}`;
      const headers = { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } };

      await axios.post(url, body, headers)
        .then(res => {
          if (res.data === '중복 아이디') {
            alert('중복된 아이디입니다.');
            setPass(false);
          } else {
            alert('해당 아이디를 사용할 수 있습니다.');
            setPass(true);
          }
        });
    }
  }

  return (
    <Box className="mt-4">
      <Box className="flex items-center mt-6">
        <Typography className="text-black text-sm">아이디</Typography>
        <Typography className="text-gray1 text-xxs font-regular ml-4">6~12자 이내 영문과 숫자 모두 포함</Typography>
      </Box>
      <form onSubmit={onSubmit} className="flex items-center">
        <input
          type="text"
          name="id"
          placeholder="아이디 입력"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="rounded-full text-gray1 border border-solid border-gray0 text-xs block w-44 p-2.5 mt-2 focus:outline-none" required />
        <Button type="submit" className="border border-solid border-accent1 bg-white rounded-full text-accent1 text-xs w-20 p-2.5 mt-2 ml-4">중복확인</Button>
      </form>

      <Box className="flex items-center mt-4">
        <Typography className="text-black text-sm">비밀번호</Typography>
        <Typography className="text-gray1 text-xxs font-regular ml-4">6~12자 이내 숫자, 특수문자, 영문자 모두 포함</Typography>
      </Box>
      <input
        type="password"
        name="pw"
        placeholder="비밀번호 입력"
        value={pw}
        onChange={(e) => setPw(e.target.value)}
        className="rounded-full text-gray1 border border-solid border-gray0 text-xs block w-68 p-2.5 mt-2 focus:outline-none" required />
      <Typography className="text-black text-sm mt-4">비밀번호 확인</Typography>
      <input
        type="password"
        name="pwCheck"
        placeholder="비밀번호 재입력"
        value={pwCheck}
        onChange={(e) => setPwCheck(e.target.value)}
        className="rounded-full text-gray1 border border-solid border-gray0 text-xs block w-68 p-2.5 mt-2 focus:outline-none" required />
    </Box>
  )
}