import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import Hero from './Hero/Hero'
import { Outlet } from 'react-router-dom'
import Section1 from './HomeSection/Section1'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Hero/>
            <Section1/>
            <Footer />
        </div>
    )
}

export default Home