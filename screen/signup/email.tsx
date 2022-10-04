import { Box, Typography, Button } from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";

interface props {
  school: string;
  email: string;
  setSchool: Dispatch<SetStateAction<string>>;
  setEmail: Dispatch<SetStateAction<string>>;
}

export const EmailBox: React.FunctionComponent<props> = ({ school, setSchool, email, setEmail }) => {
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
      <Typography className="text-gray1 text-xxs font-regular">인증번호 전송하기 버튼을 누르면 학교 이메일로 인증번호가 전송됩니다.</Typography>
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
      <Button className="border border-solid border-accent1 bg-white rounded-full text-accent1 text-xs p-2.5 mt-2 w-full">인증번호 전송하기</Button>

      <Typography className="text-black text-sm mt-4">인증번호 확인</Typography>
      <Box className="flex items-center">
        <input
          type="text"
          name="code"
          placeholder="인증번호 입력"
          // value={id}
          // onChange={(e) => setId(e.target.value)}
          className="rounded-full text-gray1 border border-solid border-gray0 text-xs block w-2/3 p-2.5 mt-2 focus:outline-none" required />
        <Button className="border border-solid border-accent1 bg-white rounded-full text-accent1 text-xs w-20 p-2.5 mt-2 ml-4">인증하기</Button>
      </Box>
    </Box>
  )
}