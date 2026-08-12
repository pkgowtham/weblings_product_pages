import React from "react";
import NavBar from "../../views/products/apps/eoffice/navbar/index";

export default function EofficeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
}
