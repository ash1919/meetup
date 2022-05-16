
import React from 'react';
import Navbar from './navbar';
import Hero from './hero';
import ListOfSpeakers from './speakers';
import { Footer } from './footer';
import { StickyItem } from './stickyItem';


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
