import { IndianRupee } from 'lucide-react';
import React from 'react';

const ProductCard = ({ img, price, name }) => {
    return (
        <div className="relative flex flex-col w-full sm:w-[47%] md:w-[30%] lg:w-[19%] xl:w-[18%] rounded-xl bg-white text-gray-700 shadow-md transition-transform transform hover:scale-105 m-4">
            {/* Product Image Section */}
            <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 text-white shadow-lg bg-gradient-to-r from-purple-300 to-purple-600">
                <img
                    src={img}
                    alt={name}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                />
            </div>

            {/* Product Info Section */}
            <div className="p-6">
                <h5 className="mb-2 text-xl font-semibold text-blue-gray-900">{name}</h5>
                <p className="font-bold text-xl flex items-center text-gray-700">
                    <IndianRupee className="h-5 w-6" /> {price}
                </p>
            </div>

            {/* Buy Now Button */}
            <div className="p-6 pt-0 w-full">
                <button
                    type="button"
                    className="w-full rounded-lg bg-purple-600 py-3 px-6 text-center font-bold text-xs text-white transition-all hover:bg-purple-500 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
                >
                    Buy Now
                </button>
            </div>
        </div>
    );
};

export default ProductCard;

