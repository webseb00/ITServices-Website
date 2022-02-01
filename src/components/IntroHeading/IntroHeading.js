import React from 'react';
import styled from 'styled-components';
import Label from '../Label/Label';

const IntroHeading = ({ align, labelTitle, headerText, paragraphText }) => {
  return (
    <HeadingWrapper 
      alignContent={align}
      data-sal="fade"
      data-sal-duration="1500"
      data-sal-delay="300" 
      >
      <Label title={labelTitle} />
      <HeadingH2>{headerText}</HeadingH2>
      <HeadingText>{paragraphText || ''}</HeadingText>
    </HeadingWrapper>
  )
}

export default IntroHeading;

const handleTextAlign = alignContent => {
  switch(alignContent) {
    case "right":
      return "right";
    case "left":
      return "left";
    default:
      return "center";
  }
}

const HeadingWrapper = styled.div`
  text-align: ${props => handleTextAlign(props.alignContent)};
`;

const HeadingH2 = styled.h2`
  font-size: 2.6rem;
  font-weight: 500;
  margin: 1rem 0;

  @media screen and (min-width: 576px) {
    font-size: 3rem;
  }
`;

const HeadingText = styled.p`
  font-size: 1.8rem;
  font-weight: 300;
  color: ${props => props.theme.colors.regentGray};

  @media screen and (min-width: 768px) {
    font-size: 2rem;
  }
`;