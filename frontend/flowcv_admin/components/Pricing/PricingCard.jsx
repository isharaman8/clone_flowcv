import { Box, Button, List, ListItem, Stack, Typography } from "@mui/material";
import React, { useState } from "react";

export const PricingCard = ({ name, duration, description, price }) => {
	const [features] = useState([
		"X Unlimited Downloads",
		"X No ads",
		"X Free support",
	]);
	return (
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

			<Button
				variant="contained"
				sx={{
					borderRadius: 3,
					backgroundColor: "black",
					color: "white",
					padding: `10px 30px`,
					margin: "auto",
				}}
			>
				Edit
			</Button>
		</Box>
	);
};
