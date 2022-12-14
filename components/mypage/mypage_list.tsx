import Image from 'next/image';
import { getCookie } from 'cookies-next';

import { useEffect, useState } from 'react';
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
        setMatchPercent(res.data.percent);
        setDepartment(res.data.department);

        props.isReceive ? setKakaoId(res.data.kakaoId) : setKakaoId('');

        res.data.isSmoking === 0 ? setIsSmoking('??????') : setIsSmoking('?????????');
        res.data.lifeCycle === 0 ? setLifeCycle('?????????') : setLifeCycle('?????????');
        res.data.nationality === 0 ? setNationality('?????????') : setNationality('?????????');
        res.data.profileUrl === null ? setDetailProfile(null) : setDetailProfile(res.data.profileUrl);

        res.data.armyService === null ? setArmyService(null) :
          res.data.armyService === 0 ? setArmyService('??????') :
            setArmyService('??????');

        res.data.dormitory === 0 ? setDormitory('308??? 2??????') :
          res.data.dormitory === 1 ? setDormitory('308??? 4??????') :
            setDormitory('309??? 2??????');

        const sp = res.data.sleepingPattern.replace(/[{}]/g, '').split(',');
        if (sp.length === 0) setSleepingPattern(['???????????? ??????']);
        else {
          const newSP: String[] = [];
          sp.forEach((v: string) => {
            if (v === '0') newSP.push('?????????');
            else if (v === '1') newSP.push('?????????');
            else newSP.push('?????????');
          });

          setSleepingPattern(newSP);
        }

        res.data.isCleaning === 0 ? setIsCleaning('??? 5??? ?????? ??????') :
          res.data.isCleaning === 1 ? setIsCleaning('??? 2-3??? ??????') :
            res.data.isCleaning === 2 ? setIsCleaning('??? 1??? ??????') :
              setIsCleaning('??? 1??? ??????');
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
        <Typography className='text-gray1 text-xs font-regular ml-1'>{props.v.age}???</Typography>
        <Button onClick={() => { onClick(); handleOpen(); }} className='bg-white border border-solid border-accent1 rounded-full ml-auto'>
          <Typography className='text-accent1 text-xs font-regular'>????????? ??????</Typography>
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