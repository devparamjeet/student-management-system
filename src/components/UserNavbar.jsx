import React from 'react'

const UserNavbar = (props) => {
    return (
        <nav className="bg-neutral-800 px-6 py-4 flex justify-between items-center shadow">
            <h1 className="text-xl font-semibold">User Dashboard</h1>
            <div className="flex items-center gap-4">
                <span className="text-gray-300">Hello, {props.name ? props.name : "User"}</span>
                <img
                    src={`https://ui-avatars.com/api/?name=${props.name}`}
                    alt="User"
                    className="w-9 h-9 rounded-full"
                />
            </div>
        </nav>
    )
}

export default UserNavbar
