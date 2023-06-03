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
  Switch,
  TextField,
} from "@mui/material";
import { GrClose } from "react-icons/gr";
import CommonButton from "../Button";
import { useState } from "react";

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

const EditPricing = ({ open, handleClose }) => {
  const [plan, setPlan] = useState({
    active: false,
  });

  const handleChange = (event) => {
    const { name, value, checked } = event.target;

    setPlan((prevState) => ({
      ...prevState,
      [name]: name === "active" ? checked : value,
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
                Edit Plan
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
                    Plan Name
                  </label>
                  <TextField label="Plan name" variant="outlined" fullWidth />
                </Grid>

                <Grid item xs={6}>
                  <label style={{ fontWeight: "600", fontSize: "1rem" }}>
                    Plan Price
                  </label>
                  <TextField label="Plan price" variant="outlined" fullWidth />
                </Grid>

                <Grid item xs={6}>
                  <label style={{ fontWeight: "600", fontSize: "1rem" }}>
                    Description
                  </label>
                  <TextField
                    label="Description"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={5}
                  />
                </Grid>
                <Grid item xs={6}>
                  <label style={{ fontWeight: "600", fontSize: "1rem" }}>
                    Plan Type
                  </label>
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl
                      sx={{
                        width: "20rem",
                        outline: "none",
                      }}
                    >
                      <InputLabel>Type</InputLabel>
                      <Select
                        label="Type"
                        name="type"
                        variant="outlined"
                        sx={{
                          bgcolor: "#fff",
                          borderRadius: ".5rem",
                          padding: ".4rem",
                        }}
                      >
                        <MenuItem value={"monthly"}>Monthly</MenuItem>
                        <MenuItem value={"yearly"}>Yearly</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <br />
            <Box>
              <label style={{ fontWeight: "600", fontSize: "1rem" }}>
                Active
              </label>
              <br />
              <Switch
                sx={{
                  "& .MuiSwitch-switchBase.Mui-checked": {
                    transform: "translateX(18px)",
                    color: "#818181", // Change color here
                    "& + .MuiSwitch-track": {
                      opacity: 1,
                      backgroundColor: "#000000", // Change track color here
                    },
                  },
                }}
                checked={plan.active}
                name="active"
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
            </Box>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "4rem",
              }}
            >
              <CommonButton value={"save"} />
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default EditPricing;
