import React, { Dispatch, SetStateAction } from "react";
import Image from "next/image";

import { Box, Typography, FormControlLabel, Radio, RadioGroup, FormControl, IconButton, } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

import basicProfile from '../../public/basicProfile.png';

interface props {
  image: File | null;
  name: string;
  gender: number;
  kakao: string;
  dormitory: number;
  setImage: Dispatch<SetStateAction<File | null>>;
  setName: Dispatch<SetStateAction<string>>;
  setGender: Dispatch<SetStateAction<number>>;
  setKakao: Dispatch<SetStateAction<string>>;
  setDormitory: Dispatch<SetStateAction<number>>;
}

export const ProfileBox: React.FunctionComponent<props> = ({ image, setImage, name, setName, gender, setGender, kakao, setKakao, dormitory, setDormitory }) => {
  return (
    <Box className="flex flex-col justify-center items-center mt-10">
      <Box className="relative text-center">
        {
          image === null ?
            <Image src={basicProfile} width={90} height={90} className="absolute rounded-full" />
            : (
              <Box className='border border-gray1 border-solid rounded-full w-[90px] h-[90px]'>
                <Image src={URL.createObjectURL(image)} width={90} height={90} className="absolute rounded-full" />
              </Box>
            )
        }

        <IconButton aria-label="upload picture" component="label" className="absolute top-14 right-[35px] bg-white border border-solid border-gray1">
          <input
            hidden
            accept="image/*"
            type="file"
            onChange={(e) => {
              if (e.target.files !== null && typeof e.target.files[0] !== 'undefined') {
                setImage(e.target.files[0]);
              } else {
                setImage(image);
              }
            }} />
          <PhotoCamera fontSize="small" />
        </IconButton>

        <Box className='bg-gray11 rounded-lg px-3 py-1.5 mt-4'>
          <Typography className='text-gray1 text-xs font-medium'>????????? ????????? ????????? ???????????????</Typography>
        </Box>
      </Box>

      <Box className='w-full mt-10'>
        <Typography className="text-black text-lg font-medium">??????</Typography>
        <input
          type="text"
          name="name"
          placeholder="?????? ??????"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="rounded-full text-gray1 text-sm font-regular border border-solid border-gray0 block w-[75%] h-12 p-2.5 mt-2 focus:outline-none" required />
      </Box>

      <Box className='w-full mt-9'>
        <Typography className="text-black text-lg font-medium">??????</Typography>
        <FormControl>
          <RadioGroup row onChange={(e) => setGender(parseInt(e.target.value))}>
            <FormControlLabel value="0" control={<Radio icon={<CheckCircleOutlineIcon sx={{ color: "#DBDBDB" }} />} checkedIcon={<CheckCircleIcon />} size="small" />} label={<Typography className="text-black text-base font-regular">??????</Typography>} />
            <FormControlLabel value="1" control={<Radio icon={<CheckCircleOutlineIcon sx={{ color: "#DBDBDB" }} />} checkedIcon={<CheckCircleIcon />} size="small" />} label={<Typography className="text-black text-base font-regular">??????</Typography>} />
          </RadioGroup>
        </FormControl>
      </Box>

      <Box className='w-full mt-9'>
        <Typography className="text-black text-lg font-medium">???????????? ?????????</Typography>
        <input
          type="text"
          name="kakao"
          placeholder="???????????? ????????? ??????"
          value={kakao}
          onChange={(e) => setKakao(e.target.value)}
          className="rounded-full text-gray1 text-sm font-regular border border-solid border-gray0 block w-[75%] h-12 p-2.5 mt-2 focus:outline-none" required />
      </Box>

      <Box className='w-full mt-9'>
        <Typography className="text-black text-lg font-medium">????????? ??????</Typography>
        <FormControl>
          <RadioGroup row onChange={(e) => setDormitory(parseInt(e.target.value))} className='flex flex-col'>
            <Box>
              <FormControlLabel value="0" control={<Radio icon={<CheckCircleOutlineIcon sx={{ color: "#DBDBDB" }} />} checkedIcon={<CheckCircleIcon />} size="small" />} label={<Typography className="text-black text-base font-regular">308??? 2??????</Typography>} />
              <FormControlLabel value="1" control={<Radio icon={<CheckCircleOutlineIcon sx={{ color: "#DBDBDB" }} />} checkedIcon={<CheckCircleIcon />} size="small" />} label={<Typography className="text-black text-base font-regular">308??? 4??????</Typography>} />
            </Box>
            <FormControlLabel value="2" control={<Radio icon={<CheckCircleOutlineIcon sx={{ color: "#DBDBDB" }} />} checkedIcon={<CheckCircleIcon />} size="small" />} label={<Typography className="text-black text-base font-regular">309??? 2??????</Typography>} />
          </RadioGroup>
        </FormControl>
      </Box>
    </Box>
  );
}