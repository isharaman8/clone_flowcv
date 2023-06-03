import { Box, Grid, Switch, TextField, Typography } from "@mui/material";
import React from "react";

const PaymentFields = ({ value, handleChange, payment }) => {
  return (
    <>
      <Box
        sx={{ border: "1px solid #a2a2a2", padding: 2, borderRadius: 1 }}
        my={2}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant={"h5"}
            component={"h5"}
            fontWeight={600}
            textTransform={"capitalize"}
          >
            {value}
          </Typography>

          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <Typography variant={"h6"} component={"h5"} fontWeight={600}>
              Active
            </Typography>
            <Switch
              checked={
                value === "stripe"
                  ? payment.stripe_checked
                  : payment.paystack_checked
              }
              name={value === "stripe" ? "stripe_checked" : "paystack_checked"}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
            />
          </Box>
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField label="API PUBLIC value" variant="outlined" fullWidth />
          </Grid>

          <Grid item xs={6}>
            <TextField label="API SECRET value" variant="outlined" fullWidth />
          </Grid>

          <Grid item xs={6}>
            <TextField label="API WEBHOOK URL" variant="outlined" fullWidth />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default PaymentFields;
