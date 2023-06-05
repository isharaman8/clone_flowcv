import { Box } from "@mui/material";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import {
  HeaderFive,
  HeaderFour,
  HeaderOne,
  HeaderThree,
  HeaderTwo,
} from "./HeadersSVG";

export const LayoutButton = ({ title, style }) => {
  return (
    <>
      <Box textAlign={"center"}>
        <div
          style={{
            border: "1px solid #cbcbcb",
            borderRadius: ".4rem",
            width: "5rem",
            height: "5rem",
            overflow: "hidden",
          }}
        >
          <div style={style}></div>
        </div>
        <p style={{ textTransform: "capitalize" }}>{title}</p>
      </Box>
    </>
  );
};

export const ColumnButton = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }} my={2}>
      <div
        style={{
          border: "1px solid #cbcbcb",
          borderRadius: ".4rem",
          width: "6rem",
          padding: ".8rem .4rem",
          display: "grid",
          placeContent: "center",
        }}
      >
        <svg
          width="63"
          height="21"
          viewBox="0 0 63 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="28" height="4" rx="2" fill="#C7C7C7" />
          <rect x="35" width="28" height="4" rx="2" fill="#C7C7C7" />
          <rect y="8" width="28" height="4" rx="2" fill="#C7C7C7" />
          <rect x="35" y="8" width="28" height="4" rx="2" fill="#C7C7C7" />
          <rect y="17" width="28" height="4" rx="2" fill="#C7C7C7" />
          <rect x="35" y="17" width="28" height="4" rx="2" fill="#C7C7C7" />
        </svg>
      </div>
      <div
        style={{
          border: "1px solid #cbcbcb",
          borderRadius: ".4rem",
          width: "6rem",
          padding: ".8rem .4rem",
          display: "grid",
          placeContent: "center",
        }}
      >
        <svg
          width="63"
          height="21"
          viewBox="0 0 63 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="28" height="4" rx="2" fill="#C7C7C7" />
          <rect x="31" width="32" height="4" rx="2" fill="#C7C7C7" />
          <rect y="8" width="63" height="4" rx="2" fill="#C7C7C7" />
          <rect y="17" width="43" height="4" rx="2" fill="#C7C7C7" />
        </svg>
      </div>
    </Box>
  );
};

export const FontElement = ({ title }) => {
  return (
    <>
      <Box
        sx={{
          border: "1px solid #cbcbcb",
          borderRadius: ".4rem",
          width: "4rem",
          height: "4rem",
        }}
      >
        <div
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ fontSize: "1.2rem", fontWeight: 600 }}>Aa</span>
          <span style={{ fontSize: ".9rem" }}>{title}</span>
        </div>
      </Box>
    </>
  );
};

export const ColumnWidth = ({ title }) => {
  return (
    <>
      <Box sx={{ lineHeight: ".8" }}>
        <p>{title} 50%</p>
        <div
          style={{
            width: "8rem",
            display: "grid",
            placeContent: "center",
            padding: ".6rem",
            border: "1px solid #cbcbcb",
            borderRadius: ".4rem",
          }}
        >
          <AiOutlinePlus
            style={{
              color: "#cbcbcb",
              fontSize: "1.6rem",
            }}
          />
        </div>
      </Box>
    </>
  );
};

export const ColorsElement = ({ style, title }) => {
  return (
    <>
      <Box textAlign={"center"}>
        <Box
          sx={{
            borderRadius: "100%",
            width: "4rem",
            height: "4rem",
            overflow: "hidden",
            backgroundColor: style.border ? "#fff" : "#e8e8e8",
            outline: style.border ? style.border : "",
          }}
        >
          {!style.border && <div style={style}></div>}
        </Box>
        <p style={{ textTransform: "capitalize", fontSize: ".9rem" }}>
          {title}
        </p>
      </Box>
    </>
  );
};

export const HeadersElement = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          flexWrap: "wrap",
        }}
        my={2}
      >
        {[HeaderOne, HeaderTwo, HeaderThree, HeaderFour, HeaderFive].map(
          (c) => (
            <div
              style={{
                border: "1px solid #cbcbcb",
                borderRadius: ".4rem",
                width: "6rem",
                height: "1.4rem",
                padding: ".8rem .4rem",
                display: "grid",
                placeContent: "center",
              }}
            >
              {c()}
            </div>
          )
        )}
      </Box>
    </>
  );
};
