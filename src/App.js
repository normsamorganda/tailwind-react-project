import React  from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Analytics from './Components/Analytics';
import Newsletter from './Components/Newsletter';
import Card from './Components/Card';
import Footer from './Components/Footer';

function App() {

  return (

    <div>
      <Navbar />
      <Hero />
      <Analytics/>
      <Newsletter />
      <Card/>
      <Footer/>
    </div>
  );
}

export default App;
