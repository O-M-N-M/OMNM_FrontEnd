import Image from 'next/image';
import { getCookie } from 'cookies-next';

import { forwardRef, useEffect, useState } from 'react';
import axios from 'axios';

import { Box, Button, Modal, Typography } from "@mui/material";

import basicProfile from "../../public/basicProfile.png";
import DetailProfile from '../detailProfile';

interface ComponentProps {
  v: any;
  index: number;
  userName: string;
  isReceive: boolean;
}

const MyPageList = ({ props }: { props: ComponentProps }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [userId, setUserId] = useState<number>();
  const [loading, setLoading] = useState<boolean>(false);

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
        setMatchPercent(res.data.percent);
        setDepartment(res.data.department);

        props.isReceive ? setKakaoId(res.data.kakaoId) : setKakaoId('');

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
            else if (v === '2') newSP.push('몸부림');
            else if (v === '3') newSP.push('수면패턴 없음');
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
      <Box key={props.index} className='flex flex-row items-center border border-solid border-gray0 rounded-xl w-full h-fit mt-4 mb-1.5 px-6 py-3'>
        <Box className='flex items-center'>
          {
            props.v.profileUrl === null ?
              <Image src={basicProfile} width={24} height={24} />
              :
              <Image loader={() => props.v.profileUrl} src={props.v.profileUrl} width={24} height={24} className='rounded-full' />
          }
        </Box>

        <Typography className='text-black text-base font-medium ml-3 w-16'>{props.v.name}</Typography>
        <Typography className='text-gray1 text-xs font-regular ml-1'>{props.v.age}세</Typography>
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
          <DetailProfile props={{ name: name, mbti: mbti, userName: props.userName, lifeCycle: lifeCycle, isSmoking: isSmoking, dormitory: dormitory, department: department, isCleaning: isCleaning, nationality: nationality, age: age, matchingId: userId, matchPercent: matchPercent, loading: loading, sleepingPattern: sleepingPattern, detailProfile: detailProfile, armyService: armyService, kakaoId: kakaoId, setOpen: setOpen }} />
        </Modal>
      }
    </>
  );
}

export default MyPageList;