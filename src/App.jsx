import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Tentang from './components/Tentang/Tentang';
import Company from './components/Companies/Company';
import Batik from './components/Batik/Batik';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <Hero />
        <Company />
        <Tentang />
        <Batik />
        <Footer />
      </div>
    </div>
  );
}

export default App;
