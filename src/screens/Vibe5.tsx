// REQUIRED DEPENDENCIES:
// - lucide-react (npm install lucide-react)
// - framer-motion (npm install framer-motion)

import React, { useState, useEffect } from 'react';
import { ArrowRight, Activity, ShieldCheck, Zap, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * SIGNALRH - Enterprise QVCT Diagnostic Hero
 * Aesthetic: Premium Editorial (HBR meets SaaS)
 * Direction: Brutally Minimalist / Luxury Business
 * Scale: ZOOMED
 */

const NAVY = "#003B76";

const SignalRHLogo = () => (
  <svg width="180" height="40" viewBox="0 0 180 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 10L15 25L20 5L25 35H30" stroke={NAVY} strokeWidth="4" strokeLinecap="square"/>
    <text x="40" y="28" fill={NAVY} style={{ font: 'bold 24px Helvetica, Arial, sans-serif', letterSpacing: '-0.05em' }}>SignalRH</text>
  </svg>
);

const DonutChart = ({ value = 72 }: { value?: number }) => {
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center">
      <svg className="transform -rotate-90" width="200" height="200">
        <circle
          cx="100"
          cy="100"
          r={radius}
          stroke="#E5E7EB"
          strokeWidth="12"
          fill="transparent"
        />
        <motion.circle
          cx="100"
          cy="100"
          r={radius}
          stroke={NAVY}
          strokeWidth="12"
          fill="transparent"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.5, ease: "circOut" }}
          strokeLinecap="square"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-5xl font-bold tracking-tighter" style={{ color: NAVY }}>{value}</span>
        <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">Composite Score</span>
      </div>
    </div>
  );
};

