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
      
     
        <br></br>
      <h1 style={mystyle}>Solana</h1>
      <br>
      </br>
      <p style={styleParagraphe}>Anatoly Yakovenko, un ancien collaborateur de Qualcomm et Dropbox,
       a fondé et annoncé la plateforme en 2017, lorsqu’il a publié le projet de <a href="https://solana.com/fr"
       >Solana</a>.
       Solana est la première référence écrite de la Proof of History, décrite comme une nouvelle façon de 
      mesurer le temps pour les systèmes distribués sur la blockchain. 
      Solana est une blockchain programmable qui s’efforce d’effectuer des transactions à grande
       vitesse sans perdre sa caractéristique principale, la décentralisation.</p>
       <p style={styleParagraphe}>Nous vous conseillons d'un peu lire sur ce qu'est Solana et ce que sont les blockchains. 
         Nous vous conseillons <a href="https://actualiteinformatique.fr/cryptomonnaie/quest-ce-que-solana-sol#:~:text=Solana%20est%20une%20blockchain%20programmable,appel%C3%A9%20%C2%AB%20Proof%20of%20History%20%C2%BB.&text=Solana%20est%20un%20concurrent%20direct%20du%20r%C3%A9seau%20Ethereum.">
         Qu’est-ce que Solana (SOL) ?

         </a>
         ou la <a href="https://academy.binance.com/fr/articles/what-is-solana-sol">Binance Academy - Solana? </a>
            afin de mieux comprendre ce que c'est. Il est vivement toujours conseillé de se renseigner en profondeur avant 
   de transférer de l'argent dans une blockchain.
       </p>
       <h1 style={mystyle}>Les NFTs</h1>

       <p style={styleParagraphe}> Les tokens NFT sont  des objets numériques (image, vidéo, audio, etc.),
        auquel est rattachée une identité numérique.
         L'achat et la vente de ces jetons se déroule à travers un NFT Marketplace. <a href="https://opensea.io/">Opensea </a>
         est le plus connu de ces sites sur la blockchain <a href="https://www.ig.com/fr-ch/ethereum-trading/comment-fonctionne-l-ethereum">Ethereum</a>.
          L'utilisation des NFT est diverses et continue à croître. Afin de mieux comprendre la raison d'être des NFT, nous vous conseillons
          la lecture des différents articles de la <a href="https://academy.binance.com/fr/articles?page=1&tags=nft">Binance Academy NFT</a> et
          principalement l'article sur <a href="https://academy.binance.com/fr/articles/top-7-nft-use-cases"> les cas d'utilisations des NFTs</a>.
       </p>
       <p style={styleParagraphe}> 
       Il est intéressant de mieux comprendre ce qu'est une blockchain pour comprendre comment cela fonctionne.
       Voici une explication de <a href="https://www2.deloitte.com/ch/fr/pages/strategy-operations/articles/blockchain-explained.html"
       >la blockchain en moins de 100 mots</a>.
       Les pages wikipedia sur les 
       <a href="https://fr.wikipedia.org/wiki/Jeton_non_fongible"> jetons non fongibles</a>  ou la
       <a href="https://fr.wikipedia.org/wiki/Blockchain"> blockchain</a> permettent d'aller plus loin.
       <a href="https://www.youtube.com/channel/UChlTcWDE8gd4tsl_L727NrQ"> Hasher </a> a réalisé une vidéo sur cette thématique.

       </p>

       
       <iframe width="420" height="345" src="https://www.youtube.com/embed/pEreoxCwC6c"></iframe>

       <br></br>
       <br></br>
       <h1 style={mystyle}>Phantom</h1>


       <p style={styleParagraphe}>
         Phantom est une des dispositifs permettant de stocker ces différents tokens dans l'écosystème de la blockchain solana. Il est accesible via <a href="https://phantom.app/">
           Phantom App
         </a> et après sont installation via une extension google chrome. Nous vous conseillons de regarder le tutoriel vidéo de <a href="https://www.youtube.com/channel/UC0B2QrB0YxVKar7n_WuYMEg">
          Crypto Gouv</a> ci-dessous qui décrit les différentes actions à réaliser afin de configurer Phantom.
       </p>


       <iframe width="420" height="345" src="https://www.youtube.com/embed/Cm6PcTa6gB4">
</iframe>
<br></br>
       <br></br>
       <h1 style={mystyle}>Binance</h1>


<p style={styleParagraphe}>
  La plateforme d'échange de cryptomonnaies <a href="https://www.binance.com/fr">Binance </a>
permet de stocker, acheter, revendre, et échanger des cryptomonnaies contre 
   d'autres cryptomonnaies mais également contre des monnaies fiduciaires telles que l'Euro ou le Dollar. 
   Cette plateforme vous servira pour acquérir vos premières cryptomonnaies afin d'intégrer ces écosystèmes.
   Nous vous expliquons avec Binance, mais il est également possible de faire avec d'autres. La 
   <a href="https://coinmarketcap.com/fr/rankings/exchanges/"> classement des échangeurs</a> est accesible via CoinMarketCap.
  
</p>  
<br></br>
<h2>Vidéo sur l'achat de jetons solana sur Binance</h2>

       <iframe width="420" height="345" src="https://www.youtube.com/embed/DG4Fy-jaXAA"></iframe>
       <br></br>
       <h2>Vidéo sur l'envoi de jetons solana de Binance à Phantom</h2>
       <iframe width="420" height="345" src="https://www.youtube.com/embed/fe0Lm1WxY3g"></iframe>

       
    </Layout>
  );
};
