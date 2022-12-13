import {
  Box,
  Typography,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  Select,
  MenuItem,
  TextareaAutosize,
  FormControl,
} from "@mui/material";
import { flexbox } from "@mui/system";
import axios from "axios";
import { getCookie } from "cookies-next";
import { NextPage } from "next";
import Image from "next/image";
import React, { useState } from "react";

import Component10 from "../../public/Component10.png";

import Footer from "@/components/footer";

export const SurveyMeScreen: NextPage = () => {
  const [age, setAge] = useState("");
  const [selectedMbti, setSelectedMbti] = useState("");
  const [isSmoking, setIsSmoking] = useState("");
  const [department, setDepartment] = useState("");
  const [lifeCycle, setLifeCycle] = useState("");
  const [sleepingPattern, setSleepingPattern] = useState("");
  const [cleaning, setCleaning] = useState("");
  const [nationality, setNationality] = useState("");
  const [armyService, setArmyService] = useState("");
  const [introduction, setIntroduction] = useState("");

  const mbti = [
    { text: "선택", value: "" },
    { text: "ENFJ", value: "ENFJ" },
    { text: "ENFP", value: "ENFP" },
    { text: "ENTJ", value: "ENTJ" },
    { text: "ENTP", value: "ENTP" },
    { text: "ESFJ", value: "ESFJ" },
    { text: "ESFP", value: "ESFP" },
    { text: "ESTJ", value: "ESTJ" },
    { text: "ESTP", value: "ESTP" },
    { text: "INFJ", value: "INFJ" },
    { text: "INFP", value: "INFP" },
    { text: "INTJ", value: "INTJ" },
    { text: "INTP", value: "INTP" },
    { text: "ISFJ", value: "ISFJ" },
    { text: "ISFP", value: "ISFP" },
    { text: "ISTJ", value: "ISTJ" },
    { text: "ISTP", value: "ISTP" },
  ];

  const major = [
    { text: "선택", value: "" },
    { text: "AI학과", value: "1" },
    { text: "간호학과", value: "2" },
    { text: "건축학부", value: "3" },
    { text: "경영학부(경영학)", value: "4" },
    { text: "경영학부(글로벌금융)", value: "5" },
    { text: "경제학부", value: "6" },
    { text: "공간연출전공", value: "7" },
    { text: "공공인재학부", value: "8" },
    { text: "광고홍보학과", value: "9" },
    { text: "교육학과", value: "10" },
    { text: "국어국문학과", value: "11" },
    { text: "국제물류학과", value: "12" },
    { text: "기계공학부", value: "13" },
    { text: "도시계획 ꞏ 부동산학과", value: "14" },
    { text: "독일어문학전공", value: "15" },
    { text: "러시아어문학전공", value: "16" },
    { text: "문헌정보학과", value: "17" },
    { text: "물리학과", value: "18" },
    { text: "미디어커뮤니케이션학부", value: "19" },
    { text: "사회기반시스템공학부", value: "20" },
    { text: "사회복지학부", value: "21" },
    { text: "사회학과", value: "22" },
    { text: "산업보안학과", value: "23" },
    { text: "생명과학과", value: "24" },
    { text: "소프트웨어학부", value: "25" },
    { text: "수학과", value: "26" },
    { text: "심리학과", value: "27" },
    { text: "약학부", value: "28" },
    { text: "에너지시스템공학부", value: "29" },
    { text: "역사학과", value: "30" },
    { text: "연극전공", value: "31" },
    { text: "영어교육과", value: "32" },
    { text: "영어영문학과", value: "33" },
    { text: "영화전공", value: "34" },
    { text: "유아교육과", value: "35" },
    { text: "융합공학부", value: "36" },
    { text: "응용통계학과", value: "37" },
    { text: "의학부", value: "38" },
    { text: "일본어문학전공", value: "39" },
    { text: "전자전기공학부", value: "40" },
    { text: "정치국제학과", value: "41" },
    { text: "중국어문학전공", value: "42" },
    { text: "지식경영학부", value: "43" },
    { text: "차세대반도체학과", value: "44" },
    { text: "철학과", value: "45" },
    { text: "체육교육과", value: "46" },
    { text: "프랑스어문학전공", value: "47" },
    { text: "화학과", value: "48" },
    { text: "화학신소재공학부", value: "49" },
    { text: "기타", value: "50" },
  ];

  const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelectedMbti(event.target.value);
  };
  const handleSmokingChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setIsSmoking(event.target.value);
  };
  const handleDepartmentChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setDepartment(event.target.value);
  };

  const handleLifeCycleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setLifeCycle(event.target.value);
  };

  const handleSleepingPatternChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSleepingPattern(event.target.value);
  };

  const handleCleaningChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setCleaning(event.target.value);
  };

  const handleNationalityChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setNationality(event.target.value);
  };

  const handleArmyServiceChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setArmyService(event.target.value);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const url = "/api/myPersonality";
    const body = `age=${age}&mbti=${selectedMbti}&isSmoking=${isSmoking}&department=${department}&lifeCycle=${lifeCycle}&sleepingPattern=${sleepingPattern}&cleaning=${cleaning}&nationality=${nationality}&armyService=${armyService}&introduction=${introduction}`;

    const headers = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        OMNM: `${getCookie("OMNM")}`,
      },
    };

    await axios
      .post(url, body, headers)
      .then((res) => {
        // console.log(res.data);

        if (res.data == "나의 성향 설문 등록 완료") {
          alert(res.data);
          // document.location = '/';
        } else {
          alert("등록실패");
        }
      })
      .catch((err) => console.log(err.response));
  };

  return (
    <form onSubmit={onSubmit}>
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
            paddingLeft: "15%",
            paddingRight: "15%",
            marginTop: "120px",
            marginBottom: "12px",
          }}
        >
          <Box sx={{ width: "533px", height: "77px", display: flexbox }}>
            <Box sx={{ float: "left", textAlign: "left" }}>
              <Image
                src={Component10}
                width={57}
                height={72}
                style={{ top: 10 }}
              />
            </Box>
            <Box sx={{ float: "left", textAlign: "left", marginLeft: "19px" }}>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "25px",
                  color: "#383838",
                }}
              >
                딱 맞는 룸메 찾기를 위한 성향 조사
              </Typography>
              <Box sx={{ float: "left", textAlign: "left" }}>
                <Box
                  component="span"
                  sx={{
                    fontWeight: 500,
                    fontSize: "36px",
                    lineHeight: "45px",
                    color: "#4B99EB",
                  }}
                >
                  당신
                </Box>
                <Box
                  component="span"
                  sx={{
                    fontWeight: 500,
                    fontSize: "36px",
                    lineHeight: "45px",
                    color: "black",
                  }}
                >
                  을 소개해주세요.
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            paddingLeft: "15%",
            paddingRight: "15%",
            marginTop: "28px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              padding: "40px 78px",
              border: "1px solid #DBDBDB",
              borderRadius: "20px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#1CDDAD",
                  minWidth: "72px",
                  width: "72px",
                  height: "36px",
                  borderRadius: "100px",
                  display: "table",
                  textAlign: "center",
                }}
              >
                <Box
                  component="span"
                  sx={{
                    paddingTop: "7px",
                    display: "table-cell",
                    width: "72px",
                    height: "36px",
                    fontWeight: 700,
                    fontSize: "16px",
                    lineHeight: "20px",
                    color: "#FFFFFF",
                    letterSpacing: "-0.3px",
                  }}
                >
                  문항 1
                </Box>
              </Box>
              <Box
                component="span"
                sx={{
                  fontWeight: 500,
                  fontSize: "20px",
                  lineHeight: "25px",
                  color: "black",
                  marginLeft: "20px",
                }}
              >
                본인의 나이를 적어주세요.
              </Box>
              <Box
                component="span"
                sx={{
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "20px",
                  color: "#9B9EA1",
                  letterSpacing: "-0.3px",
                  marginLeft: "20px",
                }}
              ></Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginTop: "36px",
              }}
            >
              <Box sx={{ width: "100%", height: "100%", display: flexbox }}>
                <Box sx={{ float: "right", textAlign: "right" }}>
                  <input
                    style={{
                      width: "60px",
                      height: "35px",
                      borderTop: "none",
                      borderRight: "none",
                      borderLeft: "none",
                      borderBottom: "2px solid #1CDDAD",
                    }}
                    min="0"
                    max="100"
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  ></input>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            paddingLeft: "15%",
            paddingRight: "15%",
            marginTop: "28px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "120px",
              padding: "40px 78px",
              border: "1px solid #DBDBDB",
              borderRadius: "20px",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", float: "left" }}>
              <Box
                sx={{
                  backgroundColor: "#1CDDAD",
                  minWidth: "72px",
                  width: "72px",
                  height: "36px",
                  borderRadius: "100px",
                  display: "table",
                  textAlign: "center",
                }}
              >
                <Box
                  component="span"
                  sx={{
                    paddingTop: "7px",
                    display: "table-cell",
                    width: "72px",
                    height: "36px",
                    fontWeight: 700,
                    fontSize: "16px",
                    lineHeight: "20px",
                    color: "#FFFFFF",
                    letterSpacing: "-0.3px",
                  }}
                >
                  문항 3
                </Box>
              </Box>
              <Box
                component="span"
                sx={{
                  fontWeight: 500,
                  fontSize: "20px",
                  lineHeight: "25px",
                  color: "black",
                  marginLeft: "20px",
                }}
              >
                당신의 MBTI를 알려주세요.
              </Box>
            </Box>
            <Box sx={{ float: "right" }}>
              <FormControl sx={{ width: "160px" }}>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={selectedMbti}
                  onChange={handleChange}
                >
                  {mbti.map((item, index) => (
                    <MenuItem value={item.value}>{item.text}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            paddingLeft: "15%",
            paddingRight: "15%",
            marginTop: "28px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "120px",
              padding: "40px 78px",
              border: "1px solid #DBDBDB",
              borderRadius: "20px",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", float: "left" }}>
              <Box
                sx={{
                  backgroundColor: "#1CDDAD",
                  minWidth: "72px",
                  width: "72px",
                  height: "36px",
                  borderRadius: "100px",
                  display: "table",
                  textAlign: "center",
                }}
              >
                <Box
                  component="span"
                  sx={{
                    paddingTop: "7px",
                    display: "table-cell",
                    width: "72px",
                    height: "36px",
                    fontWeight: 700,
                    fontSize: "16px",
                    lineHeight: "20px",
                    color: "#FFFFFF",
                    letterSpacing: "-0.3px",
                  }}
                >
                  문항 3
                </Box>
              </Box>
              <Box
                component="span"
                sx={{
                  fontWeight: 500,
                  fontSize: "20px",
                  lineHeight: "25px",
                  color: "black",
                  marginLeft: "20px",
                }}
              >
                당신의 흡연 여부를 선택해주세요.
              </Box>
            </Box>
            <Box sx={{ float: "right" }}>
              <RadioGroup row name="radio3" onChange={handleSmokingChange}>
                <FormControlLabel
                  value="1"
                  control={<Radio size="sm" />}
                  label={
                    <Typography
                      sx={{
                        fontWeight: 400,
                        fontSize: "18px",
                        lineHeight: "23px",
                        color: "#383838",
                      }}
                    >
                      흡연
                    </Typography>
                  }
                />
                <FormControlLabel
                  value="2"
                  control={<Radio size="sm" />}
                  label={
                    <Typography
                      sx={{
                        fontWeight: 400,
                        fontSize: "18px",
                        lineHeight: "23px",
                        color: "#383838",
                      }}
                    >
                      비흡연
                    </Typography>
                  }
                />
                <FormControlLabel
                  value="3"
                  control={<Radio size="sm" />}
                  label={
                    <Typography
                      sx={{
                        fontWeight: 400,
                        fontSize: "18px",
                        lineHeight: "23px",
                        color: "#383838",
                      }}
                    >
                      상관없음
                    </Typography>
                  }
                />
              </RadioGroup>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            paddingLeft: "15%",
            paddingRight: "15%",
            marginTop: "28px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "120px",
              padding: "40px 78px",
              border: "1px solid #DBDBDB",
              borderRadius: "20px",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", float: "left" }}>
              <Box
                sx={{
                  backgroundColor: "#1CDDAD",
                  minWidth: "72px",
                  width: "72px",
                  height: "36px",
                  borderRadius: "100px",
                  display: "table",
                  textAlign: "center",
                }}
              >
                <Box
                  component="span"
                  sx={{
                    paddingTop: "7px",
                    display: "table-cell",
                    width: "72px",
                    height: "36px",
                    fontWeight: 700,
                    fontSize: "16px",
                    lineHeight: "20px",
                    color: "#FFFFFF",
                    letterSpacing: "-0.3px",
                  }}
                >
                  문항 4
                </Box>
              </Box>
              <Box
                component="span"
                sx={{
                  fontWeight: 500,
                  fontSize: "20px",
                  lineHeight: "25px",
                  color: "black",
                  marginLeft: "20px",
                }}
              >
                당신의 학과를 선택해주세요.
              </Box>
            </Box>
            <Box sx={{ float: "right" }}>
              <FormControl sx={{ width: "160px" }}>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={department}
                  onChange={handleDepartmentChange}
                >
                  {major.map((item, index) => (
                    <MenuItem value={item.value}>{item.text}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            paddingLeft: "15%",
            paddingRight: "15%",
            marginTop: "28px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "120px",
              padding: "40px 78px",
              border: "1px solid #DBDBDB",
              borderRadius: "20px",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", float: "left" }}>
              <Box
                sx={{
                  backgroundColor: "#1CDDAD",
                  minWidth: "72px",
                  width: "72px",
                  height: "36px",
                  borderRadius: "100px",
                  display: "table",
                  textAlign: "center",
                }}
              >
                <Box
                  component="span"
                  sx={{
                    paddingTop: "7px",
                    display: "table-cell",
                    width: "72px",
                    height: "36px",
                    fontWeight: 700,
                    fontSize: "16px",
                    lineHeight: "20px",
                    color: "#FFFFFF",
                    letterSpacing: "-0.3px",
                  }}
                >
                  문항 5
                </Box>
              </Box>
              <Box
                component="span"
                sx={{
                  fontWeight: 500,
                  fontSize: "20px",
                  lineHeight: "25px",
                  color: "black",
                  marginLeft: "20px",
                }}
              >
                당신의 생활패턴을 선택해주세요.
              </Box>
            </Box>
            <Box sx={{ float: "right" }}>
              <RadioGroup row name="radio5" onChange={handleLifeCycleChange}>
                <FormControlLabel
                  value="0"
                  control={<Radio size="sm" />}
                  label={
                    <Typography
                      sx={{
                        fontWeight: 400,
                        fontSize: "18px",
                        lineHeight: "23px",
                        color: "#383838",
                      }}
                    >
                      아침형
                    </Typography>
                  }
                />
                <FormControlLabel
                  value="1"
                  control={<Radio size="sm" />}
                  label={
                    <Typography
                      sx={{
                        fontWeight: 400,
                        fontSize: "18px",
                        lineHeight: "23px",
                        color: "#383838",
                      }}
                    >
                      저녁형
                    </Typography>
                  }
                />
              </RadioGroup>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            paddingLeft: "15%",
            paddingRight: "15%",
            marginTop: "28px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              padding: "40px 78px",
              border: "1px solid #DBDBDB",
              borderRadius: "20px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#1CDDAD",
                  minWidth: "72px",
                  width: "72px",
                  height: "36px",
                  borderRadius: "100px",
                  display: "table",
                  textAlign: "center",
                }}
              >
                <Box
                  component="span"
                  sx={{
                    paddingTop: "7px",
                    display: "table-cell",
                    width: "72px",
                    height: "36px",
                    fontWeight: 700,
                    fontSize: "16px",
                    lineHeight: "20px",
                    color: "#FFFFFF",
                    letterSpacing: "-0.3px",
                  }}
                >
                  문항 6
                </Box>
              </Box>
              <Box
                component="span"
                sx={{
                  fontWeight: 500,
                  fontSize: "20px",
                  lineHeight: "25px",
                  color: "black",
                  marginLeft: "20px",
                }}
              >
                당신의 수면 패턴을 선택해주세요.
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginTop: "36px",
              }}
            >
              <Box sx={{ width: "100%", height: "100%", display: flexbox }}>
                <Box sx={{ float: "right" }}>
                  <RadioGroup
                    row
                    name="radio5"
                    onChange={handleSleepingPatternChange}
                  >
                    <FormControlLabel
                      value="1"
                      control={<Radio size="sm" />}
                      label={
                        <Typography
                          sx={{
                            fontWeight: 400,
                            fontSize: "18px",
                            lineHeight: "23px",
                            color: "#383838",
                          }}
                        >
                          코골이
                        </Typography>
                      }
                    />
                    <FormControlLabel
                      value="2"
                      control={<Radio size="sm" />}
                      label={
                        <Typography
                          sx={{
                            fontWeight: 400,
                            fontSize: "18px",
                            lineHeight: "23px",
                            color: "#383838",
                          }}
                        >
                          이갈이
                        </Typography>
                      }
                    />
                    <FormControlLabel
                      value="3"
                      control={<Radio size="sm" />}
                      label={
                        <Typography
                          sx={{
                            fontWeight: 400,
                            fontSize: "18px",
                            lineHeight: "23px",
                            color: "#383838",
                          }}
                        >
                          몸부림
                        </Typography>
                      }
                    />
                    <FormControlLabel
                      value="0"
                      control={<Radio size="sm" />}
                      label={
                        <Typography
                          sx={{
                            fontWeight: 400,
                            fontSize: "18px",
                            lineHeight: "23px",
                            color: "#383838",
                          }}
                        >
                          없음
                        </Typography>
                      }
                    />
                  </RadioGroup>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            paddingLeft: "15%",
            paddingRight: "15%",
            marginTop: "28px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "120px",
              padding: "40px 78px",
              border: "1px solid #DBDBDB",
              borderRadius: "20px",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", float: "left" }}>
              <Box
                sx={{
                  backgroundColor: "#1CDDAD",
                  minWidth: "72px",
                  width: "72px",
                  height: "36px",
                  borderRadius: "100px",
                  display: "table",
                  textAlign: "center",
                }}
              >
                <Box
                  component="span"
                  sx={{
                    paddingTop: "7px",
                    display: "table-cell",
                    width: "72px",
                    height: "36px",
                    fontWeight: 700,
                    fontSize: "16px",
                    lineHeight: "20px",
                    color: "#FFFFFF",
                    letterSpacing: "-0.3px",
                  }}
                >
                  문항 7
                </Box>
              </Box>
              <Box
                component="span"
                sx={{
                  fontWeight: 500,
                  fontSize: "20px",
                  lineHeight: "25px",
                  color: "black",
                  marginLeft: "20px",
                }}
              >
                당신의 방 청소 빈도를 선택해주세요.
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginTop: "36px",
              }}
            >
              <Box sx={{ width: "100%", height: "100%", display: flexbox }}>
                <Box sx={{ float: "right" }}>
                  <RadioGroup row name="radio5" onChange={handleCleaningChange}>
                    <FormControlLabel
                      value="1"
                      control={<Radio size="sm" />}
                      label={
                        <Typography
                          sx={{
                            fontWeight: 400,
                            fontSize: "18px",
                            lineHeight: "23px",
                            color: "#383838",
                          }}
                        >
                          주 5회 이상
                        </Typography>
                      }
                    />
                    <FormControlLabel
                      value="2"
                      control={<Radio size="sm" />}
                      label={
                        <Typography
                          sx={{
                            fontWeight: 400,
                            fontSize: "18px",
                            lineHeight: "23px",
                            color: "#383838",
                          }}
                        >
                          주 2~3회
                        </Typography>
                      }
                    />
                    <FormControlLabel
                      value="3"
                      control={<Radio size="sm" />}
                      label={
                        <Typography
                          sx={{
                            fontWeight: 400,
                            fontSize: "18px",
                            lineHeight: "23px",
                            color: "#383838",
                          }}
                        >
                          주 1회
                        </Typography>
                      }
                    />
                    <FormControlLabel
                      value="4"
                      control={<Radio size="sm" />}
                      label={
                        <Typography
                          sx={{
                            fontWeight: 400,
                            fontSize: "18px",
                            lineHeight: "23px",
                            color: "#383838",
                          }}
                        >
                          월 1회
                        </Typography>
                      }
                    />
                    <FormControlLabel
                      value="0"
                      control={<Radio size="sm" />}
                      label={
                        <Typography
                          sx={{
                            fontWeight: 400,
                            fontSize: "18px",
                            lineHeight: "23px",
                            color: "#383838",
                          }}
                        >
                          상관없음
                        </Typography>
                      }
                    />
                  </RadioGroup>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            paddingLeft: "15%",
            paddingRight: "15%",
            marginTop: "28px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "120px",
              padding: "40px 78px",
              border: "1px solid #DBDBDB",
              borderRadius: "20px",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", float: "left" }}>
              <Box
                sx={{
                  backgroundColor: "#1CDDAD",
                  minWidth: "72px",
                  width: "72px",
                  height: "36px",
                  borderRadius: "100px",
                  display: "table",
                  textAlign: "center",
                }}
              >
                <Box
                  component="span"
                  sx={{
                    paddingTop: "7px",
                    display: "table-cell",
                    width: "72px",
                    height: "36px",
                    fontWeight: 700,
                    fontSize: "16px",
                    lineHeight: "20px",
                    color: "#FFFFFF",
                    letterSpacing: "-0.3px",
                  }}
                >
                  문항 8
                </Box>
              </Box>
              <Box
                component="span"
                sx={{
                  fontWeight: 500,
                  fontSize: "20px",
                  lineHeight: "25px",
                  color: "black",
                  marginLeft: "20px",
                }}
              >
                당신의 국적을 선택해주세요.
              </Box>
              <Box
                component="span"
                sx={{
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "20px",
                  color: "#9B9EA1",
                  letterSpacing: "-0.3px",
                  marginLeft: "20px",
                }}
              >
                여성일 경우 미필 선택
              </Box>
            </Box>
            <Box sx={{ float: "right" }}>
              <RadioGroup row name="radio5" onChange={handleNationalityChange}>
                <FormControlLabel
                  value="0"
                  control={<Radio size="sm" />}
                  label={
                    <Typography
                      sx={{
                        fontWeight: 400,
                        fontSize: "18px",
                        lineHeight: "23px",
                        color: "#383838",
                      }}
                    >
                      내국인
                    </Typography>
                  }
                />
                <FormControlLabel
                  value="1"
                  control={<Radio size="sm" />}
                  label={
                    <Typography
                      sx={{
                        fontWeight: 400,
                        fontSize: "18px",
                        lineHeight: "23px",
                        color: "#383838",
                      }}
                    >
                      외국인
                    </Typography>
                  }
                />
              </RadioGroup>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            paddingLeft: "15%",
            paddingRight: "15%",
            marginTop: "28px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "120px",
              padding: "40px 78px",
              border: "1px solid #DBDBDB",
              borderRadius: "20px",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", float: "left" }}>
              <Box
                sx={{
                  backgroundColor: "#1CDDAD",
                  minWidth: "72px",
                  width: "72px",
                  height: "36px",
                  borderRadius: "100px",
                  display: "table",
                  textAlign: "center",
                }}
              >
                <Box
                  component="span"
                  sx={{
                    paddingTop: "7px",
                    display: "table-cell",
                    width: "72px",
                    height: "36px",
                    fontWeight: 700,
                    fontSize: "16px",
                    lineHeight: "20px",
                    color: "#FFFFFF",
                    letterSpacing: "-0.3px",
                  }}
                >
                  문항 9
                </Box>
              </Box>
              <Box
                component="span"
                sx={{
                  fontWeight: 500,
                  fontSize: "20px",
                  lineHeight: "25px",
                  color: "black",
                  marginLeft: "20px",
                }}
              >
                당신의 군복무 여부를 선택해주세요.
              </Box>
              <Box
                component="span"
                sx={{
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "20px",
                  color: "#9B9EA1",
                  letterSpacing: "-0.3px",
                  marginLeft: "20px",
                }}
              >
                여성일 경우 미필 선택
              </Box>
            </Box>
            <Box sx={{ float: "right" }}>
              <RadioGroup row name="radio5" onChange={handleArmyServiceChange}>
                <FormControlLabel
                  value="0"
                  control={<Radio size="sm" />}
                  label={
                    <Typography
                      sx={{
                        fontWeight: 400,
                        fontSize: "18px",
                        lineHeight: "23px",
                        color: "#383838",
                      }}
                    >
                      군필
                    </Typography>
                  }
                />
                <FormControlLabel
                  value="1"
                  control={<Radio size="sm" />}
                  label={
                    <Typography
                      sx={{
                        fontWeight: 400,
                        fontSize: "18px",
                        lineHeight: "23px",
                        color: "#383838",
                      }}
                    >
                      미필
                    </Typography>
                  }
                />
                <FormControlLabel
                  value="2"
                  control={<Radio size="sm" />}
                  label={
                    <Typography
                      sx={{
                        fontWeight: 400,
                        fontSize: "18px",
                        lineHeight: "23px",
                        color: "#383838",
                      }}
                    >
                      상관없음
                    </Typography>
                  }
                />
              </RadioGroup>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            paddingLeft: "15%",
            paddingRight: "15%",
            marginTop: "28px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "180px",
              padding: "40px 78px",
              border: "1px solid #DBDBDB",
              borderRadius: "20px",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", float: "left" }}>
              <Box
                sx={{
                  backgroundColor: "#1CDDAD",
                  minWidth: "72px",
                  width: "72px",
                  height: "36px",
                  borderRadius: "100px",
                  display: "table",
                  textAlign: "center",
                }}
              >
                <Box
                  component="span"
                  sx={{
                    paddingTop: "7px",
                    display: "table-cell",
                    width: "72px",
                    height: "36px",
                    fontWeight: 700,
                    fontSize: "16px",
                    lineHeight: "20px",
                    color: "#FFFFFF",
                    letterSpacing: "-0.3px",
                  }}
                >
                  문항 10
                </Box>
              </Box>
              <Box
                component="span"
                sx={{
                  fontWeight: 500,
                  fontSize: "20px",
                  lineHeight: "25px",
                  color: "black",
                  marginLeft: "20px",
                }}
              >
                간단한 한 줄 자기소개를 적어주세요.
              </Box>
              <Box
                component="span"
                sx={{
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "20px",
                  color: "#9B9EA1",
                  letterSpacing: "-0.3px",
                  marginLeft: "20px",
                }}
              ></Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginTop: "36px",
              }}
            >
              <Box sx={{ width: "100%", height: "100%", display: flexbox }}>
                <Box sx={{ marginTop: "10px" }}>
                  <TextareaAutosize
                    aria-label="minimum height"
                    minRows={3}
                    placeholder="자기소개"
                    style={{ width: "100%" }}
                    onChange={(e) => setIntroduction(e.target.value)}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            paddingLeft: "15%",
            paddingBottom: "120px",
            paddingRight: "15%",
            marginTop: "54px",
          }}
        >
          <Box sx={{ display: flexbox }}>
            <Box sx={{ float: "right", textAlign: "right" }}>
              <Button
                type="submit"
                sx={{
                  background: "#4B99EB",
                  borderRadius: "200px",
                  width: "113px",
                  height: "48px",
                  color: "#FFFFFF",
                  fontFamily: "Spoqa Han Sans Neo",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "20px",
                  letterSpacing: "-0.3px",
                }}
              >
                완 료
              </Button>
            </Box>
          </Box>
        </Box>

        <Footer />
      </Box>
    </form>
  );
};
