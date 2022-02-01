import styled from 'styled-components';

export const HeroContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;
  margin-top: 6rem;
  padding: 6rem 0;
  grid-gap: 4rem;

  @media screen and (min-width: 576px) {
    grid-template-columns: calc((100% / 12) * 10);
  }

  @media screen and (min-width: 768px) {
    margin-top: 8rem;
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;

  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    text-align: unset;
    align-items: unset;
  }
`;

export const HeroH1 = styled.h1`
  font-weight: 600;
  font-size: 4.4rem;
  line-height: 5rem;

  @media screen and (min-width: 476px) {
    font-size: 5rem;
    line-height: 6rem;
  }

  @media screen and (min-width: 768px) {
    font-size: 6rem;
    line-height: 7rem;
  }
`;

export const HeroText = styled.p`
  font-size: 1.8rem;
  font-weight: 300;
  margin: 2rem 0;
  color: ${props => props.theme.colors.regentGray};
  
  @media screen and (min-width: 768px) {
    font-size: 2rem;
    margin: 3rem 0;
  }
`;

export const HeroSpan = styled.span`
  color: ${props => props.theme.colors.blueRibbon};
`;

export const HeroBg = styled.div`
  text-align: center;
`;

export const HeroImg = styled.img`
  /* max-width: 50rem; */
`;

export const HeroButtons = styled.div`
  display: flex;
  line-height: normal;

  a:first-child {
    margin-right: 5px;
  }
`;