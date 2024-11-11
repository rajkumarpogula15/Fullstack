import React, { useEffect, useState } from 'react';
import { Pencil, Trash } from 'lucide-react';
import { getProducts } from '../../api/api';

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  // Fetch products data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getProducts();
        if (res.status === 200) {
          setProducts(Array.isArray(res.data) ? res.data : []);
        } else {
          setError("Failed to load products.");
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("An error occurred while fetching products.");
      }
    };
    fetchData();
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-start items-center p-8 bg-gradient-to-b from-gray-100 via-white to-gray-50 shadow-md rounded-lg">
      <h1 className="text-3xl font-bold text-purple-600 mb-6">Product Management</h1>
      <table className="w-full border border-gray-200 rounded-lg shadow-lg overflow-hidden">
        <thead className="bg-purple-600 text-white text-left">
          <tr>
            <th className="p-4">Title</th>
            <th className="p-4">Price</th>
            <th className="p-4 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {error ? (
            <tr>
              <td colSpan="3" className="p-6 text-center text-red-500">{error}</td>
            </tr>
          ) : products.length === 0 ? (
            <tr>
              <td colSpan="3" className="p-6 text-center text-gray-500">No Products Available</td>
            </tr>
          ) : (
            products.map((product) => (
              <tr key={product._id} className="hover:bg-purple-50 transition-colors">
                <td className="p-4 border-t border-gray-200">{product.title}</td>
                <td className="p-4 border-t border-gray-200">₹{product.price}</td>
                <td className="p-4 border-t border-gray-200 flex justify-center gap-4">
                  <button className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-200">
                    <Pencil />
                  </button>
                  <button className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-200">
                    <Trash />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default AdminProducts;
