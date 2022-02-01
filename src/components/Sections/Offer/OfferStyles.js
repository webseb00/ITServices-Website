import styled from 'styled-components';
import { Link } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";

export const SectionOffer = styled.section`
  padding: 8rem 0;
`;

export const Row = styled.div`
  margin-top: 6rem;
  display: grid;
  grid-template-columns: 1fr;
  align-content: center;
  justify-content: center;

  @media screen and (min-width: 476px) {
    grid-template-columns: calc((100% / 12) * 10);
  }

  @media screen and (min-width: 576px) {
    grid-template-columns: calc((100% / 12) * 8);
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, calc(100% / 3));
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all .4s ease-out;
  margin: 0 1.5rem;
  padding: 3rem 1.5rem;
  border-radius: 5px;

  &:hover {
    transform: translateY(-20px);
  }

  &:first-child:hover,
  &:last-child:hover {
    box-shadow: 0px 10px 40px 5px rgb(231 239 254);
  }
  
  &:nth-child(2) {
    box-shadow: 0px 10px 40px 5px rgb(231 239 254);
  }
`;

export const ImageWrapper = styled.div`

`;

export const Image = styled(GatsbyImage)`

`;

export const HeadingH5 = styled.h5`
  font-size: 2rem;
  font-weight: 500;
  margin-top: 2rem;
`;

export const InfoText = styled.p`
  text-align: center;
  margin: 2rem 0;
`;

export const InfoLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colors.blueRibbon};

  &:hover {
    text-decoration: underline;
  }
`;