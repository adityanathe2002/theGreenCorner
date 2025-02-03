// import React from 'react'
// import { createBrowserRouter } from 'react-router-dom'
// import SignUpPage from '../pages/SignUpPage/SignUpPage'
// import LoginPage from '../pages/LoginPage/LoginPage'
// import Home from '../Home/Home'
// import Hero from '../Home/Hero/Hero'
// import AllPlant from '../AllPlant/AllPlant'
// import Navbar from '../Home/Navbar/Navbar'
import Prasad from '../Home/HomeSection/Prasad'


// export let routingPages = createBrowserRouter([
//     {
//         path: "/",
//         element: <Home />,
//         children: [
//             {
//                 path: "/navbar",
//                 element: <Navbar />
//             },
//             {
//                 path: "/prasad",
//                 element: <Prasad />
//             },
//             {
//                 path:"/navbar/allplant",
//                 element:<AllPlant/>
//             }


//         ]
//     },
//     {
//         path: "/login",
//         element: <LoginPage />
//     },
//     {
//         path: "/signup",
//         element: <SignUpPage />
//     },

// ])



import React, { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import Home from '../Home/Home';
// import AllPlant from '../AllPlant/AllPlant';
let AllPlants = React.lazy(() => import("../AllPlant/AllPlant"))
import PlantDesc from '../PlantDescription/PlantDes';
import CartPage from '../cart/CartPage';
import PageNotFound from '../pages/PageNotFound';
import Wishlist from '../LikePage/Wishlist';
import CheckOutPages from '../checkOutPage/CheckOutPages';
import AboutUs from '../aboutUs/AboutUs';
import JsonCrud from '../pages/JsonCrud';
import AddPlant from '../addPlant/AddPlant';
import ContactPage from '../contactPage/ContactPage';

export let routingPages = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "/navbar/allplant",
                element: <Suspense fallback="loading...">
                    <AllPlants />|
                </Suspense>,
            },
            {
                path: "/navbar/prasad",
                element: <Prasad />
            },
            {
                path: "/plant-desc",
                element: <PlantDesc />
            },
            {
                path: "/cart",
                element: <CartPage />
            },
            {
                path: '/wishlist',
                element: <Wishlist />
            },
            {
                path: '/checkout',
                element: <CheckOutPages />
            },
            {
                path: "/aboutpage",
                element: <AboutUs />
            },
            {
                path: "/addplant",
                element: <AddPlant />
            },
            {
                path: "/contactpage",
                element: <ContactPage />
            }

        ],
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/signup",
        element: <SignUpPage />,
    },
    {
        path: "/prasad",
        element: <Prasad />
    },
    {
        path: "*",
        element: <PageNotFound />
    }

]);
