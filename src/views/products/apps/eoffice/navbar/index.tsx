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
        path: "/eoffice/feature",
      },
      {
        label: "Comparison",
        path: "/eoffice/comparison",
      },
      {
        label: "Pricing",
        path: "/eoffice/price",
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