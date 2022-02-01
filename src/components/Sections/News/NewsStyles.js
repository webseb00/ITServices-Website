import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';

export const SectionNews = styled.section`
  padding: 5rem 0;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  justify-content: center;

  @media screen and (min-width: 476px) {
    grid-template-columns: calc((100% / 12) * 8);
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, calc((100% / 12) * 6));
  }
`;

export const Post = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  margin-top: 4rem;
  padding: 2rem;
  background: ${props => props.theme.colors.whiteSolid};
  border-radius: 5px;
  position: relative;
  box-shadow: 0 0px 60px 0px rgb(231 239 254);

  @media screen and (min-width: 992px) {
    grid-template-columns: 1.5fr 2fr;
  }
`;

export const Date = styled.p`
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.whiteSolid};
  color: ${props => props.theme.colors.blackSolid};
  box-shadow: 0 6px 15px 0px rgb(0 0 0 / 15%);
  border-radius: 5px;
  padding: 8px;
  z-index: 99;
`;

export const Day = styled.span``;

export const Month = styled.span``;

export const Image = styled.div``;

export const Content = styled.div``;

export const Tag = styled.span`
  color: ${props => props.theme.colors.regentGray};
`;

export const TitleH4 = styled.h4`
  margin: 1rem 0;
  font-weight: 500;
  font-size: 1.8rem;
`;

export const Text = styled.p`
  margin-bottom: 1rem;
`;

export const Link = styled(GatsbyLink)`
  text-decoration: none;
  color: ${props => props.theme.colors.blueRibbon};

  &:hover {
    text-decoration: underline;
  }
`;