import { getCookie } from "cookies-next";
import Image from "next/image";

import { useEffect, useState } from "react";
import axios from "axios";

import { Box, Button, FormControl, FormControlLabel, IconButton, Modal, Radio, RadioGroup, Typography } from '@mui/material'
import { PhotoCamera } from "@mui/icons-material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import Footer from "../../components/footer";
import MyPageLeft from '../../components/mypage/mypage_left'
import basicProfile from '../../public/basicProfile.png';

export const MyPageEditScreen = () => {
  const [kakaoId, setKakaoId] = useState('');
  const [userId, setUserId] = useState(-1);
  const [dormitory, setDormitory] = useState(-1);
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState<string | null>(null);
  const [profile, setProfile] = useState<File | null>(null);

  const dormitoryTitle = ['308관 2인실', '308관 4인실', '309관 2인실'];

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onClick = () => {
    document.location = '/mypage_edit';
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    const userDto = {
      kakaoId: `${kakaoId}`,
      dormitory: dormitory
    };

    if (profile !== null) {
      formData.append('file', profile);
    }
    else if (image !== null) {
      formData.append('file', null!);
    }

    formData.append(
      'key',
      new Blob([JSON.stringify(userDto)],
        { type: "application/json" }
      )
    );

    const url = `/api/users/${userId}/modifyInfo`;
    const token = getCookie('OMNM');
    const headers = {
      headers: {
        'Content-Type': 'multipart/form-data',
        'OMNM': `${token}`
      }
    };

    await axios.patch(url, formData, headers)
      .then((res) => {
        if (res.data === '회원정보 수정 완료') handleOpen();
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    const getMyData = async () => {
      const url = '/api/myInfo';
      const token = getCookie('OMNM');
      const headers = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          'OMNM': `${token}`
        }
      };

      await axios.get(url, headers)
        .then((res) => {
          setUserId(res.data.userId);
          setKakaoId(res.data.kakaoId);
          setImage(res.data.profileUrl);
          setDormitory(res.data.dormitory);
        })
        .catch((err) => console.log(err));
    }

    getMyData();
  }, []);

  return (
    <>
      <Box className='flex flex-row justify-center min-h-[calc(100vh-70px)] mx-[15%] my-[5%]'>
        <Box>
          <MyPageLeft />
        </Box>

        <form onSubmit={onSubmit} className='flex flex-col justify-center items-center border border-solid border-gray0 rounded-[1.25rem] w-full h-fit py-20 ml-6'>
          <Typography className='text-black text-xl font-medium text-center w-full'>개인정보 수정</Typography>

          <Box className="relative text-center mt-10">
            {
              profile !== null ?
                <Image src={URL.createObjectURL(profile)} width={90} height={90} className="absolute rounded-full" />
                :
                image === null ?
                  <Image src={basicProfile} width={90} height={90} className="absolute rounded-full" />
                  : (
                    <Box className='border border-gray1 border-solid rounded-full w-[90px] h-[90px]'>
                      <Image loader={() => image} src={image} width={90} height={90} className="absolute rounded-full" />
                    </Box>
                  )
            }
            <IconButton aria-label="upload picture" component="label" className="absolute top-14 right-[-15px] bg-white border border-solid border-gray1">
              <input
                hidden
                accept="image/*"
                type="file"
                onChange={(e) => {
                  if (e.target.files !== null && typeof e.target.files[0] !== 'undefined') {
                    setProfile(e.target.files[0]);
                  } else {
                    setProfile(profile);
                  }
                }} />
              <PhotoCamera fontSize="small" />
            </IconButton>
          </Box>

          <Box className='bg-gray11 rounded-lg px-3 py-1.5 mt-4'>
            <Typography className='text-gray1 text-xs font-medium'>정방향 프로필 사진을 추천드려요</Typography>
          </Box>

          <Box>
            <Typography className='text-black text-base font-medium mt-10'>카카오톡 ID</Typography>
            <input
              type="text"
              name="id"
              placeholder={kakaoId}
              value={kakaoId}
              onChange={(e) => setKakaoId(e.target.value)}
              className='border border-solid border-gray0 rounded-full text-gray1 text-xs font-regular w-80 p-4 mt-2 focus:outline-none'
              required />
          </Box>

          <Box className='w-80'>
            <Typography className='text-black text-base font-medium mt-7'>생활관 정보</Typography>
            <FormControl>
              <RadioGroup row onChange={(e) => setDormitory(parseInt(e.target.value))} className='flex flex-col'>
                <Box>
                  <FormControlLabel value={0} control={<Radio checked={dormitory === 0} icon={<CheckCircleOutlineIcon sx={{ color: "#DBDBDB" }} />} checkedIcon={<CheckCircleIcon />} size="small" />} label={<Typography className="text-black text-base font-regular">{dormitoryTitle[0]}</Typography>} />
                  <FormControlLabel value={1} control={<Radio checked={dormitory === 1} icon={<CheckCircleOutlineIcon sx={{ color: "#DBDBDB" }} />} checkedIcon={<CheckCircleIcon />} size="small" />} label={<Typography className="text-black text-base font-regular">{dormitoryTitle[1]}</Typography>} />
                </Box>
                <FormControlLabel value={2} control={<Radio checked={dormitory === 2} icon={<CheckCircleOutlineIcon sx={{ color: "#DBDBDB" }} />} checkedIcon={<CheckCircleIcon />} size="small" />} label={<Typography className="text-black text-base font-regular">{dormitoryTitle[2]}</Typography>} />
              </RadioGroup>
            </FormControl>
          </Box>

          <Box className='flex w-80'>
            <Button type='submit' className='bg-accent1 rounded-full mt-6 px-8 py-2.5 text-right ml-auto'>
              <Typography className='text-white text-sm font-medium'>완료</Typography>
            </Button>
          </Box>
        </form>

        {
          open &&
          <Modal
            open={open}
            onClose={handleClose}
          >
            <Box sx={{ position: 'absolute', backgroundColor: 'white', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', borderRadius: '10px', width: '40%', maxWidth: '530px', height: 'fit-content', outline: 'none', paddingX: '', paddingY: '3rem' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Typography sx={{ color: '#383838', fontSize: '1.125rem', fontWeight: '400' }}>개인정보가 수정되었습니다.</Typography>
                <Button onClick={onClick} sx={{ backgroundColor: '#4B99EB !important', borderRadius: '200px', color: 'white', width: '100px', height: '40px', marginTop: '24px' }}>확인</Button>
              </Box>
            </Box>
          </Modal>
        }

      </Box>

      <Footer />
    </>
  )
}