import { Col, Layout } from 'antd';
import React from 'react';
import Masonry from 'react-masonry-css';
import { Link } from 'react-router-dom';
import { ArtistCard } from '../../components/ArtistCard';
import { useMeta } from '../../contexts';

const { Content } = Layout;
let nameCo = "-";
let titleCo = "-";

export const ArtistsView = () => {
  const { whitelistedCreatorsByCreator } = useMeta();

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  const items = Object.values(whitelistedCreatorsByCreator);
  const artistGrid = (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid artists-masonry"
      columnClassName="my-masonry-grid_column"
    >
      {items.map((m, idx) => {
        const id = m.info.address;
        const backg = "https://thedarkvr.github.io/shop//banner"+id+".jpeg"
        const user = "https://thedarkvr.github.io/shop//banner"+id+".jpeg"

if(id == "EKnPP11RAyDw5DHGyvNWq6gq8jrwHCTQvNzaKAGFSfFF"){
  titleCo = "Sur le départ du soleil";
  nameCo = "Sur le départ du soleil";

  return (
         
    <Link to={`/artists/${id}`} key={idx}>
      <ArtistCard
        key={id}
        artist={{
          address: m.info.address,
          name: nameCo || '',
          image: user || '',
          link: m.info.twitter || '',
          background: backg || '',
        }}
      />
    </Link>
  );

  
} 
if(id == "EKnPP11RAyDw5DHGyvNWq6gq8jrwHCTQvNzaKAGFSfFF"){
  titleCo = "Un coucher ";
  nameCo = "L'hymne de nos montagnes";
} 
     



      })}


    </Masonry>
  );

  return (
    <Layout style={{ margin: 0, marginTop: 30 }}>
      <Content style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Col style={{ width: '100%', marginTop: 10 }}>{artistGrid}</Col>
      </Content>
    </Layout>
  );
};
