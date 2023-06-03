import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React from "react";
import { Create, ReferenceInput, SimpleForm, TextInput } from "react-admin";

const CreateUser = () => {
  return (
    <Box my={4} mx={4}>
      <Typography variant="h5" component="h2" fontWeight={600}>
        Create User
      </Typography>
      <Create>
        <SimpleForm>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <label style={{ fontWeight: "600", fontSize: "1rem" }}>
                First Name
              </label>
              <TextInput source="first name" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={6}>
              <label style={{ fontWeight: "600", fontSize: "1rem" }}>
                Last Name
              </label>
              <TextInput source="last name" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={6}>
              <label style={{ fontWeight: "600", fontSize: "1rem" }}>
                Email
              </label>
              <TextInput source="email" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={6}>
              <label style={{ fontWeight: "600", fontSize: "1rem" }}>
                Password
              </label>
              <TextInput
                source="password"
                variant="outlined"
                type="password"
                fullWidth
              />
            </Grid>
          </Grid>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              marginTop: "1rem",
            }}
          >
            <Grid item xs={4}>
              <label style={{ fontWeight: "600", fontSize: "1rem" }}>
                Role
              </label>
              <Box sx={{ minWidth: 120 }}>
                <FormControl
                  sx={{
                    width: "20rem",
                    outline: "none",
                  }}
                >
                  <InputLabel>Role</InputLabel>
                  <Select
                    variant="outlined"
                    label="Role"
                    name="role"
                    sx={{
                      bgcolor: "#fff",
                      borderRadius: ".5rem",
                      padding: ".4rem",
                    }}
                  >
                    <MenuItem value={"admin"}>Admin</MenuItem>
                    <MenuItem value={"user"}>User</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <label style={{ fontWeight: "600", fontSize: "1rem" }}>
                Plan
              </label>
              <Box sx={{ minWidth: 120 }}>
                <FormControl
                  sx={{
                    width: "20rem",
                    outline: "none",
                  }}
                >
                  <InputLabel id="demo-simple-select-label">Plan</InputLabel>
                  <Select
                    label="Plan"
                    name="plan"
                    variant="outlined"
                    sx={{
                      bgcolor: "#fff",
                      borderRadius: ".5rem",
                      padding: ".4rem",
                    }}
                  >
                    <MenuItem value={"basic"}>Basic</MenuItem>
                    <MenuItem value={"standard"}>Standard</MenuItem>
                    <MenuItem value={"premium"}>Premium</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
          </div>
        </SimpleForm>
      </Create>
    </Box>
  );
};

export default CreateUser;
