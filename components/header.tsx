import Image from "next/image";
import Link from "next/link";
import { deleteCookie, getCookie, hasCookie, setCookie } from "cookies-next";

import { Box, Typography, useMediaQuery } from "@mui/material";

import logo from '../public/logo2.png';
import LogoutIcon from '../public/logoutIcon.png';
import SettingIcon from '../public/settingIcon.png';
import profileIcon from '../public/basicProfile.png';

import { useEffect, useState } from "react";
import axios from "axios";

const Header = () => {
  const [isCookie, setIsCookie] = useState(false);
  const [profile, setProfile] = useState<string | null>(null);
  const [innerWidth, setInnerWidth] = useState<number | undefined>();

  const isLabtop = useMediaQuery('(min-width: 1024px)');

  const onClick = () => {
    deleteCookie('OMNM');
    deleteCookie('refreshToken');

    document.location = '/login';
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

    setInnerWidth(window.innerWidth);
  })

  useEffect(() => {
    const resizeListener = () => {
      setInnerWidth(window.innerWidth);
    };

    window.addEventListener("resize", resizeListener);
  }, [innerWidth]);

  return (
    <Box className="flex items-center bg-white border-gray0 border-0 border-b border-solid w-auto labtop:h-[70px] mobile:h-[54px]">
      {
        isCookie ? (
          <>
            <Link href='/main'>
              <a className="labtop:ml-[15%] mobile:ml-[5%]">
                {
                  isLabtop ?
                    <Image src={logo} width={161} height={28} /> :
                    <Image src={logo} width={103} height={18} />
                }
              </a>
            </Link>

            <Box className="flex flex-row items-center ml-auto labtop:mr-[15%] mobile:mr-[5%] mt-1">
              {
                isLabtop &&
                <Link href='/mypage_edit'>
                  <a className='ml-8'>
                    <Image src={SettingIcon} width={24} height={24} />
                  </a>
                </Link>
              }

              {
                isLabtop &&
                <a onClick={onClick} className='ml-8 cursor-pointer'>
                  <Image src={LogoutIcon} width={24} height={24} className='ml-8' />
                </a>
              }

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
              <a className="labtop:ml-[15%] mobile:ml-[5%]">
                {
                  isLabtop ?
                    <Image src={logo} width={161} height={28} /> :
                    <Image src={logo} width={103} height={18} />
                }
              </a>
            </Link>

            <Link href='/login'>
              <a className="ml-auto labtop:mr-[15%] mobile:mr-[5%] mt-1">
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
