import axios from "axios";

export const authProvider = {
	// called when the user attempts to log in
	login: async ({ email, password }: { email: string; password: string }) => {
		if (!email || !password) {
			console.log(`[error] email or password not provided`);
		}

		const response = await axios.post(
			"http://localhost:3000/admin/login",
			{
				email,
				password,
			},
			{
				headers: {
					"Content-Type": "application/json",
				},
			}
		);

		if (response.status !== 201) {
			throw new Error("invalid login creds");
		}

		localStorage.setItem("adminData", JSON.stringify(response.data));

		return Promise.resolve();
	},
	// called when the user clicks on the logout button
	logout: () => {
		localStorage.removeItem("adminData");
		return Promise.resolve();
	},
	// called when the API returns an error
	checkError: ({ status }: { status: number }) => {
		if (status === 401 || status === 403) {
			localStorage.removeItem("adminData");
			return Promise.reject();
		}
		return Promise.resolve();
	},
	// called when the user navigates to a new location, to check for authentication
	checkAuth: () => {
		return localStorage.getItem("adminData")
			? Promise.resolve()
			: Promise.reject();
	},
	// called when the user navigates to a new location, to check for permissions / roles
	getPermissions: () => Promise.resolve(),
};
