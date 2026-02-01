import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {


    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        pass: ""
    })

    // To create a replica/clone of navigation function(useNavigation())
    let navigate = useNavigate()

    let handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    let handleData = async (e) => {
        // to prevent page reload
        e.preventDefault()

        let url = "http://localhost:3000/users"
        let resp = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

        resp.status === 200 || resp.status === 201 ? navigate("/login") : alert("Try Again")
    }


    return (
        <div className="min-h-screen flex items-center justify-center bg-neutral-900">
            <div className="w-full max-w-md bg-neutral-800 rounded-xl shadow-xl p-8">
                <h2 className="text-2xl font-semibold text-center text-white mb-6">
                    Sign Up
                </h2>

                <form>
                    {/* Name */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-300 mb-1">
                            Full Name
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            name="name"
                            value={data.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-neutral-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
                        />
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-300 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={data.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 bg-neutral-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
                        />
                    </div>

                    {/* Phone */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-300 mb-1">
                            Phone
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            value={data.phone}
                            onChange={handleChange}
                            placeholder="Enter your phone number"
                            className="w-full px-4 py-2 bg-neutral-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-300 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            name="pass"
                            value={data.pass}
                            onChange={handleChange}
                            placeholder="Create a password"
                            className="w-full px-4 py-2 bg-neutral-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
                        />
                    </div>

                    {/* Button */}
                    <button
                        onClick={handleData}
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
                    >
                        Create Account
                    </button>
                </form>

                <p className="text-sm text-center text-gray-400 mt-4">
                    Already have an account?{" "}
                    <span className="text-blue-400 cursor-pointer hover:underline">
                        Login
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Signup;
