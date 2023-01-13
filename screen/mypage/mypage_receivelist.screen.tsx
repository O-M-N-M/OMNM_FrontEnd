import { getCookie } from 'cookies-next';
import Image from 'next/image';

import { Box, IconButton, Pagination, PaginationItem, Typography } from "@mui/material";

import { useEffect, useState } from 'react';
import axios from 'axios';

import PrevButton from '../../public/prevButton.png';
import DeleteIcon from '../../public/deleteIcon.png';
import NoListIcon from '../../public/noListIcon.png';

import Footer from "@/components/footer";
import MyPageLeft from "@/components/mypage/mypage_left";
import MyPageDetailList from '@/components/mypage/mypage_detaillist';

export const MyPageReceiveListScreen = () => {
  const [data, setData] = useState<object[]>([]);
  const [index, setIndex] = useState<number>(0);
  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');
  const [totalCount, setTotalCount] = useState<number>(0);

  const handleChange = (_: any, p: any) => setIndex(p - 1);

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
      const url = `/api/users/${userId}/connection/detail?page=${index}&size=10`;

      await axios.get(url, headers)
        .then((res) => {
          if (res.data.length !== 0) {
            setData(res.data);
          }

          getTotalCount();
        })
        .catch((err) => console.log(err));
    };

    const getTotalCount = async () => {
      const url = `/api/users/${userId}/connection/count`;

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
      <Box className='flex flex-row justify-center min-h-[calc(100vh-70px)] mx-[15%] my-[5%]'>
        <Box>
          <MyPageLeft />
        </Box>

        <Box className='border border-solid border-gray0 rounded-[1.25rem] w-full h-fit px-[2.875rem] py-16 ml-6'>
          <Box className='flex flex-row items-center'>
            <IconButton onClick={() => document.location = '/mypage'}>
              <Image src={PrevButton} width={18.44} height={23.48} />
            </IconButton>
            <Typography className='text-black text-xl font-medium ml-3'>룸메이트 신청 받은 리스트</Typography>
            {
              (totalCount > 0) && (
                <IconButton onClick={() => document.location = '/mypage_deletereceivelist'} className='ml-auto'>
                  <Image src={DeleteIcon} width={20} height={20} />
                </IconButton>
              )
            }
          </Box>

          <Box className='flex flex-col items-center mt-5'>
            <Box className='w-full min-h-[44rem]'>
              {
                (totalCount > 0) ? data.map((v: any, index: number) => {
                  return (
                    <MyPageDetailList props={{ v: v, index: index, userName: userName, isReceive: true }} />
                  )
                }) : (
                  <Box className='flex flex-col justify-center items-center w-full h-[786px]'>
                    <Image src={NoListIcon} width={44} height={55} />
                    <Typography className='text-gray0 text-base font-regular mt-4'>신청 받은 룸메이트가 없습니다</Typography>
                  </Box>
                )
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