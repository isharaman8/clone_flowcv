import {
  Box,
  FormControl,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import CommonButton from "../Button";
import TagInput from "./TagInput";

const GeneralSettings = () => {
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
        General Settings
      </Typography>
      <br />
      <Typography variant="h5" mb={1} component="h4" fontWeight={600}>
        SEO Settings
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6} sm={6} lg={4} md={4}>
          <label style={{ fontWeight: "600", fontSize: "1rem" }}>
            App Name
          </label>
          <TextField variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={6} sm={6} lg={4} md={4}>
          <label style={{ fontWeight: "600", fontSize: "1rem" }}>
            App Email
          </label>
          <TextField variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} sm={12} lg={4} md={4}>
          <label style={{ fontWeight: "600", fontSize: "1rem" }}>App Url</label>
          <TextField variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} sm={12} lg={6} md={6}>
          <label style={{ fontWeight: "600", fontSize: "1rem" }}>
            App Description
          </label>
          <TextField variant="outlined" fullWidth multiline rows={6} />
        </Grid>
        <Grid item xs={12} sm={12} lg={6} md={6}>
          <label style={{ fontWeight: "600", fontSize: "1rem" }}>
            App Keywords
          </label>
          <TagInput />
        </Grid>
      </Grid>
      <br />
      <Typography variant="h5" mb={1} component="h4" fontWeight={600}>
        SMTP Settings
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6} sm={6} lg={4} md={4}>
          <label style={{ fontWeight: "600", fontSize: "1rem" }}>
            SMTP Host
          </label>
          <TextField variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={6} sm={6} lg={4} md={4}>
          <label style={{ fontWeight: "600", fontSize: "1rem" }}>
            SMTP Port
          </label>
          <TextField variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} sm={12} lg={4} md={4}>
          <label style={{ fontWeight: "600", fontSize: "1rem" }}>
            Username
          </label>
          <TextField variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} sm={12} lg={4} md={4}>
          <label style={{ fontWeight: "600", fontSize: "1rem" }}>
            Password
          </label>
          <TextField variant="outlined" type="password" fullWidth />
        </Grid>
        <Grid item xs={12} sm={12} lg={4} md={4}>
          <label style={{ fontWeight: "600", fontSize: "1rem" }}>Email</label>
          <TextField variant="outlined" fullWidth type="email" />
        </Grid>
        <Grid item xs={12} sm={12} lg={4} md={4}>
          <label style={{ fontWeight: "600", fontSize: "1rem" }}>
            Encryption
          </label>
          <Box>
            <FormControl
              fullWidth
              sx={{
                outline: "none",
              }}
            >
              <Select
                label="enc"
                name="enc"
                variant="outlined"
                sx={{
                  bgcolor: "#fff",
                  borderRadius: ".5rem",
                }}
              >
                <MenuItem value={"ssl"}>SSL</MenuItem>
                <MenuItem value={"tls"}>TLS</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>
      </Grid>
      <Box display={"flex"} justifyContent={"flex-end"} gap={3} mt={2}>
        <CommonButton value={"save"} />
        <CommonButton value={"cancel"} />
      </Box>
    </Box>
  );
};

export default GeneralSettings;
