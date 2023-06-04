"use client";

// INNER IMPORTS
import React, { useEffect, useState } from "react";
import { Box, Grid, styled } from "@mui/material";
import { BsFillArrowUpRightCircleFill, BsFilter } from "react-icons/bs";

// INNER IMPORTS
import Graph from "./chart/Graph";
import { DASHBOARD } from "../utils/Constants";
import { useDataProvider } from "react-admin";

const Content = styled("div")({
  border: "1px solid #cbcbcb",
  borderRadius: "1rem",
  padding: "1.4rem",
  display: "flex",
  alignItems: "center",
  gap: "1rem",
});

const Footer = styled("div")({
  background: "#ededed",
  borderRadius: "1rem",
  padding: "1.4rem 2.4rem",
});

const FooterContent = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  gap: "2rem 8rem",
});

const Card = styled("div")({
  borderRadius: "1rem",
  padding: "1rem 1.4rem",
  display: "flex",
  alignItems: "center",
  gap: "1.2rem",
  background: "#fff",
  boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
  width: "18rem",
});

const CommonCard = (props) => {
  const { title, icon, dashData } = props;
  const key = title.split(" ")[0].toLowerCase();
  return (
    <>
      <Card>
        <span style={{ fontSize: "2.6rem" }}>{icon()}</span>
        <div>
          <p style={{ margin: 0, fontWeight: "500" }}>{title}</p>
          <h3 style={{ margin: 0 }}>{dashData[key] || 0}</h3>
        </div>
      </Card>
    </>
  );
};

export const Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState("userSignups");
  const [dashData, setDashData] = useState({});
  const dataProvider = useDataProvider();

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const fetchData = async () => {
    const user = JSON.parse(localStorage.getItem("adminData")) || {},
      token = user?.access_token,
      { data = [] } = await dataProvider.getList("admin/get-users", {
        access_token: token,
      });
    const payload = {
      users: data.length,
      subscriptions: data.filter((c) =>
        ["standard", "premium"].includes(c.plan)
      ).length,
      premium: data.filter((c) => ["premium"].includes(c.plan)).length,
      purchases: data.filter((c) => ["standard", "premium"].includes(c.plan))
        .length,
    };

    setDashData(payload);
  };

  useEffect(() => {
    fetchData();
  }, [dataProvider]);

  return (
    <Box
      py={5}
      px={5}
      sx={{
        borderLeft: "1px solid #cbcbcb",
        minHeight: "100vh",
      }}
    >
      <h3>Overview</h3>

      <Grid container gap={8}>
        <Grid item md={4} lg={4} sm={12} xs={12}>
          <Content
            sx={{
              width: { sm: "22rem", md: "100%", lg: "100%", xs: "22rem" },
            }}
          >
            <BsFillArrowUpRightCircleFill
              style={{ fontSize: "2.6rem", marginRight: "1rem" }}
            />
            <div>
              <p>Revenue</p>
              <h3>$0.00</h3>
            </div>
          </Content>
          <br />
          <Content
            sx={{
              width: { sm: "22rem", md: "100%", lg: "100%", xs: "22rem" },
            }}
            style={{ flexDirection: "column", alignItems: "flex-start" }}
          >
            <div
              style={{
                gap: ".4rem",
                display: "flex",
                fontWeight: "bold",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <BsFilter style={{ fontSize: "1.4rem" }} />
              Graph filter
            </div>
            <div>
              <label
                style={{
                  gap: "1rem",
                  width: "100%",
                  display: "flex",
                  fontSize: ".9rem",
                  borderRadius: ".4rem",
                  background: "#ececec",
                  padding: ".2rem .6rem",
                }}
              >
                <input
                  type="radio"
                  value="userSignups"
                  onChange={handleOptionChange}
                  style={{ accentColor: "#232323" }}
                  checked={selectedOption === "userSignups"}
                />
                Number of User Sign-ups
              </label>
              <label
                style={{
                  gap: "1rem",
                  width: "100%",
                  display: "flex",
                  fontSize: ".9rem",
                  marginTop: ".8rem",
                  borderRadius: ".4rem",
                  background: "#ececec",
                  padding: ".2rem .6rem",
                }}
              >
                <input
                  type="radio"
                  value="totalRevenue"
                  onChange={handleOptionChange}
                  style={{ accentColor: "#232323" }}
                  checked={selectedOption === "totalRevenue"}
                />
                Total Revenue
              </label>
            </div>
          </Content>
        </Grid>

        <Grid item md={6} lg={6} sm={12} xs={12}>
          <Graph selectedOption={selectedOption} />
        </Grid>
      </Grid>

      <br />
      <Footer>
        <h3>General Numbers</h3>
        <FooterContent>
          {DASHBOARD.CARD.map((c) => (
            <CommonCard
              title={c.title}
              icon={c.icon}
              key={c.id}
              dashData={dashData}
            />
          ))}
        </FooterContent>
      </Footer>
    </Box>
  );
};
