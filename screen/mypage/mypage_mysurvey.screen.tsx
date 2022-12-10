import { Box, Typography } from "@mui/material";
import { NextPage } from "next";
import Image from "next/image";
import React from "react";

import MyPageLeft from "./components/mypage_left";
import MyPageQuestions from "./components/mypage_question";

import Footer from "@/components/footer";

export const MyPageMySurveyScreen: NextPage = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
        width: "100%",
        height: "50px",
        position: "absolute",
        fontFamily: "Spoqa Han Sans Neo",
        fontsx: "normal",
      }}
    >
      <Box
        sx={{
          width: "100%",
          paddingLeft: "15%",
          paddingRight: "15%",
          marginTop: "120px",
          marginBottom: "120px",
        }}
      >
        <MyPageLeft></MyPageLeft>

        {/* main content */}
        <Box
          sx={{
            minWidth: "894px",
            marginLeft: "305px",
            border: "1px solid #DBDBDB",
            borderRadius: "20px",
            padding: "64px 60px",
          }}
        >
          {/* 박스 */}
          <Box sx={{ marginBottom: "36px" }}>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "500",
                lineHeight: "25px",
              }}
            >
              나의 성향 설문조사
            </Typography>

            <Box sx={{ float: "right" }}>
              <Image src="/edit.png" width={20} height={20} />
            </Box>
          </Box>

          <MyPageQuestions />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};
