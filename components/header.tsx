import Image from "next/image";
import Link from "next/link";
import { deleteCookie, getCookie, hasCookie, setCookie } from "cookies-next";

import { Box, Typography } from "@mui/material";

import logo from '../public/logo2.png';
import MyPageIcon from '../public/Group1.ico';

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const Header = () => {
  const [isCookie, setIsCookie] = useState(false);
  const [profile, setProfile] = useState<string | null>(null);

  const checkRefreshToken = async () => {
    const url = '/api/token';
    const body = `accessToken=${getCookie('OMNM')}&refreshToken=${getCookie('refreshToken')}`;
    await axios.post(url, body)
      .then((res) => {
        if (res.data === '재로그인 요청') {
          alert('세션이 만료되었습니다.\n로그인을 다시해주세요.');
          deleteCookie('OMNM');
          document.location = '/login';
        }
        else {
          setCookie('OMNM', res.data);

          const router = useRouter();
          router.replace(router.asPath);
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
          if (err.response.status === 403) {
            checkRefreshToken();
          }
        })
    };

    if (hasCookie('OMNM')) {
      setIsCookie(true);
      loadProfile();
    } else {
      setIsCookie(false);
    }
  })

  return (
    <Box className="flex items-center bg-white border-gray0 border-0 border-b border-solid w-auto h-[50px]">
      {
        isCookie ? (
          <>
            <Link href='/main'>
              <a className="ml-[15%]">
                <Image src={logo} width={115} height={20} />
              </a>
            </Link>

            <Link href='/mypage'>
              <a className="ml-auto mr-[15%] mt-1">
                {
                  profile === null ? (
                    <Image src={MyPageIcon} width={26} height={26} />
                  ) : (
                    <Box className='border border-gray1 border-solid rounded-full w-[26px] h-[26px]'>
                      <Image loader={() => profile} src={profile} width={26} height={26} className='rounded-full' />
                    </Box>
                  )
                }
              </a>
            </Link>
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
