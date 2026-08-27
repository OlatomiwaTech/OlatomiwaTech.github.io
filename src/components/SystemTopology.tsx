import React, { useState } from 'react';
import { Cpu, Server, Database, Layers, Activity, CheckCircle2 } from 'lucide-react';
import { TOPOLOGY_NODES } from '../data/portfolioData';
import type { TopologyNode } from '../types/portfolio';
import { useMotion } from '../motion/MotionContext';
import { usePointerDepth } from '../motion/usePointerDepth';

export const SystemTopology: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<TopologyNode>(TOPOLOGY_NODES[0]);
  const { reducedMotion, isTouch, deviceTier } = useMotion();
  const depth = usePointerDepth({ depth: 0.06, maxRotate: 2, maxTranslate: 6 });

  const parallaxOn = !reducedMotion && !isTouch && deviceTier === 'desktop';

  const getNodeIcon = (id: string) => {
    switch (id) {
      case 'product':
        return <Layers className="w-4 h-4 text-[#38BDF8]" />;
      case 'frontend':
        return <Activity className="w-4 h-4 text-[#38BDF8]" />;
      case 'api':
        return <Server className="w-4 h-4 text-[#38BDF8]" />;
      case 'database':
        return <Database className="w-4 h-4 text-[#38BDF8]" />;
      case 'ai':
        return <Cpu className="w-4 h-4 text-[#38BDF8]" />;
      case 'infra':
        return <CheckCircle2 className="w-4 h-4 text-emerald-400" />;
      default:
        return <Layers className="w-4 h-4 text-[#38BDF8]" />;
    }
  };

  return (
    <div
      className="relative w-full rounded-2xl bg-[#111827] border border-slate-800 p-6 shadow-2xl overflow-hidden text-left font-mono select-none"
      style={parallaxOn ? { ...depth.style, transformStyle: 'preserve-3d' } : undefined}
    >
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(56,189,248,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(56,189,248,0.06) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative z-10 flex items-center justify-between pb-4 border-b border-slate-800 text-xs text-[#94A3B8]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
          <span className="font-semibold text-[#F8FAFC]">SYSTEM ARCHITECTURE TOPOLOGY</span>
          <span className="text-slate-600 text-[10px] hidden sm:inline">[0x01_MAP]</span>
        </div>
        <span className="text-[#38BDF8] bg-[#38BDF8]/10 px-2 py-0.5 rounded border border-[#38BDF8]/20 text-[11px]">
          Interactive Nodes
        </span>
      </div>

      <div className="relative z-10 my-6 h-[260px] sm:h-[300px] rounded-xl bg-[#0A0E1A] border border-slate-800/90 p-4">
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
          <line x1="15%" y1="30%" x2="45%" y2="15%" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="4 4" />
          <line x1="15%" y1="30%" x2="45%" y2="55%" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="4 4" />
          <line x1="45%" y1="15%" x2="80%" y2="25%" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="4 4" />
          <line x1="45%" y1="55%" x2="80%" y2="70%" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="4 4" />
          <line x1="45%" y1="55%" x2="45%" y2="85%" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="4 4" />
        </svg>

        {TOPOLOGY_NODES.map((node) => {
          const isSelected = selectedNode.id === node.id;
          return (
            <button
              key={node.id}
              onClick={() => setSelectedNode(node)}
              onMouseEnter={() => setSelectedNode(node)}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-xl border text-left transition-all duration-200 focus:outline-none ${
                isSelected
                  ? 'bg-[#111827] border-[#38BDF8] shadow-[0_0_20px_rgba(56,189,248,0.3)] scale-105 z-20'
                  : 'bg-[#111827]/80 border-slate-800 hover:border-slate-700 z-10'
              }`}
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
            >
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-[#0A0E1A] border border-slate-800">
                  {getNodeIcon(node.id)}
                </div>
                <div className="hidden sm:block">
                  <p className="text-[11px] font-bold text-[#F8FAFC] tracking-tight">{node.label}</p>
                  <p className="text-[9px] text-[#94A3B8]">{node.category}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <div className="relative z-10 pt-3 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
        <div>
          <span className="text-[10px] text-[#94A3B8] tracking-widest uppercase block">SELECTED NODE INSPECTOR:</span>
          <p className="text-sm font-bold text-[#F8FAFC] flex items-center gap-2">
            <span>{selectedNode.label}</span>
            <span className="text-xs text-[#38BDF8]">({selectedNode.category})</span>
          </p>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <div className="bg-[#0A0E1A] px-3 py-1.5 rounded-lg border border-slate-800 flex items-center gap-2">
            <span className="text-[#94A3B8]">Status:</span>
            <span className="text-emerald-400 font-semibold">{selectedNode.status}</span>
          </div>
          <div className="bg-[#0A0E1A] px-3 py-1.5 rounded-lg border border-slate-800 flex items-center gap-2">
            <span className="text-[#94A3B8]">Latency:</span>
            <span className="text-[#38BDF8] font-semibold">{selectedNode.latency}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
