import React from 'react';
import { Item, Content, InfoBox, Category, Link, IconPlus } from './Styles';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const PageItem = ({ items })  => {

  function getItems() {
  
    const itemsArray = items.map((item, index) => {
      const image = getImage(item.node.img);
      const imageAlt = item.node.tags.map(el => el).join(',');
 
      return (
        <Item key={index}>
          <GatsbyImage 
            image={image} 
            alt={imageAlt}
          />
          <Content>
            <InfoBox>
              <Category>
                {
                  item.node.tags.map((el, index) => {
                    const tagsLength = item.node.tags.length;
                    return tagsLength === index+1 ? el : `${el} | `;
                  })
                }
              </Category>
              <Link to="/">{item.node.name}</Link>
            </InfoBox>
            <IconPlus/>
          </Content>
        </Item>
      )
    });
    return itemsArray;
  }

  return (
    <>
      {getItems()}
    </>
  )
}

export default PageItem;