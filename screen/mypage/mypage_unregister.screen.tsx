import { Box, Typography, Button } from "@mui/material";
import { flexbox } from "@mui/system";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import group from "../../public/Group1.png";
import logo from "../../public/logo2.png";
import logorights from "../../public/logorights.png";

import MyPageLeft from "./components/mypage_left";

export const MyPageUnregisterScreen: NextPage = () => {
  const [pw, setPW] = useState("");
  const [id, setID] = useState("");

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
            width: "894px",
            height: "475px",
            left: "666px",
            top: "170px",
            marginTop: "170px",
            marginLeft: "305px",
            marginBottom: "751px",
            border: "1px solid #DBDBDB",
            borderRadius: "20px",
            padding: "64px 60px",
          }}
        >
          <div style={{ height: "875px" }}>
            <div
              style={{
                height: "25px",
                width: "79px",
                marginTop: "35px",
                marginLeft: "340px",
                marginBottom: "360px",
              }}
            >
              <span
                style={{
                  fontSize: "20px",
                  fontWeight: "500",
                  lineHeight: "25px",
                  position: "absolute",
                }}
              >
                회원 탈퇴
              </span>
            </div>

            <div
              style={{
                width: "310px",
                height: "176px",
                marginTop: "40px",
                marginLeft: "290",
                marginBottom: "192px",
              }}
            >
              <form className="p-10 mt-10 border border-0 border-solid rounded-lg ml-50">
                <Typography className="text-xl font-medium text-black">
                  아이디
                </Typography>
                <input
                  type="text"
                  name="id"
                  placeholder="아이디 입력"
                  value={id}
                  onChange={(e) => setID(e.target.value)}
                  className="rounded-full text-gray1 border border-solid border-gray0 text-xs block w-60 p-2.5 mt-2 focus:outline-none"
                  required
                />
                <Typography className="text-xl font-medium text-black">
                  비밀번호 입력
                </Typography>
                <input
                  type="text"
                  name="pw"
                  placeholder="비밀번호 입력"
                  value={pw}
                  onChange={(e) => setPW(e.target.value)}
                  className="rounded-full text-gray1 border border-solid border-gray0 text-xs block w-60 p-2.5 mt-2 focus:outline-none"
                  required
                />
              </form>

              <div style={{ marginLeft: "150px", marginTop: "10px" }}>
                <Button
                  type="submit"
                  sx={{
                    background: "#4B99EB",
                    borderRadius: "200px",
                    width: "100px",
                    height: "40px",
                    color: "#FFFFFF",
                    fontFamily: "Spoqa Han Sans Neo",
                    border: "1px solid #4B99EB",
                    fontFamily: "Spoqa Han Sans Neo",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "15px",
                    lineHeight: "15px",
                  }}
                >
                  확인
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Box>
      <Box
        component="footer"
        sx={{
          backgroundColor: "#FBFBFB;",
          width: "1920px",
          height: "180px",
          position: "absolute",
          fontFamily: "Spoqa Han Sans Neo",
          fontStyle: "normal",
          paddingLeft: "360px",
          paddingRight: "360px",
          padding: "34px 360px 34px 360px",
          borderBottom: 0,
        }}
      >
        <Link href="/">
          <Box
            sx={{
              width: "50%",
              float: "left",
              textAlign: "left",
              paddingTop: "30px",
            }}
          >
            <Image src={logorights} width={234} height={91} />
          </Box>
        </Link>
        <Box
          sx={{
            width: "50%",
            float: "right",
            textAlign: "right",
            paddingTop: "30px",
          }}
        >
          <div style={{ height: "30px" }}>
            <span
              style={{
                marginLeft: "150px",
                float: "left",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              메인
            </span>
            <span
              style={{ float: "right", fontSize: "16px", fontWeight: "500" }}
            >
              마이페이지
            </span>
          </div>
          <div style={{ height: "30px" }}>
            <span
              style={{ float: "right", fontSize: "14px", fontWeight: "400" }}
            >
              룸메 신청 내역
            </span>
          </div>
          <div style={{ height: "30px" }}>
            <span
              style={{ float: "right", fontSize: "14px", fontWeight: "400" }}
            >
              성향 설문조사
            </span>
          </div>
          <div style={{ height: "30px" }}>
            <span
              style={{ float: "right", fontSize: "14px", fontWeight: "400" }}
            >
              설정
            </span>
          </div>
        </Box>
      </Box>
    </Box>
  );
};
