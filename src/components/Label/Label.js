import React from 'react';
import styled from 'styled-components';

const Label = ({ title }) => {
  return <LabelWrapper>{title}</LabelWrapper>
}

export default Label;

const LabelWrapper = styled.span`
  background-color: ${props => props.theme.colors.solitude};
  padding: 8px;
  border-radius: 5px;
  font-size: 13px;
  font-weight: 500;
  color: ${props => props.theme.colors.blueRibbon};
  display: inline-block;
`;