import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { SUBSCRIPTIONS } from "../../utils/Constants";
import CommonButton from "../Button";

export const PricingCard = ({
  name,
  duration,
  description,
  price,
  handleOpen,
}) => {
  return (
    <Grid item lg={3} md={3} sm={12} xs={12}>
      <Box
        sx={{
          background: "#e8e8e8",
          padding: 5,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 3,
          borderRadius: 2,
          maxWidth: "300px",
        }}
      >
        <Typography
          variant="h4"
          component={"h4"}
          fontWeight={600}
          textAlign={"center"}
        >
          {name}
        </Typography>
        <Stack direction={"row"} gap={1}>
          <Typography variant="h5" fontWeight={500}>
            ${price}
          </Typography>
          <Typography variant="h5" fontWeight={400}>
            /
          </Typography>
          <Typography variant="h5" fontWeight={400} color="gray">
            {duration} days
          </Typography>
        </Stack>

        {description && (
          <Typography variant={"p"} component={"p"} textAlign={"center"}>
            {description}
          </Typography>
        )}

        {(SUBSCRIPTIONS[name.toUpperCase()] || []).map((c, i) => (
          <>
            <Box key={c.id} display={"flex"} gap={2} alignItems={"center"}>
              {c.icon()}
              {c.title}
            </Box>
          </>
        ))}

        <CommonButton value={"edit"} cb={handleOpen} />
      </Box>
    </Grid>
  );
};
