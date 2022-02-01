import React from 'react';
import styled from 'styled-components';

const Pagination = ({ pageItemsLength, setPage, current }) => {

  function handlePage(e) {
    e.preventDefault();
    setPage(Number(e.target.dataset.id));
  }

  function countPages() {
    const pagesArray = pageItemsLength.map((page, index) => (
      <ListItem key={index}>
        <ListLink 
          onClick={handlePage} 
          data-id={index+1} 
          className={current === index+1 ? 'active' : ''}
        >
          {index+1}
        </ListLink>
      </ListItem>
    ));

    return pagesArray;
  }

  return (
    <Wrapper>
      <List>
        {countPages()}
      </List>
    </Wrapper>
  )
}

export default Pagination;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 3rem 0;
`;

const List = styled.ul`
  list-style-type: none;
  display: flex;
  border-radius: 5px;
  border: 1px solid rgba(0,0,0,.2);
  overflow: hidden;
  
  & li:not(:first-child) {
    border-left: 1px solid rgba(0,0,0,.2);
  }
`;

const ListItem = styled.li``;

const ListLink = styled.a`
  display: inline-block;
  text-decoration: none;
  color: ${props => props.theme.colors.blueRibbon};
  padding: .8rem 1.2rem;
  cursor: pointer;
  transition: all .4s;

  &:hover,
  &.active {
    background-color: ${props => props.theme.colors.blueRibbon};
    color: ${props => props.theme.colors.whiteSolid};
  }
`;