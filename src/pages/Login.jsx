import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [users, setUsers] = useState([])
    const [data, setData] = useState({
        email: "",
        password: ""
    })

    let navigate = useNavigate()

    let handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    let handleLogin = async (e) => {
        e.preventDefault();

        let url = "http://localhost:5000/api/login"
        // let url = "https://freeapi.gravitycoding.com/api/login"
        let resp = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                email: data.email,
                password: data.password
            })
        })
        let result = await resp.json()
        await setUsers(result)

        console.log(result)


        if (result.message !== "Login successful") {
            alert("Invalid email and pass")
        }
        else {
            localStorage.setItem("user_token", JSON.stringify(result.token))
            localStorage.setItem("user_id", JSON.stringify(result.user._id
            ))
            navigate("/user")
        }

    }


    return (
        <div className="min-h-screen flex items-center justify-center bg-netural-900">
            <div className="w-full max-w-md bg-neutral-800 rounded-xl shadow-xl p-8">
                <h2 className="text-2xl font-semibold text-center text-white mb-6">
                    Login
                </h2>

                <form>
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

                    {/* Password */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-300 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={data.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 bg-neutral-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
                        />
                    </div>

                    {/* Button */}
                    <button
                        onClick={handleLogin}
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
                    >
                        Login
                    </button>
                </form>

                <p className="text-sm text-center text-gray-400 mt-4">
                    Don’t have an account?{" "}
                    <span className="text-blue-400 cursor-pointer hover:underline">
                        Sign up
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Login;
