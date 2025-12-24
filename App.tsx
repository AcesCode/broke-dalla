
import React, { useState } from 'react';
import AppLayout from './components/AppLayout';
import Dashboard from './components/Dashboard';
import Feed from './components/Feed';
import WarRoom from './components/WarRoom';

/**
 * Enterprise Application Entry
 * NicheDrop: Advanced B2B Opportunity Engine
 */
const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'feed':
        return <Feed />;
      case 'war-room':
        return <WarRoom />;
      default:
        return (
          <div className="flex flex-col items-center justify-center h-[60vh] text-center">
            <div className="p-6 bg-slate-100 rounded-3xl mb-4">
              <h2 className="text-xl font-bold text-slate-800 italic">Coming Soon</h2>
            </div>
            <p className="text-slate-500">The {activeTab} module is currently being optimized by our AI agents.</p>
          </div>
        );
    }
  };

  return (
    <AppLayout activeTab={activeTab} onTabChange={setActiveTab}>
      {renderContent()}
    </AppLayout>
  );
};

export default App;
