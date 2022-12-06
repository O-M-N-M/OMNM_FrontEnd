import { Box, Button, Pagination } from "@mui/material";
import { NextPage } from "next";
import Image from "next/image";
import React from "react";

import basicProfile from "../../public/basicProfile.png";
import bin from "../../public/bin.png";
import check from "../../public/check.png";

import MyPageLeft from "./components/mypage_left";

import Footer from "@/components/footer";

export const MyPageSendScreen: NextPage = () => {
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
            marginLeft: "306px",
            border: "1px solid #DBDBDB",
            borderRadius: "20px",
            padding: "64px 60px",
          }}
        >
          <div style={{ height: "400px" }}>
            <div style={{ height: "25px" }}>
              <span
                style={{
                  float: "left",
                  fontSize: "20px",
                  fontWeight: "500",
                  lineHeight: "25px",
                }}
              >
                룸메 신청 보낸 리스트
              </span>
              <div style={{ float: "right" }}>
                <Image src={bin} width={20} height={20} />
              </div>
            </div>
            <div style={{ marginTop: "24px" }}>
              <div style={{ float: "left" }}>
                <div>
                  <span
                    style={{
                      height: "15px",
                      fontSize: "12px",
                      fontWeight: "400",
                      lineHeight: "15px",
                      color: "#9B9EA1",
                    }}
                  >
                    9.24
                  </span>
                </div>
                <div style={{ marginTop: "6px" }}>
                  <div
                    style={{
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
                    <div style={{ float: "left", marginTop: "4px" }}>
                      <Image src={basicProfile} width={24} height={24} />
                    </div>
                    <div style={{ float: "left", marginLeft: "12px" }}>
                      <span
                        style={{
                          height: "15px",
                          fontSize: "16px",
                          fontWeight: "500",
                          lineHeight: "20px",
                        }}
                      >
                        이기태
                      </span>
                      <span
                        style={{
                          height: "15px",
                          fontSize: "12px",
                          fontWeight: "400",
                          lineHeight: "15px",
                          color: "#9B9EA1",
                          marginLeft: "4px",
                        }}
                      >
                        · 24
                      </span>
                    </div>
                    <div style={{ float: "left", marginLeft: "28px" }}>
                      <Image src={check} width={14} height={14} />
                      <span style={{ marginLeft: "8px" }}>78%</span>
                    </div>
                    <div style={{ float: "left", marginLeft: "48px" }}>
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
                          fontStyle: "normal",
                          fontWeight: "400",
                          fontSize: "12px",
                          lineHeight: "15px",
                          letterSpacing: "-0.3px",
                        }}
                      >
                        프로필 보기
                      </Button>
                    </div>
                  </div>

                  <div
                    style={{
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
                    <div style={{ float: "left", marginTop: "4px" }}>
                      <Image src={basicProfile} width={24} height={24} />
                    </div>
                    <div style={{ float: "left", marginLeft: "12px" }}>
                      <span
                        style={{
                          height: "15px",
                          fontSize: "16px",
                          fontWeight: "500",
                          lineHeight: "20px",
                        }}
                      >
                        이기태
                      </span>
                      <span
                        style={{
                          height: "15px",
                          fontSize: "12px",
                          fontWeight: "400",
                          lineHeight: "15px",
                          color: "#9B9EA1",
                          marginLeft: "4px",
                        }}
                      >
                        · 24
                      </span>
                    </div>
                    <div style={{ float: "left", marginLeft: "28px" }}>
                      <Image src={check} width={14} height={14} />
                      <span style={{ marginLeft: "8px" }}>78%</span>
                    </div>
                    <div style={{ float: "left", marginLeft: "48px" }}>
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
                          fontStyle: "normal",
                          fontWeight: "400",
                          fontSize: "12px",
                          lineHeight: "15px",
                          letterSpacing: "-0.3px",
                        }}
                      >
                        프로필 보기
                      </Button>
                    </div>
                  </div>

                  <div
                    style={{
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
                    <div style={{ float: "left", marginTop: "4px" }}>
                      <Image src={basicProfile} width={24} height={24} />
                    </div>
                    <div style={{ float: "left", marginLeft: "12px" }}>
                      <span
                        style={{
                          height: "15px",
                          fontSize: "16px",
                          fontWeight: "500",
                          lineHeight: "20px",
                        }}
                      >
                        이기태
                      </span>
                      <span
                        style={{
                          height: "15px",
                          fontSize: "12px",
                          fontWeight: "400",
                          lineHeight: "15px",
                          color: "#9B9EA1",
                          marginLeft: "4px",
                        }}
                      >
                        · 24
                      </span>
                    </div>
                    <div style={{ float: "left", marginLeft: "28px" }}>
                      <Image src={check} width={14} height={14} />
                      <span style={{ marginLeft: "8px" }}>78%</span>
                    </div>
                    <div style={{ float: "left", marginLeft: "48px" }}>
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
                          fontStyle: "normal",
                          fontWeight: "400",
                          fontSize: "12px",
                          lineHeight: "15px",
                          letterSpacing: "-0.3px",
                        }}
                      >
                        프로필 보기
                      </Button>
                    </div>
                  </div>

                  <div
                    style={{
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
                    <div style={{ float: "left", marginTop: "4px" }}>
                      <Image src={basicProfile} width={24} height={24} />
                    </div>
                    <div style={{ float: "left", marginLeft: "12px" }}>
                      <span
                        style={{
                          height: "15px",
                          fontSize: "16px",
                          fontWeight: "500",
                          lineHeight: "20px",
                        }}
                      >
                        이기태
                      </span>
                      <span
                        style={{
                          height: "15px",
                          fontSize: "12px",
                          fontWeight: "400",
                          lineHeight: "15px",
                          color: "#9B9EA1",
                          marginLeft: "4px",
                        }}
                      >
                        · 24
                      </span>
                    </div>
                    <div style={{ float: "left", marginLeft: "28px" }}>
                      <Image src={check} width={14} height={14} />
                      <span style={{ marginLeft: "8px" }}>78%</span>
                    </div>
                    <div style={{ float: "left", marginLeft: "48px" }}>
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
                          fontStyle: "normal",
                          fontWeight: "400",
                          fontSize: "12px",
                          lineHeight: "15px",
                          letterSpacing: "-0.3px",
                        }}
                      >
                        프로필 보기
                      </Button>
                    </div>
                  </div>

                  <div
                    style={{
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
                    <div style={{ float: "left", marginTop: "4px" }}>
                      <Image src={basicProfile} width={24} height={24} />
                    </div>
                    <div style={{ float: "left", marginLeft: "12px" }}>
                      <span
                        style={{
                          height: "15px",
                          fontSize: "16px",
                          fontWeight: "500",
                          lineHeight: "20px",
                        }}
                      >
                        이기태
                      </span>
                      <span
                        style={{
                          height: "15px",
                          fontSize: "12px",
                          fontWeight: "400",
                          lineHeight: "15px",
                          color: "#9B9EA1",
                          marginLeft: "4px",
                        }}
                      >
                        · 24
                      </span>
                    </div>
                    <div style={{ float: "left", marginLeft: "28px" }}>
                      <Image src={check} width={14} height={14} />
                      <span style={{ marginLeft: "8px" }}>78%</span>
                    </div>
                    <div style={{ float: "left", marginLeft: "48px" }}>
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
                          fontStyle: "normal",
                          fontWeight: "400",
                          fontSize: "12px",
                          lineHeight: "15px",
                          letterSpacing: "-0.3px",
                        }}
                      >
                        프로필 보기
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ float: "right" }}>
                <div>
                  <span
                    style={{
                      height: "15px",
                      fontSize: "12px",
                      fontWeight: "400",
                      lineHeight: "15px",
                      color: "#9B9EA1",
                    }}
                  >
                    9.24
                  </span>
                </div>
                <div style={{ marginTop: "6px" }}>
                  <div
                    style={{
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
                    <div style={{ float: "left", marginTop: "4px" }}>
                      <Image src={basicProfile} width={24} height={24} />
                    </div>
                    <div style={{ float: "left", marginLeft: "12px" }}>
                      <span
                        style={{
                          height: "15px",
                          fontSize: "16px",
                          fontWeight: "500",
                          lineHeight: "20px",
                        }}
                      >
                        이기태
                      </span>
                      <span
                        style={{
                          height: "15px",
                          fontSize: "12px",
                          fontWeight: "400",
                          lineHeight: "15px",
                          color: "#9B9EA1",
                          marginLeft: "4px",
                        }}
                      >
                        · 24
                      </span>
                    </div>
                    <div style={{ float: "left", marginLeft: "28px" }}>
                      <Image src={check} width={14} height={14} />
                      <span style={{ marginLeft: "8px" }}>78%</span>
                    </div>
                    <div style={{ float: "left", marginLeft: "48px" }}>
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
                          fontStyle: "normal",
                          fontWeight: "400",
                          fontSize: "12px",
                          lineHeight: "15px",
                          letterSpacing: "-0.3px",
                        }}
                      >
                        프로필 보기
                      </Button>
                    </div>
                  </div>

                  <div
                    style={{
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
                    <div style={{ float: "left", marginTop: "4px" }}>
                      <Image src={basicProfile} width={24} height={24} />
                    </div>
                    <div style={{ float: "left", marginLeft: "12px" }}>
                      <span
                        style={{
                          height: "15px",
                          fontSize: "16px",
                          fontWeight: "500",
                          lineHeight: "20px",
                        }}
                      >
                        이기태
                      </span>
                      <span
                        style={{
                          height: "15px",
                          fontSize: "12px",
                          fontWeight: "400",
                          lineHeight: "15px",
                          color: "#9B9EA1",
                          marginLeft: "4px",
                        }}
                      >
                        · 24
                      </span>
                    </div>
                    <div style={{ float: "left", marginLeft: "28px" }}>
                      <Image src={check} width={14} height={14} />
                      <span style={{ marginLeft: "8px" }}>78%</span>
                    </div>
                    <div style={{ float: "left", marginLeft: "48px" }}>
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
                          fontStyle: "normal",
                          fontWeight: "400",
                          fontSize: "12px",
                          lineHeight: "15px",
                          letterSpacing: "-0.3px",
                        }}
                      >
                        프로필 보기
                      </Button>
                    </div>
                  </div>

                  <div
                    style={{
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
                    <div style={{ float: "left", marginTop: "4px" }}>
                      <Image src={basicProfile} width={24} height={24} />
                    </div>
                    <div style={{ float: "left", marginLeft: "12px" }}>
                      <span
                        style={{
                          height: "15px",
                          fontSize: "16px",
                          fontWeight: "500",
                          lineHeight: "20px",
                        }}
                      >
                        이기태
                      </span>
                      <span
                        style={{
                          height: "15px",
                          fontSize: "12px",
                          fontWeight: "400",
                          lineHeight: "15px",
                          color: "#9B9EA1",
                          marginLeft: "4px",
                        }}
                      >
                        · 24
                      </span>
                    </div>
                    <div style={{ float: "left", marginLeft: "28px" }}>
                      <Image src={check} width={14} height={14} />
                      <span style={{ marginLeft: "8px" }}>78%</span>
                    </div>
                    <div style={{ float: "left", marginLeft: "48px" }}>
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
                          fontStyle: "normal",
                          fontWeight: "400",
                          fontSize: "12px",
                          lineHeight: "15px",
                          letterSpacing: "-0.3px",
                        }}
                      >
                        프로필 보기
                      </Button>
                    </div>
                  </div>

                  <div
                    style={{
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
                    <div style={{ float: "left", marginTop: "4px" }}>
                      <Image src={basicProfile} width={24} height={24} />
                    </div>
                    <div style={{ float: "left", marginLeft: "12px" }}>
                      <span
                        style={{
                          height: "15px",
                          fontSize: "16px",
                          fontWeight: "500",
                          lineHeight: "20px",
                        }}
                      >
                        이기태
                      </span>
                      <span
                        style={{
                          height: "15px",
                          fontSize: "12px",
                          fontWeight: "400",
                          lineHeight: "15px",
                          color: "#9B9EA1",
                          marginLeft: "4px",
                        }}
                      >
                        · 24
                      </span>
                    </div>
                    <div style={{ float: "left", marginLeft: "28px" }}>
                      <Image src={check} width={14} height={14} />
                      <span style={{ marginLeft: "8px" }}>78%</span>
                    </div>
                    <div style={{ float: "left", marginLeft: "48px" }}>
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
                          fontStyle: "normal",
                          fontWeight: "400",
                          fontSize: "12px",
                          lineHeight: "15px",
                          letterSpacing: "-0.3px",
                        }}
                      >
                        프로필 보기
                      </Button>
                    </div>
                  </div>

                  <div
                    style={{
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
                    <div style={{ float: "left", marginTop: "4px" }}>
                      <Image src={basicProfile} width={24} height={24} />
                    </div>
                    <div style={{ float: "left", marginLeft: "12px" }}>
                      <span
                        style={{
                          height: "15px",
                          fontSize: "16px",
                          fontWeight: "500",
                          lineHeight: "20px",
                        }}
                      >
                        이기태
                      </span>
                      <span
                        style={{
                          height: "15px",
                          fontSize: "12px",
                          fontWeight: "400",
                          lineHeight: "15px",
                          color: "#9B9EA1",
                          marginLeft: "4px",
                        }}
                      >
                        · 24
                      </span>
                    </div>
                    <div style={{ float: "left", marginLeft: "28px" }}>
                      <Image src={check} width={14} height={14} />
                      <span style={{ marginLeft: "8px" }}>78%</span>
                    </div>
                    <div style={{ float: "left", marginLeft: "48px" }}>
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
                          fontStyle: "normal",
                          fontWeight: "400",
                          fontSize: "12px",
                          lineHeight: "15px",
                          letterSpacing: "-0.3px",
                        }}
                      >
                        프로필 보기
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ height: "400px", marginTop: "56px" }}>
            <div style={{ height: "25px" }}></div>
            <div style={{ marginTop: "24px" }}>
              <div style={{ float: "left" }}>
                <div>
                  <span
                    style={{
                      height: "15px",
                      fontSize: "12px",
                      fontWeight: "400",
                      lineHeight: "15px",
                      color: "#9B9EA1",
                    }}
                  >
                    9.24
                  </span>
                </div>
                <div style={{ marginTop: "6px" }}>
                  <div
                    style={{
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
                    <div style={{ float: "left", marginTop: "4px" }}>
                      <Image src={basicProfile} width={24} height={24} />
                    </div>
                    <div style={{ float: "left", marginLeft: "12px" }}>
                      <span
                        style={{
                          height: "15px",
                          fontSize: "16px",
                          fontWeight: "500",
                          lineHeight: "20px",
                        }}
                      >
                        이기태
                      </span>
                      <span
                        style={{
                          height: "15px",
                          fontSize: "12px",
                          fontWeight: "400",
                          lineHeight: "15px",
                          color: "#9B9EA1",
                          marginLeft: "4px",
                        }}
                      >
                        · 24
                      </span>
                    </div>
                    <div style={{ float: "left", marginLeft: "28px" }}>
                      <Image src={check} width={14} height={14} />
                      <span style={{ marginLeft: "8px" }}>78%</span>
                    </div>
                    <div style={{ float: "left", marginLeft: "48px" }}>
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
                          fontStyle: "normal",
                          fontWeight: "400",
                          fontSize: "12px",
                          lineHeight: "15px",
                          letterSpacing: "-0.3px",
                        }}
                      >
                        프로필 보기
                      </Button>
                    </div>
                  </div>

                  <div
                    style={{
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
                    <div style={{ float: "left", marginTop: "4px" }}>
                      <Image src={basicProfile} width={24} height={24} />
                    </div>
                    <div style={{ float: "left", marginLeft: "12px" }}>
                      <span
                        style={{
                          height: "15px",
                          fontSize: "16px",
                          fontWeight: "500",
                          lineHeight: "20px",
                        }}
                      >
                        이기태
                      </span>
                      <span
                        style={{
                          height: "15px",
                          fontSize: "12px",
                          fontWeight: "400",
                          lineHeight: "15px",
                          color: "#9B9EA1",
                          marginLeft: "4px",
                        }}
                      >
                        · 24
                      </span>
                    </div>
                    <div style={{ float: "left", marginLeft: "28px" }}>
                      <Image src={check} width={14} height={14} />
                      <span style={{ marginLeft: "8px" }}>78%</span>
                    </div>
                    <div style={{ float: "left", marginLeft: "48px" }}>
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
                          fontStyle: "normal",
                          fontWeight: "400",
                          fontSize: "12px",
                          lineHeight: "15px",
                          letterSpacing: "-0.3px",
                        }}
                      >
                        프로필 보기
                      </Button>
                    </div>
                  </div>

                  <div
                    style={{
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
                    <div style={{ float: "left", marginTop: "4px" }}>
                      <Image src={basicProfile} width={24} height={24} />
                    </div>
                    <div style={{ float: "left", marginLeft: "12px" }}>
                      <span
                        style={{
                          height: "15px",
                          fontSize: "16px",
                          fontWeight: "500",
                          lineHeight: "20px",
                        }}
                      >
                        이기태
                      </span>
                      <span
                        style={{
                          height: "15px",
                          fontSize: "12px",
                          fontWeight: "400",
                          lineHeight: "15px",
                          color: "#9B9EA1",
                          marginLeft: "4px",
                        }}
                      >
                        · 24
                      </span>
                    </div>
                    <div style={{ float: "left", marginLeft: "28px" }}>
                      <Image src={check} width={14} height={14} />
                      <span style={{ marginLeft: "8px" }}>78%</span>
                    </div>
                    <div style={{ float: "left", marginLeft: "48px" }}>
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
                          fontStyle: "normal",
                          fontWeight: "400",
                          fontSize: "12px",
                          lineHeight: "15px",
                          letterSpacing: "-0.3px",
                        }}
                      >
                        프로필 보기
                      </Button>
                    </div>
                  </div>

                  <div
                    style={{
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
                    <div style={{ float: "left", marginTop: "4px" }}>
                      <Image src={basicProfile} width={24} height={24} />
                    </div>
                    <div style={{ float: "left", marginLeft: "12px" }}>
                      <span
                        style={{
                          height: "15px",
                          fontSize: "16px",
                          fontWeight: "500",
                          lineHeight: "20px",
                        }}
                      >
                        이기태
                      </span>
                      <span
                        style={{
                          height: "15px",
                          fontSize: "12px",
                          fontWeight: "400",
                          lineHeight: "15px",
                          color: "#9B9EA1",
                          marginLeft: "4px",
                        }}
                      >
                        · 24
                      </span>
                    </div>
                    <div style={{ float: "left", marginLeft: "28px" }}>
                      <Image src={check} width={14} height={14} />
                      <span style={{ marginLeft: "8px" }}>78%</span>
                    </div>
                    <div style={{ float: "left", marginLeft: "48px" }}>
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
                          fontStyle: "normal",
                          fontWeight: "400",
                          fontSize: "12px",
                          lineHeight: "15px",
                          letterSpacing: "-0.3px",
                        }}
                      >
                        프로필 보기
                      </Button>
                    </div>
                  </div>

                  <div
                    style={{
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
                    <div style={{ float: "left", marginTop: "4px" }}>
                      <Image src={basicProfile} width={24} height={24} />
                    </div>
                    <div style={{ float: "left", marginLeft: "12px" }}>
                      <span
                        style={{
                          height: "15px",
                          fontSize: "16px",
                          fontWeight: "500",
                          lineHeight: "20px",
                        }}
                      >
                        이기태
                      </span>
                      <span
                        style={{
                          height: "15px",
                          fontSize: "12px",
                          fontWeight: "400",
                          lineHeight: "15px",
                          color: "#9B9EA1",
                          marginLeft: "4px",
                        }}
                      >
                        · 24
                      </span>
                    </div>
                    <div style={{ float: "left", marginLeft: "28px" }}>
                      <Image src={check} width={14} height={14} />
                      <span style={{ marginLeft: "8px" }}>78%</span>
                    </div>
                    <div style={{ float: "left", marginLeft: "48px" }}>
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
                          fontStyle: "normal",
                          fontWeight: "400",
                          fontSize: "12px",
                          lineHeight: "15px",
                          letterSpacing: "-0.3px",
                        }}
                      >
                        프로필 보기
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ float: "right" }}>
                <div>
                  <span
                    style={{
                      height: "15px",
                      fontSize: "12px",
                      fontWeight: "400",
                      lineHeight: "15px",
                      color: "#9B9EA1",
                    }}
                  >
                    9.24
                  </span>
                </div>
                <div style={{ marginTop: "6px" }}>
                  <div
                    style={{
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
                    <div style={{ float: "left", marginTop: "4px" }}>
                      <Image src={basicProfile} width={24} height={24} />
                    </div>
                    <div style={{ float: "left", marginLeft: "12px" }}>
                      <span
                        style={{
                          height: "15px",
                          fontSize: "16px",
                          fontWeight: "500",
                          lineHeight: "20px",
                        }}
                      >
                        이기태
                      </span>
                      <span
                        style={{
                          height: "15px",
                          fontSize: "12px",
                          fontWeight: "400",
                          lineHeight: "15px",
                          color: "#9B9EA1",
                          marginLeft: "4px",
                        }}
                      >
                        · 24
                      </span>
                    </div>
                    <div style={{ float: "left", marginLeft: "28px" }}>
                      <Image src={check} width={14} height={14} />
                      <span style={{ marginLeft: "8px" }}>78%</span>
                    </div>
                    <div style={{ float: "left", marginLeft: "48px" }}>
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
                          fontStyle: "normal",
                          fontWeight: "400",
                          fontSize: "12px",
                          lineHeight: "15px",
                          letterSpacing: "-0.3px",
                        }}
                      >
                        프로필 보기
                      </Button>
                    </div>
                  </div>

                  <div
                    style={{
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
                    <div style={{ float: "left", marginTop: "4px" }}>
                      <Image src={basicProfile} width={24} height={24} />
                    </div>
                    <div style={{ float: "left", marginLeft: "12px" }}>
                      <span
                        style={{
                          height: "15px",
                          fontSize: "16px",
                          fontWeight: "500",
                          lineHeight: "20px",
                        }}
                      >
                        이기태
                      </span>
                      <span
                        style={{
                          height: "15px",
                          fontSize: "12px",
                          fontWeight: "400",
                          lineHeight: "15px",
                          color: "#9B9EA1",
                          marginLeft: "4px",
                        }}
                      >
                        · 24
                      </span>
                    </div>
                    <div style={{ float: "left", marginLeft: "28px" }}>
                      <Image src={check} width={14} height={14} />
                      <span style={{ marginLeft: "8px" }}>78%</span>
                    </div>
                    <div style={{ float: "left", marginLeft: "48px" }}>
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
                          fontStyle: "normal",
                          fontWeight: "400",
                          fontSize: "12px",
                          lineHeight: "15px",
                          letterSpacing: "-0.3px",
                        }}
                      >
                        프로필 보기
                      </Button>
                    </div>
                  </div>

                  <div
                    style={{
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
                    <div style={{ float: "left", marginTop: "4px" }}>
                      <Image src={basicProfile} width={24} height={24} />
                    </div>
                    <div style={{ float: "left", marginLeft: "12px" }}>
                      <span
                        style={{
                          height: "15px",
                          fontSize: "16px",
                          fontWeight: "500",
                          lineHeight: "20px",
                        }}
                      >
                        이기태
                      </span>
                      <span
                        style={{
                          height: "15px",
                          fontSize: "12px",
                          fontWeight: "400",
                          lineHeight: "15px",
                          color: "#9B9EA1",
                          marginLeft: "4px",
                        }}
                      >
                        · 24
                      </span>
                    </div>
                    <div style={{ float: "left", marginLeft: "28px" }}>
                      <Image src={check} width={14} height={14} />
                      <span style={{ marginLeft: "8px" }}>78%</span>
                    </div>
                    <div style={{ float: "left", marginLeft: "48px" }}>
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
                          fontStyle: "normal",
                          fontWeight: "400",
                          fontSize: "12px",
                          lineHeight: "15px",
                          letterSpacing: "-0.3px",
                        }}
                      >
                        프로필 보기
                      </Button>
                    </div>
                  </div>

                  <div
                    style={{
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
                    <div style={{ float: "left", marginTop: "4px" }}>
                      <Image src={basicProfile} width={24} height={24} />
                    </div>
                    <div style={{ float: "left", marginLeft: "12px" }}>
                      <span
                        style={{
                          height: "15px",
                          fontSize: "16px",
                          fontWeight: "500",
                          lineHeight: "20px",
                        }}
                      >
                        이기태
                      </span>
                      <span
                        style={{
                          height: "15px",
                          fontSize: "12px",
                          fontWeight: "400",
                          lineHeight: "15px",
                          color: "#9B9EA1",
                          marginLeft: "4px",
                        }}
                      >
                        · 24
                      </span>
                    </div>
                    <div style={{ float: "left", marginLeft: "28px" }}>
                      <Image src={check} width={14} height={14} />
                      <span style={{ marginLeft: "8px" }}>78%</span>
                    </div>
                    <div style={{ float: "left", marginLeft: "48px" }}>
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
                          fontStyle: "normal",
                          fontWeight: "400",
                          fontSize: "12px",
                          lineHeight: "15px",
                          letterSpacing: "-0.3px",
                        }}
                      >
                        프로필 보기
                      </Button>
                    </div>
                  </div>

                  <div
                    style={{
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
                    <div style={{ float: "left", marginTop: "4px" }}>
                      <Image src={basicProfile} width={24} height={24} />
                    </div>
                    <div style={{ float: "left", marginLeft: "12px" }}>
                      <span
                        style={{
                          height: "15px",
                          fontSize: "16px",
                          fontWeight: "500",
                          lineHeight: "20px",
                        }}
                      >
                        이기태
                      </span>
                      <span
                        style={{
                          height: "15px",
                          fontSize: "12px",
                          fontWeight: "400",
                          lineHeight: "15px",
                          color: "#9B9EA1",
                          marginLeft: "4px",
                        }}
                      >
                        · 24
                      </span>
                    </div>
                    <div style={{ float: "left", marginLeft: "28px" }}>
                      <Image src={check} width={14} height={14} />
                      <span style={{ marginLeft: "8px" }}>78%</span>
                    </div>
                    <div style={{ float: "left", marginLeft: "48px" }}>
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
                          fontStyle: "normal",
                          fontWeight: "400",
                          fontSize: "12px",
                          lineHeight: "15px",
                          letterSpacing: "-0.3px",
                        }}
                      >
                        프로필 보기
                      </Button>
                    </div>
                  </div>
                  <Pagination count={5} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Box>

      <Footer />
    </Box>
  );
};
