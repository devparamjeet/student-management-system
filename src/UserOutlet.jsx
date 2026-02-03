import React, { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar'
import { Outlet } from 'react-router-dom'
import UserNavbar from './components/UserNavbar'

const UserOutlet = () => {

    const [id, setId] = useState(localStorage.getItem("user_id"))

    const [data, setData] = useState({})

    useEffect(() => {
        let callAPI = async () => {
            // let url = "http://localhost:5000/api/user/" + id
            let url = "https://freeapi.gravitycoding.com/api/user/" + id
            let resp = await fetch(url)
            let res = await resp.json()
            await setData(res)
            // console.log(res)
        }

        callAPI()
    }, [id])

    console.log(id)

    return (
        <div className="min-h-screen bg-neutral-900 text-white">
            <UserNavbar name={data.name} />
            <div className='flex'>
                <Sidebar />
                <Outlet context={[data]} />
            </div>
        </div>
    )
}

export default UserOutlet
