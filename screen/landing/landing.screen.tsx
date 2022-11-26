import { NextPage } from "next";
import Image from "next/image";
import Link from 'next/link';

import { Box, Button, Typography } from "@mui/material";

import Header from '../../components/header';
import LogoString from '../../public/logo3.png';
import LogoBoth from '../../public/logo.png';

// import { getCookie, hasCookie } from "cookies-next";
// import axios from "axios";

export const LadingScreen: NextPage = () => {
  // const onClick = async () => {
  //   if (hasCookie('OMNM')) {
  //     await axios.get('/api/test', {
  //       headers: {
  //         OMNM: `${getCookie('OMNM')}`
  //       }
  //     }).then(res => alert(res.data)).catch(err => console.log(err));

  //   } else {
  //     alert('쿠키 없다아아아아아아ㅏ');
  //   }
  // }

  return (
    <>
      <Header />

      <Box className='flex flex-row mt-40'>
        <Box className="ml-[15%]">
          <Typography className="text-[3.3rem] font-bold">
            {`오늘 만나고 내일 만나는\n기숙사 `}
            <Typography component="span" className="text-accent1 text-[3.3rem] font-bold">
              룸메 매칭
            </Typography>
            {" 서비스"}
          </Typography>

          <Typography className="text-[1.68rem] font-normal mt-3">
            <Image src={LogoString} width={114.67} height={19.65} />
            {` 에서 나와 잘맞는 룸메를 찾아보세요.\n소울메이트가 될 수 있는 룸메를 추천해드려요!`}
          </Typography>
        </Box>

        <Box className="ml-auto mr-[15%]">
          <Image src={LogoBoth} width={275} height={280} />
        </Box>
      </Box>
    </>

    //   <Box className="flex flex-col items-center w-screen">
    //     <Box className="flex justify-between w-full max-w-screen-lg gap-3">
    //       <Box className="flex flex-col gap-5">
    //         <Box>
    //           <Typography variant="h1">
    //    {`오늘 만나고 내일 만나는\n기숙사 `}
    //             <Box component="span" className="text-accent1">
    //               룸메 매칭
    //             </Box>
    //             {" 서비스"}
    //           </Typography>
    //         </Box>
    //         <Box className="flex flex-col gap-2">
    //           <Typography variant="h5">
    //             <Icon
    //               icon="omnm"
    //               width={OMNM_ICON_WIDTH}
    //               height={OMNM_ICON_HEIGHT}
    //             />
    //             {"에서 나와 잘맞는 룸메를 찾아보세요"}
    //           </Typography>
    //           <Typography variant="h5">
    //             소울메이트가 될 수 있는 룸메를 추천해드려요!
    //           </Typography>
    //         </Box>
    //       </Box>
    //       <Link href="/login">
    //         <a>로그인</a>
    //       </Link>
    //       <Link href="/signup">
    //         <a>회원가입</a>
    //       </Link>

    //       <Button onClick={onClick}>쿠키 있없</Button>

    //       {/* <Typography>{ck}</Typography> */}
    //     </Box>
    //   </Box>
  );
};
