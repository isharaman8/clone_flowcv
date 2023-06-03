import React, { useState } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import PaymentFields from "./PaymentFields";
import CommonButton from "../Button";

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
    <Box
      py={5}
      px={5}
      sx={{
        borderLeft: "1px solid #cbcbcb",
        minHeight: "100vh",
      }}
    >
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
          }}
        >
          <InputLabel id="demo-simple-select-label">Currency</InputLabel>
          <Select
            variant="outlined"
            sx={{
              bgcolor: "#fff",
              borderRadius: ".5rem",
              padding: ".4rem",
            }}
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

      <PaymentFields
        handleChange={handleChange}
        payment={payment}
        value="stripe"
      />
      <br />
      <PaymentFields
        handleChange={handleChange}
        payment={payment}
        value="Pay Stack"
      />
      <Box display={"flex"} justifyContent={"flex-end"} gap={3} mt={2}>
        <CommonButton value={"save"} />
        <CommonButton value={"cancel"} />
      </Box>
    </Box>
  );
};
