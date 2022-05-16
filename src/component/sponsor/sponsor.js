import React from 'react'
import Navbar from '../meetup-landingpage/navbar'
import { StickyItem } from '../meetup-landingpage/stickyItem'
import FormSponsor from './formSponsor'
import Banner from './Banner'
import { Footer } from '../meetup-landingpage/footer'


export const Sponsor = () => {
  return (
    <div>
        <Navbar />
        <Banner />
        <FormSponsor />
        <Footer />
        <StickyItem />
    </div>
  )
}

