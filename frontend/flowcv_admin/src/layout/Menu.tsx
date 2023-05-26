import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";

import {
  useTranslate,
  DashboardMenuItem,
  MenuProps,
  useSidebarState,
} from "react-admin";

const Menu = ({ dense = false }: MenuProps) => {
  const [state, setState] = useState({
    menuCatalog: true,
    menuSales: true,
    menuCustomers: true,
  });
  const translate = useTranslate();
  const [open] = useSidebarState();

  return (
    <Box
      sx={{
        width: open ? 200 : 50,
        marginTop: 1,
        marginBottom: 1,
        transition: (theme) =>
          theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
      }}
    >
      <DashboardMenuItem />
    </Box>
  );
};

export default Menu;
