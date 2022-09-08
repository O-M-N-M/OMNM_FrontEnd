import { Box, Typography } from "@mui/material";
import { NextPage } from "next";
import Link from 'next/link';

import { OMNM_ICON_HEIGHT, OMNM_ICON_WIDTH } from "./landing.const";

import { Icon } from "@/components";

export const LadingScreen: NextPage = () => {
  return (
    <Box className="flex flex-col items-center w-screen">
      <Box className="flex justify-between w-full max-w-screen-lg gap-3">
        <Box className="flex flex-col gap-5">
          <Box>
            <Typography variant="h1">
              {`오늘 만나고 내일 만나는\n기숙사 `}
              <Box component="span" className="text-accent1">
                룸메 매칭
              </Box>
              {" 서비스"}
            </Typography>
          </Box>
          <Box className="flex flex-col gap-2">
            <Typography variant="h5">
              <Icon
                icon="omnm"
                width={OMNM_ICON_WIDTH}
                height={OMNM_ICON_HEIGHT}
              />
              {"에서 나와 잘맞는 룸메를 찾아보세요"}
            </Typography>
            <Typography variant="h5">
              소울메이트가 될 수 있는 룸메를 추천해드려요!
            </Typography>
          </Box>
        </Box>
        <Link href="/login">
          <a>로그인</a>
        </Link>
        {/* <Link href="/signup">
          <a>회원가입</a>
        </Link> */}
      </Box>
    </Box>
  );
};
