import React from 'react';
import { Bell, Settings, Search } from 'lucide-react';

const Notifications = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Notification Center</h1>
        <button className="flex items-center gap-2 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600">
          <Settings className="h-5 w-5" />
          Configure Notifications
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Unread</h3>
          <p className="text-3xl font-bold text-blue-600">24</p>
          <p className="text-sm text-gray-500">Notifications</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">High Priority</h3>
          <p className="text-3xl font-bold text-red-600">5</p>
          <p className="text-sm text-gray-500">Require attention</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Scheduled</h3>
          <p className="text-3xl font-bold text-green-600">12</p>
          <p className="text-sm text-gray-500">For next 24h</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search notifications..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <select className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">All Types</option>
            <option value="policy">Policy Updates</option>
            <option value="claim">Claim Status</option>
            <option value="payment">Payment Reminders</option>
          </select>
        </div>

        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded-r-lg">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold">New Claim Submitted</h4>
                <p className="text-sm text-gray-600">Claim #CLM-2024-001 has been submitted and requires review.</p>
              </div>
              <span className="text-sm text-gray-500">5 min ago</span>
            </div>
          </div>

          <div className="border-l-4 border-red-500 bg-red-50 p-4 rounded-r-lg">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold">High Risk Alert</h4>
                <p className="text-sm text-gray-600">Suspicious activity detected on Policy #POL-2024-003.</p>
              </div>
              <span className="text-sm text-gray-500">1 hour ago</span>
            </div>
          </div>

          <div className="border-l-4 border-yellow-500 bg-yellow-50 p-4 rounded-r-lg">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold">Payment Reminder</h4>
                <p className="text-sm text-gray-600">Premium payment for Policy #POL-2024-002 is due in 3 days.</p>
              </div>
              <span className="text-sm text-gray-500">2 hours ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;