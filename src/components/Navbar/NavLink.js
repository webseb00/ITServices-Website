import React, { useState } from 'react';
import { NavLink as Link, LinkWrapper } from './NavbarStyles';
import { TiArrowSortedDown } from 'react-icons/ti';
import SubMenu from './SubMenu';

const NavLink = ({ item }) => {

  const [dropdown, setDropdown] = useState(false);

  const handleClick = e => {
    setDropdown(!dropdown);
  }
  console.log(item.route);
  return (
    <LinkWrapper>
      <Link to={item.route} onClick={handleClick}>
        {item.title}
        {item?.submenu && <TiArrowSortedDown className="arrow-down" />}
      </Link>
      {item?.submenu && <SubMenu
                          item={item.submenu} 
                          dropdown={dropdown} 
                        /> 
      }
    </LinkWrapper>
  )
}

export default NavLink;