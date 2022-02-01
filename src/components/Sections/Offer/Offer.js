import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import { SectionOffer, Row, Box, ImageWrapper, Image, HeadingH5, InfoText, InfoLink } from './OfferStyles'; 
import { Wrapper } from '../../Wrapper/Wrapper';
import IntroHeading from '../../IntroHeading/IntroHeading';
import { getImage } from "gatsby-plugin-image";

const Offer = () => {

  const data = useStaticQuery(graphql`
    query MyQuery {
      allOfferDataJson {
        edges {
          node {
            img {
              childImageSharp {
                gatsbyImageData
              }
            }
            link_route
            link_text
            alt
            text
            heading
          }
        }
      }
    }
  `)

  const getOfferData = data => {
    const offerArray = data.allOfferDataJson.edges.map((item, index) => {
      const image = getImage(item.node.img);
      return (
        <Box 
          key={index}
          data-sal="fade"
          data-sal-duration="1500"
          data-sal-delay={`${index * 300}`}
        >
          <ImageWrapper>
            <Image image={image} alt={item.node.alt} />
          </ImageWrapper>
          <HeadingH5>{item.node.heading}</HeadingH5>
          <InfoText>{item.node.text}</InfoText>
          <InfoLink to={item.node.link_route}>{item.node.link_text}</InfoLink>
        </Box>
      )
    });

    return offerArray;
  }

  return (
    <SectionOffer>
      <Wrapper>
        <IntroHeading 
          labelTitle="What We Offered"
          headerText="Creative Design And Creative Services"
          paragraphText="All types of businesses need access to development resources, so we give you the option to decide how much you need to use."
        />
        <Row>
          {getOfferData(data)}
        </Row>
      </Wrapper>
    </SectionOffer>
  )
}

export default Offer;