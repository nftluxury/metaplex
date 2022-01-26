import { Col, Divider, Row } from 'antd';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArtCard } from '../../components/ArtCard';
import { CardLoader } from '../../components/MyLoader';
import { useCreator, useCreatorArts } from '../../hooks';

export const ArtistView = () => {
  const { id } = useParams<{ id: string }>();
  const creator = useCreator(id);
  const artwork = useCreatorArts(id);
  let nameCo = "-";
  let titleCo = "-";
  const artworkGrid = (
    <div className="artwork-grid">
      {artwork.length > 0
        ? artwork.map((m, idx) => {
            const id = m.pubkey;
            return (
              <Link to={`/art/${id}`} key={idx}>
                <ArtCard
                  key={id}
                  pubkey={m.pubkey}
                  preview={false}
                  artView={true}
                />
              </Link>
            );
          })
        : [...Array(6)].map((_, idx) => <CardLoader key={idx} />)}
    </div>
  );


if(creator?.info.address == "EKnPP11RAyDw5DHGyvNWq6gq8jrwHCTQvNzaKAGFSfFF"){
  titleCo = "Un coucher de soleil de temps en temps";
  nameCo = "Un coucher de soleil de temps en temps";
} 

var url = "https://explorer.solana.com/address/" + creator?.info.address.toString() + "/tokens?cluster=devnet";

  return (
    <>
      <Col>
        <Divider />
        <Row
          style={{ margin: '0 30px', textAlign: 'left', fontSize: '1.4rem' }}
        >
          <Col span={24}>
            <h2>
              {titleCo}
            </h2>
            <br />
            <div className="info-header">Au sujet de la collection</div>
            <div className="info-content">{nameCo}</div>
            <div className="info-content">Visible sur l'<a href={url}> Explorer Blockchain</a></div>
            <br />
            <div className="info-header">Item  de la collection</div>
            {artworkGrid}
          </Col>
        </Row>
      </Col>
    </>
  );
};
