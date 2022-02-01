import React, { useState } from 'react';
import styled from 'styled-components';

const Tabs = ({ title, index, filterItems, tabsArr }) => {

  const [currentTab, setCurrentTab] = useState(0);

  const handleTabName = e => {
    filterItems(e.target.dataset.filter);
    setCurrentTab(Number(e.target.id));
  }

  const getTabs = tabsArr => {
    const arr = tabsArr.map((title, index) => (
        <Tab 
          key={index}
          type="button" 
          data-filter={title} 
          onClick={handleTabName}
          className={currentTab === index ? 'active' : ''}
          id={index}
        >
          {title}
        </Tab>
    ));
    return arr;
  }

  return (
    <>
      {getTabs(tabsArr)}
    </>
  )

}

export default Tabs;

const Tab = styled.button`
  font-size: 17px;
  font-weight: 400;
  padding: 1.2rem;
  color: ${props => props.theme.colors.blackSolid};
  background: transparent;
  margin: 0 .5rem;
  border: none;
  outline: none;
  border-radius: 5px;
  transition: all .4s;
  cursor: pointer;
  
  &.active,
  &:hover {
    color: ${props => props.theme.colors.whiteSolid};
    background: ${props => props.theme.colors.blueRibbon};
  }
`;