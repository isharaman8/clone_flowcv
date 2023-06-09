// THIRD PARTY IMPORTS
import Nav from "@components/Nav";
import { Providers } from "@redux/provider";
import "@styles/globals.css";

// INNER IMPORS

export const metadata = {
  title: "Flow CV",
  description: "Build a job-winning resume for free",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Nav />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
