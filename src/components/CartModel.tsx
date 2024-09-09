//On progress

"use client"
import Image from 'next/image'
import React from 'react'

const CartModel = () => {
    const cartItem = true
  return (
    <>
        <div className='w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-14 right-20 flex flex-col gap-6 z-20'>
            {!cartItem ? (
                <div>Cart is empty</div>
            ):(
                // List 
                <div className='flex flex-col gap-8'>
                    {/* items */}
                    <div className='flex gap-4'>
                        <Image src="/visa.png" alt='' width={72} height={96} className='object-cover rounded-md'/>

                        <div className='flex flex-col justify-between w-full'>
                            {/* Top  */}
                            <div>
                                {/* Title */}
                                <div className='flex items-center justify-between gap-8'>
                                    <h3 className='font-semibold'>Product name</h3>
                                    <div className='p-1 bg-gray-50 rounded-sm'>$96</div>
                                </div>
                                    {/* Desc */}
                                <div className='text-sm text-gray-500'>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus facilis, voluptatem dolorum nostrum eius in quia itaque distinctio possimus. Corrupti sit, hic sunt labore ab sint mollitia libero beatae cumque.
                                </div>
                            </div>
                                {/* Bottom */}
                            <div className='flex justify-between text-sm'>
                                <span className='text-gray-500'>Qut 2</span>
                                <span className='text-blue-500'>remove</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </>
  )
}

export default CartModel