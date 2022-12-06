import { Box } from "@mui/material";
import { flexbox } from "@mui/system";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import group from "../../public/Group1.png";
import edit from "../../public/edit.png";
import logo from "../../public/logo2.png";

import MyPageLeft from "./components/mypage_left";
import MyPageQuestions from "./components/mypage_question";

export const MyPageMySurveyScreen: NextPage = () => {
  return (
    <Box
      component="div"
      sx={{
        backgroundColor: "#FFFFFF",
        width: "100%",
        height: "50px",
        position: "absolute",
        fontFamily: "Spoqa Han Sans Neo",
        fontStyle: "normal",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#FFFFFF",
          width: "100%",
          height: "100%",
          display: flexbox,
          paddingLeft: "360px",
          paddingRight: "360px",
          borderBottom: 1,
          borderColor: "#DBDBDB",
        }}
      >
        <Link href="/">
          <Box
            sx={{
              width: "50%",
              float: "left",
              textAlign: "left",
              paddingTop: "10px",
            }}
          >
            <Image src={logo} width={115} height={20} style={{ top: 10 }} />
          </Box>
        </Link>
        <Box
          sx={{
            width: "50%",
            float: "right",
            textAlign: "right",
            paddingTop: "10px",
          }}
        >
          <Image src={group} width={26} height={26} style={{ top: 10 }} />
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          paddingLeft: "360px",
          paddingRight: "360px",
          marginTop: "120px",
          marginBottom: "120px",
        }}
      >
        <MyPageLeft></MyPageLeft>

        {/* main content */}
        <div
          style={{
            marginLeft: "305px",
            border: "1px solid #DBDBDB",
            borderRadius: "20px",
            padding: "64px 60px",
          }}
        >
          {/* 박스 */}
          <div style={{ marginBottom: "36px" }}>
            <span
              style={{
                fontSize: "20px",
                fontWeight: "500",
                lineHeight: "25px",
              }}
            >
              나의 성향 설문조사
            </span>

            <div style={{ float: "right" }}>
              <Image src={edit} width={20} height={20} />
            </div>
          </div>

          <MyPageQuestions />
        </div>
      </Box>
    </Box>
  );
};
