import React from "react";
import NavBar from "../../views/products/apps/workSuite/navbar/index";

export default function WorkSuiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
}
