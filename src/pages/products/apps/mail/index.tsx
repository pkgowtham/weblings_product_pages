import React from "react";
import { Outlet } from 'react-router-dom'
import NavBar from "./navbar/index.tsx";


function MailLayout() {
  return (
    <>
      <NavBar/>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default MailLayout;