const PillarScore = ({ label, score }: { label: string; score: string }) => (
  <div className="py-6 border-t border-gray-100 flex justify-between items-center group">
    <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 group-hover:text-[#003B76] transition-colors">
      {label}
    </span>
    <span className="text-2xl font-serif italic text-[#003B76]">{score}</span>
  </div>
);

export default function Vibe5() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-white text-[#003B76] font-sans selection:bg-[#003B76] selection:text-white overflow-hidden">
      {/* Editorial Navigation */}
      <nav className="border-b border-gray-200 px-12 py-8 flex justify-between items-center bg-white sticky top-0 z-50">
        <SignalRHLogo />
        <div className="hidden md:flex gap-12 items-center text-xs font-bold uppercase tracking-widest">
          <a href="#" className="hover:line-through transition-all">Clinical Insights</a>
          <a href="#" className="hover:line-through transition-all">Methodology</a>
          <a href="#" className="hover:line-through transition-all">Enterprise</a>
          <button className="border-2 border-[#003B76] px-8 py-3 hover:bg-[#003B76] hover:text-white transition-all duration-300">
            Client Portal
          </button>
        </div>
      </nav>

      <main className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[calc(100vh-104px)]">
        
        {/* Left Column: Editorial Content */}
        <section className="lg:col-span-7 px-12 py-24 flex flex-col justify-center border-r border-gray-100">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="h-[1px] w-12 bg-[#003B76]"></span>
              <span className="text-xs font-bold uppercase tracking-[0.4em]">Volume {new Date().getFullYear()} Issue I</span>
            </div>

            <h1 className="text-7xl lg:text-9xl font-serif tracking-tight leading-[0.9] mb-12">
              The Standard in <br />
              <span className="italic">QVCT Precision.</span>
            </h1>

            <p className="text-2xl text-gray-600 max-w-2xl leading-relaxed mb-16 font-light">
              High-fidelity quantitative diagnostics for enterprise health systems. 
              Unlock deep-tissue insights with SignalRH’s proprietary imaging protocol and [Metric] precision.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <button 
                className="group relative bg-[#003B76] text-white px-12 py-7 text-lg font-bold uppercase tracking-widest overflow-hidden transition-all active:scale-95"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <span className="relative z-10 flex items-center gap-3">
                  Request Diagnostic Demo
                  <ArrowRight className={`w-6 h-6 transition-transform duration-300 ${isHovered ? 'translate-x-2' : ''}`} />
                </span>
                <motion.div 
                  className="absolute inset-0 bg-black/20"
                  initial={{ x: "-100%" }}
                  animate={{ x: isHovered ? "0%" : "-100%" }}
                  transition={{ duration: 0.3 }}
                />
              </button>
              
              <button className="px-8 py-7 text-xs font-bold uppercase tracking-[0.3em] flex items-center gap-2 hover:opacity-50 transition-opacity underline decoration-1 underline-offset-8">
                Download Technical Whitepaper (PDF)
              </button>
            </div>

            <div className="mt-24 grid grid-cols-3 gap-12 border-t border-gray-100 pt-12">
              <div>
                <p className="text-4xl font-serif mb-2">[99.8%]</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Scan Reliability</p>
              </div>
              <div>
                <p className="text-4xl font-serif mb-2">[14ms]</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Processing Latency</p>
              </div>
              <div>
                <p className="text-4xl font-serif mb-2">[Global]</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Network Availability</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Right Column: Score Preview Card */}
        <section className="lg:col-span-5 bg-gray-50 p-12 lg:p-24 flex items-center justify-center relative">
          {/* Architectural Lines */}
          <div className="absolute top-0 left-0 w-full h-px bg-gray-200"></div>
          <div className="absolute top-0 right-0 w-px h-full bg-gray-200"></div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95, rotate: 1 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full max-w-md bg-white border border-gray-200 shadow-[40px_40px_0px_0px_rgba(0,59,118,0.05)] p-12 relative overflow-hidden"
          >
            {/* Card Header */}
            <div className="flex justify-between items-start mb-12">
              <div>
                <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-1">Diagnostic Report</h3>
                <p className="text-xl font-bold tracking-tight">ID: SRH-[7729-X]</p>
              </div>
              <div className="bg-green-50 text-green-700 px-3 py-1 text-[10px] font-bold uppercase tracking-tighter rounded-full border border-green-100">
                Validated
              </div>
            </div>

            {/* Visual Center */}
            <div className="flex justify-center mb-16">
              <DonutChart value={84} />
            </div>

            {/* Pillar Scores */}
            <div className="space-y-0">
              <PillarScore label="Bone Microarchitecture" score="[7.2]" />
              <PillarScore label="Volumetric Density" score="[1.42] g/cm³" />
              <PillarScore label="Cortical Integrity" score="[Optimal]" />
            </div>

            <div className="mt-12 pt-8 border-t-2 border-[#003B76] flex justify-between items-end">
              <div className="text-[9px] leading-relaxed text-gray-400 uppercase tracking-widest font-bold max-w-[150px]">
                Quantitative analysis performed via SignalRH Neural Engine.
              </div>
              <div className="text-right">
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-1">Generated</p>
                <p className="text-xs font-mono font-bold tracking-tight">{new Date().toLocaleDateString()}</p>
              </div>
            </div>

            {/* Decorative Corner Tab */}
            <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none">
              <div className="absolute top-4 right-4 text-[#003B76]/10">
                <Activity size={32} />
              </div>
            </div>
          </motion.div>

          {/* Background Text Element (Editorial Style) */}
          <div className="absolute bottom-12 right-12 select-none pointer-events-none opacity-[0.03] text-[180px] font-serif font-black italic -rotate-90 origin-bottom-right">
            QVCT
          </div>
        </section>
      </main>

      {/* Ticker / Footer Accent */}
      <footer className="border-t border-gray-200 py-6 px-12 flex flex-col md:flex-row justify-between items-center gap-4 overflow-hidden">
        <div className="flex gap-8 items-center">
          <span className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            System Live
          </span>
          <span className="text-[10px] font-bold uppercase tracking-widest opacity-30">
            Scanning node: US-EAST-01
          </span>
        </div>
        <div className="flex gap-8 items-center text-[10px] font-bold uppercase tracking-widest">
          <span className="opacity-30 underline cursor-pointer hover:opacity-100">HHS Compliance</span>
          <span className="opacity-30 underline cursor-pointer hover:opacity-100">DICOM Standards</span>
          <span className="opacity-30 underline cursor-pointer hover:opacity-100">ISO 27001 Certified</span>
        </div>
      </footer>

      {/* Editorial Grid Overlay (Subtle) */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.015]">
        <div className="h-full w-full grid grid-cols-12 gap-0">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-r border-[#003B76] h-full"></div>
          ))}
        </div>
      </div>
    </div>
  );
}
