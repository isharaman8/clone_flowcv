import React, { useState } from "react";
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { FiUpload } from "react-icons/fi";
import CommonButton from "../Button";
import { CONTENT } from "../../utils/Constants";

const ContentPage = () => {
  const [selectedFile, setSelectedFile] = useState({
    logo: null,
    image: null,
  });

  const handleFileChange = (event) => {
    const { name, files } = event.target;
    const file = files[0];
    setSelectedFile((prevState) => ({
      ...prevState,
      [name]: file,
    }));
  };

  const handleUpload = () => {
    console.log("Uploading file:", selectedFile);
  };

  return (
    <Box
      py={5}
      px={5}
      sx={{
        borderLeft: "1px solid #cbcbcb",
        minHeight: "100vh",
      }}
    >
      <Typography variant="h4" component="h4" fontWeight={600}>
        Frontend Content Management
      </Typography>
      <br />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} lg={4} md={4}>
          <label style={{ fontWeight: "600", fontSize: "1rem" }}>Content</label>
          <Box sx={{ minWidth: 120 }}>
            <FormControl
              sx={{
                width: "20rem",
                outline: "none",
              }}
            >
              <InputLabel>Content</InputLabel>
              <Select
                label="Content"
                name="content"
                variant="outlined"
                sx={{
                  bgcolor: "#fff",
                  borderRadius: ".5rem",
                  padding: ".4rem",
                }}
              >
                {CONTENT.CONTENT.map((c) => (
                  <MenuItem key={c} value={c}>
                    {c}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} lg={6} md={6}>
          <label style={{ fontWeight: "600", fontSize: "1rem" }}>Logo</label>
          <label htmlFor="upload-logo">
            <Box
              border={"1px solid #b7b7b7"}
              sx={{
                "&:hover": {
                  border: "1px solid #111",
                },
              }}
              fullWidth
              borderRadius={".4rem"}
              py={1.5}
              mt={1}
              px={2}
              display={"flex"}
              gap={2}
              alignItems={"center"}
            >
              <input
                accept="image/*"
                id="upload-logo"
                name="logo"
                multiple={false}
                type="file"
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
              <FiUpload fontSize={"1.5rem"} />
              {!selectedFile.logo && <span>Upload Logo</span>}
              {selectedFile.logo && (
                <Typography variant="span">
                  {selectedFile.logo.name.slice(0, 35)}
                  {selectedFile.logo.name.length > 35 ? "..." : ""}
                </Typography>
              )}
            </Box>
          </label>
        </Grid>
        <Grid item xs={12} sm={12} lg={4} md={4}>
          <label style={{ fontWeight: "600", fontSize: "1rem" }}>Value</label>
          <br />
          <TextField variant="outlined" source="Value" multiline rows={8} />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          lg={6}
          md={6}
          sx={{ height: { xs: "22rem", sm: "20rem", lg: "100%", md: "100%" } }}
          container
        >
          <Grid item xs={12}>
            <label style={{ fontWeight: "600", fontSize: "1rem" }}>
              Site Images
            </label>
            <Box sx={{ minWidth: 120 }}>
              <FormControl
                sx={{
                  width: "20rem",
                  outline: "none",
                }}
              >
                <InputLabel>Site Images</InputLabel>
                <Select
                  label="image"
                  name="image"
                  variant="outlined"
                  sx={{
                    bgcolor: "#fff",
                    borderRadius: ".5rem",
                    padding: ".4rem",
                  }}
                >
                  {CONTENT.IMAGE.map((c) => (
                    <MenuItem key={c} value={c}>
                      {c}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <label htmlFor="upload-image">
              <Box
                border={"1px solid #b7b7b7"}
                sx={{
                  "&:hover": {
                    border: "1px solid #111",
                  },
                }}
                fullWidth
                borderRadius={".4rem"}
                py={1.5}
                mt={1}
                px={2}
                display={"flex"}
                gap={2}
                alignItems={"center"}
              >
                <input
                  accept="image/*"
                  id="upload-image"
                  multiple={false}
                  type="file"
                  name="image"
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                />
                <FiUpload fontSize={"1.5rem"} />
                {!selectedFile.image && <span>Upload Image</span>}
                {selectedFile.image && (
                  <Typography variant="span">
                    {selectedFile.image.name.slice(0, 35)}
                    {selectedFile.image.name.length > 35 ? "..." : ""}
                  </Typography>
                )}
              </Box>
            </label>
          </Grid>
          <Grid item xs={12}>
            <Box display={"flex"} justifyContent={"flex-end"} gap={3} mt={2}>
              <CommonButton value={"save"} />
              <CommonButton value={"cancel"} />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContentPage;
