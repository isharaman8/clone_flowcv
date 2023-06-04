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
import EditUser from "./EditUser";
import { useLocation } from "react-router-dom";

export const UserList = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const handleOpen = (user) => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const handleRowClick = (id) => {
    const selectedUser = users.find((user) => user.id === id);
    setSelectedUser(selectedUser);
    handleOpen();
  };

  const dataProvider = useDataProvider();
  const location = useLocation();

  // Check the pathname to determine the current resource
  const isSubscriptionsResource = location.pathname === "/subscriptions";

  const fetchData = async () => {
    const user = JSON.parse(localStorage.getItem("adminData")) || {},
      token = user?.access_token,
      { data = [] } = await dataProvider.getList("admin/get-users", {
        access_token: token,
      });

    setUsers(data);
  };

  useEffect(() => {
    fetchData();
  }, [dataProvider]);

  return (
    <List {...props} title="Users' List">
      {isSmall ? (
        <SimpleList
          rowClick={handleRowClick}
          primaryText={(record) => record.name}
          tertiaryText={(record) => record.email}
        />
      ) : (
        <Datagrid data={users} rowClick={handleRowClick}>
          {/* <TextField>{c.id}</TextField> */}
          <TextField source="id" />
          <TextField source="name" />
          <EmailField source="email" />
          {!isSubscriptionsResource && <TextField source="role" />}
          {isSubscriptionsResource && <TextField source="plan" />}
        </Datagrid>
      )}
      {open && (
        <EditUser
          open={open}
          handleClose={handleClose}
          user={selectedUser}
          fetchData={fetchData}
        />
      )}
    </List>
  );
};
