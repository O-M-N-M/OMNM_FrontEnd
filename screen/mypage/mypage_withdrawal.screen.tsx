import { getCookie } from "cookies-next";

import { Box, Button, Typography } from "@mui/material";

import { useEffect, useState } from "react";
import axios from "axios";

import MyPageLeft from '../../components/mypage/mypage_left';
import Footer from "../../components/footer";

export const MyPageWithdrawalScreen = () => {
  const [userId, setUserId] = useState('');
  const [open, setOpen] = useState(false);
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  const onSubmit = async () => {
    const url = `/api/users/${userId}`;
    const body = `loginId=${id}&password=${pw}`;

    const token = getCookie('OMNM');
    const headers = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        'OMNM': `${token}`
      }
    };
    const userDto = {
      loginId: `${id}`,
      password: `${pw}`
    };

    const formData = new FormData();
    formData.append(
      'key',
      new Blob([JSON.stringify(userDto)],
        { type: "application/json" }
      )
    )

    await axios.post(url, body, headers)
      .then(() => document.location = '/landing')
      .catch((err) => console.error(err));
  };

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
        .then((res) => setUserId(res.data.userId))
        .catch((err) => console.log(err));
    }

    getMyData();
  }, []);

  return (
    <>
      <Box className='flex flex-row justify-center min-h-[calc(100vh-50px)] mx-[15%] my-[5%]'>
        <Box>
          <MyPageLeft />
        </Box>

        <form onSubmit={onSubmit} className='flex flex-col justify-center items-center border border-solid border-gray0 rounded-[1.25rem] w-full h-fit py-20 ml-6'>
          {/* <Box className='flex flex-col justify-center items-center border border-solid border-gray0 rounded-[1.25rem] w-full h-fit py-20 ml-6'> */}
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

          <Box className='flex w-80'>
            <Button type='submit' className='bg-accent1 rounded-full mt-9 px-8 py-2.5 ml-auto'>
              {/* <Button onClick={onSubmit} className='bg-accent1 rounded-full mt-9 px-8 py-2.5 ml-auto'> */}
              <Typography className='text-white text-sm font-medium'>확인</Typography>
            </Button>
          </Box>

          {/* {
            open &&
            <Modal
              open={open}
              onClose={handleClose}
            >
              <Box sx={{ position: 'absolute', backgroundColor: 'white', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', borderRadius: '10px', width: '40%', minWidth: '400px', height: 'fit-content', outline: 'none', paddingX: '', paddingY: '3rem' }}>
                <Typography sx={{ color: '#383838', fontSize: '1.125rem', fontWeight: '400' }}>회원을 탈퇴하시겠습니까?</Typography>
                <Typography sx={{ color: '#E33A3A', fontSize: '0.875rem', fontWeight: '400' }}>(회원 탈퇴 시, 모든 개인정보가 영구 삭제됩니다.)</Typography>
                <Button onClick={onSubmit}>예</Button>
                <Button onClick={handleClose}>아니오</Button>
              </Box>
            </Modal>
          } */}
        </form>
        {/* </Box> */}
      </Box>

      <Footer />
    </>
  )
}