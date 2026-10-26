import Navbar from "../Comman/Navbar";
import Footer from "../Comman/Footer";
import ProductCart from "../Comman/ProductCart";
import axios from "axios";
import { useEffect, useState } from "react";

function Product() {

  const [product,setProduct] = useState([]);

  useEffect(()=>{
    axios.get("https://a2zithub.org/dairy/abi/product_det").then((res)=>{
      console.log('response',res.data);
      setProduct(res.data)
    })
  },[]);


  return (
    <>
      <Navbar />

        <section className="mx-auto max-w-7xl px-2 pb-12 sm:px-6 lg:px-8">
            <br />
            <h1 className="text-5xl font-bold text-center">Product page </h1>
            <br /><br />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 lg:gap-6">

            {
              product.map((val,index)=>(
                <>
               <ProductCart data={val}/>
                </>
              ))
            }
          </div>

        </section>
        <br /><br />
      <Footer />
    </>
  );
}

export default Product;