import React from 'react'
import "../index.css"
import Hero from '../sections/hero'
import Nav from '../components/Nav'
import Events from '../sections/events'
import AboutUs from '../sections/aboutUs'
import Notifications from '../sections/notifications'
import Footer from "../components/Footer"
const Home = () => {
  return (
    <main className='relative px-4 md:px-0'>
      <Nav />
      <section className='xl:padding-l wide:padding-r sm:pb-12 pb-6'>
        <Hero />
      </section>
      <section className='xl:padding-l wide:padding-r sm:pb-12 pb-6' id="about">
        <AboutUs />
      </section>
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Events />
      </section>
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Notifications />
      </section>
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Footer />
      </section>
    </main>
  )
}

export default Home;


