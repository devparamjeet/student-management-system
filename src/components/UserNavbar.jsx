import React from "react";

const UserNavbar = ({ name = "User" }) => {
    const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(
        name
    )}&background=1f2937&color=fff`;

    return (
        <nav className="bg-neutral-800 px-6 py-4 flex justify-between items-center shadow-md">
            {/* Title */}
            <h1 className="text-lg md:text-xl font-semibold text-white">
                User Dashboard
            </h1>

            {/* User Info */}
            <div className="flex items-center gap-3">
                <span className="text-sm md:text-base text-gray-300">
                    Hello, <span className="font-medium text-white">{name}</span>
                </span>

                <img
                    src={avatarUrl}
                    alt={`${name} avatar`}
                    className="w-9 h-9 rounded-full border border-neutral-700 object-cover"
                />
            </div>
        </nav>
    );
};

export default UserNavbar;
