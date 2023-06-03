import { Box, Typography } from "@mui/material";
import React from "react";

const ListTemplates = () => {
  return (
    <Box
      py={5}
      px={5}
      sx={{
        borderLeft: "1px solid #cbcbcb",
        height: "100vh",
      }}
    >
      <Typography variant="h4" component="h4" fontWeight={600}>
        Templates
      </Typography>
      <br />
    </Box>
  );
};

export default ListTemplates;
