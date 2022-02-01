import React, { useState, useEffect } from 'react';
import { Nav, NavWrapper, Title, NavMenu, ToggleButton } from './NavbarStyles';
import { Button } from '../Button/Button';
import { NavLinks } from '../../data/navlinks';
import { AiOutlineMenu } from 'react-icons/ai';
import NavLink from './NavLink';

const Navbar = () => {

  const [mobileMenu, setMobile] = useState(false);
  const [pageOffset, setPageOffset] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    setMobile(!mobileMenu);
  }

  const handleScroll = () => {
    const element = window.pageYOffset;
    
    if(element >= 200) {
      setPageOffset(true);
    } else {
      setPageOffset(false);
    }
  }

  return (
    <Nav className={pageOffset ? 'shrink' : ''}>
      <NavWrapper>
        <Title to="/home">
          Gatsby<span className="title-blue">Theme.</span>
        </Title>
        <NavMenu className={mobileMenu ? 'active' : ''}>
          {NavLinks.map((item, index) => <NavLink key={index} item={item} />)}
        </NavMenu>
        <Button 
          className={`btn-primary ${pageOffset ? 'shrink' : ''}`}
          type="button" 
          primary="true"
        >
          Buy Now
        </Button>
        <ToggleButton
          type="button"
          onClick={handleClick}
        >
          <AiOutlineMenu />
        </ToggleButton>
      </NavWrapper>
    </Nav>
  )
}

export default Navbar;