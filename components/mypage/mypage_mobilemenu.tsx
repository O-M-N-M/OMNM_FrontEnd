import { deleteCookie } from "cookies-next";
import { useState } from "react";
import Image from 'next/image';

import { Box, Collapse, List, ListItemButton, Typography } from "@mui/material";

import OpenIcon from '../../public/openIcon.png';
import CloseIcon from '../../public/closeIcon.png';
import ListIcon from '../../public/Component10.png';
import SurveyIcon from '../../public/signupSuccess.png';
import SettingIcon from '../../public/settingIcon2.png';

const MyPageMobileMenu = () => {
  const [openFirst, setOpenFirst] = useState(false);
  const [openSecond, setOpenSecond] = useState(false);
  const [openThird, setOpenThird] = useState(false);

  const handleOpenFirst = () => setOpenFirst(!openFirst);
  const handleOpenSecond = () => setOpenSecond(!openSecond);
  const handleOpenThird = () => setOpenThird(!openThird);

  const onClick = () => {
    document.location = '/login';
    deleteCookie('OMNM');
  }

  return (
    <>
      <Box className='border border-solid border-gray0 rounded-lg mt-4'>
        <ListItemButton onClick={handleOpenFirst} className='flex flex-row px-3 py-3'>
          <Image src={ListIcon} width={14} height={18} />
          <Typography className='text-black text-base font-medium ml-2'>룸메이트 신청 내역</Typography>

          <Box className='ml-auto'>
            {
              openFirst ?
                <Image src={OpenIcon} width={24} height={24} /> :
                <Image src={CloseIcon} width={24} height={24} />
            }
          </Box>
        </ListItemButton>

        <Collapse in={openFirst} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton onClick={() => document.location = '/mypage_receivelist'} className='pl-10'>
              <Typography className='text-black text-base font-regular'>신청 받은 리스트</Typography>
            </ListItemButton>
            <ListItemButton onClick={() => document.location = '/mypage_sendlist'} className='pl-10'>
              <Typography className='text-black text-base font-regular'>신청 보낸 리스트</Typography>
            </ListItemButton>
          </List>
        </Collapse>
      </Box>

      <Box className='border border-solid border-gray0 rounded-lg mt-2'>
        <ListItemButton onClick={handleOpenSecond} className='flex flex-row px-3 py-3'>
          <Image src={SurveyIcon} width={18} height={18} />
          <Typography className='text-black text-base font-medium ml-2'>성향 설문조사</Typography>

          <Box className='ml-auto'>
            {
              openSecond ?
                <Image src={OpenIcon} width={24} height={24} /> :
                <Image src={CloseIcon} width={24} height={24} />
            }
          </Box>
        </ListItemButton>

        <Collapse in={openSecond} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton onClick={() => document.location = '/mypage_surveyme'} className='pl-10'>
              <Typography className='text-black text-base font-regular'>나의 성향 설문조사</Typography>
            </ListItemButton>
            <ListItemButton onClick={() => document.location = '/mypage_surveymate'} className='pl-10'>
              <Typography className='text-black text-base font-regular'>룸메이트 성향 설문조사</Typography>
            </ListItemButton>
          </List>
        </Collapse>
      </Box>

      <Box className='border border-solid border-gray0 rounded-lg mt-2'>
        <ListItemButton onClick={handleOpenThird} className='flex flex-row px-3 py-3'>
          <Image src={SettingIcon} width={17} height={18} />
          <Typography className='text-black text-base font-medium ml-2'>설정</Typography>

          <Box className='ml-auto'>
            {
              openThird ?
                <Image src={OpenIcon} width={24} height={24} /> :
                <Image src={CloseIcon} width={24} height={24} />
            }
          </Box>
        </ListItemButton>

        <Collapse in={openThird} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton onClick={() => document.location = '/mypage_edit'} className='pl-10'>
              <Typography className='text-black text-base font-regular'>개인정보 수정</Typography>
            </ListItemButton>
            <ListItemButton onClick={() => document.location = '/mypage_changepw'} className='pl-10'>
              <Typography className='text-black text-base font-regular'>비밀번호 변경</Typography>
            </ListItemButton>
            <ListItemButton onClick={() => document.location = '/mypage_withdrawal'} className='pl-10'>
              <Typography className='text-black text-base font-regular'>회원 탈퇴</Typography>
            </ListItemButton>
            <ListItemButton onClick={onClick} className='pl-10'>
              <Typography className='text-black text-base font-regular'>로그아웃</Typography>
            </ListItemButton>
          </List>
        </Collapse>
      </Box>
    </>
  );
};

export default MyPageMobileMenu;