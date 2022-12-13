import {
  Box,
  Typography,
  Button,
  Checkbox,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { flexbox } from "@mui/system";
import axios from "axios";
import { getCookie } from "cookies-next";
import { NextPage } from "next";
import Image from "next/image";
import React, { useState } from "react";

import Component10 from "../../public/Component10.png";

import Footer from "@/components/footer";

export const SurveyMateScreen: NextPage = () => {
  const [age, setAge] = useState([
    { value: "5", text: "상관없음", checked: false },
    { value: "1", text: "20대 초반", checked: false },
    { value: "2", text: "20대 중반", checked: false },
    { value: "3", text: "20대 후반", checked: false },
    { value: "4", text: "30대 후반", checked: false },
  ]);
  const [mbti, setMbti] = useState([
    { key: "ENFJ", checked: false },
    { key: "ENFP", checked: false },
    { key: "ENTJ", checked: false },
    { key: "ENTP", checked: false },
    { key: "ESFJ", checked: false },
    { key: "ESFP", checked: false },
    { key: "ESTJ", checked: false },
    { key: "ESTP", checked: false },
    { key: "INFJ", checked: false },
    { key: "INFP", checked: false },
    { key: "INTJ", checked: false },
    { key: "INTP", checked: false },
    { key: "ISFJ", checked: false },
    { key: "ISFP", checked: false },
    { key: "ISTJ", checked: false },
    { key: "ISTP", checked: false },
  ]);

  const [selectedAge, setSelectedAge] = useState<never>([]);
  const [selectedMbti, setSelectedMbti] = useState<String[]>([]);
  const [isSmoking, setIsSmoking] = useState("");
  const [department, setDepartment] = useState("");
  const [lifeCycle, setLifeCycle] = useState("");
  const [sleepingPattern, setSleepingPattern] = useState('');
  const [cleaning, setCleaning] = useState("");
  const [nationality, setNationality] = useState("");
  const [armyService, setArmyService] = useState("");

  const mbtiClickHanddler = ({ e, index }: any) => {
    const t = e.target.parentNode;
    const c = e.target;
    mbti[index].checked = !mbti[index].checked;

    if (mbti[index].checked) {
      t.style.borderColor = "#4B99EB";
      t.style.backgroundColor = "#4B99EB";
      c.style.color = "#FFFFFF";
      setSelectedMbti([...selectedMbti, mbti[index].key]);
    } else {
      t.style.borderColor = "#9B9EA1";
      t.style.backgroundColor = "#FFFFFF";
      c.style.color = "#9B9EA1";

      selectedMbti.splice(selectedMbti.indexOf(mbti[index].key), 1);
      setSelectedMbti([...selectedMbti]);
    }
  };

  const ageGroup = [
    { value: "5", text: "상관없음", checked: false },
    { value: "1", text: "20대 초반", checked: false },
    { value: "2", text: "20대 중반", checked: false },
    { value: "3", text: "20대 후반", checked: false },
    { value: "4", text: "30대 후반", checked: false },
  ];

 
  const checkHandler = ({ target }:any) => {
    age[target.value].checked = !age[target.value].checked;
    if (age[target.value].checked) {
      setSelectedAge([...selectedAge, target.value]);
    } else {
      selectedAge.splice(selectedAge.indexOf(target.value), 1);
      setSelectedAge([...selectedAge]);
    }
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

  const handleSleepingPatternChange = (event: { target: { value: any; }; }) => {
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

    const url = "/api/yourPersonality";
    const body = `age=${selectedAge.toString()}&mbti=${selectedMbti.toString()}&isSmoking=${isSmoking}&department=${department}&lifeCycle=${lifeCycle}&cleaning=${cleaning}&nationality=${nationality}&armyService=${armyService}`;

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

        if (res.data == "상대 성향 설문 등록 완료") {
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
                  선호하는 룸메
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
                  를 소개해주세요.
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
                선호하는 룸메의 나이를 선택해주세요.
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
                중복 선택 가능
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
                <Box sx={{ float: "right", textAlign: "right" }}>
                  <FormControlLabel
                    value="1"
                    control={
                      <Checkbox size="sm" onChange={(e) => checkHandler(e)} />
                    }
                    label={
                      <Typography
                        sx={{
                          fontWeight: 400,
                          fontSize: "18px",
                          lineHeight: "23px",
                          color: "#383838",
                        }}
                      >
                        20대 초반
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    value="2"
                    control={
                      <Checkbox size="sm" onChange={(e) => checkHandler(e)} />
                    }
                    label={
                      <Typography
                        sx={{
                          fontWeight: 400,
                          fontSize: "18px",
                          lineHeight: "23px",
                          color: "#383838",
                        }}
                      >
                        20대 중반
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    value="3"
                    control={
                      <Checkbox size="sm" onChange={(e) => checkHandler(e)} />
                    }
                    label={
                      <Typography
                        sx={{
                          fontWeight: 400,
                          fontSize: "18px",
                          lineHeight: "23px",
                          color: "#383838",
                        }}
                      >
                        20대 후반
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    value="4"
                    control={
                      <Checkbox size="sm" onChange={(e) => checkHandler(e)} />
                    }
                    label={
                      <Typography
                        sx={{
                          fontWeight: 400,
                          fontSize: "18px",
                          lineHeight: "23px",
                          color: "#383838",
                        }}
                      >
                        30대 후반
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    value="5"
                    control={
                      <Checkbox size="sm" onChange={(e) => checkHandler(e)} />
                    }
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
                  문항 2
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
                선호하는 룸메의 MBTI를 선택해주세요.
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
                중복 선택 가능
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginTop: "10px",
                paddingLeft: "65px",
                flexWrap: "wrap",
              }}
            >
              {mbti.map((item, index) => (
                <Box
                  sx={{
                    backgroundColor: "#FFFFFF",
                    minWidth: "90px",
                    height: "40px",
                    marginTop: "10px",
                    borderRadius: "100px",
                    display: "table",
                    textAlign: "center",
                    border: "2px solid #9B9EA1",
                    borderRadius: "100px",
                    marginLeft: "30px",
                    // backgroundColor: `${item.checked ? '#4B99EB' : '#FFFFFF'}`, minWidth: "90px", height: "40px", marginTop: "10px", borderRadius: "100px", display: "table", textAlign: "center", border: `2px solid ${item.checked ? '#4B99EB' : '#9B9EA1'}`, borderRadius: "100px", marginLeft: "30px"
                    "&:hover": {
                      cursor: "pointer",
                    },
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      paddingTop: "7px",
                      display: "table-cell",
                      width: "72px",
                      height: "36px",
                      fontWeight: 400,
                      fontSize: "18px",
                      lineHeight: "23px",
                      color: "#9B9EA1",
                    }}
                    onClick={(e: any) => {
                      mbtiClickHanddler({ e, index });
                    }}
                  >
                    {item.key}
                  </Box>
                </Box>
              ))}
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginTop: "16px",
              }}
            >
              <Box sx={{ width: "100%", display: flexbox }}>
                <Box sx={{ float: "right", textAlign: "right" }}>
                  <FormControlLabel
                    value="3"
                    control={<Checkbox size="sm" />}
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
                선호하는 흡연 여부를 선택해주세요.
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
                선호하는 룸메의 학과를 선택해주세요.
              </Box>
            </Box>
            <Box sx={{ float: "right" }}>
              <RadioGroup row name="radio4" onChange={handleDepartmentChange}>
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
                      같은 학과
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
                      다른 학과
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
                선호하는 룸메의 생활패턴을 선택해주세요.
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
                선호하는 룸메의 방 청소 빈도를 선택해주세요.
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
                      value="5"
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
                선호하는 국적을 선택해주세요.
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
                      대한민국
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
                선호하는 룸메의 군복무 여부를 선택해주세요.
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
      // end of content
    </form>
  );
};
function setSleepingPattern(value: any) {
  throw new Error("Function not implemented.");
}

