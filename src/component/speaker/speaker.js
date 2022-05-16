import React from 'react'
import { Footer } from '../meetup-landingpage/footer'
import Navbar from '../meetup-landingpage/navbar'
import { StickyItem } from '../meetup-landingpage/stickyItem'
import Banner from './Banner'

import FormSpeaker from './formSpeaker'

export const Speaker = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <FormSpeaker />
      <Footer/>
      <StickyItem />
    </div>
  )
}
