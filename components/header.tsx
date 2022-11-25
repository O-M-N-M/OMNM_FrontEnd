import Image from "next/image";

import { Box } from "@mui/material";
import logo from '../public/logo2.png';
import MyPageIcon from '../public/Group1.ico';
import Link from "next/link";

const Header = () => {
  return (
    <Box className="flex items-center bg-white w-auto h-[50px]">
      <Link href='/'>
        <a className="ml-[15%]">
          <Image src={logo} width={115} height={20} />
        </a>
      </Link>

      <a className="ml-auto mr-[15%] mt-1">
        <Image src={MyPageIcon} width={26} height={26} />
      </a>
    </Box>
  );
}

export default Header;
