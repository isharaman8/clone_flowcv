import { fetchUtils } from "react-admin";

const apiUrl = "http://localhost:3000"; // Replace with your API URL

const httpClient = (url, options = {}, token = "") => {
	if (!options.headers) {
		options.headers = new Headers({ Accept: "application/json" });
	}

	// Add your custom headers here
	// options.headers.set("Authorization", `Bearer ${token}`);`

	return fetchUtils.fetchJson(url, options);
};

const dataProvider = {
	getList: async (resource, params) => {
		let type;

		switch (resource) {
			case "users":
			case "admin/get-users":
				resource = "admin/get-users";
				type = "users";
				break;
			case "subscriptions":
			case "subscription":
				resource = "subscription";
				type = "subscriptions";
				break;
			default:
				break;
		}

		console.log("RESOURCE", resource);
		console.log("PARAMS", params);

		const { access_token } = params;

		// if (!access_token) {
		// 	console.log("No token provided");
		// 	return { data: [], total: 0 };
		// }

		const url = `${apiUrl}/${resource}`;

		const data = await httpClient(url, {}, access_token);

		console.log("DATA", data);

		return {
			data: data.json[type].map((c, idx) => ({ ...c, id: idx })),
			total: data.json[type].length,
		};
	},

	getMany: async (resource, params) => {
		if (resource === "users") {
			resource = "admin/get-users";
		}

		const url = `${apiUrl}/${resource}`;

		const data = await httpClient(url, {}, access_token);

		return {
			data: data.json.users.map((c, idx) => ({ ...c, id: idx })),
			total: data.json.users.length,
		};
	},

	getOne: async (resource, params, bearertoken) => {
		const url = `${apiUrl}/${resource}/${params.id}`;

		return fetchUtils.fetchJson(url).then(({ json }) => ({
			data: json,
		}));
	},

	create: async (resource, params, bearertoken) => {
		const url = `${apiUrl}/${resource}`;

		return fetchUtils
			.fetchJson(url, {
				method: "POST",
				body: JSON.stringify(params.data),
			})
			.then(({ json }) => ({
				data: json,
			}));
	},

	update: async (resource, params, bearertoken) => {
		const url = `${apiUrl}/${resource}/${params.id}`;

		return fetchUtils
			.fetchJson(url, {
				method: "PUT",
				body: JSON.stringify(params.data),
			})
			.then(({ json }) => ({
				data: json,
			}));
	},

	delete: async (resource, params, bearertoken) => {
		const url = `${apiUrl}/${resource}/${params.id}`;

		return fetchUtils
			.fetchJson(url, {
				method: "DELETE",
			})
			.then(({ json }) => ({
				data: json,
			}));
	},
};

export default dataProvider;
