import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { AiOutlineCheck } from 'react-icons/ai';
import { 
  SectionPricing, 
  Row,
  Row40, 
  Table, 
  TableHeader, 
  HeadingH6, 
  TableBody, 
  TableFooter, 
  List, 
  ListItem, 
  Icon,
  Price,
  PriceInfo,
  PriceSign,
  PriceText
} from './PricingStyles';
import { Wrapper } from '../../Wrapper/Wrapper';
import { Button } from '../../Button/Button';
import IntroHeading from '../../IntroHeading/IntroHeading';

const Pricing = () => {

  const data = useStaticQuery(graphql`
    query PricingQuery {
      allPricingPlanDataJson {
        edges {
          node {
            img {
              childImageSharp {
                gatsbyImageData
              }
            }
            features
            type
            price
            intended_for
          }
        }
      }
    }
  `);

  function getPricingData(data) {
    const pricingArray = data.allPricingPlanDataJson.edges.map((item, index) => {
      const image = getImage(item.node.img);

      return (
        <Table 
          key={index}
          data-sal="fade"
          data-sal-duration="1500"
          data-sal-delay={`${index * 300}`}
        >
          <TableHeader>
            <HeadingH6>{item.node.type}</HeadingH6>
            <GatsbyImage 
              image={image}
              alt={item.node.type}
            />
          </TableHeader>
          <TableBody>
            <List>
              {item.node.features.map((el, index) => (
                <ListItem key={index}>
                  {el}
                  <Icon>
                   <AiOutlineCheck />
                  </Icon>
                </ListItem>
              ))}
            </List>
            <Price>
              <PriceInfo>
                <PriceSign>$</PriceSign>{item.node.price}
              </PriceInfo>
              <PriceText>{item.node.intended_for}</PriceText>
            </Price>
          </TableBody>
          <TableFooter>
            <Button 
              type="button" 
              block="true"
            >
              Choose Plan
            </Button>
          </TableFooter>
        </Table> 
      )
    });

    return pricingArray;
  }

  return (
    <SectionPricing>
      <Wrapper>
        <Row40>
          <IntroHeading 
            align="left"
            labelTitle="Pricing Tables"
            headerText="Simple, Fair and affordable prices for all."
          />
        </Row40>
        <Row>
          {getPricingData(data)}
        </Row>
      </Wrapper>
    </SectionPricing>
  )
}

export default Pricing;