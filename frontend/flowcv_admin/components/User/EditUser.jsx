import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { GrClose } from "react-icons/gr";
import CommonButton from "../Button";
import { useState } from "react";
import { useDataProvider, useNotify } from "react-admin";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { sm: "80%", xs: "80%", lg: 1000, md: 1000 },
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: ".4rem",
};

const EditUser = ({ open, handleClose, fetchData, user = {} }) => {
  const [data, setData] = useState({
    fname: user.name?.split(" ")[0],
    lname: user.name?.split(" ")[1],
    email: user.email,
    role: user.role,
    plan: user.plan,
    password: "",
  });

  const dataProvider = useDataProvider();
  const notify = useNotify();

  const handleSave = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      notify("Please enter a valid email address", { type: "error" });
      return;
    }

    if (data.password && data.password.trim().length < 8) {
      notify("Password must be at least 8 characters long", { type: "error" });
      return;
    }

    const updatedUser = {
      ...user,
      name: `${data.fname} ${data.lname ? data.lname : ""}`,
      email: data.email,
      role: data.role,
      plan: data.plan,
      password: data.password,
    };

    if (!data.password.trim().length) delete updatedUser.password;

    const admin = JSON.parse(localStorage.getItem("adminData")) || {};

    const res = await dataProvider.update(
      `admin/update-user/${user.uid}`,
      { data: updatedUser },
      admin.access_token
    );

    if (res.data.error) {
      notify(res.data.error.message, { type: "error" });
      return;
    }

    notify(`User Updated`, { type: "success" });
    fetchData();
    handleClose();
  };

  const handleDelete = async () => {
    const admin = JSON.parse(localStorage.getItem("adminData")) || {};

    const res = await dataProvider.delete(
      `admin/delete-user/${user.uid}`,
      {},
      admin.access_token
    );

    if (res.data.error) {
      notify(res.data.error.message, { type: "error" });
      return;
    }

    notify(`User Deleted`, { type: "success" });
    fetchData();
    handleClose();
  };

  const handleChange = (e) => {
    setData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                Edit User
              </Typography>
              <GrClose
                style={{ fontSize: "1.5rem", cursor: "pointer" }}
                onClick={handleClose}
              />
            </Box>

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
                      <InputLabel id="demo-simple-select-label">
                        Role
                      </InputLabel>
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
                      <InputLabel id="demo-simple-select-label">
                        Plan
                      </InputLabel>
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
                gap: "2rem",
              }}
            >
              <CommonButton value={"Save"} cb={handleSave} />
              <CommonButton value={"Delete"} cb={handleDelete} />
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default EditUser;
