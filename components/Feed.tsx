
import React from 'react';
import { OPPORTUNITIES } from '../constants';
import { Sparkles, Coins, Zap, Truck, DollarSign } from 'lucide-react';

const OpportunityCard: React.FC<{ opportunity: typeof OPPORTUNITIES[0] }> = ({ opportunity }) => {
  return (
    <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden group hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
      {/* Blurred Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <img 
          src={opportunity.imageUrl} 
          alt="Anonymous Opportunity"
          className="w-full h-full object-cover filter blur-[12px] scale-110 opacity-70 group-hover:scale-125 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        
        {/* AI Hype Badge */}
        <div className="absolute top-4 left-4 bg-purple-600/90 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-xs font-black tracking-widest flex items-center gap-1.5 shadow-lg border border-purple-400/30">
          <Sparkles size={14} className="animate-pulse" />
          {opportunity.matchScore}% MATCH
        </div>

        {/* Floating Hype Tag */}
        <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-slate-900 px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-tighter border border-white/20">
          {opportunity.hypeReason}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-black text-slate-900 leading-tight mb-4 group-hover:text-blue-600 transition-colors">
          {opportunity.title}
        </h3>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100/50">
            <div className="flex items-center gap-1.5 text-slate-400 mb-1">
              <Zap size={14} />
              <span className="text-[10px] font-bold uppercase tracking-wider">Margin</span>
            </div>
            <p className="text-lg font-black text-slate-800">{opportunity.margin}</p>
          </div>
          <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100/50">
            <div className="flex items-center gap-1.5 text-slate-400 mb-1">
              <Truck size={14} />
              <span className="text-[10px] font-bold uppercase tracking-wider">Origin</span>
            </div>
            <p className="text-sm font-black text-slate-800 truncate">{opportunity.shipping}</p>
          </div>
        </div>

        {/* Premium Gold Reveal Button */}
        <button className="w-full relative overflow-hidden group/btn bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 p-[1px] rounded-2xl shadow-lg shadow-amber-200/50 hover:shadow-amber-400/30 transition-shadow">
          <div className="bg-white/90 group-hover/btn:bg-transparent transition-colors rounded-[15px] px-4 py-3.5 flex items-center justify-center gap-2">
            <Coins size={18} className="text-amber-600 group-hover/btn:text-white transition-colors" />
            <span className="font-black text-slate-900 group-hover/btn:text-white transition-colors text-sm uppercase tracking-wider">
              Reveal & Negotiate
            </span>
            <span className="text-amber-700 group-hover/btn:text-white/80 font-bold text-xs">
              (1 Token)
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};

const Feed: React.FC = () => {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-widest">Global Discovery</span>
          </div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tighter">Opportunity Feed</h1>
          <p className="text-slate-500 mt-2 font-medium max-w-xl">
            Our AI has identified high-margin products matching your supply chain nodes. Reveal details to start automated negotiation.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map(i => (
              <img key={i} className="w-8 h-8 rounded-full border-2 border-white" src={`https://picsum.photos/seed/user${i}/32/32`} alt="" />
            ))}
          </div>
          <p className="text-xs font-bold text-slate-400">
            <span className="text-blue-600">824 users</span> browsing now
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
        {OPPORTUNITIES.map((opp) => (
          <OpportunityCard key={opp.id} opportunity={opp} />
        ))}
      </div>

      {/* Load More Area */}
      <div className="py-12 flex flex-col items-center">
        <div className="w-1.5 h-1.5 bg-slate-300 rounded-full mb-2"></div>
        <div className="w-1.5 h-1.5 bg-slate-200 rounded-full mb-2"></div>
        <div className="w-1.5 h-1.5 bg-slate-100 rounded-full mb-6"></div>
        <button className="px-8 py-3 rounded-2xl bg-slate-900 text-white font-bold text-sm hover:bg-blue-600 transition-all shadow-xl shadow-slate-200">
          Scan More Nodes
        </button>
      </div>
    </div>
  );
};

export default Feed;
