import Navbar from "../Comman/Navbar";
import Footer from "../Comman/Footer";
import axios from "axios";
import { useEffect } from "react";

function Cart() {

    useEffect(()=>{

        var obj = {
            "token":localStorage.getItem("token")
        }

        axios.post("https://a2zithub.org/dairy/abi/cart_list",obj).then((res)=>{
            console.log("response",res.data)
        })
        
    },[])

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-gray-50 px-4 py-12 sm:px-6 lg:px-12">
        <div className="mx-auto max-w-7xl">
          {/* Page Heading */}
          <div className="mb-10 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-indigo-600">
              Your Shopping Bag
            </p>

            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-5xl">
              Shopping Cart
            </h1>
          </div>

          <div className="grid grid-cols-1 items-start gap-8 ">
            {/* Cart Table */}
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm lg:col-span-2">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[650px] text-left">
                  <thead className="bg-gray-100">
                    <tr className="text-sm text-gray-600">
                      <th className="px-5 py-4">Sr.No</th>
                      <th className="px-5 py-4">Product</th>
                      <th className="px-5 py-4">Price</th>
                      <th className="px-5 py-4">Qty</th>
                      <th className="px-5 py-4">Total</th>
                      <th className="px-5 py-4">Action</th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-100">
                    <tr className="transition hover:bg-gray-50">
                      <td className="px-5 py-5 text-gray-500"></td>

                      <td className="px-5 py-5">
                        <div className="flex items-center gap-4">
                          <img
                            src=""
                            className="h-16 w-16 rounded-xl object-cover"
                          />

                          <span className="font-semibold text-gray-800"></span>
                        </div>
                      </td>

                      <td className="px-5 py-5 font-medium text-gray-700">
                        ₹100
                      </td>

                      <td className="px-5 py-5">
                        <span className="rounded-lg border border-gray-200 px-4 py-2">
                          3
                        </span>
                      </td>

                      <td className="px-5 py-5 font-bold text-gray-900">
                        ₹ 1000
                      </td>

                      <td className="px-5 py-5">
                        <button
                          type="button"
                          className="rounded-lg bg-red-50 px-3 py-2 text-red-600 transition hover:bg-red-100"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Cart;
