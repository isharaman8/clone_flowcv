import * as React from "react";
import { AppBar, TitlePortal, Logout, UserMenu } from "react-admin";

import { Box, useMediaQuery, Theme } from "@mui/material";

import Logo from "./Logo";

const CustomUserMenu = () => (
  <UserMenu>
    <Logout />
  </UserMenu>
);

const CustomAppBar = () => {
  const isLargeEnough = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.up("sm")
  );
  return (
    <AppBar color="secondary" elevation={1} userMenu={<CustomUserMenu />}>
      <TitlePortal />
      {isLargeEnough && <Logo />}
      {isLargeEnough && <Box component="span" sx={{ flex: 1 }} />}
    </AppBar>
  );
};

export default CustomAppBar;
