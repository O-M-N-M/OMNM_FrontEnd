import { deleteCookie, getCookie } from 'cookies-next';
import Image from 'next/image';

import { Box, Button, IconButton, Modal, ThemeProvider, Typography, useMediaQuery } from '@mui/material';

import { useEffect, useState } from 'react';
import axios from 'axios';

import PrevButton from '../../public/prevButton.png';

import theme from '../../components/theme';
import Footer from '../../components/footer';
import MyPageMenu from '../../components/mypage/mypage_menu';
import MyPageProfile from '../../components/mypage/mypage_profile';

export const MyPageWithdrawalScreen = () => {
  const [userId, setUserId] = useState('');
  const [open, setOpen] = useState(false);
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [tf, setTf] = useState(false);

  const isLabtop = useMediaQuery('(min-width: 1024px)');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onClick = () => {
    deleteCookie('OMNM');
    deleteCookie('refreshToken');
    document.location = '/';
  }

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

    await axios.post(url, body, headers)
      .then(() => {
        setTf(true);
      })
      .catch((err) => {
        if (err.response.data === '회원 정보가 올바르지 않습니다') {
          handleClose();
          alert('회원 정보가 올바르지 않습니다');
        }
      });
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

    if (!tf) getMyData();
  }, [tf]);

  return (
    <>
      <Box className='flex labtop:flex-row mobile:flex-col labtop:justify-center mobile:justify-start min-h-[calc(100vh-70px)] labtop:mx-[15%] mobile:mx-[5%] my-[5%]'>
        {
          isLabtop &&
          <Box>
            <MyPageProfile />
            <MyPageMenu />
          </Box>
        }

        {
          !isLabtop &&
          <Box className='flex flex-row items-center mb-5'>
            {
              !isLabtop &&
              <IconButton onClick={() => '/mypage'}>
                <Image src={PrevButton} width={24} height={24} />
              </IconButton>
            }
            <Typography className='text-black text-xl font-medium w-full ml-2'>회원 탈퇴</Typography>
          </Box>
        }

        <Box className='flex flex-col justify-center items-center border border-solid border-gray0 labtop:rounded-[1.25rem] mobile:rounded-lg w-full h-fit labtop:px-0 mobile:px-3 labtop:py-20 mobile:py-9 labtop:ml-6 mobile:ml-0'>
          {
            isLabtop &&
            <Typography className='text-black text-xl font-medium text-center w-full'>회원 탈퇴</Typography>
          }

          <Box className='labtop:w-fit mobile:w-full labtop:mt-10 mobile:mt-0'>
            <Typography className='text-black text-base font-medium'>아이디</Typography>
            <input
              type="text"
              name="id"
              placeholder="아이디 입력"
              value={id}
              onChange={(e) => setId(e.target.value)}
              className='border border-solid border-gray0 rounded-full text-gray1 text-xs font-regular labtop:w-80 mobile:w-full p-4 mt-2 focus:outline-none'
              required />
          </Box>

          <Box className='labtop:w-fit mobile:w-full'>
            <Typography className='text-black text-base font-medium mt-6'>비밀번호</Typography>
            <input
              type="password"
              name="pw"
              placeholder="비밀번호 입력"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              className='border border-solid border-gray0 rounded-full text-gray1 text-xs font-regular labtop:w-80 mobile:w-full p-4 mt-2 focus:outline-none'
              required />
          </Box>

          <Box className='flex labtop:w-80 mobile:w-full' >
            <Button onClick={handleOpen} className='bg-accent1 rounded-full mt-9 px-8 py-2.5 ml-auto'>
              <Typography className='text-white text-sm font-medium'>확인</Typography>
            </Button>
          </Box>

          {
            open &&
            <Modal
              open={open}
              onClose={handleClose}
            >
              <ThemeProvider theme={theme}>
                <Box sx={{ position: 'absolute', backgroundColor: 'white', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', borderRadius: '10px', width: { xs: '95%', md: '40%' }, maxWidth: '530px', height: 'fit-content', outline: 'none', paddingX: '', paddingY: '3rem' }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    {
                      tf ? (
                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                          <Typography sx={{ color: '#383838', fontSize: '1.125rem', fontWeight: '400' }}>회원 탈퇴를 완료하였습니다.</Typography>
                          <Button onClick={onClick} sx={{ backgroundColor: '#4B99EB !important', borderRadius: '200px', color: 'white', width: '100px', height: '40px', marginTop: '24px' }}>확인</Button>
                        </Box>
                      ) : (
                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                          <Typography sx={{ color: '#383838', fontSize: '1.125rem', fontWeight: '400' }}>회원을 탈퇴하시겠습니까?</Typography>
                          <Typography sx={{ color: '#E33A3A', fontSize: '0.875rem', fontWeight: '400', marginTop: '8px' }}>(회원 탈퇴 시, 모든 개인정보가 영구 삭제됩니다.)</Typography>
                          <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: '24px' }}>
                            <Button onClick={onSubmit} sx={{ backgroundColor: '#4B99EB !important', borderRadius: '200px', color: 'white', width: '100px', height: '40px' }}>예</Button>
                            <Button onClick={handleClose} sx={{ backgroundColor: '#9B9EA1 !important', borderRadius: '200px', color: 'white', width: '100px', height: '40px', marginLeft: '24px' }}>아니오</Button>
                          </Box>
                        </Box>)
                    }
                  </Box>
                </Box>
              </ThemeProvider>
            </Modal>
          }
        </Box>
      </Box>

      <Footer />
    </>
  )
}