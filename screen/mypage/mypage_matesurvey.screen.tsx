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
  import group from '../../public/Group1.png';
  import Component10 from '../../public/Component10.png';
  import { flexbox } from "@mui/system";
  import { kMaxLength } from "buffer";
  import { type } from "os";
  import { getCookie, hasCookie } from "cookies-next";
  
  import basicProfile from '../../public/basicProfile.png';
  import check from '../../public/check.png';

  import edit from '../../public/edit.png';
  import logorights from '../../public/logorights.png';

  
  
  export const MyPageMateSurveyScreen: NextPage = () => {


    const mbti = [
        { text: "선택", value: "" }
      , { text: "ENFJ", value: "ENFJ" }
      , { text: "ENFP", value: "ENFP" }
      , { text: "ENTJ", value: "ENTJ" }
      , { text: "ENTP", value: "ENTP" }
      , { text: "ESFJ", value: "ESFJ" }
      , { text: "ESFP", value: "ESFP" }
      , { text: "ESTJ", value: "ESTJ" }
      , { text: "ESTP", value: "ESTP" }
      , { text: "INFJ", value: "INFJ" }
      , { text: "INFP", value: "INFP" }
      , { text: "INTJ", value: "INTJ" }
      , { text: "INTP", value: "INTP" }
      , { text: "ISFJ", value: "ISFJ" }
      , { text: "ISFP", value: "ISFP" }
      , { text: "ISTJ", value: "ISTJ" }
      , { text: "ISTP", value: "ISTP" }
    ];
  
    const major = [
        { text: "선택"            , value: ""}
      , { text: "AI학과"         , value: "1"}
      , { text: "간호학과"         , value: "2"}
      , { text: "건축학부"         , value: "3"}
      , { text: "경영학부(경영학)"      , value: "4"}
      , { text: "경영학부(글로벌금융)"   , value: "5"}
      , { text: "경제학부"         , value: "6"}
      , { text: "공간연출전공"         , value: "7"}
      , { text: "공공인재학부"         , value: "8"}
      , { text: "광고홍보학과"         , value: "9"}
      , { text: "교육학과"         , value: "10"}
      , { text: "국어국문학과"         , value: "11"}
      , { text: "국제물류학과"         , value: "12"}
      , { text: "기계공학부"         , value: "13"}
      , { text: "도시계획 ꞏ 부동산학과"   , value: "14"}
      , { text: "독일어문학전공"      , value: "15"}
      , { text: "러시아어문학전공"      , value: "16"}
      , { text: "문헌정보학과"         , value: "17"}
      , { text: "물리학과"         , value: "18"}
      , { text: "미디어커뮤니케이션학부"   , value: "19"}
      , { text: "사회기반시스템공학부"   , value: "20"}
      , { text: "사회복지학부"         , value: "21"}
      , { text: "사회학과"         , value: "22"}
      , { text: "산업보안학과"         , value: "23"}
      , { text: "생명과학과"         , value: "24"}
      , { text: "소프트웨어학부"      , value: "25"}
      , { text: "수학과"            , value: "26"}
      , { text: "심리학과"         , value: "27"}
      , { text: "약학부"            , value: "28"}
      , { text: "에너지시스템공학부"      , value: "29"}
      , { text: "역사학과"         , value: "30"}
      , { text: "연극전공"         , value: "31"}
      , { text: "영어교육과"         , value: "32"}
      , { text: "영어영문학과"         , value: "33"}
      , { text: "영화전공"         , value: "34"}
      , { text: "유아교육과"         , value: "35"}
      , { text: "융합공학부"         , value: "36"}
      , { text: "응용통계학과"         , value: "37"}
      , { text: "의학부"            , value: "38"}
      , { text: "일본어문학전공"      , value: "39"}
      , { text: "전자전기공학부"      , value: "40"}
      , { text: "정치국제학과"         , value: "41"}
      , { text: "중국어문학전공"      , value: "42"}
      , { text: "지식경영학부"         , value: "43"}
      , { text: "차세대반도체학과"      , value: "44"}
      , { text: "철학과"            , value: "45"}
      , { text: "체육교육과"         , value: "46"}
      , { text: "프랑스어문학전공"      , value: "47"}
      , { text: "화학과"            , value: "48"}
      , { text: "화학신소재공학부"      , value: "49"}
      , { text: "기타"            , value: "50"}
    ]


  
  
  
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
  
        <Box sx={{width: '100%', paddingLeft: "360px", paddingRight: "360px", marginTop: "120px", marginBottom: "120px" }}>
  
          <div style={{width: '300px', height: "100%", float:"left"}}>
            <div style={{width: "282px", height: "418px", padding: "40px 28px", border: "1px solid #DBDBDB", borderRadius: "20px"}}>
              <div style={{padding: "0px 63px 0px 63px"}}>
                <Image src={basicProfile} width={100} height={100}/>
              </div>
              
              <div style={{textAlign: "center", marginTop:"20px", fontFamily: "Spoqa Han Sans Neo", fontStyle: "normal", fontWeight: "500", fontSize: "24px" }}><span>이효인</span></div>
  
              <div style={{width: "226px", height: "104px", marginTop:"24px", padding: "24px 27px 24px 27px", border: "1px solid #DBDBDB", borderRadius: "10px", textAlign:"center"}}>
                <div style={{height: "18px"}}>
                  <span style={{float:"left", fontSize: "14px", fontWeight: "400" }}>카카오톡ID</span>
                  <span style={{float:"right", fontSize: "14px", fontWeight: "400"}}>lovv3517</span>
                </div>
                <div style={{height: "18px", marginTop:"20px"}}>
                  <span style={{float:"left", fontSize: "14px", fontWeight: "400"}}>생활관 정보</span>
                  <span style={{float:"right", fontSize: "14px", fontWeight: "400"}}>308관 2인실</span>
                </div>
              </div>
              <div style={{marginTop:"20px"}}>
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
              
            <div style={{ marginTop: "24px", alignItems: "center", width: "282px", height: "484px", padding: "42px 90px 42px 55px", border: "1px solid #DBDBDB", borderRadius: "20px"}}>
                <div style={{}}>
                  <span style={{fontWeight: "500", fontSize: "16px", letterSpacing: "-0.3px"}}>룸메 신청 리스트</span>
                  <div style={{ marginTop:"16px", fontWeight: "400", fontSize: "16px"}}><span></span>신청 받은 리스트</div>
                  <div style={{ marginTop:"12px", fontWeight: "400", fontSize: "16px"}}><span>신청 보낸 리스트</span></div>
                  <div style={{ marginTop:"12px", fontWeight: "400", fontSize: "16px"}}><span>찜한 룸메 리스트</span></div>
                </div>
  
                <div style={{marginTop:"36px"}}>
                  <span style={{fontWeight: "500", fontSize: "16px", lineHeight: "20px", letterSpacing: "-0.3px"}}>성향 설문조사</span>
                  <div style={{ marginTop:"16px", fontWeight: "400", fontSize: "16px", lineHeight: "20px"}}><span>나의 성향 설문조사</span></div>
                  <div style={{ marginTop:"12px", fontWeight: "400", fontSize: "16px", lineHeight: "20px"}}><span>룸메 성향 설문조사</span></div>
                </div>
  
                <div style={{marginTop:"36px"}}>
                  <span style={{fontWeight: "500", fontSize: "16px", lineHeight: "20px", letterSpacing: "-0.3px"}}>설정</span>
                  <div style={{marginTop:"16px", fontWeight: "400", fontSize: "16px", lineHeight: "20px"}}> <span>비밀번호 변경</span></div>
                  <div style={{marginTop:"12px", fontWeight: "400", fontSize: "16px", lineHeight: "20px"}}> <span>회원 탈퇴</span></div>
                  <div style={{marginTop:"12px", fontWeight: "400", fontSize: "16px", lineHeight: "20px"}}> <span>로그아웃</span></div>
                </div>
                
              </div>
          </div>
  
          {/* main content */}
          <div style={{width: "895px", height:"857px",marginTop:"170px", marginLeft:"305px", border: "1px solid #DBDBDB", borderRadius: "20px" , padding: "64px 60px"}}>
            <div style={{height: "875px"}}>
              
                <div style={{height: "25px"}}>
                  <span style={{ fontSize: "20px", fontWeight: "500", lineHeight: "25px"}}>룸메 성향 설문조사</span>
                  <div style={{float:"right"}}><Image src={edit} width={20} height={20}/></div>
                  <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", marginTop: "36px" }}>
                    <Box sx={{ width: '100%', height: "100%", display: flexbox }}>
                    <Box sx={{ float: "right", textAlign: "right" }}>
                    <input style={{width:"50px", height:"45px", borderTop:"none", borderRight:"none", borderLeft:"none", borderBottom: "2px solid #1CDDAD", marginRight:"20px" }}></input>
                    </Box>
                    </Box>
                    </Box>   
                </div>
            
                
                <div style={{marginTop:"36px"}}>
                    
                    <div style={{ marginTop:"20px", width:"774px", height: "66px", border: "1px solid #DBDBDB", borderRadius: "10px",alignItems: "center",justifyContent: "center"}}>
                        

                    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <Box sx={{ marginLeft:"40px", marginTop:"15px",backgroundColor: "#1CDDAD", minWidth: "72px", width: "52px", height: "36px", borderRadius: "100px", display: "table", textAlign: "center" }}>
                    <Box component="span" sx={{ paddingTop: "10px", display: "table-cell", width: "32px", height: "15px", fontWeight: 500, fontSize: "12px", lineHeight: "15px", color: "#FFFFFF", letterSpacing: "-0.3px" }}>문항 1</Box>
                    
                    </Box>
                    
                    <Box component="span" sx={{ marginTop:"15px", fontWeight: 500, fontSize: "16px", lineHeight: "20px", color: "black", marginLeft: "20px", letterSpacing: "-0.3px"}}>선호하는 룸메의 나이</Box>
                    
                    <Box component="span" sx={{ fontWeight: 500, fontSize: "16px", lineHeight: "20px", color: "#9B9EA1", letterSpacing: "-0.3px", marginLeft: "20px" }}></Box>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", marginTop: "36px" }}>
                    <Box sx={{ width: '100%', height: "100%", display: flexbox }}>
                    <Box sx={{ float: "right", textAlign: "right" }}>
                    <input style={{width:"50px", height:"45px", borderTop:"none", borderRight:"none", borderLeft:"none", borderBottom: "2px solid #1CDDAD", marginRight:"20px" }}></input>
                    </Box>
                    </Box>
                    </Box>             
                    </div>

                    <div style={{marginTop:"20px",width:"774px", height: "66px", border: "1px solid #DBDBDB", borderRadius: "10px",alignItems: "center" ,justifyContent: "center"}}>

                   <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                   <Box sx={{ marginLeft:"40px", marginTop:"15px",backgroundColor: "#1CDDAD", minWidth: "72px", width: "52px", height:"36px", borderRadius: "100px", display: "table", textAlign: "center" }}>
                   <Box component="span" sx={{ paddingTop: "10px", display: "table-cell", width: "32px", height: "15px", fontWeight: 500, fontSize: "12px", lineHeight: "15px", color: "#FFFFFF", letterSpacing: "-0.3px" }}>문항 2</Box>
                   </Box>
                   <Box component="span" sx={{ marginTop:"15px", fontWeight: 500, fontSize: "16px", lineHeight: "20px", color: "black", marginLeft: "20px",letterSpacing: "-0.3px"}}>선호하는 룸메의 MBTI</Box>
                   <Box component="span" sx={{ fontWeight: 500, fontSize: "16px", lineHeight: "20px", color: "#9B9EA1", letterSpacing: "-0.3px", marginLeft: "20px" }}></Box>
                   </Box>
                   <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", marginTop: "36px" }}>
                    <Box sx={{ width: '100%', height: "100%", display: flexbox }}>
                    <Box sx={{ float: "right", textAlign: "right" }}>
                    <input style={{width:"50px", height:"45px", borderTop:"none", borderRight:"none", borderLeft:"none", borderBottom: "2px solid #1CDDAD", marginRight:"20px" }}></input>
                    </Box>
                    </Box>
                    </Box>   
                   </div>


                   <div style={{marginTop:"20px",width:"774px", height: "66px", border: "1px solid #DBDBDB", borderRadius: "10px",alignItems: "center" ,justifyContent: "center"}}>

<Box sx={{display: "flex", flexDirection: "row", alignItems: "center" }}>
<Box sx={{ marginLeft:"40px", marginTop:"15px",backgroundColor: "#1CDDAD", minWidth: "72px", width: "52px", height:"36px", borderRadius: "100px", display: "table", textAlign: "center" }}>
<Box component="span" sx={{ paddingTop: "10px", display: "table-cell", width: "32px", height: "15px", fontWeight: 500, fontSize: "12px", lineHeight: "15px", color: "#FFFFFF", letterSpacing: "-0.3px" }}>문항 3</Box>
</Box>
<Box component="span" sx={{ marginTop:"15px", fontWeight: 500, fontSize: "16px", lineHeight: "20px", color: "black", marginLeft: "20px",letterSpacing: "-0.3px"}}>선호하는 룸메의 흡연 여부</Box>
<Box component="span" sx={{ fontWeight: 500, fontSize: "16px", lineHeight: "20px", color: "#9B9EA1", letterSpacing: "-0.3px", marginLeft: "20px" }}></Box>
</Box>
<Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", marginTop: "36px" }}>
                    <Box sx={{ width: '100%', height: "100%", display: flexbox }}>
                    <Box sx={{ float: "right", textAlign: "right" }}>
                    <input style={{width:"50px", height:"45px", borderTop:"none", borderRight:"none", borderLeft:"none", borderBottom: "2px solid #1CDDAD", marginRight:"20px" }}></input>
                    </Box>
                    </Box>
                    </Box>   
</div>


<div style={{marginTop:"20px",width:"774px", height: "66px", border: "1px solid #DBDBDB", borderRadius: "10px",alignItems: "center" ,justifyContent: "center"}}>

<Box sx={{display: "flex", flexDirection: "row", alignItems: "center" }}>
<Box sx={{ marginLeft:"40px", marginTop:"15px",backgroundColor: "#1CDDAD", minWidth: "72px", width: "52px", height:"36px", borderRadius: "100px", display: "table", textAlign: "center" }}>
<Box component="span" sx={{ paddingTop: "10px", display: "table-cell", width: "32px", height: "15px", fontWeight: 500, fontSize: "12px", lineHeight: "15px", color: "#FFFFFF", letterSpacing: "-0.3px" }}>문항 4</Box>
</Box>
<Box component="span" sx={{ marginTop:"15px", fontWeight: 500, fontSize: "16px", lineHeight: "20px", color: "black", marginLeft: "20px",letterSpacing: "-0.3px"}}>선호하는 룸메의 학과</Box>
<Box component="span" sx={{ fontWeight: 500, fontSize: "16px", lineHeight: "20px", color: "#9B9EA1", letterSpacing: "-0.3px", marginLeft: "20px" }}></Box>
</Box>
<Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", marginTop: "36px" }}>
                    <Box sx={{ width: '100%', height: "100%", display: flexbox }}>
                    <Box sx={{ float: "right", textAlign: "right" }}>
                    <input style={{width:"50px", height:"45px", borderTop:"none", borderRight:"none", borderLeft:"none", borderBottom: "2px solid #1CDDAD", marginRight:"20px" }}></input>
                    </Box>
                    </Box>
                    </Box>   
</div>


<div style={{marginTop:"20px",width:"774px", height: "66px", border: "1px solid #DBDBDB", borderRadius: "10px",alignItems: "center" ,justifyContent: "center"}}>

<Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
<Box sx={{ marginLeft:"40px", marginTop:"15px",backgroundColor: "#1CDDAD", minWidth: "72px", width: "52px", height:"36px", borderRadius: "100px", display: "table", textAlign: "center" }}>
<Box component="span" sx={{ paddingTop: "10px", display: "table-cell", width: "32px", height: "15px", fontWeight: 500, fontSize: "12px", lineHeight: "15px", color: "#FFFFFF", letterSpacing: "-0.3px" }}>문항 5</Box>
</Box>
<Box component="span" sx={{ marginTop:"15px", fontWeight: 500, fontSize: "16px", lineHeight: "20px", color: "black", marginLeft: "20px",letterSpacing: "-0.3px"}}>선호하는 룸메의 생활 패턴</Box>
<Box component="span" sx={{ fontWeight: 500, fontSize: "16px", lineHeight: "20px", color: "#9B9EA1", letterSpacing: "-0.3px", marginLeft: "20px" }}></Box>
</Box>
<Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", marginTop: "36px" }}>
                    <Box sx={{ width: '100%', height: "100%", display: flexbox }}>
                    <Box sx={{ float: "right", textAlign: "right" }}>
                    <input style={{width:"50px", height:"45px", borderTop:"none", borderRight:"none", borderLeft:"none", borderBottom: "2px solid #1CDDAD", marginRight:"20px" }}></input>
                    </Box>
                    </Box>
                    </Box>   
</div>


<div style={{marginTop:"20px",width:"774px", height: "66px", border: "1px solid #DBDBDB", borderRadius: "10px",alignItems: "center" ,justifyContent: "center"}}>

<Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
<Box sx={{ marginLeft:"40px", marginTop:"15px",backgroundColor: "#1CDDAD", minWidth: "72px", width: "52px", height:"36px", borderRadius: "100px", display: "table", textAlign: "center" }}>
<Box component="span" sx={{ paddingTop: "10px", display: "table-cell", width: "32px", height: "15px", fontWeight: 500, fontSize: "12px", lineHeight: "15px", color: "#FFFFFF", letterSpacing: "-0.3px" }}>문항 6</Box>
</Box>
<Box component="span" sx={{ marginTop:"15px", fontWeight: 500, fontSize: "16px", lineHeight: "20px", color: "black", marginLeft: "20px",letterSpacing: "-0.3px"}}>선호하는 룸메의 방 청소 빈도</Box>
<Box component="span" sx={{ fontWeight: 500, fontSize: "16px", lineHeight: "20px", color: "#9B9EA1", letterSpacing: "-0.3px", marginLeft: "20px" }}></Box>
</Box>
<Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", marginTop: "36px" }}>
                    <Box sx={{ width: '100%', height: "100%", display: flexbox }}>
                    <Box sx={{ float: "right", textAlign: "right" }}>
                    <input style={{width:"50px", height:"45px", borderTop:"none", borderRight:"none", borderLeft:"none", borderBottom: "2px solid #1CDDAD", marginRight:"20px" }}></input>
                    </Box>
                    </Box>
                    </Box>   
</div>


<div style={{marginTop:"20px",width:"774px", height: "66px", border: "1px solid #DBDBDB", borderRadius: "10px",alignItems: "center" ,justifyContent: "center"}}>

<Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
<Box sx={{ marginLeft:"40px", marginTop:"15px",backgroundColor: "#1CDDAD", minWidth: "72px", width: "52px", height:"36px", borderRadius: "100px", display: "table", textAlign: "center" }}>
<Box component="span" sx={{ paddingTop: "10px", display: "table-cell", width: "32px", height: "15px", fontWeight: 500, fontSize: "12px", lineHeight: "15px", color: "#FFFFFF", letterSpacing: "-0.3px" }}>문항 7</Box>
</Box>
<Box component="span" sx={{ marginTop:"15px", fontWeight: 500, fontSize: "16px", lineHeight: "20px", color: "black", marginLeft: "20px",letterSpacing: "-0.3px"}}>선호하는 룸메의 국적</Box>
<Box component="span" sx={{ fontWeight: 500, fontSize: "16px", lineHeight: "20px", color: "#9B9EA1", letterSpacing: "-0.3px", marginLeft: "20px" }}></Box>
</Box>
<Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", marginTop: "36px" }}>
                    <Box sx={{ width: '100%', height: "100%", display: flexbox }}>
                    <Box sx={{ float: "right", textAlign: "right" }}>
                    <input style={{width:"50px", height:"45px", borderTop:"none", borderRight:"none", borderLeft:"none", borderBottom: "2px solid #1CDDAD", marginRight:"20px" }}></input>
                    </Box>
                    </Box>
                    </Box>   
</div>


<div style={{marginTop:"20px",width:"774px", height: "66px", border: "1px solid #DBDBDB", borderRadius: "10px",alignItems: "center" ,justifyContent: "center"}}>

<Box sx={{display: "flex", flexDirection: "row", alignItems: "center" }}>
<Box sx={{ marginLeft:"40px", marginTop:"15px",backgroundColor: "#1CDDAD", minWidth: "72px", width: "52px", height:"36px", borderRadius: "100px", display: "table", textAlign: "center" }}>
<Box component="span" sx={{ paddingTop: "10px", display: "table-cell", width: "32px", height: "15px", fontWeight: 500, fontSize: "12px", lineHeight: "15px", color: "#FFFFFF", letterSpacing: "-0.3px" }}>문항 8</Box>
</Box>
<Box component="span" sx={{ marginTop:"15px", fontWeight: 500, fontSize: "16px", lineHeight: "20px", color: "black", marginLeft: "20px",letterSpacing: "-0.3px"}}>선호하는 룸메의 군복무 여부</Box>
<Box component="span" sx={{ fontWeight: 500, fontSize: "16px", lineHeight: "20px", color: "#9B9EA1", letterSpacing: "-0.3px", marginLeft: "20px" }}></Box>
</Box>

</div>

                       

                    </div>
                    
        
  
                  </div>
                  
                  

  
                </div>
                
  
  
    
        </Box>
        
        
              
  
  
  
        
  </Box>
  
    );
  };