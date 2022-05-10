import React from 'react'
import { Footer } from '../footer'
import Navbar from '../navbar'
import { StickyItem } from '../stickyItem'
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
