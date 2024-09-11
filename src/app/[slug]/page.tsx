import Add from '@/components/Add'
import CustomizeProduct from '@/components/CustomizeProduct'
import ProductImages from '@/components/ProductImages'
import React from 'react'

const page = () => {
  return (
    <>
    <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16'>
      {/* Img */}
      <div className='w-full lg:w-1/2 lg:sticky top-12 h-max'>
        <ProductImages/>
      </div>

      {/* Text  */}
      <div className='w-full lg:w-1/2 flex flex-col gap-6'>
        <h1 className='text-4xl font-medium'>Product Name</h1>
        <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit unde nihil vel assumenda, voluptates dolorem praesentium adipisci illum quod minus. Cumque amet excepturi mollitia, vel iusto ad ratione corporis nemo.</p>
        <div className="h-[2px] bg-gray-100"/>
        <div className="flex items-center gap-4">
          <h3 className='text-xl text-gray-500 line-through'>$59</h3>
          <h2 className='font-medium text-2xl'>$48</h2>
        </div>
        <div className="h-[2px] bg-gray-100"/>
        <CustomizeProduct/>
        <Add/>
        <div className="h-[2px] bg-gray-100"/>
        <div className="text-sm">
          <h1 className='font-medium mb-4'>Title</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nostrum fugiat similique ipsa corporis voluptates quo molestiae aperiam at. Quam corporis quaerat voluptates quibusdam architecto, vero quisquam nesciunt. Excepturi, quo!</p>
        </div>
        <div className="text-sm">
          <h1 className='font-medium mb-4'>Title</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nostrum fugiat similique ipsa corporis voluptates quo molestiae aperiam at. Quam corporis quaerat voluptates quibusdam architecto, vero quisquam nesciunt. Excepturi, quo!</p>
        </div>
        <div className="text-sm">
          <h1 className='font-medium mb-4'>Title</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nostrum fugiat similique ipsa corporis voluptates quo molestiae aperiam at. Quam corporis quaerat voluptates quibusdam architecto, vero quisquam nesciunt. Excepturi, quo!</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default page