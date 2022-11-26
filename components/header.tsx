import Image from "next/image";

import { Box, Typography } from "@mui/material";
import logo from '../public/logo2.png';
import MyPageIcon from '../public/Group1.ico';
import Link from "next/link";

import { hasCookie } from "cookies-next";
import { useEffect, useState } from "react";

const Header = () => {
  const [cookie, setCookie] = useState(false);

  useEffect(() => {
    if (hasCookie('OMNM')) {
      setCookie(true);
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
            <Image src={MyPageIcon} width={26} height={26} />
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