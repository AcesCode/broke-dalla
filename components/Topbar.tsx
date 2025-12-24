
import React from 'react';
import { Bell, Search as SearchIcon, HelpCircle } from 'lucide-react';

interface TopbarProps {
  activeTitle: string;
}

const Topbar: React.FC<TopbarProps> = ({ activeTitle }) => {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-10 shadow-sm">
      <div className="flex items-center gap-4">
        <h2 className="text-lg font-bold text-gray-900">{activeTitle}</h2>
        <div className="h-4 w-[1px] bg-gray-300 mx-2"></div>
        <div className="hidden md:flex items-center gap-2 text-sm text-gray-500 font-medium">
          <span>Enterprise</span>
          <span className="text-gray-300">/</span>
          <span className="text-blue-600">Active Node</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Search Bar Placeholder */}
        <div className="hidden lg:flex items-center bg-gray-100 rounded-full px-4 py-1.5 border border-transparent focus-within:border-blue-400 focus-within:bg-white transition-all w-64">
          <SearchIcon size={16} className="text-gray-400" />
          <input 
            type="text" 
            placeholder="Search resources..." 
            className="bg-transparent border-none focus:ring-0 text-sm ml-2 w-full outline-none text-gray-700"
          />
        </div>

        <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full relative transition-colors">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>

        <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
          <HelpCircle size={20} />
        </button>
      </div>
    </header>
  );
};

export default Topbar;
