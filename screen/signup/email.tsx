import { Box, Typography, Button } from "@mui/material";
import axios from "axios";
import React, { Dispatch, SetStateAction, useState } from "react";

interface props {
  school: string;
  email: string;
  pass: boolean;
  setSchool: Dispatch<SetStateAction<string>>;
  setEmail: Dispatch<SetStateAction<string>>;
  setPass: Dispatch<SetStateAction<boolean>>;
}

export const EmailBox: React.FunctionComponent<props> = ({ school, setSchool, email, setEmail, pass, setPass }) => {
  const [send, setSend] = useState(false);
  const [num, setNum] = useState<number>();

  const onEmailSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const url = '/api/join/emailValidation';
    const body = `email=${email}@gmail.com`;
    const headers = { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } };

    await axios.post(url, body, headers)
      .then(res => {
        if (res.data === '이미 존재하는 이메일입니다.') {
          alert('이미 존재하는 이메일입니다.');
        } else {
          alert('인증번호를 발송했습니다.');
          setSend(true);
        }
      });
  }

  const onNumSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!send) alert('인증번호를 전송하지 않았습니다.');
    else {
      const url = '/api/join/emailValidation/checkNumber';
      const body = `email=${email}@gmail.com&userValidationNumber=${num}`;
      const headers = { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } };

      await axios.post(url, body, headers)
        .then(res => {
          if (res.data === '인증번호가 일치합니다.') {
            alert('인증번호가 일치합니다.');
            setPass(true);
          } else {
            alert('인증번호가 일치하지 않습니다.');
            setPass(false);
          }
        });
    }
  }

  return (
    <Box className="mt-4">
      <Box className="flex items-center mt-6">
        <Typography className="text-black text-sm font-medium">재학중인 학교명</Typography>
        <Typography className="text-gray1 text-xxs font-regular ml-4">ex. 중앙대학교</Typography>
      </Box>
      <input
        type="text"
        name="id"
        placeholder="학교명 입력"
        value={school}
        onChange={(e) => setSchool(e.target.value)}
        className="rounded-full text-gray1 border border-solid border-gray0 text-xs block w-2/3 p-2.5 mt-2 focus:outline-none" required />

      <Typography className="text-black text-sm mt-4">학교 이메일 인증</Typography>
      <form onSubmit={onEmailSubmit}>
        <Box className="flex items-center">
          <input
            type="text"
            name="email"
            placeholder="학교 이메일 입력"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-full text-gray1 border border-solid border-gray0 text-xs block w-2/3 p-2.5 mt-2 focus:outline-none" required />
          <Typography className="text-black text-sm  mt-2 ml-4">@cau.ac.kr</Typography>
        </Box>
        <Button type="submit" className="border border-solid border-accent1 bg-white rounded-full text-accent1 text-xs p-2.5 mt-2 w-full">학교 이메일로 인증번호 전송하기</Button>
      </form>
      <Typography className="text-black text-sm mt-4">인증번호 확인</Typography>
      <form onSubmit={onNumSubmit}>
        <Box className="flex items-center">
          <input
            type="text"
            name="num"
            placeholder="인증번호 입력"
            value={num}
            onChange={(e) => setNum(parseInt(e.target.value))}
            className="rounded-full text-gray1 border border-solid border-gray0 text-xs block w-2/3 p-2.5 mt-2 focus:outline-none" required />
          <Button type="submit" className="border border-solid border-accent1 bg-white rounded-full text-accent1 text-xs w-20 p-2.5 mt-2 ml-4">인증하기</Button>
        </Box>
      </form>
    </Box>
  );
}