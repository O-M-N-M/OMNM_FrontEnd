import { Box } from "@mui/material";
import { flexbox } from "@mui/system";
import { NextPage } from "next";
import Image from "next/image";
import React from "react";

import edit from "../../public/edit.png";

import MyPageLeft from "./components/mypage_left";

import Footer from "@/components/footer";

export const MyPageMateSurveyScreen: NextPage = () => {
  return (
    <Box
      component="div"
      sx={{
        backgroundColor: "#FFFFFF",
        width: "100%",
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
          <div style={{ height: "875px" }}>
            <div style={{ height: "25px" }}>
              <span
                style={{
                  fontSize: "20px",
                  fontWeight: "500",
                  lineHeight: "25px",
                }}
              >
                룸메 성향 설문조사
              </span>
              <div style={{ float: "right" }}>
                <Image src={edit} width={20} height={20} />
              </div>
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
                        width: "50px",
                        height: "45px",
                        borderTop: "none",
                        borderRight: "none",
                        borderLeft: "none",
                        borderBottom: "2px solid #1CDDAD",
                        marginRight: "20px",
                      }}
                    ></input>
                  </Box>
                </Box>
              </Box>
            </div>

            <div style={{ marginTop: "36px" }}>
              <div
                style={{
                  marginTop: "20px",
                  width: "774px",
                  height: "66px",
                  border: "1px solid #DBDBDB",
                  borderRadius: "10px",
                  alignItems: "center",
                  justifyContent: "center",
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
                      marginLeft: "40px",
                      marginTop: "15px",
                      backgroundColor: "#1CDDAD",
                      minWidth: "72px",
                      width: "52px",
                      height: "36px",
                      borderRadius: "100px",
                      display: "table",
                      textAlign: "center",
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        paddingTop: "10px",
                        display: "table-cell",
                        width: "32px",
                        height: "15px",
                        fontWeight: 500,
                        fontSize: "12px",
                        lineHeight: "15px",
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
                      marginTop: "15px",
                      fontWeight: 500,
                      fontSize: "16px",
                      lineHeight: "20px",
                      color: "black",
                      marginLeft: "20px",
                      letterSpacing: "-0.3px",
                    }}
                  >
                    선호하는 룸메의 나이
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
                          width: "50px",
                          height: "45px",
                          borderTop: "none",
                          borderRight: "none",
                          borderLeft: "none",
                          borderBottom: "2px solid #1CDDAD",
                          marginRight: "20px",
                        }}
                      ></input>
                    </Box>
                  </Box>
                </Box>
              </div>

              <div
                style={{
                  marginTop: "20px",
                  width: "774px",
                  height: "66px",
                  border: "1px solid #DBDBDB",
                  borderRadius: "10px",
                  alignItems: "center",
                  justifyContent: "center",
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
                      marginLeft: "40px",
                      marginTop: "15px",
                      backgroundColor: "#1CDDAD",
                      minWidth: "72px",
                      width: "52px",
                      height: "36px",
                      borderRadius: "100px",
                      display: "table",
                      textAlign: "center",
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        paddingTop: "10px",
                        display: "table-cell",
                        width: "32px",
                        height: "15px",
                        fontWeight: 500,
                        fontSize: "12px",
                        lineHeight: "15px",
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
                      marginTop: "15px",
                      fontWeight: 500,
                      fontSize: "16px",
                      lineHeight: "20px",
                      color: "black",
                      marginLeft: "20px",
                      letterSpacing: "-0.3px",
                    }}
                  >
                    선호하는 룸메의 MBTI
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
                          width: "50px",
                          height: "45px",
                          borderTop: "none",
                          borderRight: "none",
                          borderLeft: "none",
                          borderBottom: "2px solid #1CDDAD",
                          marginRight: "20px",
                        }}
                      ></input>
                    </Box>
                  </Box>
                </Box>
              </div>

              <div
                style={{
                  marginTop: "20px",
                  width: "774px",
                  height: "66px",
                  border: "1px solid #DBDBDB",
                  borderRadius: "10px",
                  alignItems: "center",
                  justifyContent: "center",
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
                      marginLeft: "40px",
                      marginTop: "15px",
                      backgroundColor: "#1CDDAD",
                      minWidth: "72px",
                      width: "52px",
                      height: "36px",
                      borderRadius: "100px",
                      display: "table",
                      textAlign: "center",
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        paddingTop: "10px",
                        display: "table-cell",
                        width: "32px",
                        height: "15px",
                        fontWeight: 500,
                        fontSize: "12px",
                        lineHeight: "15px",
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
                      marginTop: "15px",
                      fontWeight: 500,
                      fontSize: "16px",
                      lineHeight: "20px",
                      color: "black",
                      marginLeft: "20px",
                      letterSpacing: "-0.3px",
                    }}
                  >
                    선호하는 룸메의 흡연 여부
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
                          width: "50px",
                          height: "45px",
                          borderTop: "none",
                          borderRight: "none",
                          borderLeft: "none",
                          borderBottom: "2px solid #1CDDAD",
                          marginRight: "20px",
                        }}
                      ></input>
                    </Box>
                  </Box>
                </Box>
              </div>

              <div
                style={{
                  marginTop: "20px",
                  width: "774px",
                  height: "66px",
                  border: "1px solid #DBDBDB",
                  borderRadius: "10px",
                  alignItems: "center",
                  justifyContent: "center",
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
                      marginLeft: "40px",
                      marginTop: "15px",
                      backgroundColor: "#1CDDAD",
                      minWidth: "72px",
                      width: "52px",
                      height: "36px",
                      borderRadius: "100px",
                      display: "table",
                      textAlign: "center",
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        paddingTop: "10px",
                        display: "table-cell",
                        width: "32px",
                        height: "15px",
                        fontWeight: 500,
                        fontSize: "12px",
                        lineHeight: "15px",
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
                      marginTop: "15px",
                      fontWeight: 500,
                      fontSize: "16px",
                      lineHeight: "20px",
                      color: "black",
                      marginLeft: "20px",
                      letterSpacing: "-0.3px",
                    }}
                  >
                    선호하는 룸메의 학과
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
                          width: "50px",
                          height: "45px",
                          borderTop: "none",
                          borderRight: "none",
                          borderLeft: "none",
                          borderBottom: "2px solid #1CDDAD",
                          marginRight: "20px",
                        }}
                      ></input>
                    </Box>
                  </Box>
                </Box>
              </div>

              <div
                style={{
                  marginTop: "20px",
                  width: "774px",
                  height: "66px",
                  border: "1px solid #DBDBDB",
                  borderRadius: "10px",
                  alignItems: "center",
                  justifyContent: "center",
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
                      marginLeft: "40px",
                      marginTop: "15px",
                      backgroundColor: "#1CDDAD",
                      minWidth: "72px",
                      width: "52px",
                      height: "36px",
                      borderRadius: "100px",
                      display: "table",
                      textAlign: "center",
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        paddingTop: "10px",
                        display: "table-cell",
                        width: "32px",
                        height: "15px",
                        fontWeight: 500,
                        fontSize: "12px",
                        lineHeight: "15px",
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
                      marginTop: "15px",
                      fontWeight: 500,
                      fontSize: "16px",
                      lineHeight: "20px",
                      color: "black",
                      marginLeft: "20px",
                      letterSpacing: "-0.3px",
                    }}
                  >
                    선호하는 룸메의 생활 패턴
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
                          width: "50px",
                          height: "45px",
                          borderTop: "none",
                          borderRight: "none",
                          borderLeft: "none",
                          borderBottom: "2px solid #1CDDAD",
                          marginRight: "20px",
                        }}
                      ></input>
                    </Box>
                  </Box>
                </Box>
              </div>

              <div
                style={{
                  marginTop: "20px",
                  width: "774px",
                  height: "66px",
                  border: "1px solid #DBDBDB",
                  borderRadius: "10px",
                  alignItems: "center",
                  justifyContent: "center",
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
                      marginLeft: "40px",
                      marginTop: "15px",
                      backgroundColor: "#1CDDAD",
                      minWidth: "72px",
                      width: "52px",
                      height: "36px",
                      borderRadius: "100px",
                      display: "table",
                      textAlign: "center",
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        paddingTop: "10px",
                        display: "table-cell",
                        width: "32px",
                        height: "15px",
                        fontWeight: 500,
                        fontSize: "12px",
                        lineHeight: "15px",
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
                      marginTop: "15px",
                      fontWeight: 500,
                      fontSize: "16px",
                      lineHeight: "20px",
                      color: "black",
                      marginLeft: "20px",
                      letterSpacing: "-0.3px",
                    }}
                  >
                    선호하는 룸메의 방 청소 빈도
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
                          width: "50px",
                          height: "45px",
                          borderTop: "none",
                          borderRight: "none",
                          borderLeft: "none",
                          borderBottom: "2px solid #1CDDAD",
                          marginRight: "20px",
                        }}
                      ></input>
                    </Box>
                  </Box>
                </Box>
              </div>

              <div
                style={{
                  marginTop: "20px",
                  width: "774px",
                  height: "66px",
                  border: "1px solid #DBDBDB",
                  borderRadius: "10px",
                  alignItems: "center",
                  justifyContent: "center",
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
                      marginLeft: "40px",
                      marginTop: "15px",
                      backgroundColor: "#1CDDAD",
                      minWidth: "72px",
                      width: "52px",
                      height: "36px",
                      borderRadius: "100px",
                      display: "table",
                      textAlign: "center",
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        paddingTop: "10px",
                        display: "table-cell",
                        width: "32px",
                        height: "15px",
                        fontWeight: 500,
                        fontSize: "12px",
                        lineHeight: "15px",
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
                      marginTop: "15px",
                      fontWeight: 500,
                      fontSize: "16px",
                      lineHeight: "20px",
                      color: "black",
                      marginLeft: "20px",
                      letterSpacing: "-0.3px",
                    }}
                  >
                    선호하는 룸메의 국적
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
                          width: "50px",
                          height: "45px",
                          borderTop: "none",
                          borderRight: "none",
                          borderLeft: "none",
                          borderBottom: "2px solid #1CDDAD",
                          marginRight: "20px",
                        }}
                      ></input>
                    </Box>
                  </Box>
                </Box>
              </div>

              <div
                style={{
                  marginTop: "20px",
                  width: "774px",
                  height: "66px",
                  border: "1px solid #DBDBDB",
                  borderRadius: "10px",
                  alignItems: "center",
                  justifyContent: "center",
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
                      marginLeft: "40px",
                      marginTop: "15px",
                      backgroundColor: "#1CDDAD",
                      minWidth: "72px",
                      width: "52px",
                      height: "36px",
                      borderRadius: "100px",
                      display: "table",
                      textAlign: "center",
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        paddingTop: "10px",
                        display: "table-cell",
                        width: "32px",
                        height: "15px",
                        fontWeight: 500,
                        fontSize: "12px",
                        lineHeight: "15px",
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
                      marginTop: "15px",
                      fontWeight: 500,
                      fontSize: "16px",
                      lineHeight: "20px",
                      color: "black",
                      marginLeft: "20px",
                      letterSpacing: "-0.3px",
                    }}
                  >
                    선호하는 룸메의 군복무 여부
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
              </div>
            </div>
          </div>
        </div>
      </Box>
      <Footer />
    </Box>
  );
};
