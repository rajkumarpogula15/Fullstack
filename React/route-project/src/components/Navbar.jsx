import React from 'react';
import { NavLink } from "react-router-dom";
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
    const Linksdata = [
        { title: 'Home', path: '/' },
        { title: 'Products', path: '/products' },
        { title: 'Contact', path: '/contact' }
    ];

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
                            `px-4 py-2 rounded-full transition-transform duration-200 ${
                                isActive 
                                ? 'bg-white text-purple-700 scale-105 shadow-lg' 
                                : 'text-white hover:bg-white/20 hover:text-yellow-200'
                            }`
                        }
                    >
                        {link.title}
                    </NavLink>
                ))}
                
                {/* User Profile Icon */}
                <button className="text-white hover:text-yellow-200 transition duration-200">
                    <FaUserCircle size={24} />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;


