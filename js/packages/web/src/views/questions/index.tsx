import React from 'react';
import { Layout } from 'antd';
import { StaticPage } from '../../components/StaticPage';
import { data } from './staticData';

export const FaqView = () => {
  const mystyle = {
    color: "white",
    backgroundColor: "purple",
    padding: "18px",
    fontFamily: "Arial"
  };
  const styleParagraphe = {
    color: "white",
    padding: "15px",
    fontSize: "22px",

    fontFamily: "Arial"
  };

  return (
    <Layout style={{ margin: 0, alignItems: 'center' }}>
      <StaticPage
        leftContent={data.leftContent}
        headContent={data.headContent}
        midContent={data.midContent}
        bottomContent={data.bottomContent}
      />
      
     
      
       
    </Layout>
  );
};
