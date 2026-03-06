import React, { useState, useEffect } from 'react';
import { ClipboardCheck, BarChart3, Rocket, ArrowRight, ChevronRight, Menu, X } from 'lucide-react';

/**
 * REQUIRED DEPENDENCIES:
 * - lucide-react (npm install lucide-react)
 * - tailwindcss (npm install -D tailwindcss)
 */

const DiagnosticHero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const steps = [
    {
      number: "01",
      title: "Répondez",
      description: "Partagez votre ressenti via notre questionnaire scientifique anonyme en moins de 5 minutes.",
      icon: <ClipboardCheck className="w-10 h-10 text-indigo-500" />,
      color: "bg-indigo-50"
    },
    {
      number: "02",
      title: "Analysez",
      description: "Visualisez instantanément vos indicateurs de bien-être et identifiez les zones de vigilance.",
      icon: <BarChart3 className="w-10 h-10 text-purple-500" />,
      color: "bg-purple-50"
    },
    {
      number: "03",
      title: "Agissez",
      description: "Accédez à des recommandations personnalisées et un plan d'action concret pour votre équipe.",
      icon: <Rocket className="w-10 h-10 text-pink-500" />,
      color: "bg-pink-50"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-indigo-100 selection:text-indigo-900 overflow-x-hidden relative">
      {/* Background blobs for atmosphere */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-200/30 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-purple-200/30 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-indigo-100/40 blur-[100px] rounded-full pointer-events-none" />

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-12 h-12 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200 transform group-hover:rotate-6 transition-transform">
              <span className="text-white font-black text-xl italic tracking-tighter">S</span>
            </div>
            <span className="text-2xl font-bold tracking-tight text-slate-800">Signal<span className="text-indigo-600">RH</span></span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-lg font-medium text-slate-600 hover:text-indigo-600 transition-colors">Solutions</a>
            <a href="#" className="text-lg font-medium text-slate-600 hover:text-indigo-600 transition-colors">Méthodologie</a>
            <button className="px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-semibold shadow-lg shadow-indigo-100 transition-all active:scale-95 text-lg">
              Commencer le test
            </button>
          </div>

          <button className="md:hidden text-slate-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white p-8 pt-24 md:hidden">
          <div className="flex flex-col gap-6">
            <a href="#" className="text-3xl font-bold text-slate-800">Solutions</a>
            <a href="#" className="text-3xl font-bold text-slate-800">Méthodologie</a>
            <button className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-bold text-xl mt-4">
              Commencer le test
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <main className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-white rounded-full border border-slate-100 shadow-sm mb-10 animate-fade-in-up">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-slate-600 font-semibold tracking-wide uppercase text-sm">Outil 100% anonyme & sécurisé</span>
          </div>

          {/* Headline */}
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight max-w-5xl mx-auto">
            Diagnostic <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 italic">QVCT & RPS</span> — Gratuit & Immédiat
          </h1>

          <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed mb-12">
            Évaluez la qualité de vie au travail et les risques psychosociaux de votre organisation avec une précision scientifique.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24">
            <button className="group px-10 py-5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-[2rem] font-bold text-xl shadow-xl shadow-indigo-200 transition-all hover:-translate-y-1 flex items-center gap-3">
              Lancer mon diagnostic
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-[2rem] font-bold text-xl transition-all">
              Découvrir la méthode
            </button>
          </div>

          {/* Process Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-left">
            {steps.map((step, idx) => (
              <div 
                key={idx} 
                className="group relative bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-50 transition-all hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
              >
                {/* Background Number */}
                <span className="absolute -top-4 -right-2 text-9xl font-black text-slate-50 group-hover:text-indigo-50/50 transition-colors pointer-events-none select-none">
                  {step.number}
                </span>

                <div className={`w-20 h-20 ${step.color} rounded-3xl flex items-center justify-center mb-8 relative z-10 shadow-inner`}>
                  {step.icon}
                </div>
                
                <h3 className="text-3xl font-bold text-slate-900 mb-4 relative z-10 flex items-center gap-2">
                  {step.title}
                  <ArrowRight className="w-6 h-6 text-slate-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                </h3>
                
                <p className="text-lg text-slate-500 leading-relaxed relative z-10">
                  {step.description}
                </p>

                <div className="mt-8 pt-8 border-t border-slate-50 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-bold text-indigo-600 uppercase tracking-widest">Étape {step.number}</span>
                  <div className="w-8 h-1 bg-indigo-100 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer minimal info */}
      <footer className="py-12 border-t border-slate-100 text-center">
        <p className="text-slate-400 font-medium">
          Propulsé par <span className="text-slate-600 font-bold">SignalRH</span> — Partenaire de confiance des RH
        </p>
      </footer>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default DiagnosticHero;
