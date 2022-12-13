import { Box, Typography, Button } from "@mui/material";
import axios from "axios";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

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
  const [resultId, setResultId] = useState(0);
  const [resultPw, setResultPw] = useState(0);
  const [resultCheck, setResultCheck] = useState(0);
  const [nowPw, setNowPw] = useState('');
  const [nowCheck, setNowCheck] = useState('');

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let idReg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,12}$/;
    if (!idReg.test(id)) setResultId(1);
    else {
      const url = '/api/join/idDuplicateCheck';
      const body = `loginId=${id}`;
      const headers = { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } };

      await axios.post(url, body, headers)
        .then(res => {
          if (res.data === '중복 아이디') {
            setResultId(2);
            setPass(false);
          } else {
            setResultId(3);
            setPass(true);
          }
        });
    }
  }

  useEffect(() => {
    let pwReg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,12}$/;

    if (nowPw === '' || pwReg.test(nowPw)) setResultPw(0);
    else if (!pwReg.test(nowPw)) setResultPw(1);

    if (nowCheck === '' || nowPw === nowCheck) setResultCheck(0);
    else setResultCheck(1);
  }, [nowPw, nowCheck]);

  return (
    <Box className="mt-10">
      <Box className="flex items-center">
        <Typography className="text-black text-lg font-medium">아이디</Typography>
        <Typography className="text-gray1 text-xs font-regular ml-2">6~12자 이내 영문과 숫자 모두 포함</Typography>
      </Box>
      <form onSubmit={onSubmit} className="flex items-center">
        <input
          type="text"
          name="id"
          placeholder="아이디 입력"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="rounded-full text-gray1 text-sm font-regular border border-solid border-gray0 block w-[70%] h-12 p-2.5 mt-2 focus:outline-none" required />
        <Button type="submit" className="border border-solid border-accent1 bg-white rounded-full text-accent1 text-sm font-medium w-[30%] h-12 p-2.5 mt-2 ml-5">중복확인</Button>
      </form>
      {
        resultId === 1 ? <Typography className='text-red text-xs font-regular mt-1 ml-1'>6~12자 이내의 영문과 숫자를 조합해 입력해주세요.</Typography> :
          resultId === 2 ? <Typography className='text-red text-xs font-regular mt-1 ml-1'>이미 사용중인 아이디입니다.</Typography> :
            resultId === 3 ? <Typography className='text-green text-xs font-regular mt-1 ml-1'>해당 아이디를 사용할 수 있습니다.</Typography> :
              <></>
      }

      <Box className="flex items-center mt-9">
        <Typography className="text-black text-lg font-medium">비밀번호</Typography>
        <Typography className="text-gray1 text-xs font-regular ml-2">6~12자 이내 숫자, 특수문자, 영문자 모두 포함</Typography>
      </Box>
      <input
        type="password"
        name="pw"
        placeholder="비밀번호 입력"
        value={pw}
        onChange={(e) => { setPw(e.target.value); setNowPw(e.target.value); }}
        className="rounded-full text-gray1 text-sm font-regular border border-solid border-gray0 block w-full h-12 p-2.5 mt-2 focus:outline-none" required />
      {
        resultPw === 1 && <Typography className='text-red text-xs font-regular mt-1 ml-1'>6~12자 이내의 영문과 숫자, 특수문자를 조합해 입력해주세요.</Typography>
      }


      <Typography className="text-black text-lg font-medium mt-9">비밀번호 확인</Typography>
      <input
        type="password"
        name="pwCheck"
        placeholder="비밀번호 재입력"
        value={pwCheck}
        onChange={(e) => { setPwCheck(e.target.value); setNowCheck(e.target.value); }}
        className="rounded-full text-gray1 text-sm font-regular border border-solid border-gray0 block w-full h-12 p-2.5 mt-2 focus:outline-none" required />
      {
        resultCheck === 1 && <Typography className='text-red text-xs font-regular mt-1 ml-1'>비밀번호가 일치하지 않습니다.</Typography>
      }

    </Box>
  )
}