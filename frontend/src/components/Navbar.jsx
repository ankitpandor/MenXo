import React, { useState } from 'react'
import {assets} from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className='flex iter-center justify-between py-5 font-medium items-center'>
      <img src={assets.logo} className='w-30 h-25' alt="" />

      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        <NavLink to='/' className='flex flex-col items-center gap-1'>
            <p>HOME</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>
        <NavLink to='/collection' className='flex flex-col items-center gap-1'>
            <p>COLLECTION</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>
        <NavLink to='/about' className='flex flex-col items-center gap-1'>
            <p>ABOUT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>
        <NavLink to='/contact' className='flex flex-col items-center gap-1'>
            <p>CONTACT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>
      </ul>
      <div className="flex items-center gap-6">
            <img src={assets.search_icon} className='w-5 cursor-pointer' alt="" />
            <div className='group relative'>
                <img src={assets.profile_icon} className='w-5 cursor-pointer' alt="" />
                <div className='dropdown-menu absolute group-hover:block right-0 hidden pt-0'>
                  <div className='flex flex-col gap-2 w-36 py-3 px-5 text-gray-500 bg-slate-100 rounded'>
                    <p className='cursor-pointer hover:text-black'>My Profile</p>
                    <p className='cursor-pointer hover:text-black'>Orders</p>
                    <p className='cursor-pointer hover:text-black'>Logout</p>
                  </div>
                </div>
            </div>
            <Link to='/cart' className='relative'>
              <img src={assets.cart_icon} alt="" className='w-5' />
              <p className='absolute bottom-[-6px] right-[-5px] w-4 text-center bg-black text-white leading-4 text-[8px] rounded-full aspect-square'>10</p>
            </Link>
            <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" />
      </div>
    </div>
  )
}

export default Navbar
