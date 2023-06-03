// THIRD PARTY IMPORTS
import Nav from "@components/Nav";
import "@styles/globals.css";

// INNER IMPORS
import BottomSection from "@components/LandingPage/BottomSection";

export const metadata = {
	title: "Flow CV",
	description: "Build a job-winning resume for free",
};

const RootLayout = ({ children }) => {
	return (
		<html lang="en">
			<body>
				<Nav />
				{/* <main>{children}</main> */}
				<BottomSection />
			</body>
		</html>
	);
};

export default RootLayout;
