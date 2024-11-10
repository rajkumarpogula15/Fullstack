import React from 'react';
import { FaPencilAlt, FaTrash } from 'react-icons/fa';
import AdminHeader from '../../components/Admin/AdminHeader';

const AdminProducts = () => {
  return (
    <div>
      <AdminHeader title="Products" />
      <div className="p-6">
        <table className="w-full text-left border-collapse shadow-lg">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-4 border-b border-gray-300 text-gray-700 font-semibold">Title</th>
              <th className="p-4 border-b border-gray-300 text-gray-700 font-semibold">Price</th>
              <th className="p-4 border-b border-gray-300 text-gray-700 font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-100">
              <td className="p-4 border-b border-gray-300">Product1</td>
              <td className="p-4 border-b border-gray-300">500</td>
              <td className="p-4 border-b border-gray-300 text-blue-500 cursor-pointer flex space-x-4">
                <button className="hover:text-blue-700" aria-label="Edit">
                  <FaPencilAlt />
                </button>
                <button className="hover:text-red-700" aria-label="Delete">
                  <FaTrash />
                </button>
              </td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="p-4 border-b border-gray-300">Product2</td>
              <td className="p-4 border-b border-gray-300">300</td>
              <td className="p-4 border-b border-gray-300 text-blue-500 cursor-pointer flex space-x-4">
                <button className="hover:text-blue-700" aria-label="Edit">
                  <FaPencilAlt />
                </button>
                <button className="hover:text-red-700" aria-label="Delete">
                  <FaTrash />
                </button>
              </td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="p-4 border-b border-gray-300">Product3</td>
              <td className="p-4 border-b border-gray-300">400</td>
              <td className="p-4 border-b border-gray-300 text-blue-500 cursor-pointer flex space-x-4">
                <button className="hover:text-blue-700" aria-label="Edit">
                  <FaPencilAlt />
                </button>
                <button className="hover:text-red-700" aria-label="Delete">
                  <FaTrash />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminProducts;
