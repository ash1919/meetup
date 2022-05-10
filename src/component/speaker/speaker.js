import React from 'react'
import Navbar from '../navbar'
import { StickyItem } from '../stickyItem'
import Banner from './Banner'
import { Footer } from './footer2'
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
