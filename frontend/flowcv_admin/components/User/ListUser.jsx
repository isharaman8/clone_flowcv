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

export const UserList = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dataProvider = useDataProvider();

  const fetchData = async () => {
    const user = JSON.parse(localStorage.getItem("adminData")) || {},
      token = user?.access_token,
      { data = [] } = await dataProvider.getList("admin/get-users", {
        access_token: token,
      });

    console.log(user);

    setUsers(data);
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
        <Datagrid data={users} rowClick={handleOpen}>
          {/* <TextField>{c.id}</TextField> */}
          <TextField source="id" />
          <TextField source="name" />
          <EmailField source="email" />
          <TextField source="role" />
        </Datagrid>
      )}
      {open && <EditUser open={open} handleClose={handleClose} />}
    </List>
  );
};
