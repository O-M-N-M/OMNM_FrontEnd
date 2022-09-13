import { Box, Typography, Button } from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";

interface props {
  id: string;
  pw: string;
  setId: Dispatch<SetStateAction<string>>;
  setPw: Dispatch<SetStateAction<string>>;
}

export const AccountBox: React.FunctionComponent<props> = ({ id, setId, pw, setPw }) => {
  return (
    <Box className="mt-4">
      <Typography className="text-black text-sm mt-6">아이디</Typography>
      <Box className="flex items-center">
        <input
          type="text"
          name="id"
          placeholder="아이디 입력"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="rounded-full text-gray1 border border-solid border-gray0 text-xs block w-44 p-2.5 mt-2 focus:outline-none" required />
        <Button className="border border-solid border-accent1 bg-white rounded-full text-accent1 text-xs w-20 p-2.5 mt-2 ml-4">중복확인</Button>
      </Box>

      <Typography className="text-black text-sm mt-4">비밀번호</Typography>
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
        placeholder="비밀번호 재입력"
        className="rounded-full text-gray1 border border-solid border-gray0 text-xs block w-68 p-2.5 mt-2 focus:outline-none" required />
    </Box>
  );
};