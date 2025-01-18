import React, { useEffect, useRef } from 'react'
import Logo from '../../../assets/plant/TheGreenCorner.png'
import { Link, Links } from 'react-router-dom'
import { IoMdSearch } from 'react-icons/io'
import { FaCaretDown, FaCartShopping, FaHeart, FaUser } from 'react-icons/fa6'
import DarkMode from './DarkMode'
import gsap from 'gsap'

const menu = [
    {
        id: 1,
        name: 'Home',
        link: "/"
    },
    {
        id: 2,
        name: 'Shop',
        link: "/#"
    },
    {
        id: 3,
        name: 'Contact Us',
        link: "/#"
    },
    {
        id: 4,
        name: 'About',
        link: "/#"
    },

]

const DropdownLinks = [
    {
        id: 1,
        name: 'OutDoor Plant',
        link: "/#"
    },
    {
        id: 2,
        name: 'Indoor Plant',
        link: "/#"
    },
    {
        id: 3,
        name: 'Flowers',
        link: "/#"
    },
]
const Navbar = () => {

    const textRef = useRef(null);

    useEffect(() => {
      gsap.fromTo(
        textRef.current, 
        { scale: 0, opacity: 0 }, 
        {
          scale: 1,
          opacity: 1, 
          duration: 3,
          ease: "power3.out", 
        }
      );
    }, []);


    return (
        <div className="shadow-md bg-black dark:bg-white dark:text-black duration-200 relative z-40">
            {/* upper Navbar */}
            <div className=" bg-[#333] py-2">
                <div className="container flex justify-between items-center">
                    <div>
                        <a href="#" className="font-bold text-2xl  sm:text-3xl flex gap-2">
                            <img src={Logo} alt="Logo" className="p-2" />

                        </a>
                    </div>

                    {/* search bar */}
                    <div className="flex justify-between items-center gap-4">
                        <div className="relative group hidden sm:block">
                            <input
                                type="text"
                                placeholder="search your plants"
                                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-white  "
                            />
                            <IoMdSearch className="text-gray-500  absolute top-1/2 -translate-y-1/2 right-3" />
                        </div>

                        {/* Whishlist */}
                        <button
                            className="bg-[#eee] hover:text-black transition-all duration-200 text-black  py-1 px-4 rounded-full flex items-center gap-1 group"
                        >
                            <span className="group-hover:block hidden transition-all duration-200 opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 ">
                                Whishlist
                            </span>
                            <FaHeart className="text-xl text-[#333] hover:text-black drop-shadow-sm cursor-pointer" />
                        </button>

                        {/* Cart button */}
                        <button
                            className="bg-[#eee] transition-all duration-200 text-black  py-1 px-4 rounded-full flex items-center gap-1 group"
                        >
                            <span className="group-hover:block hidden transition-all duration-200 opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100">
                                Cart
                            </span>
                            <FaCartShopping className="text-xl text-[#333] drop-shadow-sm cursor-pointer" />
                        </button>

                        {/* SignIn */}
                        <button
                            className="bg-[#eee] transition-all duration-200 text-black  py-1 px-4 rounded-full flex items-center gap-1 group"
                        >
                            <span className="group-hover:block hidden transition-all duration-200">
                               <Link to="/signup"> SignUp</Link>
                            </span>
                            <FaUser className="text-xl text-[#333] drop-shadow-sm cursor-pointer" />

                        </button>
                        {/* Darkmode Switch */}
                        <div>
                            {/* <DarkMode /> */}
                            <div>
                                <DarkMode />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* lower Navbar */}
            <div ref={textRef} className="flex justify-center">
                <ul className="sm:flex hidden items-center gap-4">
                    {menu.map((data) => (
                        <li key={data.id}>
                          
                            <Link   className="inline-block px-4 font-semibold  hover:text-green-300 duration-200" to={data.link}>{data.name}</Link>
                        </li>
                    ))}
                    {/* Simple Dropdown and Links */}
                    <li className="group relative cursor-pointer">
                        <a href="#" className="flex items-center font-semibold  gap-[2px] py-2">
                            Category
                            <span>
                                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                            </span>
                        </a>
                        <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
                            <ul>
                                {DropdownLinks.map((data) => (
                                    <li key={data.id}>
                                        <a
                                            href={data.link}
                                            className="inline-block w-full rounded-md p-2 "
                                        >
                                            {data.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar