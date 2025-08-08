import React from "react";
import { header } from "../../types/index.tsx";
import {usestyles} from './headerstyle.tsx';
import Typography from "../typography/component.tsx";
import Button from "../button/button.tsx";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import SvgWeblingslogo from "../svg/Weblingslogo.tsx";

interface HeaderProps {
  prop: header ;
}


const Header: React.FC<HeaderProps> = ({prop}): JSX.Element => {  

  const classes=usestyles();
  const navigate = useNavigate()

  return (
    <div className={classes.navDiv}>
    <nav className={classes.navbar}>
      <div className={classes.logo}>
        <Link to="/landing">
        {/* <img src={prop.navBar.logo}    alt="Logo" className={classes.img}/> */}
        <SvgWeblingslogo/>
        </Link>
        </div>
      <div>
      <ul className={classes.ul}>
        {prop.navBar.links.map((dat) => (
          <li key={dat.label} className={classes.li} onClick={()=>navigate(dat.path)}>
            <Typography variant="LS">{dat.label}</Typography>
          </li>
        ))}
      </ul>
      </div>
      <div className={classes.login}>
        <Button element='button' brand onClick={()=>navigate(prop.navBar.action.link)}>{prop.navBar.action.label}</Button>
      </div>
    </nav>
    </div>
  );
};

export default Header;
