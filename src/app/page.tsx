import CatagoryList from "@/components/CatagoryList";
import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";

export default function Home() {
  return (
   <>
      <Slider/>
      <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mt-24">
        <h1 className="text-2xl">Featured Product</h1>
        <ProductList/>
      </div>
      <div className="mt-24 ">
        <h1 className="text-2xl md:px-8 lg:px-16 xl:px-32 2xl:px-64 mt-24 mb-12">Catagories</h1>
        <CatagoryList/>
      </div>
      <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mt-24">
        <h1 className="text-2xl">New Product</h1>
        <ProductList/>
      </div>
   </>
  );
}
