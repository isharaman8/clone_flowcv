"use client";

import React from "react";
import { styled } from "@mui/material";
import {
	BsFillArrowUpRightCircleFill,
	BsFilter,
	BsCreditCard2Back,
} from "react-icons/bs";
import {
	MdDescription,
	MdAssignmentTurnedIn,
	MdWorkspacePremium,
} from "react-icons/md";
import { FaUsers, FaRegMoneyBillAlt } from "react-icons/fa";
import Graph from "./chart/Graph";

const Section = styled("section")({
	padding: "2rem",
	borderLeft: "1px solid #cbcbcb",
});

const Main = styled("div")({
	display: "flex",
	gap: "2rem",
	justifyContent: "space-between",
});

const LeftDiv = styled("div")({
	width: "18rem",
});

const RightDiv = styled("div")({
	width: "50rem",
});

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

export const Dashboard = () => {
	const [selectedOption, setSelectedOption] = React.useState("userSignups");

	const handleOptionChange = (event: any) => {
		setSelectedOption(event.target.value);
	};

	return (
		<Section>
			<h3>Overview</h3>
			<Main>
				<LeftDiv>
					<Content>
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
				</LeftDiv>
				<RightDiv>
					<Graph selectedOption={selectedOption} />
				</RightDiv>
			</Main>
			<br />
			<Footer>
				<h3>General Numbers</h3>
				<FooterContent>
					<Card>
						<MdDescription style={{ fontSize: "2.6rem" }} />
						<div>
							<p style={{ margin: 0, fontWeight: "500" }}>Resumes created</p>
							<h3 style={{ margin: 0 }}>0</h3>
						</div>
					</Card>
					<Card>
						<FaUsers style={{ fontSize: "2.6rem" }} />
						<div>
							<p style={{ margin: 0, fontWeight: "500" }}>Users</p>
							<h3 style={{ margin: 0 }}>0</h3>
						</div>
					</Card>
					<Card>
						<MdAssignmentTurnedIn style={{ fontSize: "2.6rem" }} />
						<div>
							<p style={{ margin: 0, fontWeight: "500" }}>Subscriptions</p>
							<h3 style={{ margin: 0 }}>0</h3>
						</div>
					</Card>
					<Card>
						<FaRegMoneyBillAlt style={{ fontSize: "2.6rem" }} />
						<div>
							<p style={{ margin: 0, fontWeight: "500" }}>Total Revenue</p>
							<h3 style={{ margin: 0 }}>$0</h3>
						</div>
					</Card>
					<Card>
						<BsCreditCard2Back style={{ fontSize: "2.6rem" }} />
						<div>
							<p style={{ margin: 0, fontWeight: "500" }}>Purchases</p>
							<h3 style={{ margin: 0 }}>0</h3>
						</div>
					</Card>
					<Card>
						<MdWorkspacePremium style={{ fontSize: "2.6rem" }} />
						<div>
							<p style={{ margin: 0, fontWeight: "500" }}>Premium Purchases</p>
							<h3 style={{ margin: 0 }}>0</h3>
						</div>
					</Card>
				</FooterContent>
			</Footer>
		</Section>
	);
};
