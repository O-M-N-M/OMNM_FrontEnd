import { getCookie } from 'cookies-next';
import Image from 'next/image';

import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import axios from 'axios';

import { Box, Button, CircularProgress, createTheme, IconButton, Modal, ThemeProvider, Tooltip, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

import profile from '../public/basicProfile.png';
import displayNone from '../public/displayNone.png';

interface ComponentProps {
  name: string;
  mbti: string;
  userName: string;
  lifeCycle: string;
  isSmoking: string;
  dormitory: string;
  department: string;
  isCleaning: string;
  nationality: string;
  age: number;
  matchingId: string | number | undefined;
  matchPercent: number;
  loading: boolean;
  sleepingPattern: String[];
  detailProfile: any | null;
  armyService: string | null | undefined;
  kakaoId: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1024,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: [
      'Spoqa Han Sans Neo'
    ].join(',')
  }
});

const token = getCookie('OMNM');

const DetailProfile = ({ props }: { props: ComponentProps }) => {
  const [isProposed, setIsProposed] = useState<boolean>();
  const [secondOpen, setSecondOpen] = useState(false);
  const [thirdOpen, setThirdOpen] = useState(false);

  const handleOpen = () => setSecondOpen(true);
  const handleClose = () => setSecondOpen(false);

  const handleOpen2 = () => setThirdOpen(true);
  const handleClose2 = () => setThirdOpen(false);

  const applyMate = async () => {
    const url = `/api/main/propose/${props.matchingId}`;
    const token = getCookie('OMNM');
    const headers = {
      headers: {
        'OMNM': `${token}`
      }
    };

    await axios.post(url, {}, headers)
      .then((res) => {
        setIsProposed(true);
        handleClose();
        handleOpen2();
      });
  };

  useEffect(() => {
    const getIsProposed = async () => {
      const url = `/api/myInfo/isProposed/${props.matchingId}`;
      const headers = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          'OMNM': `${token}`
        }
      };
      await axios.get(url, headers)
        .then((res) => {
          setIsProposed(res.data);
        })
        .catch((err) => console.log(err));
    };

    getIsProposed();
  }, [isProposed])

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ position: 'absolute', backgroundColor: 'white', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', borderRadius: '10px', width: '30%', minWidth: { xs: '327px', md: '400px' }, height: '70%', minHeight: '650px', outline: 'none' }}>
        {
          props.loading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
              <CircularProgress color="inherit" />
            </Box>
          ) : (
            <>
              <IconButton onClick={() => props.setOpen(false)} sx={{ float: 'right' }}>
                <CloseIcon aria-label="close" />
              </IconButton>

              <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', height: '90%', justifyContent: 'center', alignItems: 'center' }} >
                {
                  props.detailProfile === null ? (
                    <Image src={profile} width={80} height={80} />
                  ) : (
                    <Box sx={{ border: '1px solid #9B9EA1', borderRadius: '100%', width: '80px', height: '80px' }} >
                      <Image src={props.detailProfile} width={80} height={80} style={{ borderRadius: '100%' }} />
                    </Box>
                  )
                }
                <Typography sx={{ color: '#383838', fontSize: '1.25rem', fontWeight: '500', marginTop: '0.75rem' }}>{props.name}</Typography>
                <Typography sx={{ color: '#9B9EA1', fontSize: '1rem', fontWeight: '400', marginTop: '0.25rem' }}>{props.age}세</Typography>

                <Box sx={{ border: 'solid 1px #DBDBDB', borderRadius: '10px', width: '50%', minWidth: { xs: '235px' }, height: 'fit-content', padding: '1.5rem', marginTop: '0.75rem' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Typography sx={{ color: '#383838', fontSize: '0.875rem', fontWeight: '400', marginRight: 'auto' }}>카카오톡 ID</Typography>
                    {
                      props.kakaoId === '' ? (
                        <Tooltip title='름메 신청을 받으면 마이페이지에서 볼 수 있습니다.' sx={{ padding: '0px' }}>
                          <IconButton>
                            <Image src={displayNone} width={18} height={18} />
                          </IconButton>
                        </Tooltip>
                      ) : (
                        <Typography sx={{ color: '#383838', fontSize: '0.875rem', fontWeight: '500' }}>{props.kakaoId}</Typography>
                      )
                    }
                  </Box>

                  <Box sx={{ display: 'flex', justifyContent: 'flex-start', marginTop: '1rem' }}>
                    <Typography sx={{ color: '#383838', fontSize: '0.875rem', fontWeight: '400', marginRight: 'auto' }}>국적</Typography>
                    <Typography sx={{ color: '#383838', fontSize: '0.875rem', fontWeight: '500' }}>{props.nationality}</Typography>
                  </Box>

                  <Box sx={{ display: 'flex', justifyContent: 'flex-start', marginTop: '1rem' }}>
                    <Typography sx={{ color: '#383838', fontSize: '0.875rem', fontWeight: '400', marginRight: 'auto' }}>생활관 정보</Typography>
                    <Typography sx={{ color: '#383838', fontSize: '0.875rem', fontWeight: '500' }}>{props.dormitory}</Typography>
                  </Box>
                </Box>

                {
                  isProposed ?
                    <Button disabled sx={{ backgroundColor: '#9B9EA1 !important', width: '50%', minWidth: { xs: '235px' }, height: 'fit-content', borderRadius: '200px', color: 'white !important', marginTop: { xs: '8px', md: '1rem' }, paddingY: '0.625rem' }}>이미 신청한 상대입니다</Button> :
                    <Button onClick={handleOpen} sx={{ backgroundColor: '#4B99EB !important', width: '50%', minWidth: { xs: '235px' }, height: 'fit-content', borderRadius: '200px', color: 'white', marginTop: { xs: '8px', md: '1rem' }, paddingY: '0.625rem' }}>룸메이트 신청하기</Button>
                }

                <Box sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center', width: '50%', minWidth: { xs: '235px' }, marginTop: { xs: '16px', md: '2rem' } }}>
                  <Typography sx={{ color: '#383838', fontSize: '1rem', fontWeight: '500' }}>{props.userName}님과 {props.name}님의 성향은&nbsp;</Typography>
                  <Typography sx={{ color: '#1CDDAD', fontSize: '1rem', fontWeight: '500' }}>{props.matchPercent}%&nbsp;</Typography>
                  <Typography sx={{ color: '#383838', fontSize: '1rem', fontWeight: '500' }}>일치합니다.</Typography>
                </Box>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', marginTop: '0.5rem', justifyContent: 'center', alignItems: 'center' }}>
                  <Typography sx={{ border: 'solid 1px #DBDBDB', borderRadius: '100px', color: '#7DD3FC', fontSize: { xs: '14px', md: '16px' }, fontWeight: '500', paddingX: '0.875rem', paddingY: '0.375rem', marginX: '0.625rem', marginTop: '0.75rem' }}>{props.mbti}</Typography>
                  <Typography sx={{ border: 'solid 1px #DBDBDB', borderRadius: '100px', color: '#EA9B76', fontSize: { xs: '14px', md: '16px' }, fontWeight: '500', paddingX: '0.875rem', paddingY: '0.375rem', marginX: '0.625rem', marginTop: '0.75rem' }}>{props.department}</Typography>
                  <Typography sx={{ border: 'solid 1px #DBDBDB', borderRadius: '100px', color: '#FC7DD3', fontSize: { xs: '14px', md: '16px' }, fontWeight: '500', paddingX: '0.875rem', paddingY: '0.375rem', marginX: '0.625rem', marginTop: '0.75rem' }}>{props.lifeCycle}</Typography>
                  <Typography sx={{ border: 'solid 1px #DBDBDB', borderRadius: '100px', color: '#D16EE7', fontSize: { xs: '14px', md: '16px' }, fontWeight: '500', paddingX: '0.875rem', paddingY: '0.375rem', marginX: '0.625rem', marginTop: '0.75rem' }}>{props.isCleaning}</Typography>
                  {
                    props.sleepingPattern.map((v: any, index: number): any => {
                      return (
                        <Typography key={index} sx={{ border: 'solid 1px #DBDBDB', borderRadius: '100px', color: '#7CD869', fontSize: { xs: '14px', md: '16px' }, fontWeight: '500', paddingX: '0.875rem', paddingY: '0.375rem', marginX: '0.625rem', marginTop: '0.75rem' }}>{v}</Typography>
                      )
                    })
                  }
                  <Typography sx={{ border: 'solid 1px #DBDBDB', borderRadius: '100px', color: '#308CED', fontSize: { xs: '14px', md: '16px' }, fontWeight: '500', paddingX: '0.875rem', paddingY: '0.375rem', marginX: '0.625rem', marginTop: '0.75rem' }}>{props.isSmoking}</Typography>
                  {props.armyService !== null && <Typography sx={{ border: 'solid 1px #DBDBDB', borderRadius: '100px', color: '#2DD4BF', fontSize: { xs: '14px', md: '16px' }, fontWeight: '500', paddingX: '0.875rem', paddingY: '0.375rem', marginX: '0.625rem', marginTop: '0.75rem' }}>{props.armyService}</Typography>}
                </Box>
              </Box>
            </>
          )
        }

        {
          secondOpen &&
          <Modal
            open={secondOpen}
            onClose={handleClose}
          >
            <Box sx={{ position: 'absolute', backgroundColor: 'white', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', borderRadius: '10px', width: '40%', maxWidth: '530px', minWidth: { xs: '327px', md: '400px' }, height: 'fit-content', outline: 'none', paddingX: '', paddingY: '3rem' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Typography sx={{ color: '#4B99EB', fontSize: { xs: '16px', md: '1.125rem' }, fontWeight: '400' }}>
                  {props.name}
                  <Typography component='span' sx={{ color: '#383838', fontSize: { xs: '16px', md: '1.125rem' }, fontWeight: '400' }}>님에게 룸메이트 신청을 하겠습니까?</Typography>
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                  <Button onClick={applyMate} sx={{ backgroundColor: '#4B99EB !important', borderRadius: '200px', color: 'white', width: '100px', height: '40px', marginTop: '24px' }}>예</Button>
                  <Button onClick={handleClose} sx={{ backgroundColor: '#9B9EA1 !important', borderRadius: '200px', color: 'white', width: '100px', height: '40px', marginTop: '24px', marginLeft: '16px' }}>아니오</Button>
                </Box>
              </Box>
            </Box>
          </Modal>
        }
        {
          thirdOpen &&
          <Modal
            open={thirdOpen}
            onClose={handleClose2}
          >
            <Box sx={{ position: 'absolute', backgroundColor: 'white', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', borderRadius: '10px', width: '40%', maxWidth: '530px', minWidth: { xs: '327px', md: '400px' }, height: 'fit-content', outline: 'none', paddingX: '', paddingY: '3rem' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Typography sx={{ color: '#4B99EB', fontSize: { xs: '16px', md: '1.125rem' }, fontWeight: '400' }}>
                  {props.name}
                  <Typography component='span' sx={{ color: '#383838', fontSize: { xs: '16px', md: '1.125rem' }, fontWeight: '400' }}>님에게 룸메이트 신청이 완료되었습니다.</Typography>
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                  <Button onClick={handleClose2} sx={{ backgroundColor: '#4B99EB !important', borderRadius: '200px', color: 'white', width: '100px', height: '40px', marginTop: '24px' }}>확인</Button>
                </Box>
              </Box>
            </Box>
          </Modal>

        }
      </Box>
    </ThemeProvider>
  )
};

export default DetailProfile;