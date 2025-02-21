import React from 'react';
import { BarChart, Users, FileText, AlertCircle } from 'lucide-react';

const StatCard = ({ icon: Icon, label, value, change }: any) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-gray-500 text-sm">{label}</p>
        <h3 className="text-2xl font-bold mt-1">{value}</h3>
        <p className={`text-sm mt-1 ${change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
          {change >= 0 ? '+' : ''}{change}% from last month
        </p>
      </div>
      <Icon className="h-8 w-8 text-blue-500" />
    </div>
  </div>
);

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard 
          icon={Users}
          label="Total Customers"
          value="1,234"
          change={12.5}
        />
        <StatCard 
          icon={FileText}
          label="Active Policies"
          value="856"
          change={8.3}
        />
        <StatCard 
          icon={AlertCircle}
          label="Pending Claims"
          value="42"
          change={-5.2}
        />
        <StatCard 
          icon={BarChart}
          label="Monthly Revenue"
          value="$125,400"
          change={15.8}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Recent Claims</h2>
          {/* Add claims table/list here */}
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Revenue Trends</h2>
          {/* Add chart here */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;