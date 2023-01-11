import Image from "next/image";
import Link from "next/link";
import { deleteCookie, getCookie, hasCookie, setCookie } from "cookies-next";

import { Box, Typography } from "@mui/material";

import logo from '../public/logo2.png';
import LogoutIcon from '../public/logoutIcon.png';
import SettingIcon from '../public/settingIcon.png';
import profileIcon from '../public/basicProfile.png';

import { useEffect, useState } from "react";
import axios from "axios";

const Header = () => {
  const [isCookie, setIsCookie] = useState(false);
  const [profile, setProfile] = useState<string | null>(null);

  const onClick = () => {
    deleteCookie('OMNM');
    deleteCookie('refreshToken');
  }

  const checkRefreshToken = async () => {
    const url = '/api/token';
    const token = getCookie('OMNM');
    const rToken = getCookie('refreshToken');
    const body = `accessToken=${token}&refreshToken=${rToken}`;

    await axios.post(url, body)
      .then((res) => {
        setCookie('OMNM', res.data);

        document.location = window.location.pathname;
      })
      .catch((err) => {
        if (err.response.status === 403) {
          alert('세션이 만료되었습니다.\n로그인을 다시해주세요.');

          deleteCookie('OMNM');
          document.location = '/login';
        }
      });
  };

  useEffect(() => {
    const loadProfile = async () => {
      const url = '/api/myInfo';
      const token = getCookie('OMNM');
      const headers = {
        headers: {
          'OMNM': `${token}`
        }
      };

      axios.get(url, headers)
        .then((res) => setProfile(res.data.profileUrl))
        .catch((err) => {
          if (err.response.status === 403) checkRefreshToken();
        })
    };

    if (hasCookie('OMNM')) {
      setIsCookie(true);
      loadProfile();
    }
    else {
      setIsCookie(false);

      if (!['/', '/login', '/findid', '/findpw', '/signup', '/signup_success'].includes(window.location.pathname)) {
        document.location = '/login';
      }
    }
  })

  return (
    <Box className="flex items-center bg-white border-gray0 border-0 border-b border-solid w-auto h-[70px]">
      {
        isCookie ? (
          <>
            <Link href='/main'>
              <a className="ml-[15%]">
                <Image src={logo} width={161} height={28} />
              </a>
            </Link>

            <Box className="flex flex-row items-center ml-auto mr-[15%] mt-1">
              <Link href='/mypage_edit'>
                <a className='ml-8'>
                  <Image src={SettingIcon} width={24} height={24} />
                </a>
              </Link>
              <Link href='/login'>
                <a onClick={onClick} className='ml-8'>
                  <Image src={LogoutIcon} width={24} height={24} className='ml-8' />
                </a>
              </Link>
              <Link href='/mypage'>
                <a className='ml-8'>
                  {
                    profile === null ? (
                      <Image src={profileIcon} width={36} height={36} />
                    ) : (
                      <Box className='border border-gray1 border-solid rounded-full w-[36px] h-[36px]'>
                        <Image loader={() => profile} src={profile} width={36} height={36} className='rounded-full' />
                      </Box>
                    )
                  }
                </a>
              </Link>
            </Box>
          </>
        ) : (
          <>
            <Link href='/'>
              <a className="ml-[15%]">
                <Image src={logo} width={115} height={20} />
              </a>
            </Link>

            <Link href='/login'>
              <a className="ml-auto mr-[15%] mt-1">
                <Typography className="text-base fomt-medium">로그인</Typography>
              </a>
            </Link>
          </>
        )
      }
    </Box>
  );
}

export default Header;
