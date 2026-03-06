// REQUIRED DEPENDENCIES:
// - lucide-react (npm install lucide-react)
// - framer-motion (npm install framer-motion)

import React from 'react';
import { CheckCircle2, ArrowRight, ShieldCheck, Lock, MapPin, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * SignalRH Hero Component
 * Style: Clean Corporate HR / Professional
 * Scale: Zoomed (Large typography, prominent elements)
 * Palette: Pure White, Trust Blue, Slate Grays
 */

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-white font-sans text-slate-900 overflow-hidden">
      {/* 1. Visual Top Band - Signature Blue Gradient */}
      <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-400 z-50" />

      {/* Navigation */}
      <nav className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-10 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
            <span className="text-white font-black text-2xl tracking-tighter italic">S</span>
          </div>
          <span className="text-3xl font-bold tracking-tight text-slate-900 uppercase">
            Signal<span className="text-blue-600 underline decoration-4 underline-offset-4">RH</span>
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-lg font-medium text-slate-600">
          <a href="#" className="hover:text-blue-600 transition-colors">Solutions</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Méthodologie</a>
          <a href="#" className="px-6 py-3 border-2 border-slate-200 rounded-full hover:border-blue-600 hover:text-blue-600 transition-all">
            Espace Client
          </a>
        </div>
      </nav>

      <main className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-12 pb-24">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT COLUMN: Content */}
          <div className="lg:col-span-6 z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full mb-8">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
                </span>
                <span className="text-blue-700 font-bold text-sm tracking-wide uppercase">Solution Certifiée 2024</span>
              </div>

              <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[1.05] mb-8 tracking-tight">
                Diagnostic <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">
                  QVCT & RPS
                </span>
              </h1>

              <p className="text-2xl text-slate-600 leading-relaxed mb-10 max-w-xl">
                Mesurez l'engagement de vos collaborateurs et prévenez les risques psychosociaux avec notre plateforme d'audit automatisée.
              </p>

              {/* Benefit Bullets */}
              <div className="space-y-5 mb-12">
                {[
                  "Tableaux de bord analytiques en temps réel",
                  "Anonymat garanti et protocoles sécurisés",
                  "Recommandations d'actions correctives"
                ].map((benefit, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + (i * 0.1) }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                      <CheckCircle2 className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-xl font-semibold text-slate-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <button className="w-full sm:w-auto px-10 py-6 bg-blue-600 hover:bg-blue-700 text-white text-xl font-bold rounded-2xl shadow-2xl shadow-blue-200 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3">
                  Démarrer mon audit
                  <ArrowRight className="w-6 h-6" />
                </button>
                <a href="#" className="text-xl font-bold text-slate-500 hover:text-blue-600 flex items-center gap-2 transition-colors py-4">
                  Voir la démo interactive
                  <ChevronRight className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Mockup */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              {/* Decorative elements behind the mockup */}
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-70" />
              <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-indigo-50 rounded-full blur-3xl opacity-70" />
              
              {/* Browser Window UI */}
              <div className="relative bg-white rounded-3xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.12)] border border-slate-100 overflow-hidden">
                <div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  </div>
                  <div className="mx-auto bg-white border border-slate-200 rounded-md px-4 py-1 text-xs text-slate-400 w-64 text-center truncate">
                    app.signalrh.fr/dashboard/qvct-analysis
                  </div>
                </div>
                
                <div className="aspect-[4/3] bg-slate-50 relative overflow-hidden">
                  <img 
                    src="/images/dashboard.webp" 
                    alt="SignalRH Diagnostic Dashboard" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback visual if image doesn't exist in environment
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200";
                    }}
                  />
                  {/* Floating Analytics Card Overlay */}
                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-emerald-100 rounded-xl">
                        <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-400 uppercase tracking-wider">Score Global</div>
                        <div className="text-3xl font-black text-slate-900">84%</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 2. Trust Badges Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-24 pt-12 border-t border-slate-100"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="text-lg font-bold text-slate-400 uppercase tracking-[0.2em]">
              Standards de Confiance
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end gap-8 lg:gap-16">
              {/* Badge: Waserman */}
              <div className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all cursor-default group">
                <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-blue-50 transition-colors">
                  <ShieldCheck className="w-8 h-8 text-slate-400 group-hover:text-blue-600" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-slate-400">Conformité</div>
                  <div className="text-lg font-extrabold text-slate-600 group-hover:text-slate-900">Loi Waserman</div>
                </div>
              </div>

              {/* Badge: RGPD */}
              <div className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all cursor-default group">
                <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-blue-50 transition-colors">
                  <Lock className="w-8 h-8 text-slate-400 group-hover:text-blue-600" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-slate-400">Protection</div>
                  <div className="text-lg font-extrabold text-slate-600 group-hover:text-slate-900">RGPD Compliant</div>
                </div>
              </div>

              {/* Badge: France */}
              <div className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all cursor-default group">
                <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-blue-50 transition-colors">
                  <MapPin className="w-8 h-8 text-slate-400 group-hover:text-blue-600" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-slate-400">Données</div>
                  <div className="text-lg font-extrabold text-slate-600 group-hover:text-slate-900">Hébergement France</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Decorative background shapes */}
      <div className="absolute top-[20%] right-0 w-[40%] h-[40%] bg-blue-50/50 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-slate-50/50 rounded-full blur-[100px] -z-10 pointer-events-none" />
    </div>
  );
};

export default HeroSection;
