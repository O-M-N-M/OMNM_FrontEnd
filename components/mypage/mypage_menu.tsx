import Link from "next/link";
import { deleteCookie } from "cookies-next";

import { Box, Typography } from "@mui/material";

const MyPageMenu = () => {
  const onClick = () => {
    document.location = '/login';
    deleteCookie('OMNM');
  }

  return (
    <Box className='border border-solid border-gray0 rounded-[1.25rem] px-14 py-10 mt-6'>
      <Typography className='text-blak text-base font-medium'>룸메 신청 내역</Typography>
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
      <Link href='/mypage'>
        <a>
          <Typography className="text-black text-base font-regular mt-3">찜한 룸메 리스트</Typography>
        </a>
      </Link>

      <Typography className='text-blak text-base font-medium mt-9'>성향 설문조사</Typography>
      <Link href='/mypage_surveyme'>
        <a>
          <Typography className="text-black text-base font-regular mt-4">나의 성향 설문조사</Typography>
        </a>
      </Link>
      <Link href='/mypage_surveymate'>
        <a>
          <Typography className="text-black text-base font-regular mt-3">룸메 성향 설문조사</Typography>
        </a>
      </Link>

      <Typography className='text-blak text-base font-medium mt-9'>설정</Typography>
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