import { Box, Button } from "@mui/material";
import axios from "axios";
import { getCookie } from "cookies-next";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import MyPageLeft from "./components/mypage_left";

import Footer from "@/components/footer";

export const MyPageScreen: NextPage = () => {
  const [value, setValue] = useState(0);
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [school, setSchool] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState(0);
  const [kakao, setKakao] = useState("");
  const [dormitory, setDormitory] = useState(0);

  const onClickHandler = () => {
    axios
      .get(`/api/users/${value}`, {
        headers: {
          OMNM: `${getCookie("OMNM")}`,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));

    // axios
    //   .get(`/api/main/propose/${value}`, {
    //     headers: {
    //       OMNM: `${getCookie("OMNM")}`,
    //     },
    //   })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => console.log(err));

    // axios
    //   .delete(`/api/users/67/connection/reverse/82`, {
    //     headers: {
    //       OMNM: `${getCookie("OMNM")}`,
    //     },
    //   })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => console.log(err));

    // const url = "/api/main";
    // const body = `criteria=4`;
    // const headers = {
    //   headers: {
    //     "Content-Type": "application/x-www-form-urlencoded",
    //     OMNM: `${getCookie("OMNM")}`,
    //   },
    // };

    // axios
    //   .post(url, body, headers)
    //   .then((res) => {
    //     console.log(res.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  const onClickReqHandler = () => {
    axios
      .get(`/api/users/${value}/connection`, {
        headers: {
          OMNM: `${getCookie("OMNM")}`,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const onClickResHandler = () => {
    axios
      .get(`/api/users/${value}/propose`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const onClickJoinHandler = () => {
    const url = "/api/join";
    const headers = { headers: { "Content-Type": "multipart/form-data" } };

    const formData = new FormData();

    const userDto = {
      loginId: id,
      password: pw,
      name: name,
      email: `${email}@cau.ac.kr`,
      school: school,
      gender: gender,
      kakaoId: kakao,
      dormitory: dormitory,
    };

    formData.append(
      "key",
      new Blob([JSON.stringify(userDto)], { type: "application/json" })
    );

    axios
      .post(url, formData, headers)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.error(err));
  };

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
      <div>
        <div style={{ float: "left" }}>
          조회
          <br />
          userNumber:
          <input
            type="text"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            style={{ textAlign: "center" }}
          />
          <br />
          <button onClick={onClickHandler}>룸메신청하기</button>
          <br />
          <button onClick={onClickReqHandler}>신청리스트조회</button>
          <br />
          <button onClick={onClickResHandler}>받은리스트조회</button>
        </div>
        <div style={{ float: "left", marginLeft: "100px" }}>
          회원가입
          <br />
          id:
          <input
            type="text"
            value={id}
            onChange={(e) => {
              setId(e.target.value);
              setPw(e.target.value);
              setSchool(e.target.value + "대학교");
              setEmail(e.target.value);
              setName(e.target.value + "_이름");
              setKakao(e.target.value + "_카카오");

              setGender(0);
              setDormitory(0);
            }}
            style={{ textAlign: "center" }}
          />
          <br />
          <button onClick={onClickJoinHandler}>회원가입</button>
        </div>
      </div>
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
        <div
          style={{
            minWidth: "894px",
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
                룸메 신청 받은 리스트
              </span>
              <Link href="/mypage_receive">
                <span
                  style={{
                    float: "right",
                    fontSize: "12px",
                    fontWeight: "500",
                    lineHeight: "15px",
                    color: "#9B9EA1",
                  }}
                >
                  더보기
                </span>
              </Link>
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
                      <Image src="/basicProfile.png" width={24} height={24} />
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
                      <Image src="/check.png" width={14} height={14} />
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
                      <Image src="/basicProfile.png" width={24} height={24} />
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
                      <Image src="/check.png" width={14} height={14} />
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
                      <Image src="/basicProfile.png" width={24} height={24} />
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
                      <Image src="/check.png" width={14} height={14} />
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
                      <Image src="/basicProfile.png" width={24} height={24} />
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
                      <Image src="/check.png" width={14} height={14} />
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
                      <Image src="/basicProfile.png" width={24} height={24} />
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
                      <Image src="/check.png" width={14} height={14} />
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
                      <Image src="/basicProfile.png" width={24} height={24} />
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
                      <Image src="/check.png" width={14} height={14} />
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
                      <Image src="/basicProfile.png" width={24} height={24} />
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
                      <Image src="/check.png" width={14} height={14} />
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
                      <Image src="/basicProfile.png" width={24} height={24} />
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
                      <Image src="/check.png" width={14} height={14} />
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
                      <Image src="/basicProfile.png" width={24} height={24} />
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
                      <Image src="/check.png" width={14} height={14} />
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
                      <Image src="/basicProfile.png" width={24} height={24} />
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
                      <Image src="/check.png" width={14} height={14} />
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
              <Link href="/mypage_send">
                <span
                  style={{
                    float: "right",
                    fontSize: "12px",
                    fontWeight: "500",
                    lineHeight: "15px",
                    color: "#9B9EA1",
                  }}
                >
                  더보기
                </span>
              </Link>
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
                      <Image src="/basicProfile.png" width={24} height={24} />
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
                      <Image src="/check.png" width={14} height={14} />
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
                      <Image src="/basicProfile.png" width={24} height={24} />
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
                      <Image src="/check.png" width={14} height={14} />
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
                      <Image src="/basicProfile.png" width={24} height={24} />
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
                      <Image src="/check.png" width={14} height={14} />
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
                      <Image src="/basicProfile.png" width={24} height={24} />
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
                      <Image src="/check.png" width={14} height={14} />
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
                      <Image src="/basicProfile.png" width={24} height={24} />
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
                      <Image src="/check.png" width={14} height={14} />
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
                      <Image src="/basicProfile.png" width={24} height={24} />
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
                      <Image src="/check.png" width={14} height={14} />
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
                      <Image src="/basicProfile.png" width={24} height={24} />
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
                      <Image src="/check.png" width={14} height={14} />
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
                      <Image src="/basicProfile.png" width={24} height={24} />
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
                      <Image src="/check.png" width={14} height={14} />
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
                      <Image src="/basicProfile.png" width={24} height={24} />
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
                      <Image src="/check.png" width={14} height={14} />
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
                      <Image src="/basicProfile.png" width={24} height={24} />
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
                      <Image src="/check.png" width={14} height={14} />
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

          <div></div>
        </div>
      </Box>
      <Footer />
    </Box>
  );
};
