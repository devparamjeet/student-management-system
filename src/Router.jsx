import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import MainOutlet from './MainOutlet';
import Login from './pages/Login';
import Signup from './pages/Signup';
import UserOutlet from './UserOutlet';
import UserProfile from './pages/UserProfile';
import UserSettings from './pages/UserSettings';
import UserAnalytics from './pages/UserAnalytics';

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
        element: <UserOutlet />,
        children: [
            { index: true, element: <App /> },
            { path: "profile", element: <UserProfile /> },
            { path: "analytics", element: <UserAnalytics /> },
            { path: "settings", element: <UserSettings /> },
        ]
    },
])

export default route