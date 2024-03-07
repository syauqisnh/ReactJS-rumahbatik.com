import React from 'react'
import './Hero.css'
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineLogin } from "react-icons/ai";
import { TbWorld } from "react-icons/tb";
import { AiOutlineSmile } from "react-icons/ai";
import CountUp from 'react-countup';
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="hero-container">
        <div className="hero-left">
          <div className="hero-title">
            <h1>Selamat Berkunjung <br /> Di Rumah Batik Indonesia</h1>
          </div>
          <div className="hero-des">
            <p>Tunjukkanlah keindahan dan kekayaan budaya Indonesia melalui ragam motif dan keunikan batik yang memukau. Mari kita jelajahi pesona dan makna di balik setiap goresan kain yang menggambarkan warisan budaya yang begitu kaya dan beragam.</p>
          </div>
          <div className="location">
            <button className= "button-transparant">
              <img src="./mapp.png" alt="map" height={30} />
              <span>Go to Location</span>
              <span className= "icons"><AiOutlineLogin /></span>
            </button>
          </div>
          <div className="stats">
            <div className="stat">
              <span className="icon">
              <AiOutlineUser /> 
              </span>
              <span><CountUp end={100} />+ Pengunjung Domestik</span>
            </div>
            <div className="stat">
              <span className="icon">
              <TbWorld />
              </span>
              <span><CountUp end={50} />+ Pengunjung Internasional</span>
            </div>
            <div className="stat">
              <span className="icon">
              <AiOutlineSmile />
              </span>
              <span><CountUp end={99} />% Kepuasan Terhadap Produk</span>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <div className="img-container">
            <img src="./beground-batik.png" alt=""/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero