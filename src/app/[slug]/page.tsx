import Add from '@/components/Add'
import CustomizeProduct from '@/components/CustomizeProduct'
import ProductImages from '@/components/ProductImages'
import { wixClientServer } from '@/lib/wixClientServer'
import { timeStamp } from 'console'
import DOMPurify from 'isomorphic-dompurify'
import { notFound } from 'next/navigation'
import React from 'react'

const page = async ({params}:{params: {slug:string}}) => {
  const wixClient = await wixClientServer()
  const product = await wixClient.products.queryProducts()
  .eq("slug", params?.slug)
  .find();
  // console.log(response)

  if(!product.items[0]){
    return notFound() 
  }

  const products = product.items[0]
  console.log(products.productOptions)

  return (
    <>
    <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16'>
      {/* Img */}
      <div className='w-full lg:w-1/2 lg:sticky top-12 h-max'>
        <ProductImages items={products.media?.items}/>
      </div>

      {/* Text  */}
      <div className='w-full lg:w-1/2 flex flex-col gap-6'>
        <h1 className='text-4xl font-medium'>{products?.name}</h1>
        <p className='text-gray-500'>{products?.description}</p>
        <div className="h-[2px] bg-gray-100"/>
        {products?.priceData?.price === products?.priceData?.discountedPrice ? (
          <h2 className='font-medium text-2xl'>Rs{products?.priceData?.price}</h2>
        ):(
          <div className="flex items-center gap-4">
            <h3 className='text-xl text-gray-500 line-through'>Rs{products?.priceData?.price}</h3>
            <h2 className='font-medium text-2xl'>Rs{products?.priceData?.discountedPrice}</h2>
          </div>
        )}
        <div className="h-[2px] bg-gray-100"/>
        {products.variants && products.productOptions && (
          <CustomizeProduct productId={products._id !} varients= {products.variants} productOptions={products.productOptions}/>
        )}
        <Add/>
        <div className="h-[2px] bg-gray-100"/>
        {products?.additionalInfoSections!.map((section:any)=>(
          <div className="text-sm" key={section.title}>
          <h1 className='font-medium mb-4'>{section.title}</h1>
          <p dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(section?.description)}}></p>
        </div>))}
      </div>
    </div>
    </>
  )
}

export default page