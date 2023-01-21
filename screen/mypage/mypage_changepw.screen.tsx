import { getCookie } from "cookies-next";
import Image from 'next/image';

import { useEffect, useState } from "react";
import axios from "axios";

import { Box, Button, IconButton, Modal, Typography, useMediaQuery } from "@mui/material";

import PrevButton from '../../public/prevButton.png';

import Footer from "../../components/footer";
import MyPageMenu from "@/components/mypage/mypage_menu";
import MyPageProfile from "@/components/mypage/mypage_profile";

export const MyPageChangePwScreen = () => {
  const [open, setOpen] = useState(false);
  const [nowPw, setNowPw] = useState('');
  const [newPw, setNewPw] = useState('');
  const [userId, setUserId] = useState('');
  const [checkNewPw, setCheckNewPw] = useState('');

  const [resultNowPw, setResultNowPw] = useState(true);
  const [resultNewPw, setResultNewPw] = useState(true);
  const [resultCheckNewPw, setResultCheckNewPw] = useState(true);

  const isLabtop = useMediaQuery('(min-width: 1024px)');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onClick = () => {
    document.location = '/mypage_changepw';
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let pwReg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,12}$/;

    if (nowPw === newPw) {
      alert('현재 비밀번호와 변경하고 싶은 비밀번호가 같습니다.');
    }
    else if (!pwReg.test(newPw)) {
      setResultNewPw(false);
    }
    else if (newPw !== checkNewPw) {
      setResultCheckNewPw(false);
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
        .then((res) => {
          if (res.data === '비밀번호 변경 완료') handleOpen();
        })
        .catch((err) => {
          if (err.response.data === '회원정보가 올바르지 않습니다') setResultNowPw(false);
        });
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
        .catch((err) => console.log(err));
    }

    getMyData();
  }, []);

  useEffect(() => {
    let pwReg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,12}$/;

    setResultNowPw(true);

    if (newPw === '' || pwReg.test(newPw)) setResultNewPw(true);
    else if (!pwReg.test(newPw)) setResultNewPw(false);

    if (checkNewPw === '' || newPw === checkNewPw) setResultCheckNewPw(true);
    else if (newPw !== checkNewPw) setResultCheckNewPw(false);
  }, [nowPw, newPw, checkNewPw]);

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
            <Typography className='text-black text-xl font-medium w-full ml-2'>비밀번호 변경</Typography>
          </Box>
        }

        <form onSubmit={onSubmit} className='flex flex-col justify-center items-center border border-solid border-gray0 labtop:rounded-[1.25rem] mobile:rounded-lg w-full h-fit labtop:px-0 mobile:px-3 labtop:py-20 mobile:py-9 labtop:ml-6'>
          {
            isLabtop &&
            <Typography className='text-black text-xl font-medium text-center w-full'>비밀번호 변경</Typography>
          }

          <Box className='labtop:mt-10 mobile:mt-0 labtop:w-fit mobile:w-full'>
            <Typography className='text-black text-base font-medium'>현재 비밀번호</Typography>
            <input
              type="password"
              name="pw"
              placeholder="현재 비밀번호 입력"
              value={nowPw}
              onChange={(e) => setNowPw(e.target.value)}
              className='border border-solid border-gray0 rounded-full text-gray1 text-xs font-regular labtop:w-80 mobile:w-full p-4 mt-2 focus:outline-none'
              required />
            {
              !resultNowPw && <Typography className='text-red text-xs font-regular mt-2 ml-1'>현재 비밀번호가 올바르지 않습니다.</Typography>
            }
          </Box>

          <Box className='mt-7 labtop:w-fit mobile:w-full'>
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
              className='border border-solid border-gray0 rounded-full text-gray1 text-xs font-regular labtop:w-80 mobile:w-full p-4 mt-2 focus:outline-none'
              required />

            {
              !resultNewPw && <Typography className='text-red text-xs font-regular mt-2 ml-1'>6~12자 이내의 영문과 숫자, 특수문자를 조합해 입력해주세요.</Typography>
            }
          </Box>

          <Box className='mt-7 labtop:w-fit mobile:w-full'>
            <Typography className='text-black text-base font-medium'>새 비밀번호 확인</Typography>

            <input
              type="password"
              name="pw"
              placeholder="새 비밀번호 재입력"
              value={checkNewPw}
              onChange={(e) => setCheckNewPw(e.target.value)}
              className='border border-solid border-gray0 rounded-full text-gray1 text-xs font-regular labtop:w-80 mobile:w-full p-4 mt-2 focus:outline-none'
              required />

            {
              !resultCheckNewPw && <Typography className='text-red text-xs font-regular mt-2 ml-1'>비밀번호가 일치하지 않습니다.</Typography>
            }
          </Box>

          <Box className='flex labtop:w-80 mobile:w-full'>
            <Button type='submit' className='bg-accent1 rounded-full mt-9 px-8 py-2.5 ml-auto'>
              <Typography className='text-white text-sm font-medium'>확인</Typography>
            </Button>
          </Box>
        </form>
      </Box>

      {
        open &&
        <Modal
          open={open}
          onClose={handleClose}
        >
          <Box sx={{ position: 'absolute', backgroundColor: 'white', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', borderRadius: '10px', width: '40%', maxWidth: '530px', height: 'fit-content', outline: 'none', paddingX: '', paddingY: '3rem' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <Typography sx={{ color: '#383838', fontSize: '1.125rem', fontWeight: '400' }}>새로운 비밀번호가 설정되었습니다.</Typography>
              <Button onClick={onClick} sx={{ backgroundColor: '#4B99EB !important', borderRadius: '200px', color: 'white', width: '100px', height: '40px', marginTop: '24px' }}>확인</Button>
            </Box>
          </Box>
        </Modal>
      }

      <Footer />
    </>
  );
}