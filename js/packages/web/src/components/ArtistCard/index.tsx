import React from 'react';
import { Card } from 'antd';

import { Artist } from '../../types';

import { shortenAddress } from '@oyster/common';
import { MetaAvatar } from '../MetaAvatar';

export const ArtistCard = ({ artist }: { artist: Artist }) => {



  return (
    <div>
    <Card
      hoverable={true}
      className={`artist-card`}
      cover={
        <div className="header-container">
          {artist.background ? <img src={artist.background} /> : null}
        
        </div>
        
      }
      
      bordered={false}
    >
      <>

      <span>
        <h3 className={`artist-name`}>{artist.name || shortenAddress(artist.address || '')}</h3>
      <br>
      </br>
      {artist.about} 
      </span>

      </>
      
    </Card>

    </div>
  );
};
