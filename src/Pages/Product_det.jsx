
import { useState } from "react";
import Navbar from "../Comman/Navbar";
import Footer from "../Comman/Footer";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, } from "react";

function Product_det() {

  const {product_id} = useParams();
  const [product_det , setProduct_det] = useState({})

  useEffect(()=>{
    var obj = {
      "product_id":product_id,
      "token":localStorage.getItem("token")
    }

    axios.post("https://a2zithub.org/dairy/abi/product_by_id",obj).then((res)=>{
      console.log(res.data)
      setProduct_det(res.data)
    })
  },[]);

  function addToCart(){
    
   var obj = {
      "product_id":product_id,
      "token":localStorage.getItem("token")
    }

    axios.post("https://a2zithub.org/dairy/abi/addtocart",obj).then((res)=>{
      console.log("response",res.data)
    })

  }

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-gray-50 px-4 py-10 sm:px-8">
        <h1 className="mb-10 text-center text-3xl font-bold text-gray-800 sm:text-5xl">
          Product Details-{product_id}
        </h1>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 rounded-2xl bg-white p-5 shadow-lg md:grid-cols-2 md:p-10">

          <div className="flex items-center justify-center overflow-hidden rounded-xl bg-gray-100 p-4">
            <img
              src={product_det.product_img}
              className="h-72 w-full rounded-lg object-contain transition duration-300 hover:scale-105 sm:h-96"
            />
          </div>

          <div className="flex flex-col justify-center">
            <span className="mb-3 w-fit rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-700">
              In Stock
            </span>

            <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-4xl">
             {product_det.product_name}
            </h2>

            <p className="mb-4 text-3xl font-bold text-blue-600">
              ₹{product_det.price}
            </p>

            <p className="mb-6 leading-7 text-gray-600">
              {product_det.details}
            </p>

            <button
            onClick={addToCart}
              className="w-full rounded-xl bg-blue-600 px-6 py-4 font-bold text-white shadow-md transition hover:bg-blue-700 active:scale-95 sm:w-auto"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Product_det;