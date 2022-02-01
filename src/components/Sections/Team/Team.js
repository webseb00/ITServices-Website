import React from 'react';
import { SectionTeam, Row, Box, ImageWrapper, List, ListItem, InfoWrapper, HeadingH6, InfoText } from './TeamStyles';
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import IntroHeading from '../../IntroHeading/IntroHeading';
import { Wrapper } from '../../Wrapper/Wrapper';
import * as AntIcons from 'react-icons/ai';

const Team = () => {

  const data = useStaticQuery(graphql`
    query MyTeamQuery {
      allTeamDataJson {
        edges {
          node {
            img {
              childImageSharp {
                gatsbyImageData
              }
            }
            name
            role
            socials
          }
        }
      }
    }
  `)

  function getTeamData(data) {
    const teamArray = data.allTeamDataJson.edges.map((item, index) => {
      const image = getImage(item.node.img);

      return (
        <Box 
          key={index}
          data-sal="fade"
          data-sal-duration="1500"
          data-sal-delay={`${index * 300}`}
        >
          <ImageWrapper>
            <GatsbyImage image={image} alt={item.node.name} />
          </ImageWrapper>
          <InfoWrapper>
            <HeadingH6>{item.node.name}</HeadingH6>
            <InfoText>{item.node.role}</InfoText>
          </InfoWrapper>
          <List>
            {
              item.node.socials.map((social, index) => {
                const socialIcon = AntIcons[social];
                return (
                  <ListItem key={index}>
                    {React.createElement(socialIcon)}
                  </ListItem>
                )
              })
            }
          </List>
        </Box>
      )
    });

    return teamArray;
  }

  return (
    <SectionTeam>
      <Wrapper>
        <IntroHeading
          labelTitle="GatsbyJS Team"
          headerText="Meet Our Expert Team"
          paragraphText="All types of businesses need access to development resources, so we give you the option to decide how much you need to use."
        />
        <Row>
          {getTeamData(data)}
        </Row>
      </Wrapper>
    </SectionTeam>
  )
}

export default Team;