import Image from 'next/image';

import { Box, Button, Typography } from "@mui/material";

import basicProfile from "../../public/basicProfile.png";

interface ComponentProps {
  v: any;
  index: number;
}

const MyPageList = ({ props }: { props: ComponentProps }) => {
  return (
    <Box key={props.index} className='flex flex-row items-center border border-solid border-gray0 rounded-xl w-fit h-fit mt-4 mb-1.5 px-6 py-3'>
      {
        props.v.profileUrl === null ?
          <Image src={basicProfile} width={24} height={24} />
          :
          <Image loader={() => props.v.profileUrl} src={props.v.profileUrl} width={24} height={24} />
      }
      <Typography className='text-black text-base font-medium ml-3 w-16'>{props.v.name}</Typography>
      <Typography className='text-gray1 text-xs font-regular ml-1'>· {props.v.age}</Typography>
      <Button className='bg-white border border-solid border-accent1 rounded-full ml-32'>
        <Typography className='text-accent1 text-xs font-regular'>프로필 보기</Typography>
      </Button>
    </Box>
  );
}

export default MyPageList;