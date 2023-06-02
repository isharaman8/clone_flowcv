import {
	Box,
	FormControl,
	Grid,
	InputLabel,
	MenuItem,
	Select,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import React, { useState } from "react";

export const PaymentsPage = () => {
	const [age, setAge] = useState("");

	const handleChange = (event) => {
		setAge(event.target.value);
	};
	return (
		<Box mt={2}>
			<FormControl fullWidth>
				<InputLabel id="demo-simple-select-label">Curreny</InputLabel>
				<Select
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					value={age}
					label="Age"
					onChange={handleChange}
				>
					<MenuItem value={"INR"}>INR</MenuItem>
					<MenuItem value={"AED"}>AED</MenuItem>
					<MenuItem value={"USD"}>USD</MenuItem>
				</Select>
			</FormControl>

			<Box sx={{ border: "1px solid black", padding: 2, borderRadius: 2 }}>
				<Stack>
					<Typography variant={"h5"} component={"h5"} fontWeight={500}>
						Stripe
					</Typography>
				</Stack>

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

					{/* <TextField label="API SECRET KEY" variant="outlined" />
					<TextField label="API WEBHOOK URL" variant="outlined" /> */}
				</Grid>
			</Box>
		</Box>
	);
};
