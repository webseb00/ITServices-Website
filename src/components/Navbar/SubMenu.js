import React from 'react';
import { SubMenu as Menu, SubLink } from './NavbarStyles';
import { TiArrowRight } from 'react-icons/ti';

const SubMenu = ({ item, dropdown }) => {
  return (
    <Menu className={dropdown ? 'active' : ''}>
      {item.map((item, index) => (
        <SubLink 
          key={index} 
          to={item.route}
        >
          {item.title}
          <TiArrowRight />
        </SubLink>
      ))}
    </Menu>
  )
}

export default SubMenu;