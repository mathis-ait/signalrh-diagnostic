// REQUIRED DEPENDENCIES:
// - lucide-react (npm install lucide-react) - Using SVGs instead to remain self-contained.

import React, { useState, useEffect } from 'react';

/**
 * SignalRHHero Component
 * A high-fidelity, "Zoomed" scale hero section for a B2B SaaS diagnostic tool.
 * Aesthetic: Dark Mode / Linear-inspired / Electric Blue Accents.
 */
export default function Vibe1() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-[#050a14] text-slate-50 overflow-hidden selection:bg-[#2073BB]/30">
      {/* --- BACKGROUND ARCHITECTURE --- */}
      
      {/* Subtle Grid Pattern with Radial Mask */}
      <div className="absolute inset-0 z-0 opacity-20 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]">
        <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      </div>

      {/* Atmospheric Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#2073BB]/10 blur-[120px] rounded-full z-0 pointer-events-none"></div>
      <div className="absolute -top-[10%] right-[10%] w-[400px] h-[400px] bg-blue-500/5 blur-[100px] rounded-full z-0 pointer-events-none"></div>

      {/* --- NAVIGATION --- */}
      <nav className="relative z-50 flex items-center justify-between px-12 py-10 max-w-[1600px] mx-auto">
        <div className="flex items-center gap-3 group cursor-pointer">
          <img 
            src="/images/logo-signalrh.png" 
            alt="SignalRH" 
            className="h-10 w-auto object-contain brightness-110"
            onError={(e) => {
              // Fallback if image doesn't exist in local dev
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement?.insertAdjacentHTML('afterbegin', '<div class="w-10 h-10 bg-[#2073BB] rounded-lg flex items-center justify-center font-bold text-white">S</div>');
            }}
          />
          <span className="text-2xl font-bold tracking-tight text-white group-hover:text-[#2073BB] transition-colors">
            SignalRH
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-10 text-lg font-medium text-slate-400">
          <a href="#" className="hover:text-white transition-colors">Plateforme</a>
          <a href="#" className="hover:text-white transition-colors">Méthodologie</a>
          <a href="#" className="hover:text-white transition-colors">Tarifs</a>
          <button className="px-8 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-white">
            Connexion
          </button>
        </div>
      </nav>

      {/* --- HERO CONTENT --- */}
      <main className="relative z-10 flex flex-col items-center justify-center pt-24 pb-32 px-6 text-center max-w-[1200px] mx-auto">
        
        {/* Badge */}
        <div 
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2073BB]/10 border border-[#2073BB]/20 text-[#2073BB] font-semibold text-sm tracking-wide uppercase mb-10 transition-all duration-1000 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2073BB] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2073BB]"></span>
          </span>
          Diagnostic QVCT & RPS 2024
        </div>

        {/* Headline */}
        <h1 
          className={`text-6xl md:text-8xl font-extrabold tracking-tight text-white mb-8 leading-[1.1] transition-all duration-1000 delay-100 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
        >
          Évaluez vos risques <br />
          <span className="bg-gradient-to-r from-white via-white to-[#2073BB] bg-clip-text text-transparent">
            RPS en 5 minutes
          </span>
        </h1>

        {/* Subheadline */}
        <p 
          className={`text-xl md:text-2xl text-slate-400 max-w-3xl mb-14 leading-relaxed transition-all duration-1000 delay-200 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
        >
          Un diagnostic QVCT complet pour identifier vos priorités, protéger vos collaborateurs et obtenir des recommandations de modules sur mesure pour votre entreprise.
        </p>

        {/* CTA Button Group */}
        <div 
          className={`flex flex-col sm:flex-row items-center gap-6 transition-all duration-1000 delay-300 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
        >
          <button className="group relative px-12 py-6 bg-[#2073BB] text-white text-xl font-bold rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(32,115,187,0.5)]">
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <span className="relative flex items-center gap-3">
              Commencer le diagnostic
              <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
          
          <button className="px-10 py-6 text-xl font-semibold text-slate-300 hover:text-white transition-colors flex items-center gap-2">
            Voir un exemple de rapport
          </button>
        </div>

        {/* --- STATS BAR --- */}
        <div 
          className={`mt-32 w-full grid grid-cols-1 md:grid-cols-3 gap-1 px-8 py-10 rounded-[32px] bg-white/[0.02] border border-white/5 backdrop-blur-md transition-all duration-1000 delay-500 transform ${mounted ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
        >
          {/* Stat 1 */}
          <div className="flex flex-col items-center justify-center p-6 border-b md:border-b-0 md:border-r border-white/5 group">
            <span className="text-4xl font-bold text-white mb-2 group-hover:text-[#2073BB] transition-colors">4400+</span>
            <span className="text-slate-500 font-medium uppercase tracking-widest text-xs">Entreprises accompagnées</span>
          </div>
          
          {/* Stat 2 */}
          <div className="flex flex-col items-center justify-center p-6 border-b md:border-b-0 md:border-r border-white/5 group">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-4xl font-bold text-white group-hover:text-[#2073BB] transition-colors">2</span>
              <div className="flex flex-col items-start leading-none">
                <span className="text-xs font-bold text-[#2073BB]">MODULAIRES</span>
              </div>
            </div>
            <span className="text-slate-500 font-medium uppercase tracking-widest text-xs">Questionnaires experts</span>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center justify-center p-6 group">
            <div className="flex items-center gap-3 mb-2">
              <svg className="w-8 h-8 text-[#2073BB]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-4xl font-bold text-white group-hover:text-[#2073BB] transition-colors">Instant</span>
            </div>
            <span className="text-slate-500 font-medium uppercase tracking-widest text-xs">Résultats et préconisations</span>
          </div>
        </div>

      </main>

      {/* --- DECORATIVE VISUAL ELEMENT (Floating UI Card) --- */}
      <div className="relative w-full max-w-[1400px] mx-auto h-[400px] mt-[-100px] perspective-1000">
        <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-[#050a14] via-transparent to-transparent z-20"></div>
        
        <div className={`mx-auto w-[85%] h-full bg-slate-900/50 rounded-t-[40px] border-x border-t border-white/10 backdrop-blur-2xl shadow-2xl transition-all duration-1000 delay-700 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-40 opacity-0'}`}>
          {/* Mock UI Header */}
          <div className="flex items-center justify-between px-10 py-6 border-b border-white/5">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
            </div>
            <div className="h-4 w-48 bg-white/5 rounded-full"></div>
            <div className="w-10 h-10 rounded-full bg-white/5"></div>
          </div>
          
          {/* Mock Content Layout */}
          <div className="p-12 grid grid-cols-12 gap-8 opacity-50">
            <div className="col-span-4 space-y-6">
              <div className="h-32 w-full bg-[#2073BB]/20 rounded-3xl border border-[#2073BB]/30"></div>
              <div className="h-8 w-3/4 bg-white/5 rounded-lg"></div>
              <div className="h-8 w-1/2 bg-white/5 rounded-lg"></div>
            </div>
            <div className="col-span-8 space-y-8">
              <div className="h-12 w-full bg-white/5 rounded-2xl"></div>
              <div className="grid grid-cols-3 gap-4">
                <div className="h-40 bg-white/5 rounded-2xl"></div>
                <div className="h-40 bg-white/5 rounded-2xl"></div>
                <div className="h-40 bg-white/5 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations/Utilities */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slow-pulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.2; }
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}} />
    </div>
  );
}
