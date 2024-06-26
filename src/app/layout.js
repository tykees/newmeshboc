/* @jsxImportSource theme-ui */
/* @jsxRuntime classic */

import React from "react"; // Add this import

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import TutorFooter from "@/components/TutorFooter";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Intech Meshboc",
  description: "Using and Teaching the Technology of the future",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <TutorFooter/>
      </body>
    </html>
  );
}
