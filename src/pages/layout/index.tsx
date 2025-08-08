import React from "react";
import { Outlet } from 'react-router-dom'
import Footer from "../../components/footer/index.tsx";
import Navbar from "../../components/navbar/landing.tsx";


function Layout() {
  return (
    <>
    <Navbar/>
      <div>
        <Outlet />
      </div>
     <Footer/>
    </>
  );
}

export default Layout;
