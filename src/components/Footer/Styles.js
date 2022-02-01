import styled from 'styled-components';
import BgSrc from '../../images/icon.svg';

export const Container = styled.footer`
  position: relative;
  background: ${props => props.theme.colors.blueRibbon};
  padding: 6rem 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background-image: url(${BgSrc});
    width: 100%;
    height: 120px;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 6rem;

  @media screen and (min-width: 992px) {
    grid-template-columns: 1fr 2fr;
    grid-gap: 100px;
    margin-top: 8rem;
  }
`;


export const FormInfo = styled.p`
  font-size: 14px;
  font-weight: 300;
  color: ${props => props.theme.colors.whiteSolid};
  margin-top: 5px;
`;

export const Newsletter = styled.div`
  padding: 3rem 2.5rem;
  background-color: rgba(255,255,255,.1);
  border-radius: 5px;
  max-width: 700px;
  width: 100%;
  margin: 0 auto 3rem auto;

  @media screen and (min-width: 992px) {
    margin-bottom: 0;
  }
`;

export const Form = styled.form``;

export const Content = styled.div``;

export const HeadingH5 = styled.h5`
  font-size: 1.8rem;
  font-weight: 500;
  color: ${props => props.theme.colors.whiteSolid};
  margin-bottom: 1rem;

  @media screen and (min-width: 576px) {
    margin-bottom: 1.5rem;
  }
`;

export const TitleP = styled.p`
  font-weight: 400;
  color: ${props => props.theme.colors.whiteSolid};
`;

export const InputEmail = styled.input`
  margin: 1rem 0;
  width: 100%;
  border-radius: 5px;
  background: ${props => props.theme.colors.whiteSolid};
  padding: 2.2rem 1rem;
  text-align: center;
  border: none;
  outline: none;
`;

export const Separator = styled.span`
  margin: 6rem 0;
  background-color: rgba(255,255,255,.3);
  display: block;
  height: 1px;
`;

export const Copyright = styled.p`
  font-weight: 500;
  text-align: center;
  color: ${props => props.theme.colors.whiteSolid};
`;

export const Links = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  text-align: center;

  @media screen and (min-width: 576px) {
    grid-template-columns: repeat(3, calc((100% / 12) * 4));
  }

  @media screen and (min-width: 992px) {
    text-align: unset;
  }
`;

export const LinkList = styled.ul`
  list-style-type: none;
  margin-bottom: 1.5rem;

  @media screen and (min-width: 576px) {
    margin-bottom: 0;
  }
`;

export const LinkItem = styled.li`
  margin-bottom: .5rem;

  @media screen and (min-width: 576px) {
    margin-bottom: 1.2rem;
  }
`;

export const LinkPage = styled.a`
  font-size: 1.6rem;
  font-weight: 500;
  text-decoration: none;
  color: rgba(255,255,255,.6);
  transition: all .4s;

  &:hover {
    color: rgba(255,255,255, 1);
  }
`;

export const Media = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;

  @media screen and (min-width: 576px) {
    flex-direction: unset;
    justify-content: space-between;
  }
`;

export const HeadingH2 = styled.h2`
  color: ${props => props.theme.colors.whiteSolid};
  margin-bottom: 2rem;

  @media screen and (min-width: 576px) {
    margin-bottom: 0;
  }
`;

export const HeadingSpan = styled.span`

`;

export const SocialList = styled.ul`
  list-style-type: none;
  display: flex;
`;

export const SocialItem = styled.li`
  margin: 0 1rem;
`;

export const SocialLink = styled.a`
  text-decoration: none;
  color: ${props => props.theme.colors.whiteSolid};
  font-size: 3.2rem;
  transition: all .4s;
  cursor: pointer;
  
  &:hover {
    color: rgba(255,255,255, .6);
  }
`;