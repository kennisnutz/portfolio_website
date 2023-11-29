import Portfolio1 from '../../assets/portfolio1.jpg';
import Portfolio2 from '../../assets/portfolio2.jpg';
import Portfolio3 from '../../assets/portfolio3.png';
import Portfolio4 from '../../assets/portfolio4.png';
import Portfolio6 from '../../assets/portfolio6.png';
import Portfolio7 from '../../assets/portfolio7.png';
import Portfolio8 from '../../assets/portfolio8.png';
import Portfolio9 from '../../assets/portfolio9.png';
import Portfolio10 from '../../assets/protfolio10.png';
import Portfolio11 from '../../assets/portfolio11.png';

const data = [
  {
    image: Portfolio10,
    title: ' Ether Node dapp ',
    github: 'https://github.com/kennisnutz/EtherealDapp',
    demo: 'https://ether-node-dapp-8a4a71.netlify.app/ ',
  },
  {
    image: Portfolio11,
    title: ' Silly Dollarz Staking',
    github: 'https://github.com/kennisnutz/SillyDollarDapp',
    demo: 'https://silly-dollarz-staking-1b572d.netlify.app/',
  },
  {
    image: Portfolio9,
    title: ' Property Agent dashboard',
    github: 'https://github.com/kennisnutz/residio',
    demo: 'https://merry-buttercream-f67c11.netlify.app/',
  },
  {
    image: Portfolio8,
    title: ' CrowdFund App',
    github: 'https://github.com/kennisnutz/CrowdFundWeb3',
    demo: 'https://frabjous-granita-08adde.netlify.app/',
  },
  {
    image: Portfolio6,
    title: ' FFLeague NFT',
    github: 'https://github.com/kennisnutz/ffleaguemart',
    demo: 'https://fantasyfootballnftmart.web.app/',
  },

  {
    image: Portfolio2,
    title: 'Web3 twitter clone dapp',
    github: 'https://github.com/kennisnutz/NFTwitta',
    demo: 'https://nfttwitta-kennisnutz.vercel.app/',
  },
  {
    image: Portfolio7,
    title: 'Near Safe coin stats',
    github: 'https://github.com/kennisnutz/near-safe-coin',
    demo: 'https://near-safe-coin.netlify.app/',
  },
  {
    image: Portfolio4,
    title: ' Fan footy nft mart',
    github: 'https://github.com/kennisnutz/nftMart',
    demo: 'https://footy-fans-nfts.web.app/',
  },
  {
    image: Portfolio1,
    title: 'NFT Collection minting dapp',
    github: 'https://github.com/kennisnutz/KUCOIN-KONGS',
    demo: 'https://frozen-cove-50661.herokuapp.com/',
  },
  {
    image: Portfolio3,
    title: ' Visney art minter dapp',
    github: 'https://github.com/kennisnutz/Visney',
    demo: 'https://www.visney.org/',
  },
];

function generateData() {
  let dataArray = [];
  for (let i = 0; i < data.length; i++) {
    const dataItem = {
      id: i + 1,
      image: data[i].image,
      title: data[i].title,
      github: data[i].github,
      demo: data[i].demo,
    };
    dataArray.push(dataItem);
  }
  return dataArray;
}

export default generateData;
