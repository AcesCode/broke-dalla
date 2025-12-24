
import React, { useEffect, useRef } from 'react';
import { MOCK_CHAT_HISTORY } from '../constants';
import { 
  ShieldCheck, 
  Cpu, 
  Bot, 
  Lock, 
  ChevronRight, 
  AlertCircle,
  ThumbsUp,
  Skull
} from 'lucide-react';

const WarRoom: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, []);

  return (
    <div className="h-[calc(100vh-160px)] flex flex-col gap-6 animate-in zoom-in-95 duration-500">
      {/* Header Info Bar */}
      <div className="bg-slate-900 text-slate-300 px-6 py-4 rounded-3xl flex items-center justify-between border border-slate-800 shadow-2xl">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-blue-600/20 text-blue-400 rounded-xl flex items-center justify-center border border-blue-500/30">
            <ShieldCheck size={20} />
          </div>
          <div>
            <h2 className="text-sm font-black text-white uppercase tracking-widest flex items-center gap-2">
              Secure Channel: NC-9284
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            </h2>
            <p className="text-xs text-slate-500 font-mono">ENCRYPTED END-TO-END / AI-TO-AI PROTOCOL</p>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-8">
          <div className="text-right">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">Current Phase</p>
            <p className="text-sm font-black text-amber-500 uppercase">Round 3 of 5 - Price Optimization</p>
          </div>
          <div className="h-8 w-px bg-slate-800"></div>
          <div className="text-right">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">Delta to Goal</p>
            <p className="text-sm font-black text-emerald-500">-$0.55 / unit</p>
          </div>
        </div>
      </div>

      {/* Chat Terminal Area */}
      <div className="flex-1 overflow-hidden flex flex-col bg-slate-950 rounded-[2.5rem] border border-slate-800 shadow-2xl relative">
        {/* Subtle Background Grid/Scanning Effect */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        
        {/* Messages Container */}
        <div 
          ref={scrollRef}
          className="flex-1 overflow-y-auto p-8 space-y-8 relative z-10 scrollbar-hide"
        >
          {MOCK_CHAT_HISTORY.map((msg) => {
            const isUser = msg.sender === 'user-ai';
            return (
              <div 
                key={msg.id} 
                className={`flex flex-col ${isUser ? 'items-start' : 'items-end'}`}
              >
                <div className={`flex items-center gap-2 mb-2 ${isUser ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`p-1.5 rounded-lg ${isUser ? 'bg-blue-600/20 text-blue-400' : 'bg-slate-700/50 text-slate-300'}`}>
                    {isUser ? <Cpu size={14} /> : <Bot size={14} />}
                  </div>
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                    {isUser ? 'DropBot Agent (YOU)' : 'Supplier AI Nexus'}
                  </span>
                  <span className="text-[10px] text-slate-700 font-mono">{msg.timestamp}</span>
                </div>

                <div className={`max-w-[80%] lg:max-w-[60%] p-5 rounded-3xl text-sm leading-relaxed font-mono ${
                  isUser 
                    ? 'bg-blue-600/10 border border-blue-500/20 text-blue-50 text-left' 
                    : 'bg-slate-800/40 border border-slate-700/50 text-slate-300 text-right'
                }`}>
                  {msg.text}
                  {msg.type === 'counter' && (
                    <div className={`mt-3 pt-3 border-t ${isUser ? 'border-blue-500/10' : 'border-slate-700/50'} flex items-center gap-2 text-[10px] font-black uppercase opacity-60`}>
                      <ChevronRight size={12} />
                      Calculating potential ROI impact...
                    </div>
                  )}
                </div>
              </div>
            );
          })}
          
          {/* Ongoing Negotiation Animation */}
          <div className="flex flex-col items-center py-6">
            <div className="flex items-center gap-1.5 px-4 py-2 bg-slate-900/80 rounded-full border border-slate-800 text-slate-500 text-[10px] font-black tracking-widest">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce"></span>
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
              AGENT EVALUATING SUPPLIER COUNTER-OFFER
            </div>
          </div>
        </div>

        {/* Action Controls Bar */}
        <div className="p-8 bg-slate-900/50 border-t border-slate-800/50 backdrop-blur-xl relative z-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 max-w-5xl mx-auto">
            <div className="flex items-center gap-4">
              <div className="bg-amber-500/10 p-3 rounded-2xl text-amber-500 border border-amber-500/20">
                <AlertCircle size={24} />
              </div>
              <div>
                <p className="text-white font-black text-sm uppercase tracking-wider">Automated Mode Active</p>
                <p className="text-slate-500 text-xs">DropBot is currently optimized for Maximum Margin. Manual override available.</p>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full lg:w-auto">
              <button className="flex-1 lg:flex-none flex items-center justify-center gap-3 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-black text-sm transition-all shadow-xl shadow-emerald-900/20 group">
                <ThumbsUp size={18} className="group-hover:scale-110 transition-transform" />
                ACCEPT DEAL AT $16.20
              </button>
              <button className="flex-1 lg:flex-none flex items-center justify-center gap-3 px-8 py-4 bg-red-600/10 hover:bg-red-600 text-red-500 hover:text-white border border-red-600/30 rounded-2xl font-black text-sm transition-all group">
                <Skull size={18} className="group-hover:rotate-12 transition-transform" />
                INTERVENE & OVERRIDE
              </button>
              <button className="p-4 bg-slate-800 text-slate-300 rounded-2xl border border-slate-700 hover:bg-slate-700 transition-colors">
                <Lock size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WarRoom;
