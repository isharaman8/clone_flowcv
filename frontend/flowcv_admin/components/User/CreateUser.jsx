import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import CommonButton from "../Button";
import { useState } from "react";
import { useDataProvider, useNotify } from "react-admin";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    role: "",
    plan: "",
    password: "",
  });

  const dataProvider = useDataProvider();
  const navigate = useNavigate();
  const notify = useNotify();

  const handleSave = async () => {
    if (
      !data.fname.trim().length ||
      !data.email.trim().length ||
      !data.role ||
      !data.plan ||
      !data.password.trim().length
    ) {
      notify("Please fill in all required fields", { type: "error" });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      notify("Please enter a valid email address", { type: "error" });
      return;
    }

    if (data.password.trim().length < 8) {
      notify("Password must be at least 8 characters long", { type: "error" });
      return;
    }

    const user = {
      name: `${data.fname} ${data.lname ? data.lname : ""}`,
      email: data.email,
      role: data.role,
      plan: data.plan,
      password: data.password,
    };

    const admin = JSON.parse(localStorage.getItem("adminData")) || {};

    const res = await dataProvider.create(
      `admin/create-user`,
      { data: user },
      admin.access_token
    );

    if (res.data.error) {
      notify(res.data.error.message, { type: "error" });
      return;
    }

    notify(`User created`, { type: "success" });
    navigate("/users");
  };

  const handleChange = (e) => {
    setData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <Box
      py={5}
      px={5}
      sx={{
        minHeight: "100vh",
      }}
    >
      <Typography variant="h5" component="h2" fontWeight={600}>
        Create User
      </Typography>
      <Box>
        <Box mt={4}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} lg={6} md={6}>
              <label style={{ fontWeight: "600", fontSize: "1rem" }}>
                First Name
              </label>
              <TextField
                label="First Name"
                variant="outlined"
                name="fname"
                value={data.fname}
                onChange={handleChange}
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={12} lg={6} md={6}>
              <label style={{ fontWeight: "600", fontSize: "1rem" }}>
                Last Name
              </label>
              <TextField
                label="Last Name"
                variant="outlined"
                name="lname"
                value={data.lname}
                onChange={handleChange}
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={12} lg={6} md={6}>
              <label style={{ fontWeight: "600", fontSize: "1rem" }}>
                Email
              </label>
              <TextField
                label="Email"
                variant="outlined"
                name="email"
                value={data.email}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={12} lg={6} md={6}>
              <label style={{ fontWeight: "600", fontSize: "1rem" }}>
                Password
              </label>
              <TextField
                label="Password"
                variant="outlined"
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
          </Grid>
          <Box
            sx={{
              display: { sm: "block", xs: "block", lg: "flex", md: "flex" },
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
                  <InputLabel id="demo-simple-select-label">Role</InputLabel>
                  <Select
                    label="Role"
                    name="role"
                    value={data.role}
                    onChange={handleChange}
                    variant="outlined"
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
                    value={data.plan}
                    onChange={handleChange}
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
          </Box>
        </Box>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "4rem",
          }}
        >
          <CommonButton value={"Save"} cb={handleSave} />
        </div>
      </Box>
    </Box>
  );
};

export default CreateUser;
