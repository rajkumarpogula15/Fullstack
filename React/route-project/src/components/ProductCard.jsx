import { IndianRupee } from 'lucide-react';
import React from 'react';

const ProductCard = ({ img, price, name }) => {
    return (
        <div className="relative flex flex-col w-[19%] rounded-xl bg-white text-gray-700 shadow-md transition-transform transform hover:scale-105 m-2">
            <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 text-white shadow-lg bg-gradient-to-r from-purple-300 to-purple-600">
                <img src={img} alt={name} className='h-full w-full object-cover transition-transform duration-300 hover:scale-110' />
            </div>
            <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug text-blue-gray-900 antialiased">
                    {name}
                </h5>
                <p className="font-sans leading-relaxed text-inherit antialiased font-bold flex flex-row text-xl items-center">
                    <IndianRupee className='h-5 w-6' /> {price}
                </p>
            </div>
            <div className="p-6 pt-0 w-full">
                <button type="button" className="w-full rounded-lg bg-purple-600 py-3 px-6 text-center font-sans text-xs font-bold uppercase text-white shadow-md transition-all hover:bg-purple-500 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-300">
                    Buy Now
                </button>
            </div>
        </div>
    );
}

export default ProductCard;
