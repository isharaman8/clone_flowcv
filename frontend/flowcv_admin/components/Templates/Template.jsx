import { Box } from "@mui/material";
import React from "react";

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
