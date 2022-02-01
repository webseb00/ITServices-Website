import styled from 'styled-components';
import { Link } from 'gatsby';

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 10px;
  background-color: ${props => props.theme.colors.whiteSolid};
  transition: all .4s;
  z-index: 999;

  &.shrink {
    padding: 5px;
    box-shadow: 0px 5px 20px 0px rgb(0 0 0 / 8%);
  }

  .btn-primary {
    display: none
  }

  .btn-primary.shrink {
    padding: 1rem 1.6rem;
  }

  @media screen and (min-width: 768px) {
    .btn-primary {
      display: block;
    } 
  }
`;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1140px;
  margin: 0 auto;
`;

export const Title = styled(Link)`
  font-size: 3.2rem;
  font-weight: 300;
  cursor: pointer;
  text-decoration: none;
  color: rgba(0,0,0,.65);
  
  .title-blue {
    font-weight: 700;
    color: ${props => props.theme.colors.blueRibbon};
  }
`;

export const NavMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 100%;
  left: 10%;
  right: 10%;
  font-size: 18px;
  transition: all .4s ease-in;
  visibility: hidden;
  opacity: 0;
  background-color: ${props => props.theme.colors.whiteSolid};

  &.active {
    visibility: visible;
    opacity: 1;
  }

  @media screen and (min-width: 768px) {
    position: unset;
    flex-direction: row;
    visibility: visible;
    opacity: 1;
  }
`

export const LinkWrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  font-size: 1.6rem;
  font-weight: 400;
  text-decoration: none;
  color: ${props => props.theme.colors.regentGray};
  transition: all .4s ease-in;

  @media screen and (min-width: 768px) {
    display: flex;
    margin: 0 10px;
    padding: unset;
    justify-content: unset;
  }

  &:hover {
    color: ${props => props.theme.colors.blueRibbon}
  }

  .arrow-down {
    margin-left: 4px;
    vertical-align: middle;
  }
`;

export const SubMenu = styled.div`
  width: 100%;
  display: none;
  flex-direction: column;
  padding: 0 1.5rem;
  overflow: hidden;
  background-color: ${props => props.theme.colors.whiteSolid};
  
  &.active {
    display: flex;
  }

  @media screen and (min-width: 768px) {
    position: absolute;
    top: 140%;
    left: 5px;
    width: 18rem;
    padding: 0;
    border-radius: 5px;
    box-shadow: ${props => props.theme.shadows.light};
  }
`;

export const SubLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  width: 100%;
  padding: 10px;
  font-weight: 500;
  color: ${props => props.theme.colors.regentGray};
  transition: all .4s ease-in;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    padding: 10px 15px;
  }

  &:hover {
    padding: 10px 20px;
    background-color: ${props => props.theme.colors.blueRibbon};
    color: ${props => props.theme.colors.whiteSolid};
  }

  svg {
    margin-left: auto;
  }

`;

export const ToggleButton = styled.button`
  border: 1px solid ${props => props.theme.colors.regentGray};
  padding: 6px;
  display: block;
  background-color: unset;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    display: none;
  }

  svg {
    font-size: 26px;
    color: ${props => props.theme.colors.regentGray};
    vertical-align: middle;
  }
`;