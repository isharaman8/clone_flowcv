import * as React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import { useLocation } from "react-router-dom";
import LockIcon from "@mui/icons-material/Lock";
import {
	Avatar,
	Button,
	Card,
	CardActions,
	CircularProgress,
} from "@mui/material";
import {
	Form,
	required,
	TextInput,
	useTranslate,
	useLogin,
	useNotify,
} from "react-admin";

const Login = () => {
	const translate = useTranslate();
	const [loading, setLoading] = useState(false);

	const login = useLogin();
	const notify = useNotify();
	const location = useLocation();

	const handleSubmit = (auth: FormValues) => {
		console.log("AUTH", auth);
		console.log("LOCATION", location);
		setLoading(true);
		login(auth, location.state ? location.state.nextPathname : "/").catch(
			(error: Error) => {
				setLoading(false);
				notify(
					typeof error === "string"
						? error
						: typeof error === "undefined" || !error.message
						? "ra.auth.sign_in_error"
						: error.message,
					{
						type: "error",
						messageArgs: {
							_:
								typeof error === "string"
									? error
									: error?.message
									? error.message
									: undefined,
						},
					}
				);
			}
		);
	};

	return (
		<Form onSubmit={handleSubmit} noValidate>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					minHeight: "100vh",
					alignItems: "center",
					justifyContent: "flex-start",
					background: "grey",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
				}}
			>
				<Card sx={{ minWidth: 300, marginTop: "6em" }}>
					<Box
						sx={{
							margin: "1em",
							display: "flex",
							justifyContent: "center",
						}}
					>
						<Avatar sx={{ bgcolor: "secondary.main" }}>
							<LockIcon />
						</Avatar>
					</Box>
					<Box
						sx={{
							marginTop: "1em",
							display: "flex",
							justifyContent: "center",
							color: (theme) => theme.palette.grey[500],
						}}
					>
						FlowCV Admin Portal
					</Box>
					<Box sx={{ padding: "0 1em 1em 1em" }}>
						<Box sx={{ marginTop: "1em" }}>
							<TextInput
								autoFocus
								source="email"
								label="Email Id"
								disabled={loading}
								validate={required()}
								fullWidth
								type="email"
							/>
						</Box>
						<Box sx={{ marginTop: "1em" }}>
							<TextInput
								source="password"
								label="Password"
								type="password"
								disabled={loading}
								validate={required()}
								fullWidth
							/>
						</Box>
					</Box>
					<CardActions sx={{ padding: "0 1em 1em 1em" }}>
						<Button
							variant="contained"
							type="submit"
							color="primary"
							disabled={loading}
							fullWidth
						>
							{loading && <CircularProgress size={25} thickness={2} />}
							{translate("ra.auth.sign_in")}
						</Button>
					</CardActions>
				</Card>
			</Box>
		</Form>
	);
};

Login.propTypes = {
	authProvider: PropTypes.func,
	previousRoute: PropTypes.string,
};

export default Login;

interface FormValues {
	email?: string;
	password?: string;
}
