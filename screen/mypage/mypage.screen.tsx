import { Box, Button, Typography } from "@mui/material";
import { flexbox } from "@mui/system";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import group from "../../public/Group1.png";
import basicProfile from "../../public/basicProfile.png";
import check from "../../public/check.png";
import logo from "../../public/logo2.png";
import logorights from "../../public/logorights.png";

import MyPageLeft from "./components/mypage_left";

export const MyPageScreen: NextPage = () => {
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
          backgroundColor: "#FFFFFF",
          width: "100%",
          height: "100%",
          display: 'flex',
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
            <Image src={logo} width={115} height={20} />
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
          <Image src={group} width={26} height={26} />
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
        <Box
          sx={{
            width: "894px",
            marginLeft: "306px",
            border: "1px solid #DBDBDB",
            borderRadius: "20px",
            padding: "64px 60px",
          }}
        >
          <Box sx={{ height: "400px" }}>
            <Box sx={{ height: "25px" }}>
              <Typography
                sx={{
                  float: "left",
                  fontSize: "20px",
                  fontWeight: "500",
                  lineHeight: "25px",
                }}
              >
                룸메 신청 받은 리스트
              </Typography>
              <Typography
                sx={{
                  float: "right",
                  fontSize: "12px",
                  fontWeight: "500",
                  lineHeight: "15px",
                  color: "#9B9EA1",
                }}
              >
                더보기
              </Typography>
            </Box>
            <Box sx={{ marginTop: "24px" }}>
              <Box sx={{ float: "left" }}>
                <Box>
                  <Typography
                    sx={{
                      height: "15px",
                      fontSize: "12px",
                      fontWeight: "400",
                      lineHeight: "15px",
                      color: "#9B9EA1",
                    }}
                  >
                    9.24
                  </Typography>
                </Box>
                <Box sx={{ marginTop: "6px" }}>
                  <Box
                    sx={{
                      marginTop: "10px",
                      width: "372px",
                      height: "48px",
                      border: "1px solid #DBDBDB",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box sx={{ float: "left", marginTop: "4px" }}>
                      <Image src={basicProfile} width={24} height={24} />
                    </Box>
                    <Box sx={{ float: "left", marginLeft: "12px" }}>
                      <Typography
                        sx={{
                          height: "15px",
                          fontSize: "16px",
                          fontWeight: "500",
                          lineHeight: "20px",
                        }}
                      >
                        이기태
                      </Typography>
                      <Typography
                        sx={{
                          height: "15px",
                          fontSize: "12px",
                          fontWeight: "400",
                          lineHeight: "15px",
                          color: "#9B9EA1",
                          marginLeft: "4px",
                        }}
                      >
                        · 24
                      </Typography>
                    </Box>
                    <Box sx={{ float: "left", marginLeft: "28px" }}>
                      <Image src={check} width={14} height={14} />
                      <Typography sx={{ marginLeft: "8px" }}>78%</Typography>
                    </Box>
                    <Box sx={{ float: "left", marginLeft: "48px" }}>
                      <Button
                        type="submit"
                        sx={{
                          background: "#FFFFFF",
                          borderRadius: "200px",
                          width: "84px",
                          height: "24px",
                          color: "#4B99EB",
                          border: "1px solid #4B99EB",
                          fontFamily: "Spoqa Han Sans Neo",
                          fontsx: "normal",
                          fontWeight: "400",
                          fontSize: "12px",
                          lineHeight: "15px",
                          letterSpacing: "-0.3px",
                        }}
                      >
                        프로필 보기
                      </Button>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      marginTop: "10px",
                      width: "372px",
                      height: "48px",
                      border: "1px solid #DBDBDB",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box sx={{ float: "left", marginTop: "4px" }}>
                      <Image src={basicProfile} width={24} height={24} />
                    </Box>
                    <Box sx={{ float: "left", marginLeft: "12px" }}>
                      <Typography
                        sx={{
                          height: "15px",
                          fontSize: "16px",
                          fontWeight: "500",
                          lineHeight: "20px",
                        }}
                      >
                        이기태
                      </Typography>
                      <Typography
                        sx={{
                          height: "15px",
                          fontSize: "12px",
                          fontWeight: "400",
                          lineHeight: "15px",
                          color: "#9B9EA1",
                          marginLeft: "4px",
                        }}
                      >
                        · 24
                      </Typography>
                    </Box>
                    <Box sx={{ float: "left", marginLeft: "28px" }}>
                      <Image src={check} width={14} height={14} />
                      <Typography sx={{ marginLeft: "8px" }}>78%</Typography>
                    </Box>
                    <Box sx={{ float: "left", marginLeft: "48px" }}>
                      <Button
                        type="submit"
                        sx={{
                          background: "#FFFFFF",
                          borderRadius: "200px",
                          width: "84px",
                          height: "24px",
                          color: "#4B99EB",
                          border: "1px solid #4B99EB",
                          fontFamily: "Spoqa Han Sans Neo",
                          fontsx: "normal",
                          fontWeight: "400",
                          fontSize: "12px",
                          lineHeight: "15px",
                          letterSpacing: "-0.3px",
                        }}
                      >
                        프로필 보기
                      </Button>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      marginTop: "10px",
                      width: "372px",
                      height: "48px",
                      border: "1px solid #DBDBDB",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box sx={{ float: "left", marginTop: "4px" }}>
                      <Image src={basicProfile} width={24} height={24} />
                    </Box>
                    <Box sx={{ float: "left", marginLeft: "12px" }}>
                      <Typography
                        sx={{
                          height: "15px",
                          fontSize: "16px",
                          fontWeight: "500",
                          lineHeight: "20px",
                        }}
                      >
                        이기태
                      </Typography>
                      <Typography
                        sx={{
                          height: "15px",
                          fontSize: "12px",
                          fontWeight: "400",
                          lineHeight: "15px",
                          color: "#9B9EA1",
                          marginLeft: "4px",
                        }}
                      >
                        · 24
                      </Typography>
                    </Box>
                    <Box sx={{ float: "left", marginLeft: "28px" }}>
                      <Image src={check} width={14} height={14} />
                      <Typography sx={{ marginLeft: "8px" }}>78%</Typography>
                    </Box>
                    <Box sx={{ float: "left", marginLeft: "48px" }}>
                      <Button
                        type="submit"
                        sx={{
                          background: "#FFFFFF",
                          borderRadius: "200px",
                          width: "84px",
                          height: "24px",
                          color: "#4B99EB",
                          border: "1px solid #4B99EB",
                          fontFamily: "Spoqa Han Sans Neo",
                          fontsx: "normal",
                          fontWeight: "400",
                          fontSize: "12px",
                          lineHeight: "15px",
                          letterSpacing: "-0.3px",
                        }}
                      >
                        프로필 보기
                      </Button>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      marginTop: "10px",
                      width: "372px",
                      height: "48px",
                      border: "1px solid #DBDBDB",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box sx={{ float: "left", marginTop: "4px" }}>
                      <Image src={basicProfile} width={24} height={24} />
                    </Box>
                    <Box sx={{ float: "left", marginLeft: "12px" }}>
                      <Typography
                        sx={{
                          height: "15px",
                          fontSize: "16px",
                          fontWeight: "500",
                          lineHeight: "20px",
                        }}
                      >
                        이기태
                      </Typography>
                      <Typography
                        sx={{
                          height: "15px",
                          fontSize: "12px",
                          fontWeight: "400",
                          lineHeight: "15px",
                          color: "#9B9EA1",
                          marginLeft: "4px",
                        }}
                      >
                        · 24
                      </Typography>
                    </Box>
                    <Box sx={{ float: "left", marginLeft: "28px" }}>
                      <Image src={check} width={14} height={14} />
                      <Typography sx={{ marginLeft: "8px" }}>78%</Typography>
                    </Box>
                    <Box sx={{ float: "left", marginLeft: "48px" }}>
                      <Button
                        type="submit"
                        sx={{
                          background: "#FFFFFF",
                          borderRadius: "200px",
                          width: "84px",
                          height: "24px",
                          color: "#4B99EB",
                          border: "1px solid #4B99EB",
                          fontFamily: "Spoqa Han Sans Neo",
                          fontsx: "normal",
                          fontWeight: "400",
                          fontSize: "12px",
                          lineHeight: "15px",
                          letterSpacing: "-0.3px",
                        }}
                      >
                        프로필 보기
                      </Button>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      marginTop: "10px",
                      width: "372px",
                      height: "48px",
                      border: "1px solid #DBDBDB",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box sx={{ float: "left", marginTop: "4px" }}>
                      <Image src={basicProfile} width={24} height={24} />
                    </Box>
                    <Box sx={{ float: "left", marginLeft: "12px" }}>
                      <Typography
                        sx={{
                          height: "15px",
                          fontSize: "16px",
                          fontWeight: "500",
                          lineHeight: "20px",
                        }}
                      >
                        이기태
                      </Typography>
                      <Typography
                        sx={{
                          height: "15px",
                          fontSize: "12px",
                          fontWeight: "400",
                          lineHeight: "15px",
                          color: "#9B9EA1",
                          marginLeft: "4px",
                        }}
                      >
                        · 24
                      </Typography>
                    </Box>
                    <Box sx={{ float: "left", marginLeft: "28px" }}>
                      <Image src={check} width={14} height={14} />
                      <Typography sx={{ marginLeft: "8px" }}>78%</Typography>
                    </Box>
                    <Box sx={{ float: "left", marginLeft: "48px" }}>
                      <Button
                        type="submit"
                        sx={{
                          background: "#FFFFFF",
                          borderRadius: "200px",
                          width: "84px",
                          height: "24px",
                          color: "#4B99EB",
                          border: "1px solid #4B99EB",
                          fontFamily: "Spoqa Han Sans Neo",
                          fontsx: "normal",
                          fontWeight: "400",
                          fontSize: "12px",
                          lineHeight: "15px",
                          letterSpacing: "-0.3px",
                        }}
                      >
                        프로필 보기
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box sx={{ float: "right" }}>
                <Box>
                  <Typography
                    sx={{
                      height: "15px",
                      fontSize: "12px",
                      fontWeight: "400",
                      lineHeight: "15px",
                      color: "#9B9EA1",
                    }}
                  >
                    9.24
                  </Typography>
                </Box>
                <Box sx={{ marginTop: "6px" }}>
                  <Box
                    sx={{
                      marginTop: "10px",
                      width: "372px",
                      height: "48px",
                      border: "1px solid #DBDBDB",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box sx={{ float: "left", marginTop: "4px" }}>
                      <Image src={basicProfile} width={24} height={24} />
                    </Box>
                    <Box sx={{ float: "left", marginLeft: "12px" }}>
                      <Typography
                        sx={{
                          height: "15px",
                          fontSize: "16px",
                          fontWeight: "500",
                          lineHeight: "20px",
                        }}
                      >
                        이기태
                      </Typography>
                      <Typography
                        sx={{
                          height: "15px",
                          fontSize: "12px",
                          fontWeight: "400",
                          lineHeight: "15px",
                          color: "#9B9EA1",
                          marginLeft: "4px",
                        }}
                      >
                        · 24
                      </Typography>
                    </Box>
                    <Box sx={{ float: "left", marginLeft: "28px" }}>
                      <Image src={check} width={14} height={14} />
                      <Typography sx={{ marginLeft: "8px" }}>78%</Typography>
                    </Box>
                    <Box sx={{ float: "left", marginLeft: "48px" }}>
                      <Button
                        type="submit"
                        sx={{
                          background: "#FFFFFF",
                          borderRadius: "200px",
                          width: "84px",
                          height: "24px",
                          color: "#4B99EB",
                          border: "1px solid #4B99EB",
                          fontFamily: "Spoqa Han Sans Neo",
                          fontsx: "normal",
                          fontWeight: "400",
                          fontSize: "12px",
                          lineHeight: "15px",
                          letterSpacing: "-0.3px",
                        }}
                      >
                        프로필 보기
                      </Button>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      marginTop: "10px",
                      width: "372px",
                      height: "48px",
                      border: "1px solid #DBDBDB",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box sx={{ float: "left", marginTop: "4px" }}>
                      <Image src={basicProfile} width={24} height={24} />
                    </Box>
                    <Box sx={{ float: "left", marginLeft: "12px" }}>
                      <Typography
                        sx={{
                          height: "15px",
                          fontSize: "16px",
                          fontWeight: "500",
                          lineHeight: "20px",
                        }}
                      >
                        이기태
                      </Typography>
                      <Typography
                        sx={{
                          height: "15px",
                          fontSize: "12px",
                          fontWeight: "400",
                          lineHeight: "15px",
                          color: "#9B9EA1",
                          marginLeft: "4px",
                        }}
                      >
                        · 24
                      </Typography>
                    </Box>
                    <Box sx={{ float: "left", marginLeft: "28px" }}>
                      <Image src={check} width={14} height={14} />
                      <Typography sx={{ marginLeft: "8px" }}>78%</Typography>
                    </Box>
                    <Box sx={{ float: "left", marginLeft: "48px" }}>
                      <Button
                        type="submit"
                        sx={{
                          background: "#FFFFFF",
                          borderRadius: "200px",
                          width: "84px",
                          height: "24px",
                          color: "#4B99EB",
                          border: "1px solid #4B99EB",
                          fontFamily: "Spoqa Han Sans Neo",
                          fontsx: "normal",
                          fontWeight: "400",
                          fontSize: "12px",
                          lineHeight: "15px",
                          letterSpacing: "-0.3px",
                        }}
                      >
                        프로필 보기
                      </Button>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      marginTop: "10px",
                      width: "372px",
                      height: "48px",
                      border: "1px solid #DBDBDB",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box sx={{ float: "left", marginTop: "4px" }}>
                      <Image src={basicProfile} width={24} height={24} />
                    </Box>
                    <Box sx={{ float: "left", marginLeft: "12px" }}>
                      <Typography
                        sx={{
                          height: "15px",
                          fontSize: "16px",
                          fontWeight: "500",
                          lineHeight: "20px",
                        }}
                      >
                        이기태
                      </Typography>
                      <Typography
                        sx={{
                          height: "15px",
                          fontSize: "12px",
                          fontWeight: "400",
                          lineHeight: "15px",
                          color: "#9B9EA1",
                          marginLeft: "4px",
                        }}
                      >
                        · 24
                      </Typography>
                    </Box>
                    <Box sx={{ float: "left", marginLeft: "28px" }}>
                      <Image src={check} width={14} height={14} />
                      <Typography sx={{ marginLeft: "8px" }}>78%</Typography>
                    </Box>
                    <Box sx={{ float: "left", marginLeft: "48px" }}>
                      <Button
                        type="submit"
                        sx={{
                          background: "#FFFFFF",
                          borderRadius: "200px",
                          width: "84px",
                          height: "24px",
                          color: "#4B99EB",
                          border: "1px solid #4B99EB",
                          fontFamily: "Spoqa Han Sans Neo",
                          fontsx: "normal",
                          fontWeight: "400",
                          fontSize: "12px",
                          lineHeight: "15px",
                          letterSpacing: "-0.3px",
                        }}
                      >
                        프로필 보기
                      </Button>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      marginTop: "10px",
                      width: "372px",
                      height: "48px",
                      border: "1px solid #DBDBDB",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box sx={{ float: "left", marginTop: "4px" }}>
                      <Image src={basicProfile} width={24} height={24} />
                    </Box>
                    <Box sx={{ float: "left", marginLeft: "12px" }}>
                      <Typography
                        sx={{
                          height: "15px",
                          fontSize: "16px",
                          fontWeight: "500",
                          lineHeight: "20px",
                        }}
                      >
                        이기태
                      </Typography>
                      <Typography
                        sx={{
                          height: "15px",
                          fontSize: "12px",
                          fontWeight: "400",
                          lineHeight: "15px",
                          color: "#9B9EA1",
                          marginLeft: "4px",
                        }}
                      >
                        · 24
                      </Typography>
                    </Box>
                    <Box sx={{ float: "left", marginLeft: "28px" }}>
                      <Image src={check} width={14} height={14} />
                      <Typography sx={{ marginLeft: "8px" }}>78%</Typography>
                    </Box>
                    <Box sx={{ float: "left", marginLeft: "48px" }}>
                      <Button
                        type="submit"
                        sx={{
                          background: "#FFFFFF",
                          borderRadius: "200px",
                          width: "84px",
                          height: "24px",
                          color: "#4B99EB",
                          border: "1px solid #4B99EB",
                          fontFamily: "Spoqa Han Sans Neo",
                          fontsx: "normal",
                          fontWeight: "400",
                          fontSize: "12px",
                          lineHeight: "15px",
                          letterSpacing: "-0.3px",
                        }}
                      >
                        프로필 보기
                      </Button>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      marginTop: "10px",
                      width: "372px",
                      height: "48px",
                      border: "1px solid #DBDBDB",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box sx={{ float: "left", marginTop: "4px" }}>
                      <Image src={basicProfile} width={24} height={24} />
                    </Box>
                    <Box sx={{ float: "left", marginLeft: "12px" }}>
                      <Typography
                        sx={{
                          height: "15px",
                          fontSize: "16px",
                          fontWeight: "500",
                          lineHeight: "20px",
                        }}
                      >
                        이기태
                      </Typography>
                      <Typography
                        sx={{
                          height: "15px",
                          fontSize: "12px",
                          fontWeight: "400",
                          lineHeight: "15px",
                          color: "#9B9EA1",
                          marginLeft: "4px",
                        }}
                      >
                        · 24
                      </Typography>
                    </Box>
                    <Box sx={{ float: "left", marginLeft: "28px" }}>
                      <Image src={check} width={14} height={14} />
                      <Typography sx={{ marginLeft: "8px" }}>78%</Typography>
                    </Box>
                    <Box sx={{ float: "left", marginLeft: "48px" }}>
                      <Button
                        type="submit"
                        sx={{
                          background: "#FFFFFF",
                          borderRadius: "200px",
                          width: "84px",
                          height: "24px",
                          color: "#4B99EB",
                          border: "1px solid #4B99EB",
                          fontFamily: "Spoqa Han Sans Neo",
                          fontsx: "normal",
                          fontWeight: "400",
                          fontSize: "12px",
                          lineHeight: "15px",
                          letterSpacing: "-0.3px",
                        }}
                      >
                        프로필 보기
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box sx={{ height: "400px", marginTop: "56px" }}>
            <Box sx={{ height: "25px" }}>
              <Typography
                sx={{
                  float: "left",
                  fontSize: "20px",
                  fontWeight: "500",
                  lineHeight: "25px",
                }}
              >
                룸메 신청 보낸 리스트
              </Typography>
              <Typography
                sx={{
                  float: "right",
                  fontSize: "12px",
                  fontWeight: "500",
                  lineHeight: "15px",
                  color: "#9B9EA1",
                }}
              >
                더보기
              </Typography>
            </Box>
            <Box sx={{ marginTop: "24px" }}>
              <Box sx={{ float: "left" }}>
                <Box>
                  <Typography
                    sx={{
                      height: "15px",
                      fontSize: "12px",
                      fontWeight: "400",
                      lineHeight: "15px",
                      color: "#9B9EA1",
                    }}
                  >
                    9.24
                  </Typography>
                </Box>
                <Box sx={{ marginTop: "6px" }}>
                  <Box
                    sx={{
                      marginTop: "10px",
                      width: "372px",
                      height: "48px",
                      border: "1px solid #DBDBDB",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box sx={{ float: "left", marginTop: "4px" }}>
                      <Image src={basicProfile} width={24} height={24} />
                    </Box>
                    <Box sx={{ float: "left", marginLeft: "12px" }}>
                      <Typography
                        sx={{
                          height: "15px",
                          fontSize: "16px",
                          fontWeight: "500",
                          lineHeight: "20px",
                        }}
                      >
                        이기태
                      </Typography>
                      <Typography
                        sx={{
                          height: "15px",
                          fontSize: "12px",
                          fontWeight: "400",
                          lineHeight: "15px",
                          color: "#9B9EA1",
                          marginLeft: "4px",
                        }}
                      >
                        · 24
                      </Typography>
                    </Box>
                    <Box sx={{ float: "left", marginLeft: "28px" }}>
                      <Image src={check} width={14} height={14} />
                      <Typography sx={{ marginLeft: "8px" }}>78%</Typography>
                    </Box>
                    <Box sx={{ float: "left", marginLeft: "48px" }}>
                      <Button
                        type="submit"
                        sx={{
                          background: "#FFFFFF",
                          borderRadius: "200px",
                          width: "84px",
                          height: "24px",
                          color: "#4B99EB",
                          border: "1px solid #4B99EB",
                          fontFamily: "Spoqa Han Sans Neo",
                          fontsx: "normal",
                          fontWeight: "400",
                          fontSize: "12px",
                          lineHeight: "15px",
                          letterSpacing: "-0.3px",
                        }}
                      >
                        프로필 보기
                      </Button>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      marginTop: "10px",
                      width: "372px",
                      height: "48px",
                      border: "1px solid #DBDBDB",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box sx={{ float: "left", marginTop: "4px" }}>
                      <Image src={basicProfile} width={24} height={24} />
                    </Box>
                    <Box sx={{ float: "left", marginLeft: "12px" }}>
                      <Typography
                        sx={{
                          height: "15px",
                          fontSize: "16px",
                          fontWeight: "500",
                          lineHeight: "20px",
                        }}
                      >
                        이기태
                      </Typography>
                      <Typography
                        sx={{
                          height: "15px",
                          fontSize: "12px",
                          fontWeight: "400",
                          lineHeight: "15px",
                          color: "#9B9EA1",
                          marginLeft: "4px",
                        }}
                      >
                        · 24
                      </Typography>
                    </Box>
                    <Box sx={{ float: "left", marginLeft: "28px" }}>
                      <Image src={check} width={14} height={14} />
                      <Typography sx={{ marginLeft: "8px" }}>78%</Typography>
                    </Box>
                    <Box sx={{ float: "left", marginLeft: "48px" }}>
                      <Button
                        type="submit"
                        sx={{
                          background: "#FFFFFF",
                          borderRadius: "200px",
                          width: "84px",
                          height: "24px",
                          color: "#4B99EB",
                          border: "1px solid #4B99EB",
                          fontFamily: "Spoqa Han Sans Neo",
                          fontsx: "normal",
                          fontWeight: "400",
                          fontSize: "12px",
                          lineHeight: "15px",
                          letterSpacing: "-0.3px",
                        }}
                      >
                        프로필 보기
                      </Button>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      marginTop: "10px",
                      width: "372px",
                      height: "48px",
                      border: "1px solid #DBDBDB",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box sx={{ float: "left", marginTop: "4px" }}>
                      <Image src={basicProfile} width={24} height={24} />
                    </Box>
                    <Box sx={{ float: "left", marginLeft: "12px" }}>
                      <Typography
                        sx={{
                          height: "15px",
                          fontSize: "16px",
                          fontWeight: "500",
                          lineHeight: "20px",
                        }}
                      >
                        이기태
                      </Typography>
                      <Typography
                        sx={{
                          height: "15px",
                          fontSize: "12px",
                          fontWeight: "400",
                          lineHeight: "15px",
                          color: "#9B9EA1",
                          marginLeft: "4px",
                        }}
                      >
                        · 24
                      </Typography>
                    </Box>
                    <Box sx={{ float: "left", marginLeft: "28px" }}>
                      <Image src={check} width={14} height={14} />
                      <Typography sx={{ marginLeft: "8px" }}>78%</Typography>
                    </Box>
                    <Box sx={{ float: "left", marginLeft: "48px" }}>
                      <Button
                        type="submit"
                        sx={{
                          background: "#FFFFFF",
                          borderRadius: "200px",
                          width: "84px",
                          height: "24px",
                          color: "#4B99EB",
                          border: "1px solid #4B99EB",
                          fontFamily: "Spoqa Han Sans Neo",
                          fontsx: "normal",
                          fontWeight: "400",
                          fontSize: "12px",
                          lineHeight: "15px",
                          letterSpacing: "-0.3px",
                        }}
                      >
                        프로필 보기
                      </Button>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      marginTop: "10px",
                      width: "372px",
                      height: "48px",
                      border: "1px solid #DBDBDB",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box sx={{ float: "left", marginTop: "4px" }}>
                      <Image src={basicProfile} width={24} height={24} />
                    </Box>
                    <Box sx={{ float: "left", marginLeft: "12px" }}>
                      <Typography
                        sx={{
                          height: "15px",
                          fontSize: "16px",
                          fontWeight: "500",
                          lineHeight: "20px",
                        }}
                      >
                        이기태
                      </Typography>
                      <Typography
                        sx={{
                          height: "15px",
                          fontSize: "12px",
                          fontWeight: "400",
                          lineHeight: "15px",
                          color: "#9B9EA1",
                          marginLeft: "4px",
                        }}
                      >
                        · 24
                      </Typography>
                    </Box>
                    <Box sx={{ float: "left", marginLeft: "28px" }}>
                      <Image src={check} width={14} height={14} />
                      <Typography sx={{ marginLeft: "8px" }}>78%</Typography>
                    </Box>
                    <Box sx={{ float: "left", marginLeft: "48px" }}>
                      <Button
                        type="submit"
                        sx={{
                          background: "#FFFFFF",
                          borderRadius: "200px",
                          width: "84px",
                          height: "24px",
                          color: "#4B99EB",
                          border: "1px solid #4B99EB",
                          fontFamily: "Spoqa Han Sans Neo",
                          fontsx: "normal",
                          fontWeight: "400",
                          fontSize: "12px",
                          lineHeight: "15px",
                          letterSpacing: "-0.3px",
                        }}
                      >
                        프로필 보기
                      </Button>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      marginTop: "10px",
                      width: "372px",
                      height: "48px",
                      border: "1px solid #DBDBDB",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box sx={{ float: "left", marginTop: "4px" }}>
                      <Image src={basicProfile} width={24} height={24} />
                    </Box>
                    <Box sx={{ float: "left", marginLeft: "12px" }}>
                      <Typography
                        sx={{
                          height: "15px",
                          fontSize: "16px",
                          fontWeight: "500",
                          lineHeight: "20px",
                        }}
                      >
                        이기태
                      </Typography>
                      <Typography
                        sx={{
                          height: "15px",
                          fontSize: "12px",
                          fontWeight: "400",
                          lineHeight: "15px",
                          color: "#9B9EA1",
                          marginLeft: "4px",
                        }}
                      >
                        · 24
                      </Typography>
                    </Box>
                    <Box sx={{ float: "left", marginLeft: "28px" }}>
                      <Image src={check} width={14} height={14} />
                      <Typography sx={{ marginLeft: "8px" }}>78%</Typography>
                    </Box>
                    <Box sx={{ float: "left", marginLeft: "48px" }}>
                      <Button
                        type="submit"
                        sx={{
                          background: "#FFFFFF",
                          borderRadius: "200px",
                          width: "84px",
                          height: "24px",
                          color: "#4B99EB",
                          border: "1px solid #4B99EB",
                          fontFamily: "Spoqa Han Sans Neo",
                          fontsx: "normal",
                          fontWeight: "400",
                          fontSize: "12px",
                          lineHeight: "15px",
                          letterSpacing: "-0.3px",
                        }}
                      >
                        프로필 보기
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box sx={{ float: "right" }}>
                <Box>
                  <Typography
                    sx={{
                      height: "15px",
                      fontSize: "12px",
                      fontWeight: "400",
                      lineHeight: "15px",
                      color: "#9B9EA1",
                    }}
                  >
                    9.24
                  </Typography>
                </Box>
                <Box sx={{ marginTop: "6px" }}>
                  <Box
                    sx={{
                      marginTop: "10px",
                      width: "372px",
                      height: "48px",
                      border: "1px solid #DBDBDB",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box sx={{ float: "left", marginTop: "4px" }}>
                      <Image src={basicProfile} width={24} height={24} />
                    </Box>
                    <Box sx={{ float: "left", marginLeft: "12px" }}>
                      <Typography
                        sx={{
                          height: "15px",
                          fontSize: "16px",
                          fontWeight: "500",
                          lineHeight: "20px",
                        }}
                      >
                        이기태
                      </Typography>
                      <Typography
                        sx={{
                          height: "15px",
                          fontSize: "12px",
                          fontWeight: "400",
                          lineHeight: "15px",
                          color: "#9B9EA1",
                          marginLeft: "4px",
                        }}
                      >
                        · 24
                      </Typography>
                    </Box>
                    <Box sx={{ float: "left", marginLeft: "28px" }}>
                      <Image src={check} width={14} height={14} />
                      <Typography sx={{ marginLeft: "8px" }}>78%</Typography>
                    </Box>
                    <Box sx={{ float: "left", marginLeft: "48px" }}>
                      <Button
                        type="submit"
                        sx={{
                          background: "#FFFFFF",
                          borderRadius: "200px",
                          width: "84px",
                          height: "24px",
                          color: "#4B99EB",
                          border: "1px solid #4B99EB",
                          fontFamily: "Spoqa Han Sans Neo",
                          fontsx: "normal",
                          fontWeight: "400",
                          fontSize: "12px",
                          lineHeight: "15px",
                          letterSpacing: "-0.3px",
                        }}
                      >
                        프로필 보기
                      </Button>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      marginTop: "10px",
                      width: "372px",
                      height: "48px",
                      border: "1px solid #DBDBDB",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box sx={{ float: "left", marginTop: "4px" }}>
                      <Image src={basicProfile} width={24} height={24} />
                    </Box>
                    <Box sx={{ float: "left", marginLeft: "12px" }}>
                      <Typography
                        sx={{
                          height: "15px",
                          fontSize: "16px",
                          fontWeight: "500",
                          lineHeight: "20px",
                        }}
                      >
                        이기태
                      </Typography>
                      <Typography
                        sx={{
                          height: "15px",
                          fontSize: "12px",
                          fontWeight: "400",
                          lineHeight: "15px",
                          color: "#9B9EA1",
                          marginLeft: "4px",
                        }}
                      >
                        · 24
                      </Typography>
                    </Box>
                    <Box sx={{ float: "left", marginLeft: "28px" }}>
                      <Image src={check} width={14} height={14} />
                      <Typography sx={{ marginLeft: "8px" }}>78%</Typography>
                    </Box>
                    <Box sx={{ float: "left", marginLeft: "48px" }}>
                      <Button
                        type="submit"
                        sx={{
                          background: "#FFFFFF",
                          borderRadius: "200px",
                          width: "84px",
                          height: "24px",
                          color: "#4B99EB",
                          border: "1px solid #4B99EB",
                          fontFamily: "Spoqa Han Sans Neo",
                          fontsx: "normal",
                          fontWeight: "400",
                          fontSize: "12px",
                          lineHeight: "15px",
                          letterSpacing: "-0.3px",
                        }}
                      >
                        프로필 보기
                      </Button>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      marginTop: "10px",
                      width: "372px",
                      height: "48px",
                      border: "1px solid #DBDBDB",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box sx={{ float: "left", marginTop: "4px" }}>
                      <Image src={basicProfile} width={24} height={24} />
                    </Box>
                    <Box sx={{ float: "left", marginLeft: "12px" }}>
                      <Typography
                        sx={{
                          height: "15px",
                          fontSize: "16px",
                          fontWeight: "500",
                          lineHeight: "20px",
                        }}
                      >
                        이기태
                      </Typography>
                      <Typography
                        sx={{
                          height: "15px",
                          fontSize: "12px",
                          fontWeight: "400",
                          lineHeight: "15px",
                          color: "#9B9EA1",
                          marginLeft: "4px",
                        }}
                      >
                        · 24
                      </Typography>
                    </Box>
                    <Box sx={{ float: "left", marginLeft: "28px" }}>
                      <Image src={check} width={14} height={14} />
                      <Typography sx={{ marginLeft: "8px" }}>78%</Typography>
                    </Box>
                    <Box sx={{ float: "left", marginLeft: "48px" }}>
                      <Button
                        type="submit"
                        sx={{
                          background: "#FFFFFF",
                          borderRadius: "200px",
                          width: "84px",
                          height: "24px",
                          color: "#4B99EB",
                          border: "1px solid #4B99EB",
                          fontFamily: "Spoqa Han Sans Neo",
                          fontsx: "normal",
                          fontWeight: "400",
                          fontSize: "12px",
                          lineHeight: "15px",
                          letterSpacing: "-0.3px",
                        }}
                      >
                        프로필 보기
                      </Button>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      marginTop: "10px",
                      width: "372px",
                      height: "48px",
                      border: "1px solid #DBDBDB",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box sx={{ float: "left", marginTop: "4px" }}>
                      <Image src={basicProfile} width={24} height={24} />
                    </Box>
                    <Box sx={{ float: "left", marginLeft: "12px" }}>
                      <Typography
                        sx={{
                          height: "15px",
                          fontSize: "16px",
                          fontWeight: "500",
                          lineHeight: "20px",
                        }}
                      >
                        이기태
                      </Typography>
                      <Typography
                        sx={{
                          height: "15px",
                          fontSize: "12px",
                          fontWeight: "400",
                          lineHeight: "15px",
                          color: "#9B9EA1",
                          marginLeft: "4px",
                        }}
                      >
                        · 24
                      </Typography>
                    </Box>
                    <Box sx={{ float: "left", marginLeft: "28px" }}>
                      <Image src={check} width={14} height={14} />
                      <Typography sx={{ marginLeft: "8px" }}>78%</Typography>
                    </Box>
                    <Box sx={{ float: "left", marginLeft: "48px" }}>
                      <Button
                        type="submit"
                        sx={{
                          background: "#FFFFFF",
                          borderRadius: "200px",
                          width: "84px",
                          height: "24px",
                          color: "#4B99EB",
                          border: "1px solid #4B99EB",
                          fontFamily: "Spoqa Han Sans Neo",
                          fontsx: "normal",
                          fontWeight: "400",
                          fontSize: "12px",
                          lineHeight: "15px",
                          letterSpacing: "-0.3px",
                        }}
                      >
                        프로필 보기
                      </Button>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      marginTop: "10px",
                      width: "372px",
                      height: "48px",
                      border: "1px solid #DBDBDB",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box sx={{ float: "left", marginTop: "4px" }}>
                      <Image src={basicProfile} width={24} height={24} />
                    </Box>
                    <Box sx={{ float: "left", marginLeft: "12px" }}>
                      <Typography
                        sx={{
                          height: "15px",
                          fontSize: "16px",
                          fontWeight: "500",
                          lineHeight: "20px",
                        }}
                      >
                        이기태
                      </Typography>
                      <Typography
                        sx={{
                          height: "15px",
                          fontSize: "12px",
                          fontWeight: "400",
                          lineHeight: "15px",
                          color: "#9B9EA1",
                          marginLeft: "4px",
                        }}
                      >
                        · 24
                      </Typography>
                    </Box>
                    <Box sx={{ float: "left", marginLeft: "28px" }}>
                      <Image src={check} width={14} height={14} />
                      <Typography sx={{ marginLeft: "8px" }}>78%</Typography>
                    </Box>
                    <Box sx={{ float: "left", marginLeft: "48px" }}>
                      <Button
                        type="submit"
                        sx={{
                          background: "#FFFFFF",
                          borderRadius: "200px",
                          width: "84px",
                          height: "24px",
                          color: "#4B99EB",
                          border: "1px solid #4B99EB",
                          fontFamily: "Spoqa Han Sans Neo",
                          fontsx: "normal",
                          fontWeight: "400",
                          fontSize: "12px",
                          lineHeight: "15px",
                          letterSpacing: "-0.3px",
                        }}
                      >
                        프로필 보기
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box></Box>
        </Box>
      </Box>

      <Box
        sx={{
          backgroundColor: "#FBFBFB;",
          width: "1920px",
          height: "180px",
          position: "absolute",
          fontFamily: "Spoqa Han Sans Neo",
          fontsx: "normal",
          paddingLeft: "360px",
          paddingRight: "360px",
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
          <Box sx={{ height: "30px" }}>
            <Typography
              sx={{
                marginLeft: "150px",
                float: "left",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              메인
            </Typography>
            <Typography
              sx={{ float: "right", fontSize: "16px", fontWeight: "500" }}
            >
              마이페이지
            </Typography>
          </Box>
          <Box sx={{ height: "30px" }}>
            <Typography
              sx={{ float: "right", fontSize: "14px", fontWeight: "400" }}
            >
              룸메 신청 내역
            </Typography>
          </Box>
          <Box sx={{ height: "30px" }}>
            <Typography
              sx={{ float: "right", fontSize: "14px", fontWeight: "400" }}
            >
              성향 설문조사
            </Typography>
          </Box>
          <Box sx={{ height: "30px" }}>
            <Typography
              sx={{ float: "right", fontSize: "14px", fontWeight: "400" }}
            >
              설정
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
