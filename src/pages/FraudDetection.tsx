import React from 'react';
import { Shield, AlertTriangle, Search } from 'lucide-react';

const FraudDetection = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Fraud Detection</h1>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600">
            <AlertTriangle className="h-5 w-5" />
            Review Flagged Cases
          </button>
          <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            <Shield className="h-5 w-5" />
            Run Analysis
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Risk Score</h3>
          <div className="flex items-end gap-2">
            <p className="text-3xl font-bold text-green-600">Low</p>
            <p className="text-xl text-gray-500">32/100</p>
          </div>
          <p className="text-sm text-gray-500">System-wide average</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Flagged Cases</h3>
          <p className="text-3xl font-bold text-yellow-600">15</p>
          <p className="text-sm text-gray-500">Requiring review</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Confirmed Fraud</h3>
          <p className="text-3xl font-bold text-red-600">3</p>
          <p className="text-sm text-gray-500">This month</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search cases..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <select className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">All Risk Levels</option>
            <option value="high">High Risk</option>
            <option value="medium">Medium Risk</option>
            <option value="low">Low Risk</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Case ID</th>
                <th className="text-left py-3 px-4">Type</th>
                <th className="text-left py-3 px-4">Risk Score</th>
                <th className="text-left py-3 px-4">Flags</th>
                <th className="text-left py-3 px-4">Status</th>
                <th className="text-left py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-3 px-4">FRD-2024-001</td>
                <td className="py-3 px-4">Claim Investigation</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-sm">
                    High (85/100)
                  </span>
                </td>
                <td className="py-3 px-4">Multiple Claims, Unusual Pattern</td>
                <td className="py-3 px-4">Under Review</td>
                <td className="py-3 px-4">
                  <button className="text-blue-500 hover:text-blue-700">Investigate</button>
                </td>
              </tr>
              {/* Add more fraud detection cases here */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FraudDetection;