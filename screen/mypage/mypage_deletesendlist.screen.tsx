import { getCookie } from 'cookies-next';
import Image from 'next/image';

import { Box, Button, Checkbox, FormControlLabel, IconButton, Pagination, PaginationItem, Typography } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import { ChangeEvent, useEffect, useState } from 'react';
import axios from 'axios';

import PrevButton from '../../public/prevButton.png';

import Footer from "@/components/footer";
import MyPageLeft from "@/components/mypage/mypage_left";
import MyPageDeleteDetailList from '@/components/mypage/mypage_deletedetaillist';

const token = getCookie('OMNM');
const headers = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    'OMNM': `${token}`
  }
};

export const MyPageDeleteSendListScreen = () => {
  const [data, setData] = useState<object[]>([]);
  const [index, setIndex] = useState<number>(0);
  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');
  const [totalCount, setTotalCount] = useState<number>(0);
  const [isSelected, setIsSelected] = useState<object>({});
  const [initialSelected, setInitialSelected] = useState<object>({});

  const handleChange = (_: any, p: any) => setIndex(p - 1);

  const onChangeAll = () => setIsSelected(initialSelected);

  const onClick = async () => {
    let selectedUsers = [];

    for (let key in isSelected) {
      if (isSelected[key as keyof typeof isSelected]) selectedUsers.push(key);
    }

    const url = `/api/users/${userId}/connection/deleteSendingMatching`;
    const body = `deleteList={${selectedUsers.join(',')}}`;

    await axios.post(url, body, headers)
      .then((res) => {
        if (res.data === '해당 신청 리스트가 삭제되었습니다.') {
          getPageData();
        }
      })
      .catch((err) => console.error(err));
  }

  const onChangeEach = (e: ChangeEvent<HTMLInputElement>) => {
    setIsSelected((prevState) => {
      return {
        ...prevState,
        [e.target.value]: !isSelected[e.target.value as keyof typeof isSelected]
      }
    });
  };

  const getPageData = async () => {
    const url = `/api/users/${userId}/propose/detail?page=${index}&size=10`;

    await axios.get(url, headers)
      .then((res) => {
        setData(res.data);

        for (let key in res.data) {
          setIsSelected((prevState) => {
            return {
              ...prevState,
              [res.data[key].userId]: false
            }
          });

          setInitialSelected((prevState) => {
            return {
              ...prevState,
              [res.data[key].userId]: true
            }
          })
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const getMyData = async () => {
      const url = '/api/myInfo';

      await axios.get(url, headers)
        .then((res) => {
          setUserId(res.data.userId);
          setUserName(res.data.name);

          getTotalCount();
        })
        .catch((err) => console.log(err));
    };

    const getTotalCount = async () => {
      const url = `/api/users/${userId}/propose/count`;

      await axios.get(url, headers)
        .then((res) => {
          setTotalCount(+res.data);
          getPageData();
        })
        .catch((err) => console.log(err));
    };

    getMyData();
  }, [userId, index]);

  return (
    <Box>
      <Box className='flex flex-row justify-center min-h-[calc(100vh-70px)] mx-[15%] my-[5%]'>
        <Box>
          <MyPageLeft />
        </Box>

        <Box className='border border-solid border-gray0 rounded-[1.25rem] w-full h-fit px-[2.875rem] py-16 ml-6'>
          <Box className='flex flex-row'>
            <Box className='flex flex-row items-center'>
              <IconButton onClick={() => document.location = '/mypage_sendlist'}>
                <Image src={PrevButton} width={18.44} height={23.48} />
              </IconButton>
              <Typography className='text-black text-xl font-medium ml-3'>룸메이트 신청 보낸 리스트</Typography>
            </Box>

            <Box className='flex flex-row items-center ml-auto'>
              <Button onClick={onChangeAll} className='rounded-full text-gray1 text-base font-regular'>모두 선택</Button>
              <Button onClick={onClick} className='rounded-full text-gray1 text-base font-regular ml-6'>삭제</Button>
              <Button onClick={() => document.location = '/mypage_sendlist'} className='bg-accent1 rounded-full w-fit h-fit px-4 py-1.5 ml-7'>
                <Typography className=' text-white text-base font-regular'>완료</Typography>
              </Button>
            </Box>
          </Box>

          <Box className='flex flex-col items-center mt-5'>
            <Box className='w-full min-h-[44rem]'>
              {
                data && data.map((v: any, index: number) => {
                  return (
                    <Box key={index} className='flex flex-row items-center border border-solid border-gray0 rounded-xl w-full h-fit mt-4 px-6 py-3'>
                      <FormControlLabel
                        value={v.userId}
                        control={
                          <Checkbox
                            checked={isSelected[v.userId as keyof typeof isSelected]}
                            onChange={(e) => onChangeEach(e)}
                            icon={<CheckCircleOutlineIcon sx={{ color: "#DBDBDB" }} />}
                            checkedIcon={<CheckCircleIcon />}
                            size="small" />
                        }
                        label={undefined}
                      />
                      <MyPageDeleteDetailList props={{ v: v, index: index, userName: userName, isReceive: false }} />
                    </Box>
                  )
                })
              }
            </Box>

            <Pagination
              count={Math.ceil(totalCount / 10)}
              onChange={handleChange}
              renderItem={(item) => (
                <PaginationItem
                  {...item}
                  sx={{
                    color: '#9B9EA1',
                    fontSize: '0.875rem',
                    fontWeight: '500'
                  }}
                />
              )}
              sx={{
                marginTop: '2.5rem'
              }}
            />
          </Box>
        </Box>
      </Box>

      <Footer />
    </Box>
  )
}