'use client';

import React from 'react'
import SvgLogo from '../../../../../components/svg/Logo'
import Header from '../../../../../components/header/index'

let data: any = {
  navBar: {
    logo: <SvgLogo/>,
    links: [
      {
        label: "Feature",
        path: "/connect/feature",
      },
      {
        label: "Comparison",
        path: "/connect/comparison",
      },
      {
        label: "Pricing",
        path: "/connect/price",
      },
    ],
    action: {
      label: "Get Free Trial",
      link: "/",
    },
  }
}

const NavBar = () => {
  return (
    <>
      <Header prop={data} /> 
    </>
  )
}

export default NavBar