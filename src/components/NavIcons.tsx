"use client"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React, { useState } from 'react'
import CartModel from './CartModel'
import { useWixClient } from '@/hooks/useWixClient'
import Cookies from 'js-cookie'

const NavIcons = () => {
  const [isProfileOpen, setisProfileOpen] = useState(false)
  const [isCartOpen, setisCartOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter()
  const pathName = usePathname();


  //Temporary
  // const isLoggedIn = false;
  const wixClient = useWixClient()
  const isLoggedIn = wixClient.auth.loggedIn()


  const handleLogout = async () => {
    setIsLoading(true);
    Cookies.remove("refreshToken");
    const { logoutUrl } = await wixClient.auth.logout(window.location.href);
    setIsLoading(false);
    setisProfileOpen(false);
    router.push(logoutUrl);
  };

  const handleProfile=()=>{
    if(!isLoggedIn){
      router.push('/login')
    }else{
      setisProfileOpen(true)
    }
  }
  return (
    <>
      <div className='flex item-center gap-4 xl:gap-6'>
        <Image src="/profile.png" alt='' width={22} height={22} className='cursor-pointer' onClick={handleProfile}/>
        {isProfileOpen && (
          <div className="absolute p-4 rounded-md top-14 right-48 bg-white text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
            <Link href="/">Profile</Link>
            <h1>Logout</h1>
            <div className="mt-2 cursor-pointer" onClick={handleLogout}>
              {isLoading ? "Logging out" : "Logout"}
            </div>
          </div>
        )}
        <Image src="/notification.png" alt='' width={22} height={22} className='cursor-pointer'/>
        <div className='relative cursor-pointer'>
          <Image src="/cart.png" alt='' width={22} height={22} className='cursor-pointer' onClick={()=>(setisCartOpen(true))}/>
          <div className='absolute -top-4 -right-4 w-5 h-5 bg-primary text-white rounded-full flex justify-center items-center'>2</div>
        </div>
        {isCartOpen && <CartModel/>}
      </div>
    </>
  )
}

export default NavIcons