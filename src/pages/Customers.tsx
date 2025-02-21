import React from 'react';
import { Users, UserPlus, Search } from 'lucide-react';

const Customers = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Customer Management</h1>
        <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          <UserPlus className="h-5 w-5" />
          Add Customer
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Total Customers</h3>
          <p className="text-3xl font-bold text-blue-600">1,234</p>
          <p className="text-sm text-gray-500">Active accounts</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">New This Month</h3>
          <p className="text-3xl font-bold text-green-600">45</p>
          <p className="text-sm text-gray-500">Customer growth</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Premium Customers</h3>
          <p className="text-3xl font-bold text-purple-600">287</p>
          <p className="text-sm text-gray-500">Multiple policies</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search customers..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <select className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">All Segments</option>
            <option value="premium">Premium</option>
            <option value="standard">Standard</option>
            <option value="basic">Basic</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Customer ID</th>
                <th className="text-left py-3 px-4">Name</th>
                <th className="text-left py-3 px-4">Email</th>
                <th className="text-left py-3 px-4">Policies</th>
                <th className="text-left py-3 px-4">Status</th>
                <th className="text-left py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-3 px-4">CUS-2024-001</td>
                <td className="py-3 px-4">John Doe</td>
                <td className="py-3 px-4">john.doe@example.com</td>
                <td className="py-3 px-4">3 Active</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    Premium
                  </span>
                </td>
                <td className="py-3 px-4">
                  <button className="text-blue-500 hover:text-blue-700">View Profile</button>
                </td>
              </tr>
              {/* Add more customer rows here */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Customers;