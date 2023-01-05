import Image from 'next/image';
import { getCookie } from 'cookies-next';

import { Box, Button, IconButton, Pagination, PaginationItem, Typography } from "@mui/material";

import { useEffect, useState } from 'react';
import axios from 'axios';

import basicProfile from "../../public/basicProfile.png";
import DeleteIcon from '../../public/deleteIcon.png';
import Footer from "@/components/footer";
import MyPageLeft from "@/components/mypage/mypage_left";

export const MyPageReceiveListScreen = () => {
  const [userId, setUserId] = useState('');
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
          getPageData();
        })
        .catch((err) => console.log(err));
    };

    const getPageData = async () => {
      const url = `/api/users/${userId}/connection/detail?page=${index}&size=10`;

      await axios.get(url, headers)
        .then((res) => {
          setData(res.data);
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
      <Box className='flex flex-row justify-center min-h-[calc(100vh-50px)] w-screen my-[5%]'>
        <Box>
          <MyPageLeft />
        </Box>

        <Box className='border border-solid border-gray0 rounded-[1.25rem] h-fit px-[2.875rem] py-16 ml-6'>
          <Box className='flex flex-row items-center'>
            <Typography className='text-black text-xl font-medium'>룸메 신청 받은 리스트</Typography>
            <IconButton className='ml-auto'>
              <Image src={DeleteIcon} width={20} height={20} />
            </IconButton>
          </Box>

          <Box className='flex flex-col items-center mt-5'>
            <Box className='min-h-[44rem]'>
              {
                data.map((v: any, index: number) => {
                  return (
                    <Box key={index} className='flex flex-row items-center border border-solid border-gray0 rounded-xl w-fit h-fit mt-4 px-6 py-3'>
                      <Box className='border border-solid border-gray1 rounded-full px-1 py-0.5'>
                        {
                          v.time[5] === '0' ? (
                            <Typography className='text-gray1 text-xs font-medium text-center min-w-[2rem]'>{v.time.slice(6, 7)}.{v.time.slice(8, 10)}</Typography>
                          ) : (
                            <Typography className='text-gray1 text-xs font-medium text-center min-w-[2rem]'>{v.time.slice(5, 7)}.{v.time.slice(8, 10)}</Typography>
                          )
                        }
                      </Box>

                      <Box className='ml-8'>
                        {
                          v.profileUrl === null ?
                            <Image src={basicProfile} width={24} height={24} />
                            :
                            <Image loader={() => v.profileUrl} src={v.profileUrl} width={24} height={24} />
                        }
                      </Box>

                      <Typography className='text-black text-base font-medium ml-3 w-16'>{v.name}</Typography>
                      <Typography className='text-gray1 text-xs font-regular ml-2'>· {v.age}</Typography>
                      <Typography className='text-black text-xs font-regular ml-5 w-1'>{v.mbti}</Typography>
                      <Button className='bg-white border border-solid border-accent1 rounded-full ml-32'>
                        <Typography className='text-accent1 text-xs font-regular'>프로필 보기</Typography>
                      </Button>
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