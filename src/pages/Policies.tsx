import React from 'react';
import { FileText, Plus, Search } from 'lucide-react';

const Policies = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Policy Management</h1>
        <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          <Plus className="h-5 w-5" />
          New Policy
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search policies..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <select className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">All Types</option>
            <option value="auto">Auto Insurance</option>
            <option value="home">Home Insurance</option>
            <option value="life">Life Insurance</option>
            <option value="health">Health Insurance</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Policy Number</th>
                <th className="text-left py-3 px-4">Type</th>
                <th className="text-left py-3 px-4">Customer</th>
                <th className="text-left py-3 px-4">Status</th>
                <th className="text-left py-3 px-4">Premium</th>
                <th className="text-left py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-3 px-4">POL-2024-001</td>
                <td className="py-3 px-4">Auto Insurance</td>
                <td className="py-3 px-4">John Doe</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    Active
                  </span>
                </td>
                <td className="py-3 px-4">$125/month</td>
                <td className="py-3 px-4">
                  <button className="text-blue-500 hover:text-blue-700">View Details</button>
                </td>
              </tr>
              {/* Add more policy rows here */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Policies;