import React from "react";
import type { Metadata } from "next";
import JssRegistryProvider from "./registry";
import Navbar from "../components/navbar/landing";
import Footer from "../components/footer/index";
import MainContent from "./main-content";
import "../index.css";

export const metadata: Metadata = {
  title: "Weblings - Simply Affordable Business Tools",
  description: "Weblings provides modern business tools including Mail, Chat, Calendar, Streamline, and eOffice.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <JssRegistryProvider>
          <Navbar />
          <MainContent>{children}</MainContent>
          <Footer />
        </JssRegistryProvider>
      </body>
    </html>
  );
}
