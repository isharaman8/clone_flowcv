import React from "react";
import { Button } from "@mui/material";

const CommonButton = ({ value, cb }) => {
  return (
    <Button
      variant="contained"
      sx={{
        bgcolor: "#111",
        "&:hover": {
          bgcolor: "#000000",
        },
        padding: ".4rem 4rem",
        borderRadius: "4rem",
        fontWeight: "600",
        textTransform: "capitalize",
      }}
      onClick={cb}
    >
      {value}
    </Button>
  );
};

export default CommonButton;
