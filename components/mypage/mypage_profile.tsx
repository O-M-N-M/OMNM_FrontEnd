import { Box, Typography } from "@mui/material";

import { getCookie } from "cookies-next";
import Image from "next/image";

import { useEffect, useState } from "react";
import axios from "axios";

import basicProfile from "../../public/basicProfile.png";
import MyPageToggle from './mypage_toggle';

const token = getCookie('OMNM');

const MyPageProfile = () => {
  const [state, setState] = useState<boolean>();

  const [userId, setUserId] = useState('');
  const [kakaoId, setKaKaoId] = useState('');
  const [name, setName] = useState('');
  const [dormitory, setDormitory] = useState(-1);
  const [profile, setProfile] = useState('');

  const onClick = async () => {
    const url = `/api/users/${userId}/matching`;
    const headers = {
      headers: {
        'OMNM': `${token}`
      }
    };

    await axios.patch(url, {}, headers)
      .then((res) => {
        if (res.data === '룸메이트 구하는 중') {
          setState(false);
        } else {
          setState(true);
        }
      });
  }

  const dormitoryTitle = ['308관 2인실', '308관 4인실', '309관 2인실'];

  useEffect(() => {
    const headers = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        'OMNM': `${token}`
      }
    };

    const getMyData = async () => {
      const url = '/api/myInfo';

      await axios.get(url, headers)
        .then((res) => {
          setKaKaoId(res.data.kakaoId);
          setName(res.data.name);
          setProfile(res.data.profileUrl);
          setDormitory(res.data.dormitory.toString());
          setUserId(res.data.userId);
        })
        .catch((err) => console.log(err));
    }

    const getState = async () => {
      const url = '/api/myInfo/isMatched';

      await axios.get(url, headers)
        .then((res) => {
          setState(res.data);
        })
        .catch((err) => console.log(err));
    }

    getMyData();
    getState();
  }, []);

  return (
    <Box className='flex flex-col justify-center items-center border border-solid border-gray0 rounded-[1.25rem] min-w-[18rem] px-7 py-10'>
      {
        profile === null ? (
          <Image src={basicProfile} width={100} height={100} />
        ) : (
          <Box className='border border-gray1 border-solid rounded-full w-[100px] h-[100px]'>
            {profile && <Image loader={() => profile} src={profile} width={100} height={100} className='rounded-full' />}
          </Box>
        )
      }

      <Typography className='text-black text-2xl font-medium mt-5'>{name}</Typography>

      <Box className='flex flex-row items-center border border-solid border-gray0 rounded-xl px-7 py-3 mt-6'>
        {
          state ? (
            <>
              <Typography className='text-black text-sm font-regular'>룸메이트 매칭 완료</Typography>
              <MyPageToggle checked onClick={onClick} className='ml-5' />
            </>
          ) : (
            <>
              <Typography className='text-black text-sm font-regular'>룸메이트 구하는 중</Typography>
              <MyPageToggle onClick={onClick} className='ml-5' />
            </>
          )
        }
      </Box>

      <Box className='border border-solid border-gray0 rounded-xl px-7 py-6 mt-2'>
        <Box className='flex flex-row'>
          <Typography className='text-black text-sm font-regular'>카카오톡 ID</Typography>
          <Typography className='text-black text-sm font-medium ml-auto'>{kakaoId}</Typography>
        </Box>
        <Box className='flex flex-row mt-5'>
          <Typography className='text-black text-sm font-regular'>생활관 정보</Typography>
          <Typography className='text-black text-sm font-medium ml-7'>{dormitoryTitle[dormitory]}</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default MyPageProfile;