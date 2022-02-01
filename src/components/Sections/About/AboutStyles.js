import styled from 'styled-components';

export const SectionAbout = styled.section`
  padding: 6rem 0;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 576px) {
    grid-template-columns: calc((100% / 12) * 10);
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: calc((100% / 12) * 8);
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(2, calc((100% / 12) * 6));
    justify-content: unset;
  }
`;

export const Content = styled.div`

`;

export const Gallery = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  align-items: center;
  grid-gap: 2rem;
  padding: 1rem;
  margin: 4rem 0;

  @media screen and (min-width: 992px) {
    margin: 0;
  }

  & .gatsby-image-wrapper {
    box-shadow: 0 5px 40px 0px rgb(140 152 164 / 60%)
  }

  & .gatsby-image-wrapper img {
    max-width: 100%;
    height: auto;
  }
`;

export const ColFirst = styled.div`
  & img {
    margin-top: -1.5rem;
  }
`;

export const ColSecond = styled.div`
  display: grid;
  grid-gap: 2rem;
`;

export const InfoWrapper = styled.div`

`;

export const InfoText = styled.p`
  margin: 2rem 0;
`;