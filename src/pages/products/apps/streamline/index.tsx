import React from "react";
import { Outlet } from 'react-router-dom'
import NavBar from "./navbar/index.tsx";


function StreamlineLayout() {
  return (
    <>
      <NavBar/>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default StreamlineLayout;