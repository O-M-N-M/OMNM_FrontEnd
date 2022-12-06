import { Box, Typography, Button } from "@mui/material";
import { NextPage } from "next";
import React, { useState } from "react";

import MyPageLeft from "./components/mypage_left";

import Footer from "@/components/footer";

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

      <Footer />
    </Box>
  );
};
