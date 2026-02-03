import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();

    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
    });

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleData = async (e) => {
        e.preventDefault();

        try {
            const resp = await fetch(
                "https://freeapi.gravitycoding.com/api/users",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data),
                }
            );

            if (resp.status === 200 || resp.status === 201) {
                navigate("/login");
            } else {
                alert("Try Again");
            }
        } catch (error) {
            alert("Something went wrong");
        }
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c')",
            }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Glassmorphism Card */}
            <div
                className="relative w-full max-w-md rounded-2xl p-8
                   bg-white/10 backdrop-blur-xl
                   border border-white/20
                   shadow-2xl"
            >
                <h2 className="text-2xl font-semibold text-center text-white mb-6">
                    Create Account
                </h2>

                <form onSubmit={handleData}>
                    {/* Full Name */}
                    <div className="mb-4">
                        <label className="block text-sm text-white mb-1">
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={data.name}
                            onChange={handleChange}
                            required
                            placeholder="Enter your name"
                            className="w-full px-4 py-2 bg-white/10 text-white
                         border border-white/20 rounded-lg
                         placeholder-white/60
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <label className="block text-sm text-white mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={data.email}
                            onChange={handleChange}
                            required
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 bg-white/10 text-white
                         border border-white/20 rounded-lg
                         placeholder-white/60
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Phone */}
                    <div className="mb-4">
                        <label className="block text-sm text-white mb-1">
                            Phone
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            value={data.phone}
                            onChange={handleChange}
                            required
                            placeholder="Enter your phone number"
                            className="w-full px-4 py-2 bg-white/10 text-white
                         border border-white/20 rounded-lg
                         placeholder-white/60
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-6">
                        <label className="block text-sm text-white mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={data.password}
                            onChange={handleChange}
                            required
                            placeholder="Create a password"
                            className="w-full px-4 py-2 bg-white/10 text-white
                         border border-white/20 rounded-lg
                         placeholder-white/60
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg
                       font-medium hover:bg-blue-700 transition"
                    >
                        Create Account
                    </button>
                </form>

                <p className="text-sm text-center text-white/70 mt-4">
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-400 hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;
