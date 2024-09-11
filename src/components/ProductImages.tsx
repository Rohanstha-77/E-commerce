"use client"

import Image from 'next/image'
import React, { useState } from 'react'
const Images=[
    {id:1,url:"https://images.pexels.com/photos/27948245/pexels-photo-27948245/free-photo-of-a-couple-embracing-at-night-in-front-of-a-street-light.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {id:2,url:"https://images.pexels.com/photos/28179348/pexels-photo-28179348/free-photo-of-a-hat-camera-and-sunglasses-on-a-rock.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {id:3,url:"https://images.pexels.com/photos/3954790/pexels-photo-3954790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {id:4,url:"https://images.pexels.com/photos/27957828/pexels-photo-27957828/free-photo-of-the-roof-bar-in-st-petersburg.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"},
]

const ProductImages = () => {
    const [index, setIndex] = useState(0)
  return (
    <>
        <div>
            <div className='h-[500px] relative '>
                <Image src={Images[index].url} fill sizes='50vw' alt='noImage' className='object-cover rounded-md'/>
            </div>
            <div className='flex justify-between gap-4 mt-8'>
                {Images.map((img,index)=>(
                    <div className='w-1/4 h-32 relative gap-4 mt-8 cursor-pointer' key={img.id} onClick={()=>setIndex(index)}>
                    <Image src={img.url} fill sizes='30vw' alt='noImage'/>
                </div>
                ))}
            </div>

        </div>
    </>
  )
}

export default ProductImages