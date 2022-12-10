import { Box, Button, Pagination, Typography } from "@mui/material";
import { NextPage } from "next";
import Image from "next/image";
import React from "react";

import MyPageLeft from "./components/mypage_left";

import Footer from "@/components/footer";

export const MyPageLikeScreen: NextPage = () => {
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
                    <Box sx={{ height: "875px" }}>
                        <Box sx={{ height: "25px" }}>
                            <Typography
                                sx={{
                                    float: "left",
                                    fontSize: "20px",
                                    fontWeight: "500",
                                    lineHeight: "25px",
                                }}
                            >
                                찜한 룸메 리스트
                            </Typography>
                            <Box sx={{ float: "right" }}>
                                <Image src="/bin.png" width={20} height={20} />
                            </Box>
                        </Box>

                        <Box sx={{ marginTop: "36px", marginBottom: "40px" }}>
                            <Box
                                sx={{
                                    marginTop: "10px",
                                    width: "144px",
                                    height: "194px",
                                    border: "1px solid #DBDBDB",
                                    borderRadius: "10px",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Box
                                    sx={{
                                        float: "none",
                                        marginLeft: "40px",
                                        marginTop: "20px",
                                    }}
                                >
                                    <Image src="/basicProfile.png" width={60} height={60} />
                                </Box>
                                <Box sx={{ marginTop: "10px", marginLeft: "10px" }}>
                                    <Typography
                                        sx={{
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
                                    </Typography>
                                    <Typography
                                        sx={{
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
                                    </Typography>
                                </Box>
                            </Box>

                            <Box sx={{ marginLeft: "45px", marginTop: "-70px" }}>
                                <Image src="/check.png" width={14} height={14} />
                                <Typography sx={{ marginLeft: "5px" }}>56%</Typography>
                            </Box>
                            <Box sx={{ marginLeft: "30px", marginTop: "10px" }}>
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
                                        fontsx: "normal",
                                        fontWeight: "400",
                                        fontSize: "12px",
                                        lineHeight: "15px",
                                    }}
                                >
                                    프로필 보기
                                </Button>
                            </Box>
                        </Box>
                        <Box sx={{ marginTop: "36px", marginBottom: "40px" }}>
                            <Box
                                sx={{
                                    marginTop: "10px",
                                    width: "144px",
                                    height: "194px",
                                    border: "1px solid #DBDBDB",
                                    borderRadius: "10px",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Box
                                    sx={{
                                        float: "none",
                                        marginLeft: "40px",
                                        marginTop: "20px",
                                    }}
                                >
                                    <Image src="/basicProfile.png" width={60} height={60} />
                                </Box>
                                <Box sx={{ marginTop: "10px", marginLeft: "10px" }}>
                                    <Typography
                                        sx={{
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
                                    </Typography>
                                    <Typography
                                        sx={{
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
                                    </Typography>
                                </Box>
                            </Box>

                            <Box sx={{ marginLeft: "45px", marginTop: "-70px" }}>
                                <Image src="/check.png" width={14} height={14} />
                                <Typography sx={{ marginLeft: "5px" }}>56%</Typography>
                            </Box>
                            <Box sx={{ marginLeft: "30px", marginTop: "10px" }}>
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
                                        fontsx: "normal",
                                        fontWeight: "400",
                                        fontSize: "12px",
                                        lineHeight: "15px",
                                    }}
                                >
                                    프로필 보기
                                </Button>
                            </Box>
                        </Box>
                        <Box sx={{ marginTop: "36px", marginBottom: "40px" }}>
                            <Box
                                sx={{
                                    marginTop: "10px",
                                    width: "144px",
                                    height: "194px",
                                    border: "1px solid #DBDBDB",
                                    borderRadius: "10px",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Box
                                    sx={{
                                        float: "none",
                                        marginLeft: "40px",
                                        marginTop: "20px",
                                    }}
                                >
                                    <Image src="/basicProfile.png" width={60} height={60} />
                                </Box>
                                <Box sx={{ marginTop: "10px", marginLeft: "10px" }}>
                                    <Typography
                                        sx={{
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
                                    </Typography>
                                    <Typography
                                        sx={{
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
                                    </Typography>
                                </Box>
                            </Box>

                            <Box sx={{ marginLeft: "45px", marginTop: "-70px" }}>
                                <Image src="/check.png" width={14} height={14} />
                                <Typography sx={{ marginLeft: "5px" }}>56%</Typography>
                            </Box>
                            <Box sx={{ marginLeft: "30px", marginTop: "10px" }}>
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
                                        fontsx: "normal",
                                        fontWeight: "400",
                                        fontSize: "12px",
                                        lineHeight: "15px",
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

            <Footer />
        </Box>
    );
};
