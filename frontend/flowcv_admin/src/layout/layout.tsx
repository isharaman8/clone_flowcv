import * as React from "react";
import { Layout, LayoutProps } from "react-admin";
import AppBar from "./AppBar";
import CustomSidebar from "./SideBar";

export default (props: LayoutProps) => (
  <Layout {...props} appBar={AppBar} sidebar={CustomSidebar} />
);
