import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from '../components/ui/navbar';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Wali Mohammad - Portfolio",
  description: "Welcome to the portfolio website of Wali Mohammad. Explore my projects, skills, and experience.",
  keywords: ["portfolio", "Wali Mohammad", "projects", "skills", "experience"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        </body>
    </html>
  );
}
