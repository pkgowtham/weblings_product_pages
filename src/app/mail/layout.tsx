import React from "react";
import NavBar from "../../views/products/apps/mail/navbar/index";

export default function MailLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
}
