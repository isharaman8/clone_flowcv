import Nav from "@components/Nav";
import "@styles/globals.css";

export const metadata = {
  title: "Flow CV",
  description: "Build a job-winning resume for free",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
