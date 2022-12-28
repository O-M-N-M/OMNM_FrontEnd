import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";

import Footer from "../../components/footer";
import MyPageLeft from "../../components/mypage/mypage_left";

export const MyPageChangePwScreen = () => {
  const [userId, setUserId] = useState('');
  const [nowPw, setNowPw] = useState('');
  const [newPw, setNewPw] = useState('');
  const [checkNewPw, setCheckNewPw] = useState('');

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let pwReg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,12}$/;

    if (nowPw === newPw) {
      alert('현재 비밀번호와 변경하고 싶은 비밀번호가 같습니다.');
    }
    else if (!pwReg.test(newPw)) {
      alert('6~12자 이내의 영문과 숫자, 특수문자를 조합해 입력해주세요.');
    }
    else if (newPw !== checkNewPw) {
      alert('비밀번호가 일치하지 않습니다.');
    }
    else {
      const url = `/api/users/${userId}/resetPassword`;
      const token = getCookie('OMNM');
      const data = `originalPassword=${nowPw}&newPassword=${newPw}`;
      const headers = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'OMNM': `${token}`
        }
      };

      await axios.patch(url, data, headers)
        .then((res) => console.log(res.status))
        .then((err) => console.log(err));
    }
  }

  useEffect(() => {
    const getMyData = async () => {
      const url = '/api/myInfo';
      const token = getCookie('OMNM');
      const headers = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          'OMNM': `${token}`
        }
      };

      await axios.get(url, headers)
        .then((res) => {
          setUserId(res.data.userId);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    getMyData();
  }, [])

  return (
    <>
      <Box className='flex flex-row justify-center min-h-[calc(100vh-50px)] mx-[15%] my-[5%]'>
        <Box>
          <MyPageLeft />
        </Box>

        <form onSubmit={onSubmit} className='flex flex-col justify-center items-center border border-solid border-gray0 rounded-[1.25rem] w-full h-fit py-20 ml-6'>
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

          <Box className='flex w-80'>
            <Button type='submit' className='bg-accent1 rounded-full mt-9 px-8 py-2.5 ml-auto'>
              <Typography className='text-white text-sm font-medium'>확인</Typography>
            </Button>
          </Box>
        </form>
      </Box>

      <Footer />
    </>
  );
}