import React from 'react'
import SvgLogo from '../../../../../components/svg/Logo.tsx'
import Header from '../../../../../components/header/index.tsx'

let data: any = {
  navBar: {
    logo: <SvgLogo/>,
    links: [
  {
    label: "Feature",
    path: "/layout/mail/feature",
  },
  {
    label: "Comparison",
    path: "/layout/mail/comparison",
  },
  {
    label: "Pricing",
    path: "/layout/mail/price",
  },
],
action: {
  label: "Get Free Trail",
  link: "/layout/product",
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