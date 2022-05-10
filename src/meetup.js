
import React, { useState } from 'react';
import './App.css';
import Navbar from './component/navbar';
import Hero from './component/hero';
import ListOfSpeakers from './component/speakers';
import { Footer } from './component/footer';
import { StickyItem } from './component/stickyItem';
import {useParams} from "react-router-dom";


const Meetup=() =>{
  
  return (
    <>
    <Navbar />
    <Hero />
    <ListOfSpeakers />
    <Footer />
    <StickyItem />
    </>
  );
}

export default Meetup;
