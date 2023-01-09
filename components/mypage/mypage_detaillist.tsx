import Image from 'next/image';

import { Box, Button, CircularProgress, IconButton, Modal, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

import nightIcon from '../../public/nightIcon.png';
import profile from '../../public/basicProfile.png';
import morningIcon from '../../public/morningIcon.png';
import basicProfile from "../../public/basicProfile.png";

import { useEffect, useState } from 'react';
import axios from 'axios';
import { getCookie } from 'cookies-next';

interface ComponentProps {
  v: any;
  index: number;
  userName: string;
}

const MyPageDetailList = ({ props }: { props: ComponentProps }) => {
  const [open, setOpen] = useState(false);
  const [userId, setUserId] = useState('');
  const [loading, setLoading] = useState(false);

  const [age, setAge] = useState(-1);
  const [matchPercent, setMatchPercent] = useState(-1.1);
  const [name, setName] = useState('');
  const [mbti, setMbti] = useState('');
  const [kakaoId, setKakaoId] = useState('');
  const [isSmoking, setIsSmoking] = useState('');
  const [lifeCycle, setLifeCycle] = useState('');
  const [dormitory, setDormitory] = useState('');
  const [department, setDepartment] = useState('');
  const [isCleaning, setIsCleaning] = useState('');
  const [armyService, setArmyService] = useState<string | null>();
  const [nationality, setNationality] = useState('');
  const [sleepingPattern, setSleepingPattern] = useState<String[]>([]);
  const [detailProfile, setDetailProfile] = useState<any | null>(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const applyMate = async () => {
    const url = `/api/main/propose/${userId}`;
    const token = getCookie('OMNM');
    const headers = {
      headers: {
        'OMNM': `${token}`
      }
    };

    await axios.post(url, {}, headers)
      .then((res) => console.log(res.data));
  };

  const onClick = async () => {
    setLoading(true);

    const url = `/api/main/${userId}`;
    const token = getCookie('OMNM');
    const headers = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        'OMNM': `${token}`
      }
    };

    await axios.get(url, headers)
      .then((res) => {
        setAge(res.data.age);
        setName(res.data.name);
        setMbti(res.data.mbti);
        setKakaoId(res.data.kakaoId);
        setMatchPercent(res.data.percent);
        setDepartment(res.data.department);

        res.data.isSmoking === 0 ? setIsSmoking('흡연') : setIsSmoking('비흡연');
        res.data.lifeCycle === 0 ? setLifeCycle('아침형') : setLifeCycle('저녁형');
        res.data.nationality === 0 ? setNationality('내국인') : setNationality('외국인');
        res.data.profileUrl === null ? setDetailProfile(null) : setDetailProfile(res.data.profileUrl);

        res.data.armyService === null ? setArmyService(null) :
          res.data.armyService === 0 ? setArmyService('군필') :
            setArmyService('미필');

        res.data.dormitory === 0 ? setDormitory('308관 2인실') :
          res.data.dormitory === 1 ? setDormitory('308관 4인실') :
            setDormitory('309관 2인실');

        const sp = res.data.sleepingPattern.replace(/[{}]/g, '').split(',');
        if (sp.length === 0) setSleepingPattern(['수면패턴 없음']);
        else {
          const newSP: String[] = [];
          sp.forEach((v: string) => {
            if (v === '0') newSP.push('코골이');
            else if (v === '1') newSP.push('이갈이');
            else newSP.push('몸부림');
          });

          setSleepingPattern(newSP);
        }

        res.data.isCleaning === 0 ? setIsCleaning('주 5회 이상 청소') :
          res.data.isCleaning === 1 ? setIsCleaning('주 2-3회 청소') :
            res.data.isCleaning === 2 ? setIsCleaning('주 1회 청소') :
              setIsCleaning('월 1회 청소');
      });

    setLoading(false);
  };

  useEffect(() => {
    setUserId(props.v.userId);
  }, [userId]);

  return (
    <>
      <Box key={props.index} className='flex flex-row items-center border border-solid border-gray0 rounded-xl w-full h-fit mt-4 px-6 py-3'>
        <Box className='border border-solid border-gray1 rounded-full px-1 py-0.5'>
          {
            props.v.time[5] === '0' ? (
              <Typography className='text-gray1 text-xs font-medium text-center min-w-[2rem]'>{props.v.time.slice(6, 7)}.{props.v.time.slice(8, 10)}</Typography>
            ) : (
              <Typography className='text-gray1 text-xs font-medium text-center min-w-[2rem]'>{props.v.time.slice(5, 7)}.{props.v.time.slice(8, 10)}</Typography>
            )
          }
        </Box>

        <Box className='flex items-center ml-8'>
          {
            props.v.profileUrl === null ?
              <Image src={basicProfile} width={24} height={24} />
              :
              <Image loader={() => props.v.profileUrl} src={props.v.profileUrl} width={24} height={24} className='rounded-full' />
          }
        </Box>

        <Typography className='text-black text-base font-medium ml-3 w-16'>{props.v.name}</Typography>
        <Typography className='text-gray1 text-xs font-regular ml-2'>· {props.v.age}</Typography>
        <Typography className='text-black text-xs font-regular ml-5 w-8'>{props.v.mbti}</Typography>
        {
          props.v.lifeCycle === 0 ? (
            <Box className='flex flex-row ml-5'>
              <Image src={morningIcon} width={14} height={14} />
              <Typography className='text-black text-xs font-regular ml-1.5'>아침형 인간</Typography>
            </Box>
          ) : (
            <Box className='flex flex-row ml-5'>
              <Image src={nightIcon} width={14} height={14} />
              <Typography className='text-black text-xs font-regular ml-1.5'>저녁형 인간</Typography>
            </Box>
          )
        }
        <Button onClick={() => { onClick(); handleOpen(); }} className='bg-white border border-solid border-accent1 rounded-full ml-auto'>
          <Typography className='text-accent1 text-xs font-regular'>프로필 보기</Typography>
        </Button>
      </Box>

      {
        open &&
        <Modal
          open={open}
          onClose={handleClose}
        >
          <Box sx={{ position: 'absolute', backgroundColor: 'white', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', borderRadius: '10px', width: '30%', minWidth: '400px', height: '70%', minHeight: '650px', outline: 'none' }}>
            {
              loading ? (
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
                  <CircularProgress color="inherit" />
                </Box>
              ) : (
                <>
                  <IconButton onClick={() => setOpen(false)} sx={{ float: 'right' }}>
                    <CloseIcon aria-label="close" />
                  </IconButton>

                  <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', height: '90%', justifyContent: 'center', alignItems: 'center' }} >
                    {
                      detailProfile === null ? (
                        <Image src={profile} width={80} height={80} />
                      ) : (
                        <Box sx={{ border: '1px solid #9B9EA1', borderRadius: '100%', width: '80px', height: '80px' }} >
                          <Image src={detailProfile} width={80} height={80} style={{ borderRadius: '100%' }} />
                        </Box>
                      )
                    }
                    <Typography sx={{ color: '#383838', fontSize: '1.25rem', fontWeight: '500', marginTop: '0.75rem' }}>{name}</Typography>
                    <Typography sx={{ color: '#9B9EA1', fontSize: '0.75rem', fontWeight: '500', marginTop: '0.25rem' }}>{age}</Typography>

                    <Box sx={{ border: 'solid 1px #DBDBDB', borderRadius: '10px', width: '50%', height: 'fit-content', padding: '1.5rem', marginTop: '0.75rem' }}>
                      <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <Typography sx={{ color: '#383838', fontSize: '0.875rem', fontWeight: '400', marginRight: 'auto' }}>카카오톡 ID</Typography>
                        <Typography sx={{ color: '#383838', fontSize: '0.875rem', fontWeight: '500' }}>{kakaoId}</Typography>
                      </Box>

                      <Box sx={{ display: 'flex', justifyContent: 'flex-start', marginTop: '1rem' }}>
                        <Typography sx={{ color: '#383838', fontSize: '0.875rem', fontWeight: '400', marginRight: 'auto' }}>국적</Typography>
                        <Typography sx={{ color: '#383838', fontSize: '0.875rem', fontWeight: '500' }}>{nationality}</Typography>
                      </Box>

                      <Box sx={{ display: 'flex', justifyContent: 'flex-start', marginTop: '1rem' }}>
                        <Typography sx={{ color: '#383838', fontSize: '0.875rem', fontWeight: '400', marginRight: 'auto' }}>생활관 정보</Typography>
                        <Typography sx={{ color: '#383838', fontSize: '0.875rem', fontWeight: '500' }}>{dormitory}</Typography>
                      </Box>
                    </Box>

                    <Button onClick={applyMate} sx={{ backgroundColor: '#4B99EB !important', width: '50%', height: 'fit-content', borderRadius: '200px', color: 'white', marginTop: '1rem', paddingY: '0.625rem' }}>룸메 신청하기</Button>

                    <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: '2rem' }}>
                      <Typography sx={{ color: '#383838', fontSize: '1rem', fontWeight: '500' }}>{props.userName}님과 {name}님의 성향은&nbsp;</Typography>
                      <Typography sx={{ color: '#1CDDAD', fontSize: '1rem', fontWeight: '500' }}>{matchPercent}%&nbsp;</Typography>
                      <Typography sx={{ color: '#383838', fontSize: '1rem', fontWeight: '500' }}>일치합니다.</Typography>
                    </Box>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', marginTop: '0.5rem', justifyContent: 'center', alignItems: 'center' }}>
                      <Typography sx={{ border: 'solid 1px #DBDBDB', borderRadius: '100px', color: '#7DD3FC', fontSize: '1rem', fontWeight: '500', paddingX: '0.875rem', paddingY: '0.375rem', marginX: '0.625rem', marginTop: '0.75rem' }}>{mbti}</Typography>
                      <Typography sx={{ border: 'solid 1px #DBDBDB', borderRadius: '100px', color: '#EA9B76', fontSize: '1rem', fontWeight: '500', paddingX: '0.875rem', paddingY: '0.375rem', marginX: '0.625rem', marginTop: '0.75rem' }}>{department}</Typography>
                      <Typography sx={{ border: 'solid 1px #DBDBDB', borderRadius: '100px', color: '#FC7DD3', fontSize: '1rem', fontWeight: '500', paddingX: '0.875rem', paddingY: '0.375rem', marginX: '0.625rem', marginTop: '0.75rem' }}>{lifeCycle}</Typography>
                      <Typography sx={{ border: 'solid 1px #DBDBDB', borderRadius: '100px', color: '#D16EE7', fontSize: '1rem', fontWeight: '500', paddingX: '0.875rem', paddingY: '0.375rem', marginX: '0.625rem', marginTop: '0.75rem' }}>{isCleaning}</Typography>
                      {
                        sleepingPattern.map((v: any, index: number): any => {
                          return (
                            <Typography key={index} sx={{ border: 'solid 1px #DBDBDB', borderRadius: '100px', color: '#7CD869', fontSize: '1rem', fontWeight: '500', paddingX: '0.875rem', paddingY: '0.375rem', marginX: '0.625rem', marginTop: '0.75rem' }}>{v}</Typography>
                          )
                        })
                      }
                      <Typography sx={{ border: 'solid 1px #DBDBDB', borderRadius: '100px', color: '#308CED', fontSize: '1rem', fontWeight: '500', paddingX: '0.875rem', paddingY: '0.375rem', marginX: '0.625rem', marginTop: '0.75rem' }}>{isSmoking}</Typography>
                      {armyService && <Typography sx={{ border: 'solid 1px #DBDBDB', borderRadius: '100px', color: '#2DD4BF', fontSize: '1rem', fontWeight: '500', paddingX: '0.875rem', paddingY: '0.375rem', marginX: '0.625rem', marginTop: '0.75rem' }}>{armyService}</Typography>}
                    </Box>
                  </Box>
                </>
              )
            }
          </Box>
        </Modal>
      }
    </>
  )
};

export default MyPageDetailList;