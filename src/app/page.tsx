
import CatagoryList from "@/components/CatagoryList";
import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";
import { useWixClient } from "@/hooks/useWixClient";
import {  wixClientServer } from "@/lib/wixClientServer";
import { Suspense, useEffect } from "react";

export default async function Home() {


  // const wixClient = useWixClient()
  // useEffect(() => {   
  //   const getProduct = async()=>{
  //     const response = await wixClient.products.queryProducts().find();
  //     if(!response){
  //       throw new Error("error while fetching data")
  //     }
  //     console.log(response)
  //   }
  //   getProduct()
  // },[wixClient])
  
  const wixClient = await wixClientServer()
  const response = await wixClient.products.queryProducts().find()
  console.log(response)
  return (
   <>
      <Slider/>
      <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mt-24">
        <h1 className="text-2xl">Featured Product</h1>
        <Suspense fallback={"loading"}>
          <ProductList catagoryId={process.env.FEATURE_PRODUCT_CATAGORY_ID!} limit= {4}/>
        </Suspense>
      </div>
      <div className="mt-24 ">
        <h1 className="text-2xl md:px-8 lg:px-16 xl:px-32 2xl:px-64 mt-24 mb-12">Catagories</h1>
        <Suspense fallback={"loading"}>
          <CatagoryList/>
        </Suspense>
      </div>
      <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mt-24">
        <h1 className="text-2xl">New Product</h1>
        {/* <ProductList/> */}
      </div>
   </>
  );
}
