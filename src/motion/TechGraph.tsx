import React, { useMemo, useState } from 'react';
import type { TechGraphEdge, TechGraphNode } from '../types/portfolio';
import { useMotion } from './MotionContext';

interface TechGraphProps {
  nodes: TechGraphNode[];
  edges: TechGraphEdge[];
  className?: string;
}

function buildAdjacency(edges: TechGraphEdge[]): Map<string, Set<string>> {
  const adj = new Map<string, Set<string>>();
  for (const e of edges) {
    if (!adj.has(e.from)) adj.set(e.from, new Set());
    if (!adj.has(e.to)) adj.set(e.to, new Set());
    adj.get(e.from)!.add(e.to);
    adj.get(e.to)!.add(e.from);
  }
  return adj;
}

function getTwoHop(activeId: string | null, adj: Map<string, Set<string>>): Set<string> {
  if (!activeId) return new Set();
  const lit = new Set<string>([activeId]);
  const first = adj.get(activeId);
  if (!first) return lit;
  for (const n of first) {
    lit.add(n);
    const second = adj.get(n);
    if (second) {
      for (const n2 of second) {
        if (lit.size > 12) break;
        lit.add(n2);
      }
    }
  }
  return lit;
}

export const TechGraph: React.FC<TechGraphProps> = ({ nodes, edges, className = '' }) => {
  const { reducedMotion, isTouch } = useMotion();
  const [hovered, setHovered] = useState<string | null>(null);
  const adj = useMemo(() => buildAdjacency(edges), [edges]);
  const lit = useMemo(() => getTwoHop(hovered, adj), [hovered, adj]);

  const nodeMap = useMemo(() => new Map(nodes.map((n) => [n.id, n])), [nodes]);

  const activate = (id: string) => setHovered((prev) => (prev === id && isTouch ? null : id));
  const deactivate = () => {
    if (!isTouch) setHovered(null);
  };

  return (
    <div className={`tech-graph relative w-full min-w-0 overflow-x-auto ${className}`}>
      <svg
        viewBox="0 0 800 320"
        className="w-full h-auto min-w-[280px]"
        role="img"
        aria-label="Technology skills graph"
      >
        <defs>
          <linearGradient id="edgeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.15" />
          </linearGradient>
        </defs>

        {edges.map((e) => {
          const from = nodeMap.get(e.from);
          const to = nodeMap.get(e.to);
          if (!from || !to) return null;

          const active =
            !hovered ||
            (lit.has(e.from) && lit.has(e.to));

          return (
            <line
              key={`${e.from}-${e.to}`}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke={active ? 'url(#edgeGrad)' : 'rgba(148,160,180,0.08)'}
              strokeWidth={active && hovered ? 2 : 1}
              className={reducedMotion ? '' : 'transition-all duration-300'}
            />
          );
        })}

        {nodes.map((node) => {
          const active = !hovered || lit.has(node.id);
          const isHovered = hovered === node.id;

          return (
            <g
              key={node.id}
              onMouseEnter={() => setHovered(node.id)}
              onMouseLeave={deactivate}
              onClick={() => activate(node.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  activate(node.id);
                }
              }}
              role="button"
              tabIndex={0}
              aria-pressed={isHovered}
              aria-label={`${node.label}${node.category ? `, ${node.category}` : ''}`}
              className="cursor-pointer outline-none focus-visible:[&>circle]:stroke-[#38BDF8] focus-visible:[&>circle]:stroke-[2.5]"
              style={{ opacity: active ? 1 : 0.25 }}
            >
              <circle
                cx={node.x}
                cy={node.y}
                r={isHovered ? 28 : 22}
                fill={isHovered ? 'rgba(56,189,248,0.15)' : 'rgba(14,19,32,0.9)'}
                stroke={isHovered ? '#38BDF8' : 'rgba(255,255,255,0.12)'}
                strokeWidth={isHovered ? 2 : 1}
                className={reducedMotion ? '' : 'transition-all duration-300'}
              />
              <text
                x={node.x}
                y={node.y + 1}
                textAnchor="middle"
                dominantBaseline="middle"
                className="fill-[#F5F7FA] font-mono pointer-events-none select-none"
                style={{ fontSize: isHovered ? 12 : 11 }}
              >
                {node.label}
              </text>
              {node.category && (
                <text
                  x={node.x}
                  y={node.y + 16}
                  textAnchor="middle"
                  className="fill-[#94A0B4] pointer-events-none select-none"
                  style={{ fontSize: 8 }}
                >
                  {node.category}
                </text>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
};
