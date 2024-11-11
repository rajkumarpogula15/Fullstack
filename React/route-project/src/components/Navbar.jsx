import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const Linksdata = [
        { title: 'Home', path: '/' },
        { title: 'Products', path: '/products' },
        { title: 'Contact', path: '/contact' }
    ];

    // Toggle dropdown visibility
    const handleProfileClick = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    // Close dropdown if clicked outside
    const handleClickOutside = (e) => {
        if (!e.target.closest('.profile-dropdown') && !e.target.closest('.user-icon')) {
            setIsDropdownOpen(false);
        }
    };

    // Handle clicks outside dropdown
    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <nav className="w-screen h-16 bg-gradient-to-r from-purple-700 via-pink-600 to-red-500 shadow-lg flex items-center justify-between px-4">
            {/* Logo Section */}
            <div className="font-bold text-3xl italic text-white tracking-wide drop-shadow-lg"
                 style={{ fontFamily: "'Playfair Display', serif" }}>
                ShopEase
            </div>

            {/* Links Section */}
            <div className="flex items-center gap-8">
                {Linksdata.map((link, index) => (
                    <NavLink
                        to={link.path}
                        key={index}
                        className={({ isActive }) =>
                            `px-4 py-2 rounded-full transition-transform duration-200 ${isActive
                                ? 'bg-white text-purple-700 scale-105 shadow-lg'
                                : 'text-white hover:bg-white/20 hover:text-yellow-200'
                            }`
                        }
                    >
                        {link.title}
                    </NavLink>
                ))}

                {/* User Profile Icon */}
                <button className="user-icon text-white hover:text-yellow-200 transition duration-200" onClick={handleProfileClick}>
                    <FaUserCircle size={24} />
                </button>

                {/* Profile Dropdown */}
                {isDropdownOpen && (
                    <div className="profile-dropdown absolute top-16 right-4 bg-white shadow-lg rounded-md w-48 py-2">
                        <NavLink to="/profile" className="block px-4 py-2 text-gray-700 hover:bg-purple-100">Profile</NavLink>
                        <NavLink to="/settings" className="block px-4 py-2 text-gray-700 hover:bg-purple-100">Settings</NavLink>
                        <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-purple-100">Logout</button>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
