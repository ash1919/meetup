
import React from 'react';
import './App.css';
import Navbar from './component/navbar';
import Hero from './component/hero';
import SearchBar from './component/searchBar';
import ListOfSpeakers from './component/listOfSpeakers';
import { Footer } from './component/footer';
import { StickyItem } from './component/stickyItem';


function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <SearchBar />
    {/* <ListOfSpeakers /> */}
    <Footer />
    <StickyItem />
    </>
  );
}

export default App;
