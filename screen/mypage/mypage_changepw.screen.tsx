import { Box, Typography, Button } from "@mui/material";
import { NextPage } from "next";
import React, { useState } from "react";

import MyPageLeft from "./components/mypage_left";

import Footer from "@/components/footer";

export const MyPageChangePwScreen: NextPage = () => {
    const [pw, setPW] = useState("");

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
                    minWidth: "894px",
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
                        width: "894px",
                        marginLeft: "306px",
                        border: "1px solid #DBDBDB",
                        borderRadius: "20px",
                        padding: "64px 60px",
                    }}
                >
                    <Box sx={{ height: "875px" }}>
                        <Box sx={{ height: "25px" }}>
                            <Typography
                                sx={{
                                    fontSize: "20px",
                                    fontWeight: "500",
                                    lineHeight: "25px",
                                }}
                            >
                                비밀번호 변경
                            </Typography>
                        </Box>

                        <form className="mt-10 border border-0 rounded-lg p-14">
                            <Typography className="text-xl font-medium text-black">
                                현재 비밀번호
                            </Typography>
                            <input
                                type="text"
                                name="pw"
                                placeholder="현재 비밀번호 입력"
                                value={pw}
                                onChange={(e) => setPW(e.target.value)}
                                className="rounded-full text-gray1 border border-solid border-gray0 text-xs block w-60 p-2.5 mt-2 focus:outline-none"
                                required
                            />
                            <Typography className="text-xl font-medium text-black">
                                새 비밀번호
                            </Typography>
                            <input
                                type="text"
                                name="pw"
                                placeholder="새 비밀번호 입력"
                                value={pw}
                                onChange={(e) => setPW(e.target.value)}
                                className="rounded-full text-gray1 border border-solid border-gray0 text-xs block w-60 p-2.5 mt-2 focus:outline-none"
                                required
                            />
                            <Typography className="text-xl font-medium text-black">
                                새 비밀번호 확인
                            </Typography>
                            <input
                                type="text"
                                name="pw"
                                placeholder="새 비밀번호 재입력"
                                value={pw}
                                onChange={(e) => setPW(e.target.value)}
                                className="rounded-full text-gray1 border border-solid border-gray0 text-xs block w-60 p-2.5 mt-2 focus:outline-none"
                                required
                            />
                        </form>

                        <Box
                            sx={{
                                marginTop: "36px",
                                marginBottom: "40px",
                                padding: "22px 32px",
                            }}
                        >
                            <Box sx={{ marginLeft: "150px", marginTop: "10px" }}>
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
                                        fontsx: "normal",
                                        fontWeight: "400",
                                        fontSize: "15px",
                                        lineHeight: "15px",
                                    }}
                                >
                                    확인
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Footer />
        </Box>
    );
};
