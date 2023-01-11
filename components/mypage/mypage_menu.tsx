import { deleteCookie } from "cookies-next";
import Image from 'next/image';
import Link from "next/link";

import { Box, Typography } from "@mui/material";

import ListIcon from '../../public/Component10.png';
import SurveyIcon from '../../public/signupSuccess.png';
import SettingIcon from '../../public/settingIcon2.png';

const MyPageMenu = () => {
  const onClick = () => {
    document.location = '/login';
    deleteCookie('OMNM');
  }

  return (
    <Box className='border border-solid border-gray0 rounded-[1.25rem] px-14 py-10 mt-6'>
      <Box className='flex flex-row items-center'>
        <Image src={ListIcon} width={14} height={18} />
        <Typography className='text-blak text-base font-medium ml-2'>룸메이트 신청 내역</Typography>
      </Box>
      <Link href='/mypage_receivelist'>
        <a>
          <Typography className="text-black text-base font-regular mt-4">신청 받은 리스트</Typography>
        </a>
      </Link>
      <Link href='/mypage_sendlist'>
        <a>
          <Typography className="text-black text-base font-regular mt-3">신청 보낸 리스트</Typography>
        </a>
      </Link>

      <Box className='flex flex-row mt-9 items-center'>
        <Image src={SurveyIcon} width={18} height={18} />
        <Typography className='text-blak text-base font-medium ml-2'>성향 설문조사</Typography>
      </Box>
      <Link href='/mypage_surveyme'>
        <a>
          <Typography className="text-black text-base font-regular mt-4">나의 성향 설문조사</Typography>
        </a>
      </Link>
      <Link href='/mypage_surveymate'>
        <a>
          <Typography className="text-black text-base font-regular mt-3">룸메이트 성향 설문조사</Typography>
        </a>
      </Link>

      <Box className='flex flex-row mt-9 items-center'>
        <Image src={SettingIcon} width={17} height={18} />
        <Typography className='text-blak text-base font-medium ml-2'>설정</Typography>
      </Box>
      <Link href='/mypage_edit'>
        <a>
          <Typography className="text-black text-base font-regular mt-4">개인정보 수정</Typography>
        </a>
      </Link>
      <Link href='/mypage_changepw'>
        <a>
          <Typography className="text-black text-base font-regular mt-3">비밀번호 변경</Typography>
        </a>
      </Link>
      <Link href='/mypage_withdrawal'>
        <a>
          <Typography className="text-black text-base font-regular mt-3">회원 탈퇴</Typography>
        </a>
      </Link>
      <Link href='/mypage'>
        <a onClick={onClick}>
          <Typography className="text-black text-base font-regular mt-3">로그아웃</Typography>
        </a>
      </Link>
    </Box>
  );
}

export default MyPageMenu;