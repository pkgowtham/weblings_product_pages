import React from "react";
import { Outlet } from 'react-router-dom'
import NavBar from "./navbar/index.tsx";


function CalenderLayout() {
  return (
    <>
      <NavBar/>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default CalenderLayout;