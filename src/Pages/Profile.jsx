import Navbar from "../Comman/Navbar";
import Footer from "../Comman/Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect,useState } from "react";

function Profile() {

    const [profile , setProfile] = useState({})

    useEffect(()=>{

        var obj ={
            "token":localStorage.getItem("token")
        }

        axios.post("https://a2zithub.org/dairy/abi/user_profile",obj).then((res)=>{
            console.log("Response",res.data.data[0])
            setProfile(res.data.data[0])
        })
    },[]);

    const navigation = useNavigate();

    function Logout(){
        localStorage.clear("token")
        navigation("/login")
    }

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">

          {/* Profile Card */}
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

            {/* Cover Section */}
            <div className="h-36 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 sm:h-48"></div>

            {/* Profile Info */}
            <div className="px-5 pb-8 sm:px-8">
              <div className="-mt-14 flex flex-col gap-5 sm:-mt-16 sm:flex-row sm:items-end sm:justify-between">

                <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
                  <img
                    src={profile.profile}
                    alt="Profile"
                    className="h-28 w-28 rounded-2xl border-4 border-white bg-white object-cover shadow-md sm:h-32 sm:w-32"
                  />

                  <div className="pb-1">
                    <h2 className="text-2xl font-bold text-gray-900">
                      {profile.user_name}
                    </h2>
                    <p className="mt-1 text-sm text-gray-500">
                      Full-Stack Developer
                    </p>
                    <span className="mt-3 inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                      <span className="h-2 w-2 rounded-full bg-green-500"></span>
                      Active Account
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 sm:pb-2">
                  <button
                    type="button"
                    className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Edit Profile
                  </button>

                  <button
                  onClick={Logout}
                    type="button"
                    className="rounded-lg border border-red-200 bg-white px-5 py-2.5 text-sm font-semibold text-red-600 transition hover:bg-red-50"
                  >
                    Logout
                  </button>
                </div>

              </div>

              {/* Personal Information */}
              <div className="mt-10">
                <h3 className="border-b border-gray-200 pb-4 text-lg font-bold text-gray-900">
                  Personal Information
                </h3>

                <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">

                  <div className="rounded-xl bg-gray-50 p-4">
                    <p className="text-sm font-medium text-gray-500">
                      Full Name
                    </p>
                    <p className="mt-2 font-semibold text-gray-900">
                      {profile.user_name}
                    </p>
                  </div>

                  <div className="rounded-xl bg-gray-50 p-4">
                    <p className="text-sm font-medium text-gray-500">
                      Email Address
                    </p>
                    <p className="mt-2 break-all font-semibold text-gray-900">
                      {profile.user_email}
                    </p>
                  </div>

                  <div className="rounded-xl bg-gray-50 p-4">
                    <p className="text-sm font-medium text-gray-500">
                      Mobile Number
                    </p>
                    <p className="mt-2 font-semibold text-gray-900">
                      +91 {profile.user_mobile}
                    </p>
                  </div>

                  <div className="rounded-xl bg-gray-50 p-4">
                    <p className="text-sm font-medium text-gray-500">
                      Password
                    </p>
                    <p className="mt-2 font-semibold text-gray-900">
                      {profile.user_password}
                    </p>
                  </div>

                </div>
              </div>

              {/* Account Settings */}
              <div className="mt-10">
                <h3 className="border-b border-gray-200 pb-4 text-lg font-bold text-gray-900">
                  Account Settings
                </h3>

                <div className="mt-5 space-y-4">

                  <div className="flex items-center justify-between gap-4 rounded-xl border border-gray-200 p-4 transition hover:border-blue-200 hover:bg-blue-50/30">
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Order History
                      </h4>
                    </div>
                    <span className="text-xl text-gray-400">→</span>
                  </div>

                  <div className="flex items-center justify-between gap-4 rounded-xl border border-gray-200 p-4 transition hover:border-blue-200 hover:bg-blue-50/30">
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Like
                      </h4>
                    </div>
                    <span className="text-xl text-gray-400">→</span>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Profile;