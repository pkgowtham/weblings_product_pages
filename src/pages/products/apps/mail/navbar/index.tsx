import React from 'react'
import SvgLogo from '../../../../../components/svg/Logo.tsx'
import Header from '../../../../../components/header/index.tsx'

let data: any = {
  navBar: {
    logo: <SvgLogo/>,
    links: [
      {
        label: "Feature",
        path: "/mail/feature",
      },
      {
        label: "Comparison",
        path: "/mail/comparison",
      },
      {
        label: "Pricing",
        path: "/mail/price",
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