import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import { PricingCard } from "./PricingCard";
import { useDataProvider } from "react-admin";
import EditPricing from "./EditPricing";

export const ListPricing = () => {
  const [pricing, setPricing] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dataProvider = useDataProvider();

  const fetchData = async () => {
    const user = JSON.parse(localStorage.getItem("adminData")) || {},
      token = user?.access_token,
      { data = [] } = await dataProvider.getList("subscription", {
        access_token: token,
      });

    setPricing(data);
  };

  useEffect(() => {
    fetchData();
  }, [dataProvider]);

  return (
    <Box
      py={5}
      px={5}
      sx={{
        borderLeft: "1px solid #cbcbcb",
        height: "100vh",
      }}
    >
      <Typography variant="h4" component="h4" fontWeight={600}>
        Pricing
      </Typography>
      <Typography
        variant="p"
        component={"p"}
        mt={2}
        color={"gray"}
        fontWeight={500}
      >
        Annual/Monthly Pricing for flow CV
      </Typography>

      {/* PRICING BOXES */}
      <Grid container spacing={2} my={4} justifyContent="space-evenly">
        {pricing.map((c) => (
          <PricingCard
            name={c.name}
            description={c.description}
            price={c.price}
            duration={c.duration}
            key={c.uid}
            handleOpen={handleOpen}
          />
        ))}
      </Grid>
      {open && <EditPricing open={open} handleClose={handleClose} />}
    </Box>
  );
};
