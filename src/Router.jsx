import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import MainOutlet from './MainOutlet';
import Login from './pages/Login';
import Signup from './pages/Signup';

const route = createBrowserRouter([
    {
        path: "/",
        element: <MainOutlet />,
        children: [
            { index: true, element: <Login /> },
            { path: "login", element: <Login /> },
            { path: "signup", element: <Signup /> },
        ]
    },
    {
        path: "/user",
        element: <App />
    },
])

export default route