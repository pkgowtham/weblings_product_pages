import React from "react";
import { Outlet } from 'react-router-dom'
import NavBar from "./navbar/index.tsx";


function ConnectLayout() {
  return (
    <>
      <NavBar/>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default ConnectLayout;