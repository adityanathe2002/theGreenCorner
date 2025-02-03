// import React from 'react'
// import Navbar from './Navbar/Navbar'
// import Footer from './Footer/Footer'
// import Hero from './Hero/Hero'
// import { Outlet } from 'react-router-dom'
// import Section1 from './HomeSection/Section1'
// import Section2 from './HomeSection/Section2'
// import Section3 from './HomeSection/Section3'
// import Section4 from './HomeSection/Section4'
// import Section5 from './HomeSection/Section5'
// import AllPlant from '../AllPlant/AllPlant'
// import Prasad from './HomeSection/Prasad'

// const Home = () => {
//     return (
//         <div>
//             <Navbar />
//             <Outlet />
//             <Hero />
//             <Section1 />
//             <Section2 />
//             <Section3 />
//             <Section4 />
//             <Section5 />
//             <Footer />
//             {/* <AllPlant/> */}
//         </div>
//     )
// }

// export default Home


import React from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Hero from './Hero/Hero';
import Section1 from './HomeSection/Section1';
import Section2 from './HomeSection/Section2';
import Section3 from './HomeSection/Section3';
import Section4 from './HomeSection/Section4';
import { Outlet, useLocation } from 'react-router-dom';
import Section5 from './HomeSection/Section5';

const Home = () => {
    const location = useLocation();

    return (
        <div>
            <Navbar />
            {location.pathname === '/' && (
                <>
                    <Hero />
                    <Section1 />
                    <Section2 />
                    <Section3 />
                    <Section4 />
                    <Section5/>
                </>
            )}
            <Outlet />
            <Footer />
        </div>
    );
};

export default Home;
