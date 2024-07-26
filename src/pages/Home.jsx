import React from 'react'
import '../styles/Home.css'
import Navbar from '../components/Navbar'
import Plantcont from '../components/Plantcont'
import { sect } from '../data'
import { secttwo } from '../data'
import {sectthree} from '../data'

const Home = () => {
  return (


    <>
       <Navbar/>


       <section className='landing-page'>
        <div className='background'></div>
          <h1>Transform your small 
            Space into a Green Oasis</h1>
       </section>
       <Plantcont data={sect}/>
       <Plantcont data={secttwo}/>
       <Plantcont data={sectthree}/>

       </>
  )
}

export default Home