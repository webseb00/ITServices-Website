import React from 'react';
import PageItem from './PageItem';

import { Page } from './Styles';

const SubPage = ({ items, current }) => { 
  return (
    <>
    {
      items.map((item, index) => (
      <Page 
        className={current === index+1 ? 'active' : '' }
        key={index}
        id={index+1}
        >
        <PageItem items={item} />
      </Page>
    ))
    }
    </>
  )
}

export default SubPage;