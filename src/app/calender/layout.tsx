import React from "react";
import NavBar from "../../views/products/apps/calender/navbar/index";

export default function CalenderLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
}
