import React from "react";
import NavBar from "../../views/products/apps/connect/navbar/index";

export default function ConnectLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
}
