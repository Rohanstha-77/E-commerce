import Filter from '@/components/Filter'
import ProductList from '@/components/ProductList'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <>
      <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mt-24'>
        <div className=' hidden bg-pink-50 px-4 sm:flex justify-between h-64'>
          <div className='w-2/3 flex flex-col items-center justify-center gap-8'>
            <h1 className='text-4xl font-semibold leading-[48px] text-gray-700'>Grab up to 50% off on <br /> selected Product</h1>
            <button className='rounded-3xl bg-primary text-white w-max px-5 py-3 text-sm'>Buy Now</button>
          </div>
          <div className='relative w-1/3'>
            <Image src='https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='no image' fill className='object-cover' />
          </div>
        </div>
        <Filter/>

        <h1 className='mt-12 text-xl font-semibold'>Shoes for you</h1>
        <ProductList/>
      </div>
    </>
  )
}

export default page