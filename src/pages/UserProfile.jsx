import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

const UserProfile = () => {

    const [user, setUser] = useOutletContext()
    const [updatedUser, setUpdatedUser] = useState({})
    const [pass, setPass] = useState("")
    const [isEdit, setIsEdit] = useState(false)
    const [isPass, setIsPass] = useState(false)
    // console.log(user)

    useEffect(() => {
        let updateValue = async () => {
            setUpdatedUser(user)
        }
        updateValue()
    }, [user])

    let handleChange = (event) => {
        setUpdatedUser({ ...updatedUser, [event.target.name]: event.target.value })
    }

    let handleEdit = () => {
        setIsEdit(true)

    }
    let handleSaveChange = async () => {

        let api = "https://freeapi.gravitycoding.com/api/user/" + updatedUser._id
        let resp = await fetch(api, {
            method: "PUT",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(updatedUser)
        })

        resp.status === 200 || resp.status === 201 ? setIsEdit(false) : alert("Try Again")
    }


    // Chnage Password
    let handleSavePass = async () => {
        // setIsPass(false)
        let api = "https://freeapi.gravitycoding.com/api/user/" + updatedUser._id
        let resp = await fetch(api, {
            method: "PATCH",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({ password: pass })
        })

        resp.status === 200 || resp.status === 201 ? setIsEdit(false) : alert("Try Again")
    }

    let handlePass = () => {
        setIsPass(true)
    }

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
                                value={updatedUser.name}
                                name="name"
                                onChange={handleChange}
                                disabled={isEdit ? false : true}
                                className="w-full px-4 py-2 bg-neutral-900 border border-neutral-700 rounded-lg text-gray-300"
                            />
                        </div>

                        <div>
                            <label className="block text-sm text-gray-400 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={updatedUser.email}
                                onChange={handleChange}
                                disabled={isEdit ? false : true}
                                className="w-full px-4 py-2 bg-neutral-900 border border-neutral-700 rounded-lg text-gray-300"
                            />
                        </div>

                        <div>
                            <label className="block text-sm text-gray-400 mb-1">
                                Phone
                            </label>
                            <input
                                type="text"
                                value={updatedUser.phone}
                                name="phone"
                                onChange={handleChange}
                                disabled={isEdit ? false : true}
                                className="w-full px-4 py-2 bg-neutral-900 border border-neutral-700 rounded-lg text-gray-300"
                            />
                        </div>

                        <div>
                            <label className="block text-sm text-gray-400 mb-1">
                                Password
                            </label>
                            <input
                                type="password"
                                value={pass}
                                onChange={(event) => {
                                    setPass(event.target.value)
                                }}
                                disabled={isPass ? false : true}
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
                        <button className="bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700 transition" onClick={isEdit ? handleSaveChange : handleEdit}>
                            {isEdit ? 'Save Changes' : 'Edit Profile'}
                        </button>
                        <button className="bg-neutral-700 px-5 py-2 rounded-lg hover:bg-neutral-600 transition" onClick={isPass ? handleSavePass : handlePass}>
                            {isPass ? 'Save' : 'Change Pass'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
