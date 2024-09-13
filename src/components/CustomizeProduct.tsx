"use client"
import { products } from '@wix/stores'
import React, { useState } from 'react'

const CustomizeProduct = ({productId, productOptions, varients}: {productId:string, varients: products.Variant[], productOptions: products.ProductOption[]}) => {
    // console.log(productOptions)

    const [selectedOptions, setSelectedOptions] = useState<{[key:string]:string}>({})
    const handelOptionSelect =(optionType: string, choices: string)=>{
        setSelectedOptions((prev)=>({...prev,[optionType]:choices}))
    }
    const isVarientInstock = (choices: {[key:string]: string})=>{
        return varients.some((varients)=>{
            const varientsChoices = varients.choices
            if(!varientsChoices) return false

            return Object.entries(choices).every(
                ([key,value])=>varientsChoices[key] === value
            ) && varients.stock?.inStock && varients.stock?.quantity && varients.stock?.quantity > 0
        })
    }
    // console.log(selectedOptions)
    // console.log(varients)
  return (
    <>
        <div className="flex flex-col gap-6">
            {productOptions.map((option)=>(
                <div className='flex flex-col gap-4' key={option.name}>
                    <ul className="flex items-center gap-4">
                        <h4 className='font-medium'>Choose {option.name}</h4>
                        {option.choices?.map((choice)=>{

                            const disabled = !isVarientInstock ({...selectedOptions,[option.name!] : choice.description!})
                            const selected = selectedOptions [option.name!] === choice.description
                            const clickHandler = disabled
                            ? undefined
                            : () => handelOptionSelect(option.name!, choice.description!);

                            return option.name === "Color" ? (
                                <li key={option.name} className='w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative' style={{backgroundColor: choice.value, cursor:disabled ? "not-allowed" : "pointer"}} onClick={clickHandler}>
                                    {selected && <div className='absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'></div>}
                                    {disabled && <div className='absolute w-10 h-[2px] ring-red-400 bg-red-400 rotate-45 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'></div>}
                                </li>
                            ) : (
                                <li key={option.name} className='ring-1 ring-primary text-primary rounded-md py-1 px-4 text-sm' style={{cursor: disabled ? "not-allowed" : "pointer", backgroundColor: selected ? "#f35c7a" : disabled ? "#FBCFE8":"white" , color: selected || disabled ? "white" : "#f35c7a", boxShadow: disabled ? "none": ""}} onClick={clickHandler}>{choice.description}</li>
                            )
                        })}
                    </ul>
                </div>
            ))}

            {/* colors */}

            {/* <h4 className='font-medium'>Choose {option.name}</h4>
            <ul className="flex items-center gap-4">
            <li className='w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-red-500'>
                    <div className='absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'></div>
                </li>
                <li className='w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-blue-500'>
                </li>
                <li className='w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-not-allowed relative bg-yellow-500'>
                    <div className='absolute w-10 h-[2px] ring-red-400 bg-red-400 rotate-45 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'></div>
                </li>
            </ul> */}
            
            
            {/* Others */}


            {/* <h4 className='font-medium'>Choose a size</h4>
            <ul className="flex items-center gap-4">
                <li className='ring-1 ring-primary text-primary rounded-md py-1 px-4 text-sm cursor-pointer'>Small</li>
                <li className='ring-1 ring-primary text-white bg-primary rounded-md py-1 px-4 text-sm cursor-pointer'>Medium</li>
                <li className='ring-1 ring-pink-200 text-white bg-pink-200 rounded-md py-1 px-4 text-sm cursor-not-allowed'>Large</li>
            </ul> */}
        </div>
    </>
  )
}

export default CustomizeProduct