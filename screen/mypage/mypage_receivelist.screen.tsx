// import Image from 'next/image';

// import { Box, IconButton, Pagination, PaginationItem, Typography } from "@mui/material";

// import DeleteIcon from '../../public/deleteIcon.png';
import Footer from "@/components/footer";
import MyPageLeft from "@/components/mypage/mypage_left";
import { Box } from "@mui/material";

export const MyPageReceiveListScreen = () => {
  return (
    <Box>
      <Box className='flex flex-row justify-center min-h-[calc(100vh-50px)] w-screen my-[5%]'>
        <Box>
          <MyPageLeft />
        </Box>

        <Box className='border border-solid border-gray0 rounded-[1.25rem] px-[2.875rem] py-16 ml-6'>
          {/* <Box className='flex flex-row items-center'>
            <Typography className='text-black text-xl font-medium'>룸메 신청 받은 리스트</Typography>
            <IconButton className='ml-auto'>
              <Image src={DeleteIcon} width={20} height={20} />
            </IconButton>
          </Box>

          <Pagination
            count={4}
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
          /> */}
        </Box>
      </Box>

      <Footer />
    </Box>
  )
}