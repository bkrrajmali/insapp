import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Policies from './pages/Policies';
import Claims from './pages/Claims';
import Payments from './pages/Payments';
import FraudDetection from './pages/FraudDetection';
import Notifications from './pages/Notifications';
import Customers from './pages/Customers';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar />
        <main className="flex-1 p-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/policies" element={<Policies />} />
            <Route path="/claims" element={<Claims />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/fraud" element={<FraudDetection />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/customers" element={<Customers />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;