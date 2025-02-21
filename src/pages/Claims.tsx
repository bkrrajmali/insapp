import React from 'react';
import { AlertCircle, Plus, Search } from 'lucide-react';

const Claims = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Claims Management</h1>
        <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          <Plus className="h-5 w-5" />
          File New Claim
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search claims..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <select className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">All Statuses</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
            <option value="review">Under Review</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Claim ID</th>
                <th className="text-left py-3 px-4">Policy Number</th>
                <th className="text-left py-3 px-4">Customer</th>
                <th className="text-left py-3 px-4">Type</th>
                <th className="text-left py-3 px-4">Status</th>
                <th className="text-left py-3 px-4">Amount</th>
                <th className="text-left py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-3 px-4">CLM-2024-001</td>
                <td className="py-3 px-4">POL-2024-001</td>
                <td className="py-3 px-4">John Doe</td>
                <td className="py-3 px-4">Auto Accident</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                    Under Review
                  </span>
                </td>
                <td className="py-3 px-4">$5,000</td>
                <td className="py-3 px-4">
                  <button className="text-blue-500 hover:text-blue-700">Process</button>
                </td>
              </tr>
              {/* Add more claim rows here */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Claims;