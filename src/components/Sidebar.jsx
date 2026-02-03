import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
    FiHome,
    FiUser,
    FiBarChart2,
    FiSettings,
    FiLogOut,
} from "react-icons/fi";

const Sidebar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("user_id");
        localStorage.removeItem("user_token");
        navigate("/login");
    };

    const navItemClass = ({ isActive }) =>
        `flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition
     ${isActive
            ? "bg-neutral-700 text-white"
            : "text-gray-400 hover:bg-neutral-700 hover:text-white"
        }`;

    return (
        <aside className="w-64 min-h-screen bg-neutral-800 p-5 hidden md:block">

            <ul className="space-y-2">
                <li>
                    <NavLink to="/user" className={navItemClass}>
                        <FiHome size={18} />
                        <span>Dashboard</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/user/profile" className={navItemClass}>
                        <FiUser size={18} />
                        <span>Profile</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/user/analytics" className={navItemClass}>
                        <FiBarChart2 size={18} />
                        <span>Analytics</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/user/settings" className={navItemClass}>
                        <FiSettings size={18} />
                        <span>Settings</span>
                    </NavLink>
                </li>

                <li
                    onClick={handleLogout}
                    className="flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium cursor-pointer text-red-400 hover:bg-red-500 hover:text-white transition"
                >
                    <FiLogOut size={18} />
                    <span>Logout</span>
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;
