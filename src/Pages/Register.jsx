
import Navbar from "../Comman/Navbar";
import Footer from "../Comman/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {

  const navigation = useNavigate()

    const [user_name , setName ] = useState("");
    const [user_email , setEmail] = useState("");
    const [user_mobile , setmobile ] = useState("");
    const [user_password , setPassword ] = useState("");

    function Register(e){
        e.preventDefault();
        var obj = {
            user_name,
            user_email,
            user_mobile,
            user_password
        }

        axios.post("https://a2zithub.org/dairy/abi/user_register",obj).then((res)=>{
            console.log("Response",res)
            navigation("/login")
        })
    }

  return (
    <>
      <Navbar />

      <section className="flex min-h-screen items-center justify-center bg-gray-100 px-4 py-10">
        <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl sm:p-8">

          <h1 className="mb-2 text-center text-3xl font-bold text-gray-800">
            Create New Account
          </h1>

          <form className="space-y-5" onSubmit={Register}>

            {/* Username */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Username
              </label>
              <input
              onChange={(e)=>setName(e.target.value)}
                type="text"
                placeholder="Enter your username"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Email Address
              </label>
              <input
              onChange={(e)=>setEmail(e.target.value)}
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                required
              />
            </div>

            {/* Mobile */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Mobile Number
              </label>
              <input
              onChange={(e)=>setmobile(e.target.value)}
                type="tel"
                placeholder="Enter your mobile number"
                maxLength={10}
                pattern="[0-9]{10}"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Password
              </label>
              <input
              onChange={(e)=>setPassword(e.target.value)}
                type="password"
                placeholder="Enter your password"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                required
              />
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 py-3 font-bold text-white transition hover:bg-blue-700 active:scale-95"
            >
              Create Account
            </button>

            <p className="text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <Link
                to="/login"
                className="font-semibold text-blue-600 hover:underline"
              >
                Login
              </Link>
            </p>

          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Register;
