import { getCookie } from 'cookies-next';
import Image from 'next/image';

import { Box, IconButton, Pagination, PaginationItem, Typography, useMediaQuery } from "@mui/material";

import { useEffect, useState } from 'react';
import axios from 'axios';

import PrevButton from '../../public/prevButton.png';
import DeleteIcon from '../../public/deleteIcon.png';
import NoListIcon from '../../public/noListIcon.png';

import Footer from "@/components/footer";
import MyPageMenu from '@/components/mypage/mypage_menu';
import MyPageProfile from '@/components/mypage/mypage_profile';
import MyPageDetailList from '@/components/mypage/mypage_detaillist';

export const MyPageSendListScreen = () => {
  const [data, setData] = useState<object[]>([]);
  const [index, setIndex] = useState<number>(0);
  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');
  const [totalCount, setTotalCount] = useState<number>(0);

  const isLabtop = useMediaQuery('(min-width: 1024px)');
  const size = isLabtop ? 10 : 5;

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
      const url = `/api/users/${userId}/propose/detail?page=${index}&size=${size}`;

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
      <Box className='flex flex-row justify-center labtop:min-h-[calc(100vh-70px)] mobile:min-h-[calc(100vh-53px)] labtop:px-[15%] mobile:px-[5%] py-[5%]'>
        {
          isLabtop &&
          <Box>
            <MyPageProfile />
            <MyPageMenu />
          </Box>
        }

        <Box className='flex flex-col w-full'>
          {
            !isLabtop &&
            <Box className='flex flex-row items-center'>
              <IconButton onClick={() => document.location = '/mypage'}>
                <Image src={PrevButton} width={24} height={24} />
              </IconButton>
              <Typography className='text-black text-xl font-medium ml-3'>
                룸메이트 신청 보낸 리스트&nbsp;
                <Typography component='span' className='text-gray1 text-xl font-medium'>({totalCount})</Typography>
              </Typography>
            </Box>
          }

          <Box className='border border-solid border-gray0 labtop:rounded-[1.25rem] mobile:rounded-lg w-full labtop:h-fit mobile:h-full labtop:px-[2.875rem] mobile:px-3 labtop:py-16 mobile:py-9 labtop:ml-6 mobile:ml-0 labtop:mt-0 mobile:mt-5'>
            <Box className='flex flex-row items-center'>
              {
                isLabtop &&
                <Box className='flex flex-row items-center'>
                  <IconButton onClick={() => document.location = '/mypage'}>
                    <Image src={PrevButton} width={24} height={24} />
                  </IconButton>
                  <Typography className='text-black text-xl font-medium ml-3'>
                    룸메이트 신청 보낸 리스트&nbsp;
                    <Typography component='span' className='text-gray1 text-xl font-medium'>({totalCount})</Typography>
                  </Typography>
                </Box>
              }
              {
                (totalCount > 0) && (
                  <IconButton onClick={() => document.location = '/mypage_deletesendlist'} className='ml-auto'>
                    <Image src={DeleteIcon} width={20} height={20} />
                  </IconButton>
                )
              }
            </Box>

            <Box className='flex flex-col items-center h-full labtop:mt-5 mobile:mt-2'>
              <Box className='w-full labtop:min-h-[43.2rem] mobile:min-h-0'>
                {
                  (totalCount > 0) ? data.map((v: any, index: number) => {
                    return (
                      <MyPageDetailList key={index} props={{ v: v, index: index, userName: userName, isReceive: false }} />
                    )
                  }) : (
                    <Box className='flex flex-col justify-center items-center w-full labtop:h-[752px] mobile:h-[calc(100vh-300px)]'>
                      <Image src={NoListIcon} width={44} height={55} />
                      <Typography className='text-gray0 text-base font-regular mt-4'>신청 보낸 룸메이트가 없습니다</Typography>
                    </Box>
                  )
                }
              </Box>

              <Pagination
                count={Math.ceil(totalCount / size)}
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
                  marginTop: 'auto',
                  mb: '36px'
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>

      <Footer />
    </Box>
  )
}