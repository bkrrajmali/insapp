import React from 'react';
import { CreditCard, DollarSign, Search } from 'lucide-react';

const Payments = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Payment Management</h1>
        <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          <DollarSign className="h-5 w-5" />
          Record Payment
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Total Collected</h3>
          <p className="text-3xl font-bold text-green-600">$45,250</p>
          <p className="text-sm text-gray-500">This month</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Pending Payments</h3>
          <p className="text-3xl font-bold text-yellow-600">$12,800</p>
          <p className="text-sm text-gray-500">15 payments</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Overdue</h3>
          <p className="text-3xl font-bold text-red-600">$3,450</p>
          <p className="text-sm text-gray-500">5 payments</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search payments..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <select className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">All Status</option>
            <option value="paid">Paid</option>
            <option value="pending">Pending</option>
            <option value="overdue">Overdue</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Payment ID</th>
                <th className="text-left py-3 px-4">Policy Number</th>
                <th className="text-left py-3 px-4">Customer</th>
                <th className="text-left py-3 px-4">Amount</th>
                <th className="text-left py-3 px-4">Due Date</th>
                <th className="text-left py-3 px-4">Status</th>
                <th className="text-left py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-3 px-4">PAY-2024-001</td>
                <td className="py-3 px-4">POL-2024-001</td>
                <td className="py-3 px-4">John Doe</td>
                <td className="py-3 px-4">$125.00</td>
                <td className="py-3 px-4">Mar 15, 2024</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    Paid
                  </span>
                </td>
                <td className="py-3 px-4">
                  <button className="text-blue-500 hover:text-blue-700">View Receipt</button>
                </td>
              </tr>
              {/* Add more payment rows here */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Payments;