import styled from 'styled-components';

export const SectionPricing = styled.section`
  padding: 6rem 0;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;
  margin-top: 6rem;

  @media screen and (min-width: 476px) {
    grid-template-columns: calc((100% / 12) * 10);
  }

  @media screen and (min-width: 576px) {
    grid-template-columns: calc((100% / 12) * 8);
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: calc((100% / 12) * 6);
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(3, calc((100% / 12) * 4));
  }
`;

export const Row40 = styled.div`
  width: 100%;

  @media screen and (min-width: 992px) {
    width: 40%;
  }
`;

export const Table = styled.div`
  border-radius: 5px;
  padding: 3rem;
  margin: 0 2rem 3rem 2rem;
  text-align: center;
  box-shadow: 0 0px 60px 0px rgb(231 239 254);

  @media screen and (min-width: 992px) {
    margin: 0 2rem;
  }
`;

export const TableHeader = styled.header`
  .gatsby-image-wrapper {
    max-width: 24rem;
  }
`;

export const HeadingH6 = styled.h6`
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;
  padding-bottom: 2rem;
`;

export const TableBody = styled.div`
  padding: 2rem 0;
`;

export const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  color: ${props => props.theme.colors.regentGray};
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:not(:last-child) {
    padding-bottom: 2rem;
  }
`;

export const Icon = styled.span`
 color: ${props => props.theme.colors.blueRibbon};
`;

export const Price = styled.div`
  margin-bottom: 2rem;
`;

export const PriceInfo = styled.div`
  font-size: 7.4rem;
  font-weight: 500;
  color: ${props => props.theme.colors.blueRibbon};
`;

export const PriceSign = styled.span`
  font-size: 3.4rem;
  font-weight: 300;
  color: ${props => props.theme.colors.blackSolid};
  vertical-align: super;
`;

export const PriceText = styled.p`

`;

export const TableFooter = styled.footer`

`;