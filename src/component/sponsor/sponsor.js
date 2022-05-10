import React from 'react'
import Navbar from '../navbar'
import { StickyItem } from '../stickyItem'
import FormSponsor from './formSponsor'
import Banner from './Banner'
import { Footer } from '../footer'


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

