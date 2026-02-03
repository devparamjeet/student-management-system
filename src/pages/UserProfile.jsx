import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

const UserProfile = () => {
    const [user, setUser] = useOutletContext();
    const [updatedUser, setUpdatedUser] = useState({});
    const [pass, setPass] = useState("");
    const [isEdit, setIsEdit] = useState(false);
    const [isPass, setIsPass] = useState(false);

    useEffect(() => {
        setUpdatedUser(user);
    }, [user]);

    const handleChange = (e) => {
        setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });
    };

    const handleSaveChange = async () => {
        const api = `https://freeapi.gravitycoding.com/api/user/${updatedUser._id}`;
        const resp = await fetch(api, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedUser),
        });

        resp.ok ? setIsEdit(false) : alert("Try Again");
    };

    const handleSavePass = async () => {
        const api = `https://freeapi.gravitycoding.com/api/user/${updatedUser._id}`;
        const resp = await fetch(api, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ password: pass }),
        });

        if (resp.ok) {
            setIsPass(false);
            setPass("");
        } else {
            alert("Try Again");
        }
    };

    return (
        <div className="min-h-screen w-full bg-neutral-950 text-white p-6">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-semibold">My Profile</h1>
                <p className="text-gray-400 text-sm">
                    Manage your personal information
                </p>
            </div>

            {/* Profile Card */}
            <div className="bg-neutral-900 rounded-2xl shadow-xl p-6 flex flex-col lg:flex-row gap-8">
                {/* Avatar */}
                <div className="flex flex-col items-center lg:w-1/4">
                    <img
                        src={`https://ui-avatars.com/api/?name=${user.name}&background=2563eb&color=fff&size=256`}
                        alt="User"
                        className="w-36 h-36 rounded-full border-4 border-neutral-800"
                    />
                    <p className="mt-3 text-xs text-gray-400">
                        ID: {user._id || "N/A"}
                    </p>
                    <span className="mt-2 px-3 py-1 text-xs rounded-full bg-green-500/10 text-green-400">
                        Active Account
                    </span>
                </div>

                {/* Info */}
                <div className="flex-1 space-y-8">
                    {/* Personal Info */}
                    <div>
                        <h2 className="text-lg font-medium mb-4">Personal Details</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {["name", "email", "phone"].map((field) => (
                                <div key={field}>
                                    <label className="block text-sm text-gray-400 mb-1 capitalize">
                                        {field}
                                    </label>
                                    <input
                                        type="text"
                                        name={field}
                                        value={updatedUser[field] || ""}
                                        onChange={handleChange}
                                        disabled={!isEdit}
                                        className={`w-full px-4 py-2 rounded-lg border 
                      ${isEdit
                                                ? "bg-neutral-800 border-neutral-700 text-white"
                                                : "bg-neutral-900 border-neutral-800 text-gray-400"
                                            }`}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Actions */}
                        <div className="mt-5 flex gap-3">
                            {!isEdit ? (
                                <button
                                    onClick={() => setIsEdit(true)}
                                    className="bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer"
                                >
                                    Edit Profile
                                </button>
                            ) : (
                                <>
                                    <button
                                        onClick={handleSaveChange}
                                        className="bg-green-600 px-5 py-2 rounded-lg hover:bg-green-700 transition cursor-pointer"
                                    >
                                        Save
                                    </button>
                                    <button
                                        onClick={() => {
                                            setIsEdit(false);
                                            setUpdatedUser(user);
                                        }}
                                        className="bg-neutral-700 px-5 py-2 rounded-lg hover:bg-neutral-600 cursor-pointer"
                                    >
                                        Cancel
                                    </button>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Password Section */}
                    <div className="border-t border-neutral-800 pt-6">
                        <h2 className="text-lg font-medium mb-4">Security</h2>

                        <div className="max-w-md">
                            <label className="block text-sm text-gray-400 mb-1">
                                New Password
                            </label>
                            <input
                                type="password"
                                value={pass}
                                onChange={(e) => setPass(e.target.value)}
                                disabled={!isPass}
                                className={`w-full px-4 py-2 rounded-lg border 
                  ${isPass
                                        ? "bg-neutral-800 border-neutral-700"
                                        : "bg-neutral-900 border-neutral-800 text-gray-500"
                                    }`}
                            />
                        </div>

                        <div className="mt-4 flex gap-3">
                            {!isPass ? (
                                <button
                                    onClick={() => setIsPass(true)}
                                    className="bg-red-600/20 text-red-400 px-5 py-2 rounded-lg hover:bg-red-600/30 cursor-pointer"
                                >
                                    Change Password
                                </button>
                            ) : (
                                <>
                                    <button
                                        onClick={handleSavePass}
                                        className="bg-red-600 px-5 py-2 rounded-lg hover:bg-red-700 cursor-pointer"
                                    >
                                        Update Password
                                    </button>
                                    <button
                                        onClick={() => {
                                            setIsPass(false);
                                            setPass("");
                                        }}
                                        className="bg-neutral-700 px-5 py-2 rounded-lg hover:bg-neutral-600 cursor-pointer"
                                    >
                                        Cancel
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
