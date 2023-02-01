import React from 'react';
import Contentblock from '../Contentblock';
import Footer from '../Footer';
import Header from '../Header/Header';
import Slider from '../Slider';
import classes from './Mainpage.module.css';

export default function Mainpage() {
  return (
    <div style={classes.body}>
      <Header />
      <Contentblock imgtop="/julia-d-FlNTu2Bj4Dg-unsplash-1.jpg" imgbot="/taisiia-stupak-viq7xx1boxo-unsplash 1-1.jpg" />
      <Slider />
      <Contentblock imgtop="/julia-d-FlNTu2Bj4Dg-unsplash.jpg" imgbot="/taisiia-stupak-viq7xx1boxo-unsplash 1.jpg" />

      <Footer />
    </div>
  );
}
