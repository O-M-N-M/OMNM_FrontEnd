// import { Button } from "@mui/material";
// import axios from "axios";
// import { getCookie } from "cookies-next";
// import Image from "next/image";
// import React, { useState } from "react";

// export default function MyPageProfile() {
//   const [name, setName] = useState("");
//   const [kakaoId, setKakaoId] = useState("");
//   const [dormitory, setDormitory] = useState(0);
//   const [profileUrl, setProfileUrl] = useState("");

//   const dormitoryArr = ["308관 2인실", "308관 4인실", "309관 2인실"];
//   axios
//     .get("/api/myInfo", {
//       headers: {
//         OMNM: `${getCookie("OMNM")}`,
//       },
//     })
//     .then((res) => {
//       setName(res.data.name);
//       setKakaoId(res.data.kakaoId);
//       setDormitory(res.data.dormitory);
//       setProfileUrl(res.data.profileUrl);
//     })
//     .catch((err) => console.log(err));

//   return (
//     <div
//       style={{
//         width: "282px",
//         height: "418px",
//         padding: "40px 28px",
//         border: "1px solid #DBDBDB",
//         borderRadius: "20px",
//       }}
//     >
//       <div style={{ padding: "0px 63px 0px 63px" }}>
//         {profileUrl === null || profileUrl === "" ? (
//           <Image src="/basicProfile.png" width={100} height={100} />
//         ) : (
//           <Image
//             loader={() => profileUrl}
//             src={profileUrl}
//             width={100}
//             height={100}
//           />
//         )}
//       </div>

//       <div
//         style={{
//           textAlign: "center",
//           marginTop: "20px",
//           fontFamily: "Spoqa Han Sans Neo",
//           fontStyle: "normal",
//           fontWeight: "500",
//           fontSize: "24px",
//         }}
//       >
//         <span>{name}</span>
//       </div>

//       <div
//         style={{
//           width: "226px",
//           height: "104px",
//           marginTop: "24px",
//           padding: "24px 27px 24px 27px",
//           border: "1px solid #DBDBDB",
//           borderRadius: "10px",
//           textAlign: "center",
//         }}
//       >
//         <div style={{ height: "18px" }}>
//           <span style={{ float: "left", fontSize: "14px", fontWeight: "400" }}>
//             카카오톡ID
//           </span>
//           <span
//             style={{
//               float: "right",
//               fontSize: "14px",
//               fontWeight: "400",
//             }}
//           >
//             {kakaoId}
//           </span>
//         </div>
//         <div style={{ height: "18px", marginTop: "20px" }}>
//           <span style={{ float: "left", fontSize: "14px", fontWeight: "400" }}>
//             생활관 정보
//           </span>
//           <span
//             style={{
//               float: "right",
//               fontSize: "14px",
//               fontWeight: "400",
//             }}
//           >
//             {dormitoryArr[dormitory]}
//           </span>
//         </div>
//       </div>
//       <div style={{ marginTop: "20px" }}>
//         <Button
//           type="submit"
//           sx={{
//             background: "#4B99EB",
//             borderRadius: "200px",
//             width: "226px",
//             height: "40px",
//             color: "#FFFFFF",
//             fontFamily: "Spoqa Han Sans Neo",
//             fontStyle: "normal",
//             fontWeight: "500",
//             fontSize: "14px",
//             lineHeight: "18px",
//             letterSpacing: "-0.3px",
//           }}
//         >
//           개인정보 수정
//         </Button>
//       </div>
//     </div>
//   );
// }
