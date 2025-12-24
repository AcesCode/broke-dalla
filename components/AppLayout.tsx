
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { NAV_ITEMS } from '../constants';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState('dashboard');
  
  const activeNavItem = NAV_ITEMS.find(item => item.id === activeTab);

  return (
    <div className="flex h-screen w-full bg-gray-50 overflow-hidden">
      {/* Sidebar - Fixed Left */}
      <Sidebar 
        activeTab={activeTab} 
        onTabChange={setActiveTab} 
      />

      {/* Main Container */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Topbar - Fixed Top of Content */}
        <Topbar activeTitle={activeNavItem?.label || 'Dashboard'} />

        {/* Dynamic Content Area */}
        <main className="flex-1 overflow-y-auto p-8">
          <div className="max-w-7xl mx-auto">
            {children}
            {/* Display active tab context for demo purposes */}
            <div className="mt-8 p-12 bg-white rounded-3xl border border-dashed border-gray-300 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-4">
                {activeNavItem && React.createElement(activeNavItem.icon, { size: 32 })}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {activeNavItem?.label} View Loaded
              </h3>
              <p className="text-gray-500 max-w-sm">
                This area would render the specific business logic for the <strong>{activeNavItem?.label}</strong> feature set of NicheDrop.
              </p>
              <button className="mt-6 px-6 py-2 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 transition-all">
                Action Required
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
