import { Box, Typography } from "@mui/material";
import { NextPage } from "next";

export const AccountBox: NextPage = () => {
  return (
    <Box className="mt-4">
      <Typography className="text-sm mt-6">아이디</Typography>
      <input type="text" placeholder="아이디 입력" className="rounded-full text-gray1 font-bold border border-gray2 ring-gray2 text-xs block w-60 p-2.5 mt-2" required />
      <Typography className="text-sm mt-4">비밀번호</Typography>
      <input type="text" placeholder="비밀번호 입력" className="rounded-full text-gray1 font-bold border border-gray2 ring-gray2 text-xs block w-60 p-2.5 mt-2" required />
      <Typography className="text-sm mt-4">비밀번호 확인</Typography>
      <input type="text" placeholder="비밀번호 재입력" className="rounded-full text-gray1 font-bold border border-gray2 ring-gray2 text-xs block w-60 p-2.5 mt-2" required />
    </Box>
  );
};
