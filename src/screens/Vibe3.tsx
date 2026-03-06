import React, { useState, useEffect } from 'react';

/**
 * RPS/QVCT Diagnostic Hero Section
 * Theme: "Zoomed" Scale - High Impact, Massive Typography, Bold Visuals.
 * Colors: Deep Blue #003B76 -> Vibrant Blue #2073BB
 */

const RPSHero = () => {
  const [percentage, setPercentage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Animate the score gauge on mount
  useEffect(() => {
    setIsVisible(true);
    const targetScore = 82;
    const duration = 2000;
    const increment = targetScore / (duration / 16);
    
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= targetScore) {
        setPercentage(targetScore);
        clearInterval(timer);
      } else {
        setPercentage(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, []);

  // SVG Gauge calculations
  const radius = 120;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#003B76] flex flex-col items-center justify-center px-6 py-20 selection:bg-white selection:text-[#003B76]">
      
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#003B76] via-[#105799] to-[#2073BB]" />
        
        {/* Subtle Mesh Glows */}
        <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-blue-400/20 blur-[120px] animate-pulse" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-cyan-400/10 blur-[120px]" />
        
        {/* Grain Texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {/* Navigation / Logo Area */}
      <nav className="absolute top-10 left-0 right-0 z-20 px-10 flex justify-center">
        <div className="flex items-center gap-3 group cursor-pointer">
          {/* SignalRH Logo (White Version) */}
          <div className="w-12 h-12 flex items-center justify-center bg-white rounded-xl shadow-lg transform group-hover:rotate-6 transition-transform duration-300">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#003B76" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 20V10" />
              <path d="M18 20V4" />
              <path d="M6 20v-4" />
            </svg>
          </div>
          <span className="text-3xl font-black tracking-tighter text-white uppercase">
            Signal<span className="opacity-70">RH</span>
          </span>
        </div>
      </nav>

      {/* Content Wrapper */}
      <div className={`relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
        
        {/* Headline - "ZOOMED" Scale */}
        <h1 className="leading-[0.9] tracking-tight text-white mb-12">
          <span className="block text-6xl md:text-8xl lg:text-[11rem] font-black drop-shadow-2xl">
            Vos RPS en 5 min.
          </span>
          <span className="block text-5xl md:text-7xl lg:text-[9rem] font-extrabold opacity-90 italic">
            Vos modules en 1 clic.
          </span>
        </h1>

        {/* Visual Diagnostic Gauge */}
        <div className="relative mb-16 flex items-center justify-center group">
          {/* Outer Ring Glow */}
          <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl scale-110 group-hover:scale-125 transition-transform duration-700" />
          
          <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center bg-white/5 backdrop-blur-xl rounded-full border border-white/20 shadow-2xl">
            <svg className="w-full h-full transform -rotate-90">
              {/* Background circle */}
              <circle
                cx="50%"
                cy="50%"
                r={radius}
                className="stroke-white/10"
                strokeWidth="24"
                fill="transparent"
              />
              {/* Animated Progress circle */}
              <circle
                cx="50%"
                cy="50%"
                r={radius}
                className="stroke-white transition-all duration-500 ease-out"
                strokeWidth="24"
                fill="transparent"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                strokeLinecap="round"
              />
            </svg>
            
            {/* Score Text */}
            <div className="absolute flex flex-col items-center">
              <span className="text-8xl md:text-9xl font-black text-white tabular-nums tracking-tighter">
                {percentage}<span className="text-4xl md:text-5xl opacity-50">%</span>
              </span>
              <span className="text-lg md:text-xl font-bold uppercase tracking-[0.2em] text-blue-100/60 mt-2">
                Indice QVCT
              </span>
            </div>
          </div>
          
          {/* Floating Data Decorators */}
          <div className="absolute -top-4 -right-8 bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20 animate-bounce hidden md:block" style={{ animationDuration: '3s' }}>
            <span className="text-white font-mono font-bold text-xl">#DataPowered</span>
          </div>
          <div className="absolute -bottom-4 -left-8 bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20 animate-pulse hidden md:block">
            <span className="text-white font-mono font-bold text-xl">#FocusHuman</span>
          </div>
        </div>

        {/* Action Area */}
        <div className="flex flex-col items-center gap-8">
          <button className="group relative px-12 py-6 bg-white text-[#003B76] rounded-full text-2xl md:text-3xl font-black shadow-[0_20px_50px_rgba(255,255,255,0.2)] hover:shadow-[0_25px_60px_rgba(255,255,255,0.4)] hover:-translate-y-1 active:translate-y-0 transition-all flex items-center gap-4 overflow-hidden">
            {/* Subtle Button Shine */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-blue-100/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
            
            <span>Démarrer le diagnostic</span>
            
            <svg 
              className="w-8 h-8 transform group-hover:translate-x-2 transition-transform duration-300" 
              viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>

          {/* Reassurance text */}
          <div className="flex items-center gap-6 opacity-60 text-white font-medium text-lg tracking-wide uppercase">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>RGPD Compliant</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
            <span>Anonymat Garanti</span>
            <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
            <span>Diagnostic Certifié</span>
          </div>
        </div>
      </div>

      {/* Side Decorative Elements */}
      <div className="absolute bottom-10 left-10 flex flex-col gap-4 opacity-20 hidden lg:flex">
        <div className="w-40 h-[2px] bg-white" />
        <div className="w-32 h-[2px] bg-white" />
        <div className="w-24 h-[2px] bg-white" />
      </div>

      <div className="absolute top-1/2 right-10 -translate-y-1/2 opacity-20 hidden lg:block vertical-text uppercase tracking-[1em] text-white text-sm font-bold [writing-mode:vertical-lr]">
        Intelligence Psychosociale
      </div>

      <style>{`
        @keyframes vertical-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .vertical-text {
          transform: rotate(180deg);
        }
      `}</style>
    </section>
  );
};

export default RPSHero;
