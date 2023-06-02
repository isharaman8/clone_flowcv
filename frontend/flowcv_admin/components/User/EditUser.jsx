import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { GrClose } from "react-icons/gr";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: ".4rem",
};

const EditUser = ({ open, handleClose }) => {
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
                <Grid item xs={6}>
                  <label style={{ fontWeight: "600", fontSize: "1rem" }}>
                    First Name
                  </label>
                  <TextField label="First Name" variant="outlined" fullWidth />
                </Grid>

                <Grid item xs={6}>
                  <label style={{ fontWeight: "600", fontSize: "1rem" }}>
                    Last Name
                  </label>
                  <TextField label="Last Name" variant="outlined" fullWidth />
                </Grid>

                <Grid item xs={6}>
                  <label style={{ fontWeight: "600", fontSize: "1rem" }}>
                    Email
                  </label>
                  <TextField label="Email" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={6}>
                  <label style={{ fontWeight: "600", fontSize: "1rem" }}>
                    Password
                  </label>
                  <TextField
                    label="Password"
                    variant="outlined"
                    type="password"
                    fullWidth
                  />
                </Grid>
              </Grid>
              <div
                style={{
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
                      <InputLabel id="demo-simple-select-label">
                        Role
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Role"
                        name="role"
                        sx={{
                          bgcolor: "#fff",
                          borderRadius: ".5rem",
                          border: "1px solid #111",
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
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Plan"
                        name="plan"
                        sx={{
                          bgcolor: "#fff",
                          borderRadius: ".5rem",
                          border: "1px solid #111",
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
            </Box>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "4rem",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#111",
                  "&:hover": {
                    bgcolor: "#000000",
                  },
                  padding: ".2rem 4rem",
                }}
              >
                Save
              </Button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default EditUser;
