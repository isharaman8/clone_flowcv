import * as React from "react";
import { Admin, EditGuesser, ListGuesser, Resource } from "react-admin";
import { authProvider } from "./AuthProvider";
import { Login, Layout } from "./layout";
import { Dashboard } from "./Dashboard";
import { lightTheme } from "./layout/themes";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import DescriptionIcon from "@mui/icons-material/Description";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PaidIcon from "@mui/icons-material/Paid";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import PaymentIcon from "@mui/icons-material/Payment";
import SettingsIcon from "@mui/icons-material/Settings";
import { UserList } from "../components/User/ListUser";

import jsonServerProvider from "ra-data-json-server";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => (
  <Admin
    dataProvider={dataProvider}
    authProvider={authProvider}
    dashboard={Dashboard}
    loginPage={Login}
    layout={Layout}
    disableTelemetry
    theme={lightTheme}
  >
    <Resource
      name="subscriptions"
      list={ListGuesser}
      icon={AssignmentTurnedInIcon}
    />
    <Resource name="templates" list={ListGuesser} icon={DescriptionIcon} />
    <Resource
      name="users"
      list={UserList}
      icon={PeopleAltIcon}
      edit={EditGuesser}
    />
    <Resource name="pricing" list={ListGuesser} icon={PaidIcon} />
    <Resource name="content" list={ListGuesser} icon={ContentPasteIcon} />
    <Resource name="payments" list={ListGuesser} icon={PaymentIcon} />
    <Resource name="settings" list={ListGuesser} icon={SettingsIcon} />
  </Admin>
);

export default App;
