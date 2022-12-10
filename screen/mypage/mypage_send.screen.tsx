import { Box, Button, Pagination, Typography } from "@mui/material";
import { NextPage } from "next";
import Image from "next/image";
import React from "react";

import MyPageLeft from "./components/mypage_left";

import Footer from "@/components/footer";

export const MyPageSendScreen: NextPage = () => {
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
                룸메 신청 보낸 리스트
              </Typography>
              <Box sx={{ float: "right" }}>
                <Image src="/bin.png" width={20} height={20} />
              </Box>
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
                      <Image src="/basicProfile.png" width={24} height={24} />
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
                      <Image src="/check.png" width={14} height={14} />
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
                      <Image src="/basicProfile.png" width={24} height={24} />
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
                      <Image src="/check.png" width={14} height={14} />
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
                      <Image src="/basicProfile.png" width={24} height={24} />
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
                      <Image src="/check.png" width={14} height={14} />
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
                      <Image src="/basicProfile.png" width={24} height={24} />
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
                      <Image src="/check.png" width={14} height={14} />
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
                      <Image src="/basicProfile.png" width={24} height={24} />
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
                      <Image src="/check.png" width={14} height={14} />
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
                      <Image src="/basicProfile.png" width={24} height={24} />
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
                      <Image src="/check.png" width={14} height={14} />
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
                      <Image src="/basicProfile.png" width={24} height={24} />
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
                      <Image src="/check.png" width={14} height={14} />
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
                      <Image src="/basicProfile.png" width={24} height={24} />
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
                      <Image src="/check.png" width={14} height={14} />
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
                      <Image src="/basicProfile.png" width={24} height={24} />
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
                      <Image src="/check.png" width={14} height={14} />
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
                      <Image src="/basicProfile.png" width={24} height={24} />
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
                      <Image src="/check.png" width={14} height={14} />
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
            <Box sx={{ height: "25px" }}></Box>
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
                      <Image src="/basicProfile.png" width={24} height={24} />
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
                      <Image src="/check.png" width={14} height={14} />
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
                      <Image src="/basicProfile.png" width={24} height={24} />
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
                      <Image src="/check.png" width={14} height={14} />
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
                      <Image src="/basicProfile.png" width={24} height={24} />
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
                      <Image src="/check.png" width={14} height={14} />
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
                      <Image src="/basicProfile.png" width={24} height={24} />
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
                      <Image src="/check.png" width={14} height={14} />
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
                      <Image src="/basicProfile.png" width={24} height={24} />
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
                      <Image src="/check.png" width={14} height={14} />
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
                      <Image src="/basicProfile.png" width={24} height={24} />
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
                      <Image src="/check.png" width={14} height={14} />
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
                      <Image src="/basicProfile.png" width={24} height={24} />
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
                      <Image src="/check.png" width={14} height={14} />
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
                      <Image src="/basicProfile.png" width={24} height={24} />
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
                      <Image src="/check.png" width={14} height={14} />
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
                      <Image src="/basicProfile.png" width={24} height={24} />
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
                      <Image src="/check.png" width={14} height={14} />
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
                      <Image src="/basicProfile.png" width={24} height={24} />
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
                      <Image src="/check.png" width={14} height={14} />
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
                  <Pagination count={5} />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

