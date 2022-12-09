// import axios from "axios";
// import Link from "next/link";
// import React from "react";

// import MyPageProfile from "./mypage_profile";

// export default function MyPageLeft() {
//   function onClickLogout() {
//     axios.post("/api/users/logout").then((response) => {
//       console.log(response);
//       // if (response.data.success) {
//       // } else {
//       //   alert("로그아웃에 실패");
//       // }
//     });
//   }

//   return (
//     <div style={{ width: "300px", height: "100%", float: "left" }}>
//       {/* left profile */}
//       <MyPageProfile></MyPageProfile>

//       {/* left menu  */}
//       <div
//         style={{
//           marginTop: "24px",
//           alignItems: "center",
//           width: "282px",
//           padding: "42px 90px 42px 55px",
//           border: "1px solid #DBDBDB",
//           borderRadius: "20px",
//         }}
//       >
//         <div style={{ height: "" }}>
//           <div>
//             <span
//               style={{
//                 fontFamily: "Spoqa Han Sans Neo",
//                 fontStyle: "normal",
//                 fontWeight: "500",
//                 fontSize: "16px",
//                 lineHeight: "20px",
//                 letterSpacing: "-0.3px",
//               }}
//             >
//               룸메 신청 리스트
//             </span>
//           </div>

//           <Link href="/mypage_receive">
//             <div
//               style={{
//                 marginTop: "20px",
//                 fontFamily: "Spoqa Han Sans Neo",
//                 fontStyle: "normal",
//                 fontWeight: "400",
//                 fontSize: "16px",
//                 lineHeight: "20px",
//                 gap: "12px",
//               }}
//             >
//               <span></span>신청 받은 리스트
//             </div>
//           </Link>
//           <Link href="/mypage_send">
//             <div
//               style={{
//                 marginTop: "20px",
//                 fontFamily: "Spoqa Han Sans Neo",
//                 fontStyle: "normal",
//                 fontWeight: "400",
//                 fontSize: "16px",
//                 lineHeight: "20px",
//                 gap: "12px",
//               }}
//             >
//               <span>신청 보낸 리스트</span>
//             </div>
//           </Link>
//           <Link href="/mypage_like">
//             <div
//               style={{
//                 marginTop: "20px",
//                 fontFamily: "Spoqa Han Sans Neo",
//                 fontStyle: "normal",
//                 fontWeight: "400",
//                 fontSize: "16px",
//                 lineHeight: "20px",
//                 gap: "12px",
//               }}
//             >
//               <span>찜한 룸메 리스트</span>
//             </div>
//           </Link>
//         </div>

//         <div style={{ height: "120px", marginTop: "36px" }}>
//           <span
//             style={{
//               fontFamily: "Spoqa Han Sans Neo",
//               fontStyle: "normal",
//               fontWeight: "500",
//               fontSize: "16px",
//               lineHeight: "20px",
//               letterSpacing: "-0.3px",
//             }}
//           >
//             성향 설문조사
//           </span>
//           <Link href="/mypage_mysurvey">
//             <div
//               style={{
//                 marginTop: "20px",
//                 fontFamily: "Spoqa Han Sans Neo",
//                 fontStyle: "normal",
//                 fontWeight: "400",
//                 fontSize: "16px",
//                 lineHeight: "20px",
//                 gap: "12px",
//               }}
//             >
//               <span>나의 성향 설문조사</span>
//             </div>
//           </Link>
//           <Link href="/mypage_matesurvey">
//             <div
//               style={{
//                 marginTop: "20px",
//                 fontFamily: "Spoqa Han Sans Neo",
//                 fontStyle: "normal",
//                 fontWeight: "400",
//                 fontSize: "16px",
//                 lineHeight: "20px",
//                 gap: "12px",
//               }}
//             >
//               <span>룸메 성향 설문조사</span>
//             </div>
//           </Link>
//         </div>

//         <div style={{ height: "120px", marginTop: "36px" }}>
//           <span
//             style={{
//               fontFamily: "Spoqa Han Sans Neo",
//               fontStyle: "normal",
//               fontWeight: "500",
//               fontSize: "16px",
//               lineHeight: "20px",
//               letterSpacing: "-0.3px",
//             }}
//           >
//             설정
//           </span>
//           <Link href="/mypage_changepw">
//             <div
//               style={{
//                 marginTop: "20px",
//                 fontFamily: "Spoqa Han Sans Neo",
//                 fontStyle: "normal",
//                 fontWeight: "400",
//                 fontSize: "16px",
//                 lineHeight: "20px",
//               }}
//             >
//               <span>비밀번호 변경</span>
//             </div>
//           </Link>
//           <Link href="/mypage_unregister">
//             <div
//               style={{
//                 marginTop: "20px",
//                 fontFamily: "Spoqa Han Sans Neo",
//                 fontStyle: "normal",
//                 fontWeight: "400",
//                 fontSize: "16px",
//                 lineHeight: "20px",
//               }}
//             >
//               <span>회원 탈퇴</span>
//             </div>
//           </Link>
//           <div
//             onClick={onClickLogout}
//             style={{
//               marginTop: "20px",
//               fontFamily: "Spoqa Han Sans Neo",
//               fontStyle: "normal",
//               fontWeight: "400",
//               fontSize: "16px",
//               lineHeight: "20px",
//             }}
//           >
//             <span>로그아웃</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }//
