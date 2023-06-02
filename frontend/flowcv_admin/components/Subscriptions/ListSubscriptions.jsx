import {
	List,
	Datagrid,
	SimpleList,
	TextField,
	EmailField,
	useDataProvider,
} from "react-admin";
import { useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";

export const SubscriptionList = (props) => {
	const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));

	const [subscriptions, setSubscriptions] = useState([]);

	const dataProvider = useDataProvider();

	const fetchData = async () => {
		const user = JSON.parse(localStorage.getItem("adminData")) || {},
			token = user?.access_token,
			{ data = [] } = await dataProvider.getList("subscription", {
				access_token: token,
			});

		console.log(user);

		setSubscriptions(data);
	};
	useEffect(() => {
		fetchData();
	}, [dataProvider]);

	return (
		<List {...props} title="Users' List">
			{isSmall ? (
				<SimpleList
					primaryText={(record) => record.name}
					tertiaryText={(record) => record.email}
				/>
			) : (
				<Datagrid data={subscriptions} rowClick="edit">
					{/* <TextField>{c.id}</TextField> */}
					<TextField source="id" />
					<TextField source="name" />
					<EmailField source="description" />
					<TextField source="price" />
					<TextField source="active" />
					<TextField source="duration" />
				</Datagrid>
			)}
		</List>
	);
};
