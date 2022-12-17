import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import Footer from "../../components/footer";
import MyPageLeft from "../../components/mypage/mypage_left";

export const MyPageChangePwScreen = () => {
  const [nowPw, setNowPw] = useState('');
  const [newPw, setNewPw] = useState('');
  const [checkNewPw, setCheckNewPw] = useState('');

  useEffect(() => {

  }, [newPw, checkNewPw])

  return (
    <>
      <Box className='flex flex-row justify-center min-h-[calc(100vh-50px)] my-[5%]'>
        <Box>
          <MyPageLeft />
        </Box>

        <form className='flex flex-col justify-center items-center border border-solid border-gray0 rounded-[1.25rem] w-fit h-fit px-72 py-20 ml-6'>
          <Typography className='text-black text-xl font-medium text-center w-full'>비밀번호 변경</Typography>

          <Box className='mt-10'>
            <Typography className='text-black text-base font-medium'>현재 비밀번호</Typography>
            <input
              type="password"
              name="pw"
              placeholder="현재 비밀번호 입력"
              value={nowPw}
              onChange={(e) => setNowPw(e.target.value)}
              className='border border-solid border-gray0 rounded-full text-gray1 text-xs font-regular w-80 p-4 mt-2 focus:outline-none'
              required />
          </Box>

          <Box className='mt-7'>
            <Box className='flex flex-row items-center'>
              <Typography className='text-black text-base font-medium'>새 비밀번호</Typography>
              <Typography className='text-gray1 text-xs font-regular ml-2'>6~12자 이내 숫자, 특수문자, 영문자 모두 포함</Typography>
            </Box>
            <input
              type="password"
              name="pw"
              placeholder="새 비밀번호 입력"
              value={newPw}
              onChange={(e) => setNewPw(e.target.value)}
              className='border border-solid border-gray0 rounded-full text-gray1 text-xs font-regular w-80 p-4 mt-2 focus:outline-none'
              required />
          </Box>

          <Box className='mt-7'>
            <Typography className='text-black text-base font-medium'>새 비밀번호 확인</Typography>
            <input
              type="password"
              name="pw"
              placeholder="새 비밀번호 재입력"
              value={checkNewPw}
              onChange={(e) => setCheckNewPw(e.target.value)}
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
  );
}