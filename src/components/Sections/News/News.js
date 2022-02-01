import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'; 
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Wrapper } from '../../Wrapper/Wrapper';
import IntroHeading from '../../IntroHeading/IntroHeading';
import { 
  SectionNews, 
  Row, 
  Post, 
  Date, 
  Day, 
  Month, 
  Image, 
  Content, 
  Tag,
  Text, 
  TitleH4, 
  Link } 
from './NewsStyles';

const News = () => {

  const data = useStaticQuery(graphql`
    query NewsQuery {
      allNewsDataJson {
        edges {
          node {
            date_day
            date_month
            tag
            text
            title
            img {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `);

  function getLatestPosts(data) {
    const newsArray = data.allNewsDataJson.edges.map((post, index) => {
      const image = getImage(post.node.img);

      return (
        <Post 
          key={index}
          data-sal="slide-up"
          data-sal-duration="1500"
          data-sal-delay="300"
        >
          <Date>
            <Day>{post.node.date_day}</Day>
            <Month>{post.node.date_month}</Month>
          </Date>
          <Image>
            <GatsbyImage image={image} alt={post.node.tag} />
          </Image>
          <Content>
            <Tag>{post.node.tag}</Tag>
            <TitleH4>{post.node.title}</TitleH4>
            <Text>{post.node.text}</Text>
            <Link to="/">Read More</Link>
          </Content>
        </Post>
      )
    })

    return newsArray;
  }

  return (
    <SectionNews>
      <Wrapper>
        <IntroHeading 
          labelTitle="Latest News"
          headerText="Latest News From Our Blog"
          paragraphText="All types of businesses need access to development resources, so we give you the option to decide how much you need to use."
        />
        <Row>
          {getLatestPosts(data)}
        </Row>
      </Wrapper>
    </SectionNews>
  )
}

export default News;