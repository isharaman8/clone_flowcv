import React from "react";
import { Box, Checkbox, FormControlLabel } from "@mui/material";
import { FiCheck } from "react-icons/fi";
import { SlBan } from "react-icons/sl";
import { COLORS } from "../../../utils/Constants";

const ColorPicker = ({ c, i }) => {
  return (
    <Box
      sx={{
        bgcolor: c,
        width: "2.5rem",
        height: "2.5rem",
        borderRadius: "100%",
        display: "grid",
        color: "#fff",
        placeContent: "center",
      }}
    >
      {i === 0 && (
        <SlBan
          style={{
            color: "#111",
            fontSize: "2.5rem",
            transform: "rotate(90deg)",
          }}
        />
      )}
      {/* <FiCheck style={{ fontSize: "1.4rem" }} /> */}
      {i === COLORS.length - 1 && (
        <>
          <label
            htmlFor="colorPicker"
            style={{
              width: "2.5rem",
              height: "2.5rem",
              borderRadius: "100%",
              background:
                "conic-gradient(from 90deg, violet, indigo, blue, green, yellow, orange, red, violet)",
            }}
          ></label>
          <input
            type="color"
            id="colorPicker"
            style={{
              display: "none",
            }}
          />
        </>
      )}
    </Box>
  );
};

const ColorsComponent = () => {
  return (
    <>
      <Box sx={{ display: "flex", gap: "1rem", textAlign: "center" }}>
        <div>
          <Box
            sx={{
              bgcolor: "#111",
              width: "5rem",
              height: "3rem",
              display: "grid",
              borderRadius: ".4rem",
              placeContent: "center",
              color: "#fff",
            }}
          >
            <FiCheck style={{ fontSize: "1.4rem" }} />
          </Box>
          <p style={{ fontSize: ".9rem" }}>Accent</p>
        </div>
        <div>
          <Box sx={{ display: "flex" }}>
            <div
              style={{
                width: "2.5rem",
                height: "3rem",
                backgroundColor: "#fff",
                border: "1px solid #cbcbcb",
                borderRight: "none",
                borderRadius: ".4rem",
                borderTopRightRadius: "0",
                borderBottomRightRadius: "0",
                display: "grid",
                placeContent: "center",
              }}
            >
              <p style={{ fontSize: "1.2rem", fontWeight: "800" }}>T</p>
            </div>
            <div
              style={{
                width: "2.5rem",
                height: "3rem",
                backgroundColor: "#ff5050",
                border: "1px solid #cbcbcb",
                borderLeft: "none",
                borderRadius: ".4rem",
                borderTopLeftRadius: "0",
                borderBottomLeftRadius: "0",
              }}
            ></div>
          </Box>
          <p style={{ fontSize: ".9rem" }}>Multicolor</p>
        </div>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          textAlign: "center",
        }}
        mt={2}
      >
        {COLORS.map((c, i) => (
          <ColorPicker c={c} i={i} key={c} />
        ))}
      </Box>
      <Box mt={2}>
        <label style={{ fontWeight: "600", fontSize: "1rem" }}>
          Apply Accent color
        </label>
        <Box mt={1}>
          {[
            "Name",
            "Dots/Bars/Bubbles",
            "Headings",
            "Dates",
            "Header icons",
            "Link icons",
          ].map((c) => (
            <FormControlLabel key={c} control={<Checkbox />} label={c} />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default ColorsComponent;
