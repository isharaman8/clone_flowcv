import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import { PricingCard } from "./PricingCard";
import { useDataProvider } from "react-admin";

export const ListPricing = () => {
	const [pricing, setPricing] = useState([]);

	const dataProvider = useDataProvider();

	const fetchData = async () => {
		const user = JSON.parse(localStorage.getItem("adminData")) || {},
			token = user?.access_token,
			{ data = [] } = await dataProvider.getList("subscription", {
				access_token: token,
			});

		console.log(user);

		setPricing(data);
	};
	useEffect(() => {
		fetchData();
	}, [dataProvider]);
	return (
		<Box mt={5}>
			<Typography variant="h3" component="h4" fontWeight={500}>
				Pricing
			</Typography>
			<Typography
				variant="h5"
				component={"p"}
				mt={2}
				color={"gray"}
				fontWeight={500}
			>
				Annual/Monthly Pricing for flow CV
			</Typography>

			{/* PRICING BOXES */}
			{pricing.map((c) => {
				console.log(c);
				return (
					<PricingCard
						name={c.name}
						description={c.description}
						price={c.price}
						duration={c.duration}
						key={c.uid}
					/>
				);
			})}
		</Box>
	);
};
