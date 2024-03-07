import React from "react";
import "./Tentang.css";

const Tentang = () => {
  return (
    <div id="cerita-kami" className="t-wrapper">
        <div className="chocoText judul">
             <h1>Cerita kami:</h1>
        </div>
        <div className="t-text">
            <p>Batik merupakan kain yang dilukis dengan menggunakan cairan lilin malam dengan menggunakan sebuah alat bernama canting, <br /> dengan lilin dan canting tersebut, para pengrajin menggambar dan melukis di sebuah kain hingga membuat kain tersebut bernilai tinggi.</p>
        </div>
    <div className="t-container">
      <div className="card" style={{ width: "18rem" }}>
        <img src="./orang1.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">
          Batik Indonesia telah ditetapkan oleh UNESCO sebagai Warisan Kemanusiaan untuk Budaya Lisan dan Nonbendawi (Masterpieces of the Oral and Intangible Heritage of Humanity) pada 2 Oktober tahun 2009.
          </p>
        </div>
      </div>
      <div className="card" style={{ width: "18rem" }}>
        <img src="./orang2.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">
          Batik Indonesia telah ditetapkan oleh UNESCO sebagai Warisan Kemanusiaan untuk Budaya Lisan dan Nonbendawi (Masterpieces of the Oral and Intangible Heritage of Humanity) pada 2 Oktober tahun 2009. 
          </p>
        </div>
      </div>
      <div className="card" style={{ width: "18rem" }}>
        <img src="./orang1.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">
          Batik Indonesia telah ditetapkan oleh UNESCO sebagai Warisan Kemanusiaan untuk Budaya Lisan dan Nonbendawi (Masterpieces of the Oral and Intangible Heritage of Humanity) pada 2 Oktober tahun 2009. 
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Tentang;
