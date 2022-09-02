import React from 'react'
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillHeart, AiFillWallet, AiFillTag } from 'react-icons/ai'
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs'
import { TbTruckDelivery } from 'react-icons/tb'
import { FaUserFriends, FaWallet } from 'react-icons/fa'
import { MdFavorite, MdHelp } from 'react-icons/md'
import { useState } from 'react'



const Navbar = () => {
    const [open, setOpen] = useState(false)
    const [delievery, setDelievery] = useState(true)
    return (
        <div className="max-w-[1640px] mx-auto border-2 flex justify-between items-center p-4">
            {/*left side*/}
            <div className="flex items-center">
                <div className="cursor-pointer">
                    <AiOutlineMenu size={30}
                        onClick={() => setOpen(!open)}
                    />
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
                    Yummy <span className="font-bold">Eats</span>
                </h1>
                <div className="hidden lg:flex items-center bg-gray-300 rounded-full text-[14px]">
                    <p onClick={()=>setDelievery(!delievery)} className={`rounded-full cursor-pointer p-2 duration-200 transition ${delievery?'bg-black text-white':''}`}>Delivery</p>
                    <p onClick={()=>setDelievery(!delievery)} className={`p-2 rounded-full cursor-pointer duration-200 transition ${delievery?'':'bg-black text-white'} `}>Pickup</p>
                </div>
            </div>
            {/* search input*/}
            <div className="flex items-center px-2 bg-gray-300 rounded-full w-[200px] sm:w-[400px] lg:w-[500px]">
                <AiOutlineSearch size={20} />
                <input type="text" placeholder="search food" className="bg-transparent focus:outline-none p-2 w-full" />
            </div>
            {/* cart button*/}
            <button className="hidden md:flex bg-black text-white rounded-full py-2 items-center">
                <BsFillCartFill size={20} className="mr-2" />
                Your cart
            </button>
            {/*mobile menu*/}
            {/*overlay */}


            <div className={open ? "fixed bg-black/80 z-10  w-full h-screen top-0 left-0"
            : ""}>
                {/*sider menu*/}
                <div className={open?
                "fixed bg-white h-screen w-[300px] z-10 duration-300 top-0 left-0"
            : "fixed bg-white h-screen w-[300px] z-10 duration-300 top-0 left-[-100%]"}  
            >
                    <AiOutlineClose size={30}
                        onClick={() => setOpen(!open)}
                        className="absolute top-2 right-2 cursor-pointer" />
                    <h2 className="text-2xl p-4">
                        Yummy <span className="font-bold">Eats</span>
                    </h2>
                    <nav>
                        <ul className="flex flex-col p-4 space-y-5 text-gray-800 ">
                            <li className="flex items-center cursor-pointer"><TbTruckDelivery size={25} className="mr-4" /> Orders</li>
                            <li className="flex items-center cursor-pointer"><MdFavorite size={25} className="mr-4" /> Favorites</li>
                            <li className="flex items-center cursor-pointer"><FaWallet size={25} className="mr-4" /> Wallet</li>
                            <li className="flex items-center cursor-pointer"><MdHelp size={25} className="mr-4" /> Help</li>
                            <li className="flex items-center cursor-pointer"><AiFillTag size={25} className="mr-4" /> Promotions</li>
                            <li className="flex items-center cursor-pointer"><BsFillSaveFill size={25} className="mr-4" /> Best Ones</li>
                            <li className="flex items-center cursor-pointer"><FaUserFriends size={25} className="mr-4" /> Invite Friends</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Navbar