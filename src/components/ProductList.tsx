import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductList = () => {
  return (
    <>
        <div className='mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap'>
            <Link href="/" className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
                <div className='relative w-full h-80'>
                    <Image src="https://images.pexels.com/photos/7621271/pexels-photo-7621271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" fill sizes='25vw' alt='no image' className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'/>

                    <Image src="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" fill sizes='25vw' alt='no image'/>
                </div>
                <div className='flex justify-between'>
                    <span className='font-medium'>Product Name</span>
                    <span className='font-bold'>$94</span>
                </div>
                <div className='text-sm text-gray-500'>My description</div>
                <button className='rounded-2xl ring-1 ring-primary text-primary py-2 px-4 text-xs hover:bg-primary hover:text-white w-max'>Add to cart</button>
            </Link>
            <Link href="/" className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
                <div className='relative w-full h-80'>
                    <Image src="https://images.pexels.com/photos/7621271/pexels-photo-7621271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" fill sizes='25vw' alt='no image' className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'/>

                    <Image src="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" fill sizes='25vw' alt='no image'/>
                </div>
                <div className='flex justify-between'>
                    <span className='font-medium'>Product Name</span>
                    <span className='font-bold'>$94</span>
                </div>
                <div className='text-sm text-gray-500'>My description</div>
                <button className='rounded-2xl ring-1 ring-primary text-primary py-2 px-4 text-xs hover:bg-primary hover:text-white w-max'>Add to cart</button>
            </Link>
            <Link href="/" className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
                <div className='relative w-full h-80'>
                    <Image src="https://images.pexels.com/photos/7621271/pexels-photo-7621271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" fill sizes='25vw' alt='no image' className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'/>

                    <Image src="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" fill sizes='25vw' alt='no image'/>
                </div>
                <div className='flex justify-between'>
                    <span className='font-medium'>Product Name</span>
                    <span className='font-bold'>$94</span>
                </div>
                <div className='text-sm text-gray-500'>My description</div>
                <button className='rounded-2xl ring-1 ring-primary text-primary py-2 px-4 text-xs hover:bg-primary hover:text-white w-max'>Add to cart</button>
            </Link>
            <Link href="/" className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
                <div className='relative w-full h-80'>
                    <Image src="https://images.pexels.com/photos/7621271/pexels-photo-7621271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" fill sizes='25vw' alt='no image' className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'/>

                    <Image src="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" fill sizes='25vw' alt='no image'/>
                </div>
                <div className='flex justify-between'>
                    <span className='font-medium'>Product Name</span>
                    <span className='font-bold'>$94</span>
                </div>
                <div className='text-sm text-gray-500'>My description</div>
                <button className='rounded-2xl ring-1 ring-primary text-primary py-2 px-4 text-xs hover:bg-primary hover:text-white w-max'>Add to cart</button>
            </Link>
        </div>
    </>
  )
}

export default ProductList