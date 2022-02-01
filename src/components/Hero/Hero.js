import React from 'react';
import { HeroContainer, HeroContent, HeroH1, HeroSpan, HeroBg, HeroImg, HeroText, HeroButtons } from './HeroStyles';
import HeroGraphic from '../../images/hero.png';
import { Button } from '../Button/Button';
import { Wrapper } from '../Wrapper/Wrapper';

const Hero = () => {
  return (
    <Wrapper>
      <HeroContainer>
        <HeroContent 
          data-sal="fade" 
          data-sal-delay="300" 
          data-sal-duration="1500"
        >
          <HeroH1>
            Truly <HeroSpan>Flexible And Creative</HeroSpan> Landing Page
          </HeroH1>
          <HeroText>
            Build beautiful and clean website with Gatsby and Bootstrap 5 flexible components
          </HeroText>
          <HeroButtons>
            <Button type="button" primary="true">Contact Us</Button>
            <Button type="button" secondary="true">Get Started</Button>
          </HeroButtons>
        </HeroContent>
        <HeroBg 
          data-sal="fade" 
          data-sal-delay="300" 
          data-sal-duration="1500"
        >
          <HeroImg src={HeroGraphic} alt="People" />
        </HeroBg>
      </HeroContainer>
    </Wrapper>
  )
}

export default Hero;