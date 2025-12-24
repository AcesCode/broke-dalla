
import React, { useState, useMemo } from 'react';
import { 
  AppMode, 
  MatchActivity 
} from '../types';
import { 
  RETAILER_STATS, 
  SUPPLIER_STATS, 
  RETAILER_MATCHES, 
  SUPPLIER_MATCHES 
} from '../constants';
import { 
  ArrowUpRight, 
  ArrowDownRight, 
  MoreHorizontal,
  Sparkles,
  ShoppingBag,
  Truck
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const [mode, setMode] = useState<AppMode>('retailer');

  const activeStats = useMemo(() => mode === 'retailer' ? RETAILER_STATS : SUPPLIER_STATS, [mode]);
  const activeMatches = useMemo(() => mode === 'retailer' ? RETAILER_MATCHES : SUPPLIER_MATCHES, [mode]);

  const getStatusBadge = (status: MatchActivity['status']) => {
    switch (status) {
      case 'active':
        return <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-50 text-blue-700 border border-blue-100 uppercase tracking-wider">Active</span>;
      case 'pending':
        return <span className="px-2 py-1 text-xs font-semibold rounded-full bg-amber-50 text-amber-700 border border-amber-100 uppercase tracking-wider">Pending</span>;
      case 'completed':
        return <span className="px-2 py-1 text-xs font-semibold rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 uppercase tracking-wider">Completed</span>;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Dashboard Header with Mode Toggle */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Market Intelligence</h1>
          <p className="text-slate-500 mt-1 font-medium">
            Monitoring {mode === 'retailer' ? 'buying' : 'selling'} opportunities across 14 global nodes.
          </p>
        </div>

        {/* Dual Mode Toggle Switch */}
        <div className="bg-white p-1 rounded-2xl border border-slate-200 shadow-sm flex items-center">
          <button 
            onClick={() => setMode('retailer')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
              mode === 'retailer' 
                ? 'bg-slate-900 text-white shadow-lg' 
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <ShoppingBag size={18} />
            Buying Mode
          </button>
          <button 
            onClick={() => setMode('supplier')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
              mode === 'supplier' 
                ? 'bg-slate-900 text-white shadow-lg' 
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <Truck size={18} />
            Selling Mode
          </button>
        </div>
      </div>

      {/* Stat Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {activeStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <Icon size={24} />
                </div>
                {stat.trend && (
                  <div className={`flex items-center gap-0.5 text-sm font-bold ${stat.trendUp ? 'text-emerald-600' : 'text-red-600'}`}>
                    {stat.trendUp ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                    {stat.trend}
                  </div>
                )}
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider">{stat.label}</p>
                <h3 className="text-2xl font-black text-slate-900 mt-1">{stat.value}</h3>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Activity Section */}
      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-50 flex items-center justify-between bg-slate-50/30">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
              <Sparkles size={18} />
            </div>
            <h3 className="text-lg font-bold text-slate-900 tracking-tight">AI Pattern Matches</h3>
          </div>
          <button className="text-slate-400 hover:text-slate-900 p-2 rounded-full hover:bg-slate-100 transition-colors">
            <MoreHorizontal size={20} />
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="px-8 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Partner</th>
                <th className="px-8 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Niche Segment</th>
                <th className="px-8 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest text-center">Match</th>
                <th className="px-8 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Est. Value</th>
                <th className="px-8 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Status</th>
                <th className="px-8 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest text-right">Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {activeMatches.map((match) => (
                <tr key={match.id} className="hover:bg-slate-50/80 transition-colors group cursor-pointer">
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-200 border border-slate-100 overflow-hidden">
                        <img src={`https://picsum.photos/seed/${match.id}/32/32`} alt="" />
                      </div>
                      <span className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{match.partner}</span>
                    </div>
                  </td>
                  <td className="px-8 py-5 text-slate-600 font-medium">{match.niche}</td>
                  <td className="px-8 py-5">
                    <div className="flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full border-4 border-slate-50 flex items-center justify-center relative">
                        <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                          <circle 
                            cx="24" cy="24" r="18" 
                            fill="transparent" 
                            stroke="currentColor" 
                            strokeWidth="3" 
                            className="text-slate-100"
                          />
                          <circle 
                            cx="24" cy="24" r="18" 
                            fill="transparent" 
                            stroke="currentColor" 
                            strokeWidth="3" 
                            strokeDasharray={2 * Math.PI * 18}
                            strokeDashoffset={2 * Math.PI * 18 * (1 - match.matchScore / 100)}
                            className="text-blue-500"
                          />
                        </svg>
                        <span className="text-xs font-black text-slate-900">{match.matchScore}%</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-5 font-bold text-slate-900">{match.value}</td>
                  <td className="px-8 py-5">
                    {getStatusBadge(match.status)}
                  </td>
                  <td className="px-8 py-5 text-right text-slate-400 text-sm font-medium">{match.timestamp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-4 bg-slate-50/30 border-t border-slate-50 text-center">
          <button className="text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors">
            View All Intelligence Logs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
