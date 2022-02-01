import React from 'react';
import { SectionAbout, Row, Content, Gallery, InfoWrapper, InfoText, ColFirst, ColSecond } from './AboutStyles';
import { Wrapper } from '../../Wrapper/Wrapper';
import IntroHeading from '../../IntroHeading/IntroHeading';
import { Button } from '../../Button/Button';
import { StaticImage } from "gatsby-plugin-image";

const About = () => {
  return (
    <SectionAbout>
      <Wrapper>
        <Row>
          <Content
            data-sal="slide-right"
            data-sal-duration="1500"
            data-sal-delay="300"
          >
            <IntroHeading 
              align="left"
              labelTitle="About GatsbyTheme"
              headerText="Bootsland Crafting Beautiful Experience"
              paragraphText="We use the latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam."
            />
            <InfoWrapper>
              <InfoText>
                We use the latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam.
              </InfoText>
              <Button 
                type="button" 
                secondary="true"
              >
                Learn More
              </Button>
            </InfoWrapper>
          </Content>
          <Gallery
            data-sal="slide-left"
            data-sal-duration="1500"
            data-sal-delay="300"
          >
            <ColFirst>
              <StaticImage 
                src="../../../images/about_1.jpg" 
                alt="Person 1"
                style={{
                  borderRadius: '5px'
                }}
              />
            </ColFirst>
            <ColSecond>
              <StaticImage 
                src="../../../images/about_2.jpg" 
                alt="Person 2"
                style={{
                  borderRadius: '5px'
                }}
              />
              <StaticImage 
                src="../../../images/about_3.jpg" 
                alt="Person 3"
                style={{
                  borderRadius: '5px'
                }}
              />
            </ColSecond>
          </Gallery>
        </Row>
      </Wrapper>
    </SectionAbout>
  )
}

export default About;