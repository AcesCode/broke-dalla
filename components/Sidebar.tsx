
import React from 'react';
import { NavItem, UserProfile } from '../types';
import { NAV_ITEMS, MOCK_USER } from '../constants';
import { LogOut, ChevronRight } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  onTabChange: (id: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange }) => {
  return (
    <aside className="w-64 h-screen bg-slate-900 flex flex-col border-r border-slate-800 text-slate-300">
      {/* Logo Section */}
      <div className="p-6 flex items-center gap-3">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-xl">N</span>
        </div>
        <span className="text-white font-bold text-xl tracking-tight">NicheDrop</span>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 mt-4 px-3 space-y-1">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                isActive 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20' 
                  : 'hover:bg-slate-800 hover:text-white'
              }`}
            >
              <Icon size={20} className={isActive ? 'text-white' : 'text-slate-400 group-hover:text-white'} />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* User Profile Footer */}
      <div className="p-4 bg-slate-800/50 border-t border-slate-800">
        <div className="flex items-center gap-3 mb-4 group cursor-pointer">
          <img 
            src={MOCK_USER.avatarUrl} 
            alt={MOCK_USER.name} 
            className="w-10 h-10 rounded-full border-2 border-slate-700"
          />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-white truncate">{MOCK_USER.name}</p>
            <p className="text-xs text-slate-400 truncate">{MOCK_USER.role}</p>
          </div>
          <ChevronRight size={16} className="text-slate-500 group-hover:text-white transition-colors" />
        </div>
        
        <button className="w-full flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium text-slate-400 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-all">
          <LogOut size={16} />
          <span>Sign Out</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
