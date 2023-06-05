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

const EditPricing = ({ open, handleClose, selectedPlan, fetchData }) => {
  const [plan, setPlan] = useState({
    active: selectedPlan.active,
    name: selectedPlan.name,
    price: selectedPlan.price,
    description: selectedPlan.description || "",
    type: selectedPlan.type || "",
  });

  const dataProvider = useDataProvider();
  const notify = useNotify();

  const handleSave = async () => {
    const updatedPlan = {
      ...plan,
      name: plan.name,
      active: plan.active,
      price: +plan.price,
      description: plan.description,
      type: plan.type,
      duration: plan.duration || 0,
    };

    const admin = JSON.parse(localStorage.getItem("adminData")) || {};
    const method = selectedPlan.uid ? "update" : "create";
    const res = await dataProvider[method](
      selectedPlan.uid
        ? `subscription/${selectedPlan.uid}`
        : "subscription/create",
      { data: updatedPlan },
      admin.access_token
    );

    if (res.data.error) {
      notify(res.data.error.message, { type: "error" });
      return;
    }

    notify(selectedPlan.uid ? `Plan Updated` : "Plan Created", {
      type: "success",
    });
    fetchData();
    handleClose();
  };

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
                {selectedPlan.uid ? "Edit Plan" : "Create Plan"}
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
                    Plan Name
                  </label>
                  <TextField
                    name="name"
                    label="Plan name"
                    variant="outlined"
                    value={plan.name}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12} sm={12} lg={6} md={6}>
                  <label style={{ fontWeight: "600", fontSize: "1rem" }}>
                    Plan Price
                  </label>
                  <TextField
                    name="price"
                    label="Plan price"
                    value={plan.price}
                    onChange={handleChange}
                    variant="outlined"
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12} sm={12} lg={6} md={6}>
                  <label style={{ fontWeight: "600", fontSize: "1rem" }}>
                    Description
                  </label>
                  <TextField
                    name="description"
                    label="Description"
                    variant="outlined"
                    value={plan.description}
                    onChange={handleChange}
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
                        value={plan.type}
                        onChange={handleChange}
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
              <CommonButton value={"save"} cb={handleSave} />
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default EditPricing;
