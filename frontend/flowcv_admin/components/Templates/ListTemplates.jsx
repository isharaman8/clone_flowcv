import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import EditTemplate from "./EditTemplates";
import { useDataProvider } from "react-admin";

const ListTemplates = () => {
  const [templates, setTemplates] = useState([]);
  const [open, setOpen] = useState(false);
  const [template, setTemplate] = useState(null);
  const dataProvider = useDataProvider();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => setOpen(false);
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
      <p onClick={handleOpen}>Open </p>
      {open && <EditTemplate open={open} handleClose={handleClose} />}
    </Box>
  );
};

export default ListTemplates;
