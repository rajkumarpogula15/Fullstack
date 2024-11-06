import { NavLink } from "react-router-dom";

const Navbar = () => {
    const Linksdata = [
        { title: 'Home', path: '/' },
        { title: 'Products', path: '/products' },
        { title: 'Contact', path: '/contact' }
    ];

    return (
        <nav className="w-screen h-16 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 shadow-lg flex items-center px-4">
            {/* Logo Section */}
            <div className="w-[40%] flex items-center font-bold text-2xl italic text-white tracking-wide drop-shadow-md" style={{ fontFamily: "'Poppins', sans-serif" }}>
                ShopEase
            </div>
            
            {/* Links Section */}
            <div className="w-[40%] h-full flex justify-end items-center">
                <div className="flex items-center gap-6 font-semibold text-lg">
                    {Linksdata.map((link, index) => (
                        <NavLink
                            to={link.path}
                            key={index}
                            className={({ isActive }) =>
                                `px-4 py-2 rounded-full transition-transform duration-200 ${
                                    isActive 
                                    ? 'bg-white text-purple-600 scale-105 shadow-lg' 
                                    : 'text-white hover:bg-white/20 hover:text-yellow-200'
                                }`
                            }
                        >
                            {link.title}
                        </NavLink>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
