// Auto-generated vibes selection page — pick your design system
import React from "react";

const VIBES = [
  { id: 1, name: "Dark SaaS", description: "Dark navy, electric blue, Linear/Vercel style" },
  { id: 2, name: "Corporate HR", description: "White/blue, split layout, dashboard mockup, trust badges" },
  { id: 3, name: "Bold Gradient", description: "Full gradient blue, giant typography, centered, impactful" },
  { id: 4, name: "Soft Modern", description: "Blobs, rounded, 3-step process, approachable" },
  { id: 5, name: "Editorial Premium", description: "Editorial typographic, flat colors, score preview card" },
];

export function VibesSelection({ onPick }: { onPick: (id: number) => void }) {
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <h1 className="text-3xl font-bold text-slate-900 mb-2">Choisir un design</h1>
      <p className="text-slate-500 mb-8">5 vibes disponibles — cliquez pour agrandir</p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {VIBES.map((v) => (
          <button
            key={v.id}
            onClick={() => onPick(v.id)}
            className="text-left rounded-2xl border-2 border-slate-200 bg-white p-6 hover:border-blue-400 hover:shadow-lg transition-all"
          >
            <div className="text-4xl font-black text-blue-600 mb-2">{v.id}</div>
            <div className="font-bold text-slate-900 text-lg">{v.name}</div>
            <div className="text-slate-500 text-sm mt-1">{v.description}</div>
            <div className="mt-4 text-blue-600 text-sm font-semibold">→ Voir ce vibe</div>
          </button>
        ))}
      </div>
    </div>
  );
}
