import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

export const Button = styled(Link)`
  display: ${props => props.block ? 'block' : 'inline-block'};
  font-weight: 500;
  border-radius: 5px;
  padding: 1.4rem 1.6rem;
  color: ${props => props.theme.colors.whiteSolid};
  background-color: ${props => props.theme.colors.blueRibbon};
  transition: all .4s ease-in;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.colors.whiteSolid};
    background: ${props => props.theme.colors.pomegranate}
  }

  ${props => props.secondary && css`
    color: ${props => props.theme.colors.blueRibbon};
    background-color: ${props => props.theme.colors.whiteSolid};
    border: 1px solid ${props => props.theme.colors.blueRibbon};

    &:hover {
      border-color: ${props => props.theme.colors.pomegranate};
    }
  `}

  ${props => props.white && css`
    color: ${props => props.theme.colors.whiteSolid};
    border: 1px solid ${props => props.theme.colors.whiteSolid};
    background-color: transparent;
    text-align: center;

    &:hover {
      color: ${props => props.theme.colors.blackSolid};
      background-color: ${props => props.theme.colors.whiteSolid};
    }
  `}
`;