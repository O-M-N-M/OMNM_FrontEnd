import { Box, Button, Typography } from "@mui/material"
import { useState } from "react";

import MyPageLeft from '../../components/mypage/mypage_left';
import Footer from "../../components/footer";

export const MyPageWithdrawalScreen = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  return (
    <>
      <Box className='flex flex-row justify-center min-h-[calc(100vh-50px)] my-[5%]'>
        <Box>
          <MyPageLeft />
        </Box>

        <form className='flex flex-col justify-center items-center border border-solid border-gray0 rounded-[1.25rem] w-fit h-fit px-72 py-20 ml-6'>
          <Typography className='text-black text-xl font-medium text-center w-full'>회원 탈퇴</Typography>

          <Box className='mt-10'>
            <Typography className='text-black text-base font-medium'>아이디</Typography>
            <input
              type="text"
              name="id"
              placeholder="아이디 입력"
              value={id}
              onChange={(e) => setId(e.target.value)}
              className='border border-solid border-gray0 rounded-full text-gray1 text-xs font-regular w-80 p-4 mt-2 focus:outline-none'
              required />
          </Box>

          <Box>
            <Typography className='text-black text-base font-medium mt-6'>비밀번호</Typography>
            <input
              type="password"
              name="pw"
              placeholder="비밀번호 입력"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              className='border border-solid border-gray0 rounded-full text-gray1 text-xs font-regular w-80 p-4 mt-2 focus:outline-none'
              required />
          </Box>

          <Button className='bg-accent1 rounded-full mt-9 px-8 py-2.5 ml-auto'>
            <Typography className='text-white text-sm font-medium'>확인</Typography>
          </Button>
        </form>
      </Box>

      <Footer />
    </>
  )
}