import { getCookie } from 'cookies-next';
import Image from 'next/image';

import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import axios from 'axios';

import { Box, Button, CircularProgress, IconButton, Modal, Tooltip, Typography } from "@mui/material";
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
    <Box sx={{ position: 'absolute', backgroundColor: 'white', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', borderRadius: '10px', width: '30%', minWidth: '400px', height: '70%', minHeight: '650px', outline: 'none' }}>
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
              <Typography sx={{ color: '#9B9EA1', fontSize: '1rem', fontWeight: '400', marginTop: '0.25rem' }}>{props.age}???</Typography>

              <Box sx={{ border: 'solid 1px #DBDBDB', borderRadius: '10px', width: '50%', height: 'fit-content', padding: '1.5rem', marginTop: '0.75rem' }}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                  <Typography sx={{ color: '#383838', fontSize: '0.875rem', fontWeight: '400', marginRight: 'auto' }}>???????????? ID</Typography>
                  {
                    props.kakaoId === '' ? (
                      <Tooltip title='?????? ????????? ????????? ????????????????????? ??? ??? ????????????.' sx={{ padding: '0px' }}>
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
                  <Typography sx={{ color: '#383838', fontSize: '0.875rem', fontWeight: '400', marginRight: 'auto' }}>??????</Typography>
                  <Typography sx={{ color: '#383838', fontSize: '0.875rem', fontWeight: '500' }}>{props.nationality}</Typography>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'flex-start', marginTop: '1rem' }}>
                  <Typography sx={{ color: '#383838', fontSize: '0.875rem', fontWeight: '400', marginRight: 'auto' }}>????????? ??????</Typography>
                  <Typography sx={{ color: '#383838', fontSize: '0.875rem', fontWeight: '500' }}>{props.dormitory}</Typography>
                </Box>
              </Box>

              {
                isProposed ?
                  <Button disabled sx={{ backgroundColor: '#9B9EA1 !important', width: '50%', height: 'fit-content', borderRadius: '200px', color: 'white !important', marginTop: '1rem', paddingY: '0.625rem' }}>?????? ????????? ???????????????</Button> :
                  <Button onClick={handleOpen} sx={{ backgroundColor: '#4B99EB !important', width: '50%', height: 'fit-content', borderRadius: '200px', color: 'white', marginTop: '1rem', paddingY: '0.625rem' }}>???????????? ????????????</Button>
              }

              <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: '2rem' }}>
                <Typography sx={{ color: '#383838', fontSize: '1rem', fontWeight: '500' }}>{props.userName}?????? {props.name}?????? ?????????&nbsp;</Typography>
                <Typography sx={{ color: '#1CDDAD', fontSize: '1rem', fontWeight: '500' }}>{props.matchPercent}%&nbsp;</Typography>
                <Typography sx={{ color: '#383838', fontSize: '1rem', fontWeight: '500' }}>???????????????.</Typography>
              </Box>

              <Box sx={{ display: 'flex', flexWrap: 'wrap', marginTop: '0.5rem', justifyContent: 'center', alignItems: 'center' }}>
                <Typography sx={{ border: 'solid 1px #DBDBDB', borderRadius: '100px', color: '#7DD3FC', fontSize: '1rem', fontWeight: '500', paddingX: '0.875rem', paddingY: '0.375rem', marginX: '0.625rem', marginTop: '0.75rem' }}>{props.mbti}</Typography>
                <Typography sx={{ border: 'solid 1px #DBDBDB', borderRadius: '100px', color: '#EA9B76', fontSize: '1rem', fontWeight: '500', paddingX: '0.875rem', paddingY: '0.375rem', marginX: '0.625rem', marginTop: '0.75rem' }}>{props.department}</Typography>
                <Typography sx={{ border: 'solid 1px #DBDBDB', borderRadius: '100px', color: '#FC7DD3', fontSize: '1rem', fontWeight: '500', paddingX: '0.875rem', paddingY: '0.375rem', marginX: '0.625rem', marginTop: '0.75rem' }}>{props.lifeCycle}</Typography>
                <Typography sx={{ border: 'solid 1px #DBDBDB', borderRadius: '100px', color: '#D16EE7', fontSize: '1rem', fontWeight: '500', paddingX: '0.875rem', paddingY: '0.375rem', marginX: '0.625rem', marginTop: '0.75rem' }}>{props.isCleaning}</Typography>
                {
                  props.sleepingPattern.map((v: any, index: number): any => {
                    return (
                      <Typography key={index} sx={{ border: 'solid 1px #DBDBDB', borderRadius: '100px', color: '#7CD869', fontSize: '1rem', fontWeight: '500', paddingX: '0.875rem', paddingY: '0.375rem', marginX: '0.625rem', marginTop: '0.75rem' }}>{v}</Typography>
                    )
                  })
                }
                <Typography sx={{ border: 'solid 1px #DBDBDB', borderRadius: '100px', color: '#308CED', fontSize: '1rem', fontWeight: '500', paddingX: '0.875rem', paddingY: '0.375rem', marginX: '0.625rem', marginTop: '0.75rem' }}>{props.isSmoking}</Typography>
                {props.armyService !== null && <Typography sx={{ border: 'solid 1px #DBDBDB', borderRadius: '100px', color: '#2DD4BF', fontSize: '1rem', fontWeight: '500', paddingX: '0.875rem', paddingY: '0.375rem', marginX: '0.625rem', marginTop: '0.75rem' }}>{props.armyService}</Typography>}
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
          <Box sx={{ position: 'absolute', backgroundColor: 'white', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', borderRadius: '10px', width: '40%', maxWidth: '530px', height: 'fit-content', outline: 'none', paddingX: '', paddingY: '3rem' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <Typography sx={{ color: '#4B99EB', fontSize: '1.125rem', fontWeight: '400' }}>
                {props.name}
                <Typography component='span' sx={{ color: '#383838', fontSize: '1.125rem', fontWeight: '400' }}>????????? ???????????? ????????? ????????????????</Typography>
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <Button onClick={applyMate} sx={{ backgroundColor: '#4B99EB !important', borderRadius: '200px', color: 'white', width: '100px', height: '40px', marginTop: '24px' }}>???</Button>
                <Button onClick={handleClose} sx={{ backgroundColor: '#9B9EA1 !important', borderRadius: '200px', color: 'white', width: '100px', height: '40px', marginTop: '24px', marginLeft: '16px' }}>?????????</Button>
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
          <Box sx={{ position: 'absolute', backgroundColor: 'white', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', borderRadius: '10px', width: '40%', maxWidth: '530px', height: 'fit-content', outline: 'none', paddingX: '', paddingY: '3rem' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <Typography sx={{ color: '#4B99EB', fontSize: '1.125rem', fontWeight: '400' }}>
                {props.name}
                <Typography component='span' sx={{ color: '#383838', fontSize: '1.125rem', fontWeight: '400' }}>????????? ???????????? ????????? ?????????????????????.</Typography>
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <Button onClick={handleClose2} sx={{ backgroundColor: '#4B99EB !important', borderRadius: '200px', color: 'white', width: '100px', height: '40px', marginTop: '24px' }}>??????</Button>
              </Box>
            </Box>
          </Box>
        </Modal>

      }
    </Box>
  )
};

export default DetailProfile;