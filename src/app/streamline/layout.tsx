import React from "react";
import NavBar from "../../views/products/apps/streamline/navbar/index";

export default function StreamlineLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
}
