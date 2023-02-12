import { getCookie } from 'cookies-next';
import Image from 'next/image';

import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import axios from 'axios';

import { Box, Button, CardContent, CircularProgress, Collapse, IconButton, Modal, ThemeProvider, Tooltip, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import DownIcon from '../public/downIcon.png';
import UpIcon from '../public/upIcon.png';

import profile from '../public/basicProfile.png';
import displayNone from '../public/displayNone.png';

import theme from './theme';

interface ComponentProps {
  name: string;
  mbti: string;
  message?: string | null | undefined;
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
  const [fourthOpen, setFourthOpen] = useState(false);

  const [sendMessage, setSendMessage] = useState<string>('');
  const [messageOpen, setMessageOpen] = useState<boolean>(false);

  const handleOpen = () => setSecondOpen(true);
  const handleClose = () => setSecondOpen(false);

  const handleOpen2 = () => setThirdOpen(true);
  const handleClose2 = () => setThirdOpen(false);

  const handleOpen3 = () => setFourthOpen(true);
  const handleClose3 = () => setFourthOpen(false);

  const handleMessageOpen = () => setMessageOpen(true);
  const handleMessageClose = () => setMessageOpen(false);

  const applyMate = async () => {
    const url = `/api/main/propose/${props.matchingId}`;
    const body = `message=${sendMessage}`;
    const token = getCookie('OMNM');
    const headers = {
      headers: {
        'OMNM': `${token}`
      }
    };

    await axios.post(url, body, headers)
      .then(() => {
        setIsProposed(true);
        handleClose();
        handleClose3();
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
      <Box sx={{ position: 'absolute', backgroundColor: 'white', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', borderRadius: '10px', width: '30%', minWidth: { xs: '327px', md: '400px' }, height: 'fit-content', outline: 'none' }}>
        {
          props.loading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
              <CircularProgress color="inherit" />
            </Box>
          ) : (
            <Box>
              <IconButton onClick={() => props.setOpen(false)} sx={{ float: 'right' }}>
                <CloseIcon aria-label="close" />
              </IconButton>

              <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', height: '90%', justifyContent: 'center', alignItems: 'center' }} >
                {
                  props.detailProfile === null ? (
                    <Box sx={{ width: '80px', height: '80px', marginTop: { md: '25px' } }} >
                      <Image src={profile} width={80} height={80} />
                    </Box>
                  ) : (
                    <Box sx={{ border: '1px solid #9B9EA1', borderRadius: '100%', width: '80px', height: '80px', marginTop: { md: '25px' } }} >
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

                {
                  (props.message && props.message.length > 0) &&
                  (
                    <>
                      {
                        messageOpen ? (
                          <Button onClick={handleMessageClose} sx={{ border: '1px solid #4B99EB', borderRadius: '20px', width: 'fit-content', height: 'fit-content', marginTop: '24px' }}>
                            <Typography sx={{ color: '#4B99EB', fontSize: '14px', fontWeight: '500', marginRight: '8px' }}>{props.name}님이 보낸 신청 메세지</Typography>
                            <Image src={UpIcon} width={14} height={14} /> :
                          </Button>
                        ) : (
                          <Button onClick={handleMessageOpen} sx={{ border: '1px solid #4B99EB', borderRadius: '20px', width: 'fit-content', height: 'fit-content', marginTop: '24px' }}>
                            <Typography sx={{ color: '#4B99EB', fontSize: '14px', fontWeight: '500', marginRight: '8px' }}>{props.name}님이 보낸 신청 메세지</Typography>
                            <Image src={DownIcon} width={14} height={14} /> :
                          </Button>
                        )
                      }

                      <Collapse in={messageOpen} timeout="auto" unmountOnExit>
                        <CardContent sx={{ backgroundColor: '#F0F9FF', border: '1px solid #E0F2FE', borderRadius: '10px', width: '80%', minWidth: { xs: '263px', md: '353px' }, marginTop: '8px', marginLeft: '10%', paddingX: '20px', paddingY: '16px' }}>
                          <Typography sx={{ color: '#383838', fontSize: '16px', fontWeight: 400, wordBreak: 'break-all' }}>{props.message}</Typography>
                        </CardContent>
                      </Collapse>
                    </>
                  )
                }

                <Box sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center', width: '50%', minWidth: { xs: '235px' }, marginTop: { xs: '16px', md: '2rem' } }}>
                  <Typography sx={{ color: '#383838', fontSize: '1rem', fontWeight: '500' }}>{props.userName}님과 {props.name}님의 성향은&nbsp;</Typography>
                  <Typography sx={{ color: '#1CDDAD', fontSize: '1rem', fontWeight: '500' }}>{props.matchPercent}%&nbsp;</Typography>
                  <Typography sx={{ color: '#383838', fontSize: '1rem', fontWeight: '500' }}>일치합니다.</Typography>
                </Box>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', marginTop: '0.5rem', justifyContent: 'center', alignItems: 'center', marginBottom: '25px' }}>
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
            </Box>
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
                  <Button onClick={handleOpen3} sx={{ backgroundColor: '#4B99EB !important', borderRadius: '200px', color: 'white', width: '100px', height: '40px', marginTop: '24px' }}>예</Button>
                  <Button onClick={handleClose} sx={{ backgroundColor: '#9B9EA1 !important', borderRadius: '200px', color: 'white', width: '100px', height: '40px', marginTop: '24px', marginLeft: '16px' }}>아니오</Button>
                </Box>
              </Box>
            </Box>
          </Modal>
        }
        {
          fourthOpen &&
          <Modal
            open={fourthOpen}
            onClose={handleClose3}
          >
            <Box sx={{ position: 'absolute', backgroundColor: 'white', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', borderRadius: '10px', width: '40%', maxWidth: '530px', minWidth: { xs: '327px', md: '400px' }, height: 'fit-content', outline: 'none', paddingX: '', paddingY: '3rem' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Typography sx={{ color: '#4B99EB', fontSize: { xs: '16px', md: '1.125rem' }, fontWeight: '400' }}>
                  {props.name}
                  <Typography component='span' sx={{ color: '#383838', fontSize: { xs: '16px', md: '1.125rem' }, fontWeight: '400' }}>님에게 보낼 신청 메시지를 작성해주세요.</Typography>
                </Typography>
                <Typography sx={{ color: '#9B9EA1', fontSize: { md: '14px' }, fontWeight: '400' }}>50자 이내</Typography>

                <textarea
                  name='message'
                  placeholder='신청 메세지 입력'
                  value={sendMessage}
                  maxLength={50}
                  onChange={(e) => setSendMessage(e.target.value)}
                  style={{ fontFamily: 'Spoqa Han Sans Neo', backgroundColor: '#F0F9FF', border: '1px solid #E0F2FE', borderRadius: '10px', width: '70%', height: '92px', paddingLeft: '24px', paddingRight: '24px', paddingTop: '16px', paddingBottom: '16px', marginTop: '24px', resize: 'none', outline: 'none' }}
                />

                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                  <Button onClick={handleClose3} sx={{ backgroundColor: '#9B9EA1 !important', borderRadius: '200px', color: 'white', width: '100px', height: '40px', marginTop: '24px' }}>취소</Button>
                  <Button onClick={applyMate} sx={{ backgroundColor: '#4B99EB !important', borderRadius: '200px', color: 'white', width: '100px', height: '40px', marginTop: '24px', marginLeft: '16px' }}>보내기</Button>
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