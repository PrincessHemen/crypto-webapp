import React, { useState, useEffect } from 'react';
import './Crypto.css';
import logo from '../Assets/cryptocurrency2.png';
import bitcoin from '../Assets/bitcoinreal.png';
import ethereum from '../Assets/ethereumreal.png';
import dogecoin from '../Assets/dogecoinreal.png';
import tether from '../Assets/tetherreal.png';

const Crypto = () => {
  const [cryptoData, setCryptoData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Ctether%2Cdogecoin%2Cethereum&vs_currencies=usd', {
          method: 'GET',
          headers: {
            accept: 'application/json',
            'x-cg-demo-api-key': 'CG-yoAMfrfMsExfUvVk27JmuZLD'
          }
        });
        const data = await response.json();
        setCryptoData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <nav>
        <div className="first">
          <img src={logo} alt="logo of crypto website" className="logo" />
          <ul>
            <li><a href="#">Market</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">White Papers</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
        </div>
        <a href="#" className="btn">EN</a>
      </nav>
      <div className="content">
        <h1>BUY & <br/> SELL <span>Crypto</span></h1>
        <p>World's Largest Cryptocurrency Exchange Platform - available on the web as well as mobile</p>
        <a href="#" className="btn">EXPLORE MORE</a>
      </div>

      <div className="coin-list">
        <div className="coin">
          <img src={bitcoin} alt="bitcoin icon" className="coin-img" />
          <div>
            <h3>${cryptoData?.bitcoin?.usd || ' (Loading...)'}</h3>
            <p>Bitcoin</p>
          </div>
        </div>
        <div className="coin">
          <img src={ethereum} alt="ethereum icon" className="coin-img" />
          <div>
            <h3>${cryptoData?.ethereum?.usd || ' (Loading...)'}</h3>
            <p>Ethereum</p>
          </div>
        </div>
        <div className="coin">
          <img src={dogecoin} alt="dogecoin icon" className="coin-img" />
          <div>
            <h3>${cryptoData?.dogecoin?.usd || ' (Loading...)'}</h3>
            <p>Dogecoin</p>
          </div>
        </div>
        <div className="coin">
          <img src={tether} alt="tether icon" className="coin-img" />
          <div>
            <h3>${cryptoData?.tether?.usd || ' (Loading...)'}</h3>
            <p>Tether (USDT)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crypto;
