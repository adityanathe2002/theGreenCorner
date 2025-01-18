import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import SignUpPage from '../pages/SignUpPage/SignUpPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import Home from '../Home/Home'
import Hero from '../Home/Hero/Hero'


export let routingPages = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "/home",
                element: <Hero />
            },
            
        ]
    },
    {
        path: "/login",
        element: <LoginPage />
    },
    {
        path: "/signup",
        element: <SignUpPage />
    }
])
