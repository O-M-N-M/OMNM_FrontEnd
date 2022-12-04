import { Box, Button, Pagination } from "@mui/material";
import { flexbox } from "@mui/system";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import group from "../../public/Group1.png";
import basicProfile from "../../public/basicProfile.png";
import bin from "../../public/bin.png";
import check from "../../public/check.png";
import logo from "../../public/logo2.png";

import MyPageLeft from "./components/mypage_left";

export const MyPageLikeScreen: NextPage = () => {
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
                        marginLeft: "305px",
                        border: "1px solid #DBDBDB",
                        borderRadius: "20px",
                        padding: "64px 60px",
                    }}
                >
                    <div style={{ height: "875px" }}>
                        <div style={{ height: "25px" }}>
                            <span
                                style={{
                                    float: "left",
                                    fontSize: "20px",
                                    fontWeight: "500",
                                    lineHeight: "25px",
                                   
                                }}
                            >
                                찜한 룸메 리스트
                            </span>
                            <div style={{ float: "right" }}>
                                <Image src={bin} width={20} height={20} />
                            </div>
                        </div>

                        <div style={{ marginTop: "36px", marginBottom: "40px" }}>
                            <div
                                style={{
                                    marginTop: "10px",
                                    width: "144px",
                                    height: "194px",
                                    border: "1px solid #DBDBDB",
                                    borderRadius: "10px",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    
                                }}
                            >
                                <div
                                    style={{
                                        float: "none",
                                        marginLeft: "40px",
                                        marginTop: "20px",
                                    }}
                                >
                                    <Image src={basicProfile} width={60} height={60} />
                                </div>
                                <div style={{ marginTop: "10px", marginLeft: "10px" }}>
                                    <span
                                        style={{
                                            float: "left",
                                            width: "72px",
                                            height: "20px",
                                            fontSize: "16px",
                                            fontWeight: "500",
                                            lineHeight: "20px",
                                            letterSpacing: "-0.5px",
                                            display: "flex",
                                            marginLeft: "25px",
                                        }}
                                    >
                                        정가영
                                    </span>
                                    <span
                                        style={{
                                            float: "right",
                                            width: "24px",
                                            height: "15px",
                                            fontSize: "12px",
                                            fontWeight: "400",
                                            lineHeight: "20px",
                                            color: "#9B9EA1",
                                            display: "flex",
                                            marginRight: "38px",
                                            marginTop: "-18px",
                                        }}
                                    >
                                        · 24
                                    </span>
                                </div>
                            </div>

                            <div style={{ marginLeft: "45px", marginTop: "-70px" }}>
                                <Image src={check} width={14} height={14} />
                                <span style={{ marginLeft: "5px" }}>56%</span>
                            </div>
                            <div style={{ marginLeft: "30px", marginTop: "10px" }}>
                                <Button
                                    type="submit"
                                    sx={{
                                        background: "#FFFFFF",
                                        borderRadius: "200px",
                                        width: "84px",
                                        height: "28px",
                                        color: "#4B99EB",
                                        border: "1px solid #4B99EB",
                                        fontFamily: "Spoqa Han Sans Neo",
                                        fontStyle: "normal",
                                        fontWeight: "400",
                                        fontSize: "12px",
                                        lineHeight: "15px",
                                    }}
                                >
                                    프로필 보기
                                </Button>
                            </div>
                        </div>
                        <div style={{ marginTop: "36px", marginBottom: "40px" }}>
                            <div
                                style={{
                                    marginTop: "10px",
                                    width: "144px",
                                    height: "194px",
                                    border: "1px solid #DBDBDB",
                                    borderRadius: "10px",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <div
                                    style={{
                                        float: "none",
                                        marginLeft: "40px",
                                        marginTop: "20px",
                                    }}
                                >
                                    <Image src={basicProfile} width={60} height={60} />
                                </div>
                                <div style={{ marginTop: "10px", marginLeft: "10px" }}>
                                    <span
                                        style={{
                                            float: "left",
                                            width: "72px",
                                            height: "20px",
                                            fontSize: "16px",
                                            fontWeight: "500",
                                            lineHeight: "20px",
                                            letterSpacing: "-0.5px",
                                            display: "flex",
                                            marginLeft: "25px",
                                        }}
                                    >
                                        정가영
                                    </span>
                                    <span
                                        style={{
                                            float: "right",
                                            width: "24px",
                                            height: "15px",
                                            fontSize: "12px",
                                            fontWeight: "400",
                                            lineHeight: "20px",
                                            color: "#9B9EA1",
                                            display: "flex",
                                            marginRight: "38px",
                                            marginTop: "-18px",
                                        }}
                                    >
                                        · 24
                                    </span>
                                </div>
                            </div>

                            <div style={{ marginLeft: "45px", marginTop: "-70px" }}>
                                <Image src={check} width={14} height={14} />
                                <span style={{ marginLeft: "5px" }}>56%</span>
                            </div>
                            <div style={{ marginLeft: "30px", marginTop: "10px" }}>
                                <Button
                                    type="submit"
                                    sx={{
                                        background: "#FFFFFF",
                                        borderRadius: "200px",
                                        width: "84px",
                                        height: "28px",
                                        color: "#4B99EB",
                                        border: "1px solid #4B99EB",
                                        fontFamily: "Spoqa Han Sans Neo",
                                        fontStyle: "normal",
                                        fontWeight: "400",
                                        fontSize: "12px",
                                        lineHeight: "15px",
                                    }}
                                >
                                    프로필 보기
                                </Button>
                            </div>
                        </div>
                        <div style={{ marginTop: "36px", marginBottom: "40px" }}>
                            <div
                                style={{
                                    marginTop: "10px",
                                    width: "144px",
                                    height: "194px",
                                    border: "1px solid #DBDBDB",
                                    borderRadius: "10px",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <div
                                    style={{
                                        float: "none",
                                        marginLeft: "40px",
                                        marginTop: "20px",
                                    }}
                                >
                                    <Image src={basicProfile} width={60} height={60} />
                                </div>
                                <div style={{ marginTop: "10px", marginLeft: "10px" }}>
                                    <span
                                        style={{
                                            float: "left",
                                            width: "72px",
                                            height: "20px",
                                            fontSize: "16px",
                                            fontWeight: "500",
                                            lineHeight: "20px",
                                            letterSpacing: "-0.5px",
                                            display: "flex",
                                            marginLeft: "25px",
                                        }}
                                    >
                                        정가영
                                    </span>
                                    <span
                                        style={{
                                            float: "right",
                                            width: "24px",
                                            height: "15px",
                                            fontSize: "12px",
                                            fontWeight: "400",
                                            lineHeight: "20px",
                                            color: "#9B9EA1",
                                            display: "flex",
                                            marginRight: "38px",
                                            marginTop: "-18px",
                                        }}
                                    >
                                        · 24
                                    </span>
                                </div>
                            </div>

                            <div style={{ marginLeft: "45px", marginTop: "-70px" }}>
                                <Image src={check} width={14} height={14} />
                                <span style={{ marginLeft: "5px" }}>56%</span>
                            </div>
                            <div style={{ marginLeft: "30px", marginTop: "10px" }}>
                                <Button
                                    type="submit"
                                    sx={{
                                        background: "#FFFFFF",
                                        borderRadius: "200px",
                                        width: "84px",
                                        height: "28px",
                                        color: "#4B99EB",
                                        border: "1px solid #4B99EB",
                                        fontFamily: "Spoqa Han Sans Neo",
                                        fontStyle: "normal",
                                        fontWeight: "400",
                                        fontSize: "12px",
                                        lineHeight: "15px",
                                    }}
                                >
                                    프로필 보기
                                </Button>
                            </div>
                        </div>
                        <Pagination count={5} />
                    </div>
                </div>
            </Box>
        </Box>
    );
};
