import Image from "next/image";

import { Box, Typography } from "@mui/material";
import logo from '../public/logo2.png';
import MyPageIcon from '../public/Group1.ico';
import Link from "next/link";

import { getCookie, hasCookie } from "cookies-next";
import { useEffect, useState } from "react";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const Header = () => {
  const [cookie, setCookie] = useState(false);
  const [profile, setProfile] = useState<string | null>(null)

  useEffect(() => {
    const loadProfile = async () => {
      const url = '/api/myInfo';
      const token = getCookie('OMNM');

      const config: AxiosRequestConfig = {
        method: 'get',
        url: url,
        headers: {
          'OMNM': `${token}`
        }
      }

      const response: AxiosResponse = await axios(config);
      setProfile(response.data.profileUrl);
      console.log(profile);
    };

    if (hasCookie('OMNM')) {
      setCookie(true);
      loadProfile();
    }
  }, [])

  return (
    <Box className="flex items-center bg-white border-gray0 border-0 border-b border-solid w-auto h-[50px]">
      <Link href='/'>
        <a className="ml-[15%]">
          <Image src={logo} width={115} height={20} />
        </a>
      </Link>

      {
        cookie ? (
          <a className="ml-auto mr-[15%] mt-1">
            {
              profile === null ? (
                <Image src={MyPageIcon} width={26} height={26} />
              ) : (
                <Image loader={() => profile} src={profile} width={26} height={26} />
              )
            }
          </a>
        ) : (
          <Link href='/login'>
            <a className="ml-auto mr-[15%] mt-1">
              <Typography className="text-base fomt-medium">로그인</Typography>
            </a>
          </Link>
        )
      }
    </Box>
  );
}

export default Header;
