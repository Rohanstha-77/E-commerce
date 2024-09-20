"use client"
import { useWixClient } from '@/hooks/useWixClient';
import { products } from '@wix/stores';
import DOMPurify from 'isomorphic-dompurify';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Pagination from './Pagination';



const PRODUCT_PER_PAGE = 8

const ProductList = async ({catagoryId, limit, searchParams} : {catagoryId: string; limit?: number; searchParams?:any}) => {
    const wixClient = useWixClient()
    const ProductQuery = wixClient.products
    .queryProducts()
    .eq("collectionIds", catagoryId)
    .startsWith("name" , searchParams?.name || '')
    .hasSome("productType",[searchParams?.type || "physical","digital"])
    .gt("priceData.price", searchParams?.min || 0)
    .lt('priceData.price', searchParams?.max || 999999999)
    .limit(limit  || PRODUCT_PER_PAGE)
    .skip(searchParams?.page ? parseInt(searchParams.page) * (limit || PRODUCT_PER_PAGE) : 0)
    // .find();
    // console.log(response)
    // console.log(searchParams?.sort)

    if(searchParams?.sort){
        const [sortType , sortBy] = searchParams.sort.split(" ")
        if(sortType === "asc"){
            ProductQuery.ascending(sortBy)
        }
        if(sortType === "desc"){
            ProductQuery.descending(sortBy)
        }
    }

    const response = await ProductQuery.find()
    // console.log(response.hasPrev())
    // console.log(response.items)
  return (
    <>
        <div className='mt-12 flex gap-x-8 gap-y-16  flex-wrap'>
            {response.items.map((product:products.Product)=>(
                <Link href={'/' + product.slug} className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]' key={product._id}>
                    <div className='relative w-full h-80'>
                        <Image src={product?.media?.mainMedia?.image?.url || "/product.png"} fill sizes='25vw' alt='no image' className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500' />

                        {product.media?.items && (
                            <Image src={product?.media?.items[1]?.image?.url || "/product.png"} fill sizes='25vw' alt='no image' />
                        )}
                    </div>
                    <div className='flex justify-between'>
                        <span className='font-medium'>{product.name}</span>
                        <span className='font-bold'>Rs {product.priceData?.price}</span>
                    </div>


                    <div className='text-sm text-gray-500' dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(product?.description || "")
                    }}>
                    </div>

                    <button className='rounded-2xl ring-1 ring-primary text-primary py-2 px-4 text-xs hover:bg-primary hover:text-white w-max'>Add to cart</button>
                </Link>
            ))}
            {response.items.length === 0 ? "":(
                <Pagination
                currentPage={response.currentPage || 0}
                hasPrev={response.hasPrev()}
                hasNext={response.hasNext()}
                />
            )}
        </div>
    </>
  )
}

export default ProductList