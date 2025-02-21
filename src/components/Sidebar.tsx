import React from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '../lib/utils';
import {
  Home,
  FileText,
  AlertCircle,
  CreditCard,
  Shield,
  Bell,
  Users,
} from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: Home, label: 'Dashboard', path: '/' },
    { icon: FileText, label: 'Policies', path: '/policies' },
    { icon: AlertCircle, label: 'Claims', path: '/claims' },
    { icon: CreditCard, label: 'Payments', path: '/payments' },
    { icon: Shield, label: 'Fraud Detection', path: '/fraud' },
    { icon: Bell, label: 'Notifications', path: '/notifications' },
    { icon: Users, label: 'Customers', path: '/customers' },
  ];

  return (
    <div className="w-64 bg-gray-900 min-h-screen p-4">
      <div className="flex items-center gap-2 mb-8 px-2">
        <Shield className="h-8 w-8 text-blue-500" />
        <h1 className="text-white text-xl font-bold">Insurance Portal</h1>
      </div>
      <nav>
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                'flex items-center gap-3 px-3 py-2 rounded-lg mb-1 text-gray-300 hover:bg-gray-800 transition-colors',
                isActive && 'bg-gray-800 text-white'
              )
            }
          >
            <item.icon className="h-5 w-5" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;