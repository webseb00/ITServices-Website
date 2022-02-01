import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import SubPage from './SubPage';
import { Wrapper } from '../../Wrapper/Wrapper';
import IntroHeading from '../../IntroHeading/IntroHeading';
import { 
  Section, 
  Row, 
  TabsWrapper, 
  ItemWrapper, 
  Separator
} from './Styles';
import Tabs from '../../Tabs/Tabs';
import Pagination from '../../Pagination/Pagination';

const Portfolio = () => {

  const tabsArray = ["All Work", "Development", "Marketing", "Branding", "Design"];

  const [filteredItems, setFilteredItems] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataItemsArray, setDataItemsArray] = useState(null);

  const data = useStaticQuery(graphql`
    query PortfolioQuery {
      allPortfolioDataJson {
        edges {
          node {
            img {
              childImageSharp {
                gatsbyImageData
              }
            }
            name
            tags
          }
        }
      }
    }
  `);

  useEffect(() => {
    renderPages();
  }, []);

  function filterItems(text) {
    if(text !== 'All Work') {
      setCurrentPage(1);
      let items = getPortfolioData(data, text);
      setFilteredItems(items);
    } else {
      renderPages();
      setFilteredItems(null);
    }
  }

  function renderPages() {
    return getPortfolioData(data, null);
  }

  function getPortfolioData(data, type) {
    let portfolioArray;

    if(type) {
      portfolioArray = data.allPortfolioDataJson.edges.filter(item => item.node.tags.includes(type.toLowerCase()));
    } else {
      portfolioArray = data.allPortfolioDataJson.edges;
    }
    
    const arr = [...portfolioArray];
    let subArr = [];

    while(arr.length > 0) {
      const get = arr.splice(0, 6);
      subArr.push(get);
    }

    setDataItemsArray(subArr);
  }

  return (
    <Section
      data-sal="zoom-in"
      data-sal-duration="1500"
      data-sal-delay="300"
    >
      <Wrapper>
        <IntroHeading 
          labelTitle="Our Portfolio"
          headerTitle="Check some of our products below"
          paragraphText="All types of businesses need access to development resources, so we give you the option to decide how much you need to use"
        />
        <Row>
          <TabsWrapper>
            <Tabs filterItems={filterItems} tabsArr={tabsArray} />
          </TabsWrapper>
          <Separator />
          <ItemWrapper>
            {
              dataItemsArray && 
              <SubPage 
                items={dataItemsArray} 
                current={currentPage} 
              />
            }
          </ItemWrapper>
        </Row>
        {
          dataItemsArray && 
          <Pagination 
            pageItemsLength={dataItemsArray || filteredItems} 
            setPage={setCurrentPage} 
            current={currentPage} 
          />
        }
      </Wrapper>
    </Section>
  )
}

export default Portfolio;