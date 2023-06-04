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

    const { access_token } = params;

    // if (!access_token) {
    // 	console.log("No token provided");
    // 	return { data: [], total: 0 };
    // }

    const url = `${apiUrl}/${resource}`;

    const data = await httpClient(url, {}, access_token);

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

    const headers = new Headers({
      Authorization: `Bearer ${bearertoken}`,
      "Content-Type": "application/json",
    });

    try {
      const response = await fetchUtils.fetchJson(url, {
        method: "POST",
        body: JSON.stringify(params.data),
        headers: headers,
      });

      const json = response.json;

      return {
        data: { id: new Date().getTime(), ...json },
      };
    } catch (error) {
      return { data: { id: new Date().getTime(), error } };
    }
  },

  update: async (resource, params, bearertoken) => {
    const url = `${apiUrl}/${resource}`;

    const headers = new Headers({
      Authorization: `Bearer ${bearertoken}`,
      "Content-Type": "application/json",
    });

    try {
      const response = await fetchUtils.fetchJson(url, {
        method: "PATCH",
        body: JSON.stringify(params.data),
        headers: headers,
      });

      const json = response.json;

      return {
        data: { id: new Date().getTime(), ...json },
      };
    } catch (error) {
      return { data: { id: new Date().getTime(), error } };
    }
  },

  delete: async (resource, params, bearertoken) => {
    const url = `${apiUrl}/${resource}`;

    const headers = new Headers({
      Authorization: `Bearer ${bearertoken}`,
      "Content-Type": "application/json",
    });

    try {
      const response = await fetchUtils.fetchJson(url, {
        method: "DELETE",
        headers: headers,
      });

      const json = response.json;

      return {
        data: { id: new Date().getTime(), ...json },
      };
    } catch (error) {
      return { data: { id: new Date().getTime(), error } };
    }
  },

  deleteMany: async (resource, params, bearertoken) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;

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
