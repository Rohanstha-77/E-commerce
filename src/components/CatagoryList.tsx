import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CatagoryList = () => {
  return (
    <>
        <div className='px-4 overflow-x-scroll scrollbar-hide'>
            <div className='flex gap-4 md:gap-8'>
                <Link href="/" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6 '>
                    <div className='relative bg-slate-100 w-full h-96'>
                        <Image src="https://images.pexels.com/photos/7621271/pexels-photo-7621271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='' fill sizes='20vw' className='object-cover'/>
                    </div>
                    <div className='mt-8 font-light text-lg tracking-wide'>Catagory name</div>
                </Link>
                <Link href="/" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6 '>
                    <div className='relative bg-slate-100 w-full h-96'>
                        <Image src="https://images.pexels.com/photos/7621271/pexels-photo-7621271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='' fill sizes='20vw' className='object-cover'/>
                    </div>
                    <div className='mt-8 font-light text-lg tracking-wide'>Catagory name</div>
                </Link>
                <Link href="/" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6 '>
                    <div className='relative bg-slate-100 w-full h-96'>
                        <Image src="https://images.pexels.com/photos/7621271/pexels-photo-7621271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='' fill sizes='20vw' className='object-cover'/>
                    </div>
                    <div className='mt-8 font-light text-lg tracking-wide'>Catagory name</div>
                </Link>
            </div>
        </div>
    </>
  )
}

export default CatagoryList