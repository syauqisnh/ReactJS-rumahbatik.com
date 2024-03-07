import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <section id="header" className="h-wrapper">
      <div className="h-container">
        <div className="logo">
          <img src="./batik.png" alt="logo" width={80} />
          <span>rumahbatik.com</span>
        </div>
        <div className="h-menu">
          <a href="#header">Home</a>
          <a href="#cerita-kami">Cerita Kami</a>
          <a href="#batik">Produk</a>
          <a href="#bantuan">Bantuan</a>
          <button className="button">
            <a href="">Pesan Sekarang!</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
