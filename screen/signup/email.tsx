import { Box, Typography, Button, CircularProgress } from "@mui/material";

import React, { Dispatch, SetStateAction, useState } from "react";
import axios from "axios";

interface props {
  school: string;
  email: string;
  pass: boolean | number;
  setSchool: Dispatch<SetStateAction<string>>;
  setEmail: Dispatch<SetStateAction<string>>;
  setPass: Dispatch<SetStateAction<boolean | number>>;
}

export const EmailBox: React.FunctionComponent<props> = ({ school, setSchool, email, setEmail, pass, setPass }) => {
  const [send, setSend] = useState(false);
  const [num, setNum] = useState<number | string>();
  const [loading, setLoading] = useState(false);

  const onEmailSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const url = '/api/join/emailValidation';
    const body = `email=${email}@naver.com`;
    const headers = { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } };
    setLoading(true);
    await axios.post(url, body, headers)
      .then(res => {
        if (res.data === '이미 존재하는 이메일입니다.') {
          alert('이미 존재하는 이메일입니다.');
        } else {
          setSend(true);
        }
      });
    setLoading(false);
  }

  const onNumSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!send) alert('인증번호를 전송하지 않았습니다.');
    else {
      const url = '/api/join/emailValidation/checkNumber';
      const body = `email=${email}@naver.com&userValidationNumber=${num}`;
      const headers = { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } };

      await axios.post(url, body, headers)
        .then(res => {
          if (res.data === '인증번호가 일치합니다.') {
            setPass(true);
          } else if (res.data === '인증번호가 일치하지 않습니다.') {
            setPass(false);
          }
        });
    }
  };

  return (
    <Box className="mt-10">
      <Box className="flex items-center">
        <Typography className="text-black text-lg font-medium">재학중인 학교명</Typography>
        {/* <Typography className="text-gray1 text-xs font-regular ml-2">ex. 중앙대학교</Typography> */}
      </Box>
      <input
        disabled
        type="text"
        name="id"
        placeholder="중앙대학교"
        value={school}
        onChange={(e) => setSchool('중앙대학교')}
        className="rounded-full text-gray1 text-sm font-regular border border-solid border-gray0 block w-[70%] h-12 p-2.5 mt-2 focus:outline-none" required />

      <Typography className="text-black text-lg font-medium mt-9">학교 이메일 인증</Typography>
      <form onSubmit={onEmailSubmit}>
        <Box className="flex items-center">
          <input
            type="text"
            name="email"
            placeholder="학교 이메일 입력"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-full text-gray1 text-sm font-regular border border-solid border-gray0 block w-[70%] h-12 p-2.5 mt-2 focus:outline-none" required />
          <Typography className="text-black text-sm font-regular mt-2 ml-4">@naver.com</Typography>
        </Box>

        <Button type="submit" className="border border-solid border-accent1 bg-white rounded-full p-2.5 mt-4 w-full h-12">
          {
            loading ?
              <CircularProgress color="inherit" size={20} />
              :
              <Typography className='text-accent1 text-sm font-medium'>학교 이메일로 인증번호 전송하기</Typography>
          }
        </Button>
      </form>

      <Typography className="text-black text-lg font-medium mt-9">인증번호 확인</Typography>
      <form onSubmit={onNumSubmit}>
        <Box className="flex items-center">
          <input
            type="text"
            name="num"
            placeholder="인증번호 입력"
            value={num}
            onChange={(e) => setNum(parseInt(e.target.value) || '')}
            className="rounded-full text-gray1 text-sm font-regular border border-solid border-gray0 block w-[70%] h-12 p-2.5 mt-2 focus:outline-none" required />
          <Button type="submit" className="border border-solid border-accent1 bg-white rounded-full text-accent1 text-sm font-medium w-[30%] h-12 p-2.5 mt-2 ml-5">인증하기</Button>
        </Box>
      </form>
      {
        pass === -1 ? <></> :
          pass ? <Typography className='text-green text-xs font-regular mt-1 ml-1'>인증번호가 일치합니다.</Typography> :
            <Typography className='text-red text-xs font-regular mt-1 ml-1'>인증번호가 일치하지 않습니다.</Typography>
      }
    </Box>
  );
}