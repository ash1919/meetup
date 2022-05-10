import React from 'react'

import Navbar from '../navbar'
import {Footer} from '../speaker/footer2'
import { StickyItem } from '../stickyItem'
import FormSponsor from './formSponsor'
import Banner from './Banner'


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

