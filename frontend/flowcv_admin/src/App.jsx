// THIRD PARTY IMPORTS
import * as React from "react";
import PaidIcon from "@mui/icons-material/Paid";
import PaymentIcon from "@mui/icons-material/Payment";
import SettingsIcon from "@mui/icons-material/Settings";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import DescriptionIcon from "@mui/icons-material/Description";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import { Admin, Resource } from "react-admin";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";

// INNER IMPORTS
import { UserList } from "../components/User/ListUser";
import { Dashboard } from "./Dashboard";
import { Login, Layout } from "./layout";
import dataProvider from "./dataProvider";
import { lightTheme } from "./layout/themes";
import { authProvider } from "./AuthProvider";
import { ListPricing } from "../components/Pricing/ListPricing";
import { PaymentsPage } from "../components/Payments/PaymentsPage";
import CreateUser from "../components/User/CreateUser";
import ContentPage from "../components/Content/ContentPage";
import GeneralSettings from "../components/Settings/GeneralSettings";
import ListTemplates from "../components/Templates/ListTemplates";

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
    <Resource name="templates" list={ListTemplates} icon={DescriptionIcon} />
    <Resource
      name="users"
      list={UserList}
      icon={PeopleAltIcon}
      create={CreateUser}
    />
    <Resource name="pricing" list={ListPricing} icon={PaidIcon} />
    <Resource name="content" list={ContentPage} icon={ContentPasteIcon} />
    <Resource name="payments" list={PaymentsPage} icon={PaymentIcon} />
    <Resource name="settings" list={GeneralSettings} icon={SettingsIcon} />
  </Admin>
);

export default App;
