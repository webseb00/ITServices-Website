import styled from 'styled-components';

export const SectionTeam = styled.section`
  padding: 6rem 0;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  margin-top: 6rem;

  @media screen and (min-width: 476px) {
    grid-template-columns: calc((100% / 12) * 10);
  }

  @media screen and (min-width: 576px) {
    grid-template-columns: repeat(2, calc((100% / 12) * 6));
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, calc(100% / 4));
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.whiteSolid};
  transition: all .4s;
  cursor: pointer;
  border-radius: 5px;
  padding: 1rem;
  margin-bottom: 2.5rem;

  &:hover {
    transform: translateY(-20px);
    box-shadow: 0px 10px 40px 5px rgb(231 239 254);
  }

  @media screen and (min-width: 576px) {
    padding: 2rem;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const ImageWrapper = styled.div``;

export const InfoWrapper = styled.div`
  margin: 1rem 0;
  text-align: center;

  @media screen and (min-width: 768px) {
    margin: 2.5rem 0;
  }
`;

export const HeadingH6 = styled.h6`
  font-size: 18px;
  font-weight: 500;
`;

export const InfoText = styled.p`
  font-size: 14px;
  font-weight: 400;
`;

export const List = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ListItem = styled.li`
  margin: 0 5px;

  svg {
    width: 3rem;
    height: 3rem;
    color: ${props => props.theme.colors.blueRibbon};
    transition: color .4s ease-in;
  }

  svg:hover {
    color: ${props => props.theme.colors.pomegranate};
  }
`;