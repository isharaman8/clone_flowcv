import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import { PricingCard } from "./PricingCard";
import { useDataProvider } from "react-admin";
import EditPricing from "./EditPricing";
import { AiOutlinePlus } from "react-icons/ai";

export const ListPricing = () => {
  const [pricing, setPricing] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState({});
  const dataProvider = useDataProvider();

  const handleOpen = () => setOpen(true);

  const handleClick = (c) => {
    const selectedPlan = pricing.find((plan) => plan.name === c);
    setSelectedPlan(selectedPlan);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedPlan({});
  };

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
        minHeight: "100vh",
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
            id={c.uid}
            key={c.id}
            handleOpen={handleOpen}
            handleClick={handleClick}
          />
        ))}
      </Grid>
      <Box display={"flex"} justifyContent={"flex-end"}>
        <div
          style={{
            borderRadius: "100%",
            backgroundColor: "#111",
            width: "3rem",
            height: "3rem",
            display: "grid",
            placeContent: "center",
            cursor: "pointer",
          }}
          onClick={handleOpen}
        >
          <AiOutlinePlus fontSize={"2.3rem"} color="#fff" />
        </div>
      </Box>
      {open && (
        <EditPricing
          open={open}
          handleClose={handleClose}
          selectedPlan={selectedPlan}
          fetchData={fetchData}
        />
      )}
    </Box>
  );
};
