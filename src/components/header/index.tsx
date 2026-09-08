'use client';

import React from "react";
import { header } from "../../types/index";
import { usestyles } from './headerstyle';
import Typography from "../typography/component";
import Button from "../button/button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import SvgWeblingslogo from "../svg/Weblingslogo";

interface HeaderProps {
  prop: header;
}

const Header: React.FC<HeaderProps> = ({ prop }): React.ReactElement => {
  const classes = usestyles();
  const router = useRouter();

  return (
    <div className={classes.navDiv}>
      {/* <nav className={classes.navbar}>
        <div className={classes.logo}>
          <Link to="/landing">
            <SvgWeblingslogo />
          </Link>
        </div>
        <div>
          <ul className={classes.ul}>
            {prop.navBar.links.map((dat) => (
              <li key={dat.label} className={classes.li} onClick={() => router.push(dat.path)}>
                <Typography variant="LS">{dat.label}</Typography>
              </li>
            ))}
          </ul>
        </div>
        <div className={classes.login}>
          <Button element='button' brand onClick={() => router.push(prop.navBar.action.link)}>{prop.navBar.action.label}</Button>
        </div>
      </nav> */}
    </div>
  );
};

export default Header;
