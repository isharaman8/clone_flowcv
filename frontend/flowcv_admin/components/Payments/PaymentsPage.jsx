import React, { useState } from "react";
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Switch,
  TextField,
  Typography,
} from "@mui/material";

export const PaymentsPage = () => {
  const [payment, setPayment] = useState({
    currency: "",
    stripe_checked: false,
    paystack_checked: false,
  });

  const handleChange = (event) => {
    const { name, value, checked } = event.target;

    setPayment((prevState) => ({
      ...prevState,
      [name]:
        name === "stripe_checked" || name === "paystack_checked"
          ? checked
          : value,
    }));
  };

  return (
    <Box mx={5} my={5}>
      <Stack>
        <Typography variant={"h5"} component={"h5"} fontWeight={600}>
          Currency
        </Typography>
      </Stack>
      <Box sx={{ minWidth: 120 }}>
        <FormControl
          sx={{
            width: "20rem",
            outline: "none",
            borderRadius: ".5rem",
            border: "1px solid #111",
          }}
        >
          <InputLabel id="demo-simple-select-label">Currency</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={payment.currency}
            label="Currency"
            name="currency"
            onChange={handleChange}
          >
            <MenuItem value={"INR"}>INR</MenuItem>
            <MenuItem value={"AED"}>AED</MenuItem>
            <MenuItem value={"USD"}>USD</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box
        sx={{ border: "1px solid black", padding: 2, borderRadius: 1 }}
        my={2}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant={"h5"} component={"h5"} fontWeight={600}>
            Stripe
          </Typography>

          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <Typography variant={"h6"} component={"h5"} fontWeight={600}>
              Active
            </Typography>
            <Switch
              checked={payment.stripe_checked}
              name="stripe_checked"
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
            />
          </Box>
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField label="API PUBLIC KEY" variant="outlined" fullWidth />
          </Grid>

          <Grid item xs={6}>
            <TextField label="API SECRET KEY" variant="outlined" fullWidth />
          </Grid>

          <Grid item xs={6}>
            <TextField label="API WEBHOOK URL" variant="outlined" fullWidth />
          </Grid>
        </Grid>
      </Box>
      <br />
      <Box
        sx={{ border: "1px solid black", padding: 2, borderRadius: 1 }}
        my={2}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant={"h5"} component={"h5"} fontWeight={600}>
            Pay Stack
          </Typography>

          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <Typography variant={"h6"} component={"h5"} fontWeight={600}>
              Active
            </Typography>
            <Switch
              checked={payment.paystack_checked}
              name="paystack_checked"
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
            />
          </Box>
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField label="API PUBLIC KEY" variant="outlined" fullWidth />
          </Grid>

          <Grid item xs={6}>
            <TextField label="API SECRET KEY" variant="outlined" fullWidth />
          </Grid>

          <Grid item xs={6}>
            <TextField label="API WEBHOOK URL" variant="outlined" fullWidth />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
