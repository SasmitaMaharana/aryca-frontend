import Link from "next/link"
import { CartContext } from "@/lib/CartContext";
import { useContext } from "react";
import toast from "react-hot-toast";
import DisplacementSlider from "@/pages/Login/index";
export default function Hero({product}){

  const { addProduct } = useContext(CartContext);

  function addItemToCart() {
    addProduct(product._id);
    toast.success('Item added to Cart!');
  }
    if(product){
        return <>
        <DisplacementSlider />
        <div className="relative overflow-hidden my-14 md:my-10">
            <div className="lg:py-40 min-h-[650px]">
                <div className="relative mx-auto sm:static px-6 lg:px-8">
                <div className="max-w-xl text-start">
                    <h1 className="text-3xl md:text-4xl  max-md:mb-3 font-bold tracking-tight text-primary">
                        At <span className="text-accent">50%</span> Off
                    </h1>
                    <h1 className="text-4xl md:text-5xl max-md:mb-6 my-2 font-bold tracking-tight text-accent hover:text-primary">
                        {product.title}
                    </h1>
                    <p className="mt-4 line-clamp-3 text-lg sm:text-xl lg:text-2xl text-gray-500 ">
                        {product.description}
                    </p>
                    <div className="mt-10 flex gap-4 items-center max-sm:justify-center max-sm:mt-6">

                    <button type="button"
                        className="group inline-block rounded  bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
                        onClick={addItemToCart}
                        >
                        <span className="block rounded-sm text-white px-8 py-3 text-sm font-medium group-hover:bg-transparent">
                        Add to Cart 
                        </span>
                    </button>

                    <Link
                        className="group inline-block rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
                        href={'/products'}
                        >
                        <span className="block rounded-sm bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent">
                        All Products 
                        </span>
                    </Link>

                    <div className="hidden lg:block absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                <div className="flex items-center space-x-6 lg:space-x-8">
                  <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="w-72 h-80 overflow-hidden rounded-lg border border-secondary transform rotate-3 translate-x-4 hover:-rotate-6 hover:translate-x-8 transition-transform duration-300 ease-in-out">
                      <img src={product.images[0]} alt="" className="h-full w-full object-cover object-center" />
                    </div>
                    <div className="w-72 h-80 overflow-hidden rounded-lg border border-secondary transform -rotate-2 translate-x-2 hover:rotate-4 hover:translate-x-4 transition-transform duration-300 ease-in-out">
                      <img src={product.images[1]} alt="" className="h-full w-full object-cover object-center" />
                    </div>
                  </div>
                  <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="w-72 h-80 overflow-hidden rounded-lg border border-secondary transform rotate-1 translate-x-3 hover:-rotate-2 hover:translate-x-4 transition-transform duration-300 ease-in-out">
                      <img src={product.images[2]} alt="" className="h-full w-full object-cover object-center" />
                    </div>
                    <div className="w-72 h-80 overflow-hidden rounded-lg border border-secondary transform -rotate-4 translate-x-2 hover:rotate-8 hover:translate-x-3 transition-transform duration-300 ease-in-out">
                      <img src={product.images[3]} alt="" className="h-full w-full object-cover object-center" />
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                
                </div>
            </div>
        </div>
    </>
    }
}