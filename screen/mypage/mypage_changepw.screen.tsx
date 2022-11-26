import {
    Box, Typography, Button, Checkbox, RadioGroup, FormControlLabel, Radio,
    InputLabel, Select, MenuItem, TextareaAutosize
} from "@mui/material";
import { FormControl } from '@mui/material';
import axios from "axios";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from '../../public/logo2.png';
import bin from '../../public/bin.png';
import group from '../../public/Group1.png';
import Component10 from '../../public/Component10.png';
import { flexbox } from "@mui/system";
import { kMaxLength } from "buffer";
import { type } from "os";
import { getCookie, hasCookie } from "cookies-next";

import basicProfile from '../../public/basicProfile.png';
import check from '../../public/check.png';
import logorights from '../../public/logorights.png';

export const MyPageChangePwScreen: NextPage = () => {
    const [pw, setPW] = useState('');



    return (

        <Box component="div" sx={{ backgroundColor: '#FFFFFF', width: '100%', height: "50px", position: "absolute", fontFamily: "Spoqa Han Sans Neo", fontStyle: "normal" }}>


            <Box sx={{ backgroundColor: '#FFFFFF', width: '100%', height: "100%", display: flexbox, paddingLeft: "360px", paddingRight: "360px", borderBottom: 1, borderColor: "#DBDBDB" }}>
                <Link href="/">
                    <Box sx={{ width: "50%", float: "left", textAlign: "left", paddingTop: "10px" }}>
                        <Image src={logo} width={115} height={20} style={{ top: 10 }} />
                    </Box>
                </Link>
                <Box sx={{ width: "50%", float: "right", textAlign: "right", paddingTop: "10px" }}>
                    <Image src={group} width={26} height={26} style={{ top: 10 }} />
                </Box>
            </Box>

            <Box sx={{ width: '100%', paddingLeft: "360px", paddingRight: "360px", marginTop: "120px", marginBottom: "120px" }}>

                <div style={{ width: '300px', height: "100%", float: "left" }}>
                    <div style={{ width: "282px", height: "418px", padding: "40px 28px", border: "1px solid #DBDBDB", borderRadius: "20px" }}>
                        <div style={{ padding: "0px 63px 0px 63px" }}>
                            <Image src={basicProfile} width={100} height={100} />
                        </div>

                        <div style={{ textAlign: "center", marginTop: "20px", fontFamily: "Spoqa Han Sans Neo", fontStyle: "normal", fontWeight: "500", fontSize: "24px" }}><span>이효인</span></div>

                        <div style={{ width: "226px", height: "104px", marginTop: "24px", padding: "24px 27px 24px 27px", border: "1px solid #DBDBDB", borderRadius: "10px", textAlign: "center" }}>
                            <div style={{ height: "18px" }}>
                                <span style={{ float: "left", fontSize: "14px", fontWeight: "400" }}>카카오톡ID</span>
                                <span style={{ float: "right", fontSize: "14px", fontWeight: "400" }}>lovv3517</span>
                            </div>
                            <div style={{ height: "18px", marginTop: "20px" }}>
                                <span style={{ float: "left", fontSize: "14px", fontWeight: "400" }}>생활관 정보</span>
                                <span style={{ float: "right", fontSize: "14px", fontWeight: "400" }}>308관 2인실</span>
                            </div>
                        </div>
                        <div style={{ marginTop: "20px" }}>
                            <Button type="submit" sx={{
                                background: "#4B99EB", borderRadius: "200px", width: "226px", height: "40px", color: "#FFFFFF"
                                , fontFamily: 'Spoqa Han Sans Neo'
                                , fontStyle: "normal"
                                , fontWeight: "500"
                                , fontSize: "14px"
                                , lineHeight: "18px"
                                , letterSpacing: "-0.3px"
                            }}>개인정보 수정</Button>
                        </div>

                    </div>

                    <div style={{ marginTop: "24px", alignItems: "center", width: "282px", height: "484px", padding: "42px 90px 42px 55px", border: "1px solid #DBDBDB", borderRadius: "20px" }}>
                        <div style={{}}>
                            <span style={{ fontWeight: "500", fontSize: "16px", letterSpacing: "-0.3px" }}>룸메 신청 리스트</span>
                            <div style={{ marginTop: "16px", fontWeight: "400", fontSize: "16px" }}><span></span>신청 받은 리스트</div>
                            <div style={{ marginTop: "12px", fontWeight: "400", fontSize: "16px" }}><span>신청 보낸 리스트</span></div>
                            <div style={{ marginTop: "12px", fontWeight: "400", fontSize: "16px" }}><span>찜한 룸메 리스트</span></div>
                        </div>

                        <div style={{ marginTop: "36px" }}>
                            <span style={{ fontWeight: "500", fontSize: "16px", lineHeight: "20px", letterSpacing: "-0.3px" }}>성향 설문조사</span>
                            <div style={{ marginTop: "16px", fontWeight: "400", fontSize: "16px", lineHeight: "20px" }}><span>나의 성향 설문조사</span></div>
                            <div style={{ marginTop: "12px", fontWeight: "400", fontSize: "16px", lineHeight: "20px" }}><span>룸메 성향 설문조사</span></div>
                        </div>

                        <div style={{ marginTop: "36px" }}>
                            <span style={{ fontWeight: "500", fontSize: "16px", lineHeight: "20px", letterSpacing: "-0.3px" }}>설정</span>
                            <div style={{ marginTop: "16px", fontWeight: "400", fontSize: "16px", lineHeight: "20px" }}> <span>비밀번호 변경</span></div>
                            <div style={{ marginTop: "12px", fontWeight: "400", fontSize: "16px", lineHeight: "20px" }}> <span>회원 탈퇴</span></div>
                            <div style={{ marginTop: "12px", fontWeight: "400", fontSize: "16px", lineHeight: "20px" }}> <span>로그아웃</span></div>
                        </div>

                    </div>
                </div>

                {/* main content */}
                <div style={{ width: "894px", height: "584px", marginTop: "170px", marginLeft: "305px", border: "1px solid #DBDBDB", borderRadius: "20px", padding: "64px 60px" }}>
                    <div style={{ height: "875px" }}>

                        <div style={{ height: "25px" }}>
                            <span style={{ fontSize: "20px", fontWeight: "500", lineHeight: "25px" }}>비밀번호 변경</span>
                        </div>

                        <form className="mt-10 border border-0 border-solid rounded-lg p-14">
                            <Typography className="text-xl font-medium text-black">현재 비밀번호</Typography>
                            <input
                                type="text"
                                name="pw"
                                placeholder="현재 비밀번호 입력"
                                value={pw}
                                onChange={(e) => setPW(e.target.value)}
                                className="rounded-full text-gray1 border border-solid border-gray0 text-xs block w-60 p-2.5 mt-2 focus:outline-none" required />
                            <Typography className="text-xl font-medium text-black">새 비밀번호</Typography>
                            <input
                                type="text"
                                name="pw"
                                placeholder="새 비밀번호 입력"
                                value={pw}
                                onChange={(e) => setPW(e.target.value)}
                                className="rounded-full text-gray1 border border-solid border-gray0 text-xs block w-60 p-2.5 mt-2 focus:outline-none" required />
                            <Typography className="text-xl font-medium text-black">새 비밀번호 확인</Typography>
                            <input
                                type="text"
                                name="pw"
                                placeholder="새 비밀번호 재입력"
                                value={pw}
                                onChange={(e) => setPW(e.target.value)}
                                className="rounded-full text-gray1 border border-solid border-gray0 text-xs block w-60 p-2.5 mt-2 focus:outline-none" required />

                        </form>



                        <div style={{ marginTop: "36px", marginBottom: "40px", padding: "22px 32px" }}>

                            <div style={{ marginLeft: "150px", marginTop: "10px" }}>
                                <Button type="submit" sx={{
                                    background: "#4B99EB", borderRadius: "200px", width: "100px", height: "40px", color: "#FFFFFF"
                                    , fontFamily: 'Spoqa Han Sans Neo'
                                    , border: "1px solid #4B99EB"
                                    , fontFamily: 'Spoqa Han Sans Neo'
                                    , fontStyle: "normal"
                                    , fontWeight: "400"
                                    , fontSize: "15px"
                                    , lineHeight: "15px"
                                }}>확인</Button>
                            </div>
                        </div>


                    </div>




                </div>



            </Box>










        </Box>

    );
};