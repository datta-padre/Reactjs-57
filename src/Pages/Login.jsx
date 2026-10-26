
import Navbar from "../Comman/Navbar";
import Footer from "../Comman/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigation = useNavigate();

  const [user_mobile , setMobile ] = useState("");
  const [user_password , setPassword ] = useState("");
  const [error , setError] = useState("");

  function Login(e){
    e.preventDefault();
    var obj ={
      user_mobile,
      user_password
    }

    axios.post("https://a2zithub.org/dairy/abi/user_login",obj).then((res)=>{
      console.log("response",res.data)

      if(res.data.status == "success"){
        localStorage.setItem("token",res.data.token);
        navigation("/product")
      }else{
        setError("Invalid user & password")
      }

    })

  }

  return (
    <>
      <Navbar />

      <section className="flex min-h-screen items-center justify-center bg-gray-100 px-4 py-5">
        <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl sm:p-8">

          <h1 className="mb-2 text-center text-3xl font-bold text-gray-800">
            Login Page
          </h1>

          <p className="mb-8 text-center text-gray-500">
            Welcome back! Please enter your details.
          </p>
          <p className="mb-3 font-bold text-center bg-red-300 rounded text-red-600">{error}</p>

          <form className="space-y-5" onSubmit={Login}>
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Mobile Number
              </label>
              <input
               onChange={(e)=>setMobile(e.target.value)}
                type="tel"
                placeholder="Enter your mobile number"
                maxLength={10}
                pattern="[0-9]{10}"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                required
              />
            </div>
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

            {/* Login Button */}
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 py-3 font-bold text-white transition hover:bg-blue-700 active:scale-95"
            >
              Login
            </button>

            <p className="text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <Link
               to="/register"
                className="font-semibold text-blue-600 hover:underline"
              >
                Register
              </Link>
            </p>

          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Login;
