import Image from 'next/image';
import { getCookie } from 'cookies-next';

import { Box, IconButton, Pagination, PaginationItem, Typography } from "@mui/material";

import { useEffect, useState } from 'react';
import axios from 'axios';

import DeleteIcon from '../../public/deleteIcon.png';
import Footer from "@/components/footer";
import MyPageLeft from "@/components/mypage/mypage_left";
import MyPageDetailList from '@/components/mypage/mypage_detaillist';

export const MyPageSendListScreen = () => {
  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');

  const [totalCount, setTotalCount] = useState<number>(0);
  const [data, setData] = useState<object[]>([]);
  const [index, setIndex] = useState<number>(0);

  const handleChange = (e: any, p: any) => {
    setIndex(p - 1);
  }

  useEffect(() => {
    const token = getCookie('OMNM');
    const headers = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        'OMNM': `${token}`
      }
    };

    const getMyData = async () => {
      const url = '/api/myInfo';

      await axios.get(url, headers)
        .then((res) => {
          setUserId(res.data.userId);
          setUserName(res.data.name);

          getPageData();
        })
        .catch((err) => console.log(err));
    };

    const getPageData = async () => {
      const url = `/api/users/${userId}/propose/detail?page=${index}&size=10`;

      await axios.get(url, headers)
        .then((res) => {
          setData(res.data);
          getTotalCount();
        })
        .catch((err) => console.log(err));
    };

    const getTotalCount = async () => {
      const url = `/api/users/${userId}/propose/count`;

      await axios.get(url, headers)
        .then((res) => {
          setTotalCount(+res.data);
        })
        .catch((err) => console.log(err));
    };

    getMyData();
  }, [userId, index]);

  return (
    <Box>
      <Box className='flex flex-row justify-center min-h-[calc(100vh-50px)] mx-[15%] my-[5%]'>
        <Box>
          <MyPageLeft />
        </Box>

        <Box className='border border-solid border-gray0 rounded-[1.25rem] w-full h-fit px-[2.875rem] py-16 ml-6'>
          <Box className='flex flex-row items-center'>
            <Typography className='text-black text-xl font-medium'>룸메 신청 보낸 리스트</Typography>
            <IconButton className='ml-auto'>
              <Image src={DeleteIcon} width={20} height={20} />
            </IconButton>
          </Box>

          <Box className='flex flex-col items-center mt-9'>
            <Box className='w-full min-h-[44rem]'>
              {
                data && data.map((v: any, index: number) => {
                  return (
                    <MyPageDetailList props={{ v: v, index: index, userName: userName }} />
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