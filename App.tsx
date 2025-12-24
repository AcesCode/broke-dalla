
import React from 'react';
import AppLayout from './components/AppLayout';
import { TrendingUp, Users, Zap, Package } from 'lucide-react';

/**
 * Dashboard Mock Content
 * Highlighting the architectural capability of the App Shell
 */
const DashboardContent = () => (
  <div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {[
        { label: 'Total Volume', value: '$240.5k', change: '+12.5%', icon: TrendingUp, color: 'text-emerald-600', bg: 'bg-emerald-50' },
        { label: 'Active Leads', value: '1,429', change: '+5.2%', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
        { label: 'Conversion', value: '32.1%', change: '-1.4%', icon: Zap, color: 'text-amber-600', bg: 'bg-amber-50' },
        { label: 'Pipeline Nodes', value: '42', change: '+8', icon: Package, color: 'text-indigo-600', bg: 'bg-indigo-50' },
      ].map((stat, i) => (
        <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className={`p-2 rounded-lg ${stat.bg} ${stat.color}`}>
              <stat.icon size={20} />
            </div>
            <span className={`text-xs font-bold px-2 py-1 rounded-full ${stat.change.startsWith('+') ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}`}>
              {stat.change}
            </span>
          </div>
          <p className="text-gray-500 text-sm font-medium">{stat.label}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
        </div>
      ))}
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <AppLayout>
      <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Welcome Back, Alex</h1>
          <p className="text-gray-500">Here's what happened with your niche markets today.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 border border-gray-200 bg-white text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-all text-sm">
            Download Report
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-all text-sm shadow-md shadow-blue-200">
            Create Pipe
          </button>
        </div>
      </div>
      
      <DashboardContent />
    </AppLayout>
  );
};

export default App;
