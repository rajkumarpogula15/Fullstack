import React from 'react';
import { FaBox, FaUsers, FaShoppingBag } from 'react-icons/fa';

const AdminDashboardcards = () => {
  // Generate random numbers for demonstration
  const productCount = Math.floor(Math.random() * 1000) + 1;  // Between 1 and 1000
  const customerCount = Math.floor(Math.random() * 500) + 1;   // Between 1 and 500
  const orderCount = Math.floor(Math.random() * 300) + 1;      // Between 1 and 300

  return (
    <div className='w-full h-full flex flex-row justify-center items-center gap-8 mt-10 flex-wrap'>
      {[
        { icon: <FaBox className='h-8 w-8 mr-2 text-black group-hover:text-white duration-300' />, title: "Products", count: productCount, bgColor: "bg-blue-200" },
        { icon: <FaUsers className='h-8 w-8 mr-2 text-black group-hover:text-white duration-300' />, title: "Customers", count: customerCount, bgColor: "bg-green-200" },
        { icon: <FaShoppingBag className='h-8 w-8 mr-2 text-black group-hover:text-white duration-300' />, title: "Orders", count: orderCount, bgColor: "bg-yellow-200" },
      ].map((card, index) => (
        <div key={index} className={`h-[8rem] w-full sm:w-[48%] lg:w-[23%] ${card.bgColor} rounded-lg overflow-hidden relative group p-4 z-0 shadow-lg transition-transform duration-300 transform hover:scale-105`}>
          <div className="circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-purple-500 group-hover:scale-[800%] duration-500 z-[-1]" />
          <div className='flex h-full w-full justify-center items-center flex-row'>
            {card.icon}
            <div>
              <h1 className="z-20 font-bold font-sans group-hover:text-white duration-300 text-lg">
                {card.title}
              </h1>
              <p className="text-2xl font-semibold group-hover:text-white duration-300">
                {card.count}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminDashboardcards;
