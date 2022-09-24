import { Box, Typography, FormControlLabel, Radio, RadioGroup, FormControl, IconButton, } from "@mui/material";
import React, { Dispatch, InputHTMLAttributes, SetStateAction } from "react";
import Image, { StaticImageData } from "next/image";
import basicProfile from '../../public/basicProfile.png';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

interface props {
  image: HTMLInputElement | null;
  name: string;
  gender: number;
  kakao: string;
  dormitory: number;
  setImage: Dispatch<SetStateAction<HTMLInputElement | null>>;
  setName: Dispatch<SetStateAction<string>>;
  setGender: Dispatch<SetStateAction<number>>;
  setKakao: Dispatch<SetStateAction<string>>;
  setDormitory: Dispatch<SetStateAction<number>>;
}

export const ProfileBox: React.FunctionComponent<props> = ({ image, setImage, name, setName, gender, setGender, kakao, setKakao, dormitory, setDormitory }) => {
  return (
    <Box className="mt-4">
      {
        image === null ?
          <Image src={basicProfile} width={90} height={90} className="rounded-full" />
          : <Image src={window.URL.createObjectURL(image)} width={90} height={90} className="rounded-full" />
      }
      <IconButton aria-label="upload picture" component="label">
        <input
          hidden
          accept="image/*"
          type="file"
          onChange={(e) => setImage(e.currentTarget)} />
        <PhotoCamera />
      </IconButton>

      <Typography className="text-black text-sm font-medium">이름</Typography>
      <input
        type="text"
        name="name"
        placeholder="이름 입력"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="rounded-full text-gray1 border border-solid border-gray0 text-xs block w-1/2 p-2.5 mt-2 focus:outline-none" required />

      <Typography className="text-black text-sm mt-4">성별</Typography>
      <FormControl>
        <RadioGroup row>
          <FormControlLabel value="0" control={<Radio icon={<CheckCircleOutlineIcon sx={{ color: "#DBDBDB" }} />} checkedIcon={<CheckCircleIcon />} size="small" />} label={<Typography className="text-xs font-regular">남자</Typography>} />
          <FormControlLabel value="1" control={<Radio icon={<CheckCircleOutlineIcon sx={{ color: "#DBDBDB" }} />} checkedIcon={<CheckCircleIcon />} size="small" />} label={<Typography className="text-xs font-regular">여자</Typography>} />
        </RadioGroup>
      </FormControl>

      <Typography className="text-black text-sm mt-4">카카오톡 아이디</Typography>
      <input
        type="text"
        name="kakao"
        placeholder="카카오톡 아이디 입력"
        value={kakao}
        onChange={(e) => setKakao(e.target.value)}
        className="rounded-full text-gray1 border border-solid border-gray0 text-xs block w-2/3 p-2.5 mt-2 focus:outline-none" required />

      <Typography className="text-black text-sm mt-4">생활관 정보</Typography>
      <FormControl>
        <RadioGroup row>
          <FormControlLabel value="3082" control={<Radio icon={<CheckCircleOutlineIcon sx={{ color: "#DBDBDB" }} />} checkedIcon={<CheckCircleIcon />} size="small" />} label={<Typography className="text-xs font-regular">308관 2인실</Typography>} />
          <FormControlLabel value="3084" control={<Radio icon={<CheckCircleOutlineIcon sx={{ color: "#DBDBDB" }} />} checkedIcon={<CheckCircleIcon />} size="small" />} label={<Typography className="text-xs font-regular">308관 4인실</Typography>} />
          <FormControlLabel value="3092" control={<Radio icon={<CheckCircleOutlineIcon sx={{ color: "#DBDBDB" }} />} checkedIcon={<CheckCircleIcon />} size="small" />} label={<Typography className="text-xs font-regular">309관 2인실</Typography>} />
        </RadioGroup>
      </FormControl>

    </Box>
  )
}