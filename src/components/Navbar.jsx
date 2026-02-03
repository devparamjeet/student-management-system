import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-6 md:px-20 h-20 border-b bg-black">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold tracking-wide">
                LOGO
            </Link>

            {/* Actions */}
            <div className="flex items-center gap-3">
                <Link to="/signup">
                    <Button value="Signup" />
                </Link>

                <Link to="/login">
                    <Button value="Login" bg="bg-black" />
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
