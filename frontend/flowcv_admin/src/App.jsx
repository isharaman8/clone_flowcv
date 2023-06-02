// THIRD PARTY IMPORTS
import * as React from "react";
import PaidIcon from "@mui/icons-material/Paid";
import PaymentIcon from "@mui/icons-material/Payment";
import { UserList } from "../components/User/ListUser";
import EditUser from "../components/User/EditUser";
import SettingsIcon from "@mui/icons-material/Settings";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import DescriptionIcon from "@mui/icons-material/Description";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import { Admin, EditGuesser, ListGuesser, Resource } from "react-admin";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";

// INNER IMPORTS
import { Dashboard } from "./Dashboard";
import { Login, Layout } from "./layout";
import dataProvider from "./dataProvider";
import { lightTheme } from "./layout/themes";
import { authProvider } from "./AuthProvider";
import { ListPricing } from "../components/Pricing/ListPricing";
import { PaymentsPage } from "../components/Payments/PaymentsPage";

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
      list={UserList}
      icon={AssignmentTurnedInIcon}
    />
    <Resource name="templates" list={ListGuesser} icon={DescriptionIcon} />
    <Resource name="users" list={UserList} icon={PeopleAltIcon} />
    <Resource name="pricing" list={ListPricing} icon={PaidIcon} />
    <Resource name="content" list={ListGuesser} icon={ContentPasteIcon} />
    <Resource name="payments" list={PaymentsPage} icon={PaymentIcon} />
    <Resource name="settings" list={ListGuesser} icon={SettingsIcon} />
  </Admin>
);

export default App;
