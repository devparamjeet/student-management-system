import React, { use } from "react";
import { useOutletContext } from "react-router-dom";

const UserProfile = () => {

    const [user, setUser] = useOutletContext()
    console.log(user)

    return (
        <div className="min-h-screen bg-neutral-900 text-white p-6">

            {/* Header */}
            <div className="mb-6">
                <h1 className="text-2xl font-semibold">User Profile</h1>
                <p className="text-gray-400 text-sm">
                    View your account details
                </p>
            </div>

            {/* Profile Card */}
            <div className="bg-neutral-800 rounded-xl shadow p-6 flex flex-col md:flex-row gap-6">

                {/* Avatar */}
                <div className="flex flex-col items-center">
                    <img
                        src={`https://ui-avatars.com/api/?name=${user.name}&background=2563eb&color=fff&size=128`}
                        alt="User"
                        className="w-32 h-32 rounded-full border-4 border-neutral-700"
                    />
                    <span className="mt-3 text-sm text-gray-400">User ID: {user.id ? user.id : "not found"}</span>
                </div>

                {/* User Info */}
                <div className="flex-1">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                        <div>
                            <label className="block text-sm text-gray-400 mb-1">
                                Full Name
                            </label>
                            <input
                                type="text"
                                value={user.name}
                                disabled
                                className="w-full px-4 py-2 bg-neutral-900 border border-neutral-700 rounded-lg text-gray-300"
                            />
                        </div>

                        <div>
                            <label className="block text-sm text-gray-400 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                value={user.email}
                                disabled
                                className="w-full px-4 py-2 bg-neutral-900 border border-neutral-700 rounded-lg text-gray-300"
                            />
                        </div>

                        <div>
                            <label className="block text-sm text-gray-400 mb-1">
                                Phone
                            </label>
                            <input
                                type="text"
                                value={user.phone}
                                disabled
                                className="w-full px-4 py-2 bg-neutral-900 border border-neutral-700 rounded-lg text-gray-300"
                            />
                        </div>

                        <div>
                            <label className="block text-sm text-gray-400 mb-1">
                                Password
                            </label>
                            <input
                                type="password"
                                value={user.pass}
                                disabled
                                className="w-full px-4 py-2 bg-neutral-900 border border-neutral-700 rounded-lg text-gray-300"
                            />
                        </div>

                        <div>
                            <label className="block text-sm text-gray-400 mb-1">
                                Account Status
                            </label>
                            <input
                                type="text"
                                value="Active"
                                disabled
                                className="w-full px-4 py-2 bg-neutral-900 border border-neutral-700 rounded-lg text-green-400"
                            />
                        </div>

                        <div>
                            <label className="block text-sm text-gray-400 mb-1">
                                Joined On
                            </label>
                            <input
                                type="text"
                                value="10 Jan 2026"
                                disabled
                                className="w-full px-4 py-2 bg-neutral-900 border border-neutral-700 rounded-lg text-gray-300"
                            />
                        </div>

                    </div>

                    {/* Actions */}
                    <div className="mt-6 flex gap-4">
                        <button className="bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700 transition">
                            Edit Profile
                        </button>
                        <button className="bg-neutral-700 px-5 py-2 rounded-lg hover:bg-neutral-600 transition">
                            Change Password
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
