import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';
import { AiOutlinePlus } from 'react-icons/ai';

export const Section = styled.section`
  padding: 6rem 0;
`;

export const Row = styled.div``;

export const TabsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
  margin-bottom: 2rem;

  & > button:not(:last-child) {
    margin-bottom: 1rem;
  }

  @media screen and (min-width: 678px) {
    flex-direction: unset;

    & > button:not(:last-child) {
      margin-bottom: 0;
    }
  }
`;

export const ItemWrapper = styled.div`
  
`;

export const Content = styled.div`
  padding: 4rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 35%;
  transform: translateY(100%);
  background: ${props => props.theme.colors.blueRibbon};
  transition: all .4s ease-in;
`;

export const Page = styled.div`
  display: none;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  justify-content: center;
  margin-top: 2rem;
  transition: all .4s;

  @media screen and (min-width: 476px) {
    grid-template-columns: calc((100% / 12) * 10);
  }

  @media screen and (min-width: 576px) {
    grid-template-columns: calc((100% / 12) * 8);
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, calc((100% / 12) * 4));
  }

  &.active {
    display: grid;
  }
`;

export const Item = styled.article`
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &:hover ${Content} {
    transform: translateY(0);
  }
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const IconPlus = styled(AiOutlinePlus)`
  font-size: 3rem;
  color: ${props => props.theme.colors.whiteSolid};
`;

export const Category = styled.p`
  font-size: 1.4rem;
  color: ${props => props.theme.colors.whiteSolid};
  margin-bottom: 1.2rem;
  text-transform: capitalize;
`;

export const Link = styled(GatsbyLink)`
  font-size: 1.8rem;
  text-decoration: none;
  color: ${props => props.theme.colors.whiteSolid};

  &:hover {
    text-decoration: underline;
  }
`;

export const Separator = styled.span`
  display: block;
  width: 28rem;
  height: 2px;
  margin: 0 auto;
  background: ${props => props.theme.colors.blueRibbon};
`;