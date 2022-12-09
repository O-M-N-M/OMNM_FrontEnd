// import { Box } from "@mui/material";
// import { NextPage } from "next";
// import Image from "next/image";
// import React from "react";

// import MyPageLeft from "./components/mypage_left";
// import MyPageQuestions from "./components/mypage_question";

// import Footer from "@/components/footer";

// export const MyPageMySurveyScreen: NextPage = () => {
//   return (
//     <Box
//       component="div"
//       sx={{
//         backgroundColor: "#FFFFFF",
//         width: "100%",
//         height: "50px",
//         position: "absolute",
//         fontFamily: "Spoqa Han Sans Neo",
//         fontStyle: "normal",
//       }}
//     >
//       <Box
//         sx={{
//           width: "100%",
//           paddingLeft: "15%",
//           paddingRight: "15%",
//           marginTop: "120px",
//           marginBottom: "120px",
//         }}
//       >
//         <MyPageLeft></MyPageLeft>

//         {/* main content */}
//         <div
//           style={{
//             minWidth: "894px",
//             marginLeft: "305px",
//             border: "1px solid #DBDBDB",
//             borderRadius: "20px",
//             padding: "64px 60px",
//           }}
//         >
//           {/* 박스 */}
//           <div style={{ marginBottom: "36px" }}>
//             <span
//               style={{
//                 fontSize: "20px",
//                 fontWeight: "500",
//                 lineHeight: "25px",
//               }}
//             >
//               나의 성향 설문조사
//             </span>

//             <div style={{ float: "right" }}>
//               <Image src="/edit.png" width={20} height={20} />
//             </div>
//           </div>

//           <MyPageQuestions />
//         </div>
//       </Box>
//       <Footer />
//     </Box>
//   );
// };
