import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {

    let navigate = useNavigate()

    return (
        <aside className="w-64 min-h-screen bg-neutral-800 p-5 hidden md:block">
            <ul className="space-y-3 text-gray-300">
                <Link to="/user">
                    <li className="hover:text-white cursor-pointer">🏠 Dashboard</li>
                </Link>
                <Link to="/user/profile">
                    <li className="hover:text-white cursor-pointer">👤 Profile</li>
                </Link>
                <Link to="/user/analytics">
                    <li className="hover:text-white cursor-pointer">📊 Analytics</li>
                </Link>
                <Link to="/user/settings">
                    <li className="hover:text-white cursor-pointer">⚙️ Settings</li>
                </Link>

                <li className="hover:text-red-400 cursor-pointer" onClick={() => {
                    localStorage.removeItem("user_id")
                    localStorage.removeItem("user_token")
                    navigate("/login")
                }}>🚪 Logout</li>

            </ul>
        </aside>
    );
};

export default Sidebar;
