// INNER IMPORTS
import "@styles/globals.css";
import { Providers } from "@redux/provider";

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
                    <main>{children}</main>
                </Providers>
            </body>
        </html>
    );
};

export default RootLayout;
