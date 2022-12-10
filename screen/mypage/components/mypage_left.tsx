import { Box, Typography } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import React from "react";

import MyPageProfile from "./mypage_profile";

export default function MyPageLeft() {
  function onClickLogout() {
    axios.post("/api/users/logout").then((response) => {
      console.log(response);
      // if (response.data.success) {
      // } else {
      //   alert("로그아웃에 실패");
      // }
    });
  }

  return (
    <Box sx={{ width: "300px", height: "100%", float: "left" }}>
      {/* left profile */}
      <MyPageProfile></MyPageProfile>

      {/* left menu  */}
      <Box
        sx={{
          marginTop: "24px",
          alignItems: "center",
          width: "282px",
          padding: "42px 90px 42px 55px",
          border: "1px solid #DBDBDB",
          borderRadius: "20px",
        }}
      >
        <Box sx={{ height: "" }}>
          <Box>
            <Typography
              sx={{
                fontFamily: "Spoqa Han Sans Neo",
                fontsx: "normal",
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "20px",
                letterSpacing: "-0.3px",
              }}
            >
              룸메 신청 리스트
            </Typography>
          </Box>

          <Link href="/mypage_receive">
            <Box
              sx={{
                marginTop: "20px",
                gap: "12px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Spoqa Han Sans Neo",
                  fontsx: "normal",
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "20px",
                  letterSpacing: "-0.3px",
                }}>
                신청 받은 리스트
              </Typography>
            </Box>
          </Link>
          <Link href="/mypage_send">
            <Box
              sx={{
                marginTop: "20px",
                gap: "12px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Spoqa Han Sans Neo",
                  fontsx: "normal",
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "20px",
                  letterSpacing: "-0.3px",
                }}>
                신청 보낸 리스트
              </Typography>
            </Box>
          </Link>
          <Link href="/mypage_like">
            <Box
              sx={{
                marginTop: "20px",
                gap: "12px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Spoqa Han Sans Neo",
                  fontsx: "normal",
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "20px",
                  letterSpacing: "-0.3px",
                }}>
                찜한 룸메 리스트
              </Typography>
            </Box>
          </Link>
        </Box>

        <Box sx={{ height: "120px", marginTop: "36px" }}>
          <Typography
            sx={{
              fontFamily: "Spoqa Han Sans Neo",
              fontsx: "normal",
              fontWeight: "500",
              fontSize: "16px",
              lineHeight: "20px",
              letterSpacing: "-0.3px",
            }}
          >
            성향 설문조사
          </Typography>
          <Link href="/mypage_mysurvey">
            <Box
              sx={{
                marginTop: "20px",
                gap: "12px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Spoqa Han Sans Neo",
                  fontsx: "normal",
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "20px",
                  letterSpacing: "-0.3px",
                }}>
                나의 성향 설문조사
              </Typography>
            </Box>
          </Link>
          <Link href="/mypage_matesurvey">
            <Box
              sx={{
                marginTop: "20px",
                gap: "12px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Spoqa Han Sans Neo",
                  fontsx: "normal",
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "20px",
                  letterSpacing: "-0.3px",
                }}>
                룸메 성향 설문조사
              </Typography>
            </Box>
          </Link>
        </Box>

        <Box sx={{ height: "120px", marginTop: "36px" }}>
          <Typography
            sx={{
              fontFamily: "Spoqa Han Sans Neo",
              fontsx: "normal",
              fontWeight: "500",
              fontSize: "16px",
              lineHeight: "20px",
              letterSpacing: "-0.3px",
            }}
          >
            설정
          </Typography>
          <Link href="/mypage_changepw">
            <Box
              sx={{
                marginTop: "20px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Spoqa Han Sans Neo",
                  fontsx: "normal",
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "20px",
                  letterSpacing: "-0.3px",
                }}>
                비밀번호 변경
              </Typography>
            </Box>
          </Link>
          <Link href="/mypage_unregister">
            <Box
              sx={{
                marginTop: "20px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Spoqa Han Sans Neo",
                  fontsx: "normal",
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "20px",
                  letterSpacing: "-0.3px",
                }}>
                회원 탈퇴
              </Typography>
            </Box>
          </Link>
          <Box
            onClick={onClickLogout}
            sx={{
              marginTop: "20px",
              fontFamily: "Spoqa Han Sans Neo",
              fontsx: "normal",
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "20px",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Spoqa Han Sans Neo",
                fontsx: "normal",
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "20px",
                letterSpacing: "-0.3px",
              }}>
              로그아웃
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}//
