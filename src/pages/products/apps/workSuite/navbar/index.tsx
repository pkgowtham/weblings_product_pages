import React from 'react'
import SvgLogo from '../../../../../components/svg/Logo.tsx'
import Header from '../../../../../components/header/index.tsx'

let data: any = {
  navBar: {
    logo: <SvgLogo/>,
    links: [
      {
        label: "Feature",
        path: "/workSuite/feature",
      },
      {
        label: "Comparison",
        path: "/workSuite/comparison",
      },
      {
        label: "Pricing",
        path: "/workSuite/price",
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