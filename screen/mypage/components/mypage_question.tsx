import React from "react";

export default function MyPageQuestions() {
  const list = [
    { title: "질문1", value: "10" },
    { title: "질문2", value: "20" },
    { title: "질문3", value: "30" },
    { title: "질문4", value: "40" },
    { title: "질문5", value: "50" },
    { title: "질문6", value: "60" },
    { title: "질문7", value: "70" },
    { title: "질문8", value: "80" },
    { title: "질문9", value: "90" },
    { title: "질문10", value: "100" },
  ];

  return (
    <>
      {list.map((item, i) => (
        <div>
          <div
            style={{
              marginTop: "20px",
              width: "100%",
              height: "66px",
              border: "1px solid #DBDBDB",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              padding: "20px 40px 20px 40px",
            }}
          >
            <div
              style={{
                backgroundColor: "#1CDDAD",
                minWidth: "52px",
                width: "52px",
                height: "23px",
                lineHeight: "20px",
                borderRadius: "100px",
                textAlign: "center",
              }}
            >
              <span
                style={{
                  verticalAlign: "middle",
                  fontWeight: 500,
                  fontSize: "12px",
                  color: "#FFFFFF",
                  letterSpacing: "-0.3px",
                }}
              >
                문항{i + 1}
              </span>
            </div>
            <span style={{ float: "left", marginLeft: "12px", width: "100%" }}>
              {item.title}
            </span>
            <div
              style={{
                float: "right",
                height: "26px",
                borderBottom: "1px solid #1CDDAD",
              }}
            >
              <span>{item.value}</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}