import React from 'react';

function Preloader() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display overflow-hidden min-h-screen flex flex-col relative selection:bg-primary selection:text-surface-dark">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-grain opacity-30"></div>
        <div className="absolute inset-0 scanline opacity-20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]"></div>
      </div>
      <header className="relative z-20 flex items-center justify-between px-8 py-6 w-full opacity-60 hover:opacity-100 transition-opacity duration-500">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-primary text-3xl animate-pulse">hive</span>
          <h1 className="text-sm font-bold tracking-[0.2em] text-primary/80 uppercase">Auralytix <span className="text-[10px] opacity-60 ml-2 border border-primary/30 px-1 rounded">v2.1</span></h1>
        </div>
        <button className="group flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 backdrop-blur-sm">
          <span className="text-xs font-bold tracking-widest text-primary uppercase">Skip Intro</span>
          <span className="material-symbols-outlined text-primary text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </button>
      </header>
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center w-full h-full">
        <div className="relative w-[500px] h-[500px] flex items-center justify-center animate-float">
          <div className="absolute inset-0 rounded-full border border-primary/10 animate-spin-reverse opacity-40 scale-110"></div>
          <svg className="absolute inset-0 w-full h-full -rotate-90 drop-shadow-[0_0_10px_rgba(13,242,242,0.5)]" viewBox="0 0 100 100">
            <circle cx="50" cy="50" fill="none" r="46" stroke="#102222" strokeWidth="0.5"></circle>
            <circle className="transition-all duration-1000 ease-linear animate-[dash_3s_ease-in-out_infinite]" cx="50" cy="50" fill="none" r="46" stroke="#0df2f2" strokeDasharray="289" strokeDashoffset="100" strokeLinecap="round" strokeWidth="1">
              <animate attributeName="stroke-dashoffset" calcMode="spline" dur="4s" fill="freeze" from="289" keySplines="0.4 0 0.2 1" keyTimes="0;1" to="40"></animate>
            </circle>
          </svg>
          <div className="absolute w-[80%] h-[80%] rounded-full border border-dashed border-primary/20 animate-spin-slow"></div>
          <div className="absolute w-[70%] h-[70%] rounded-full border border-t-primary/40 border-r-transparent border-b-primary/40 border-l-transparent animate-[spin_8s_linear_infinite]"></div>
          <div className="relative w-48 h-48 rounded-full animate-pulse-glow z-10">
            <div className="absolute inset-0 rounded-full orb-core overflow-hidden backdrop-blur-sm bg-black/40 border border-primary/30">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(13,242,242,0.4)_2px,transparent_4px)] bg-[length:24px_24px] opacity-30 animate-[spin_20s_linear_infinite]"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2)_1px,transparent_2px)] bg-[length:16px_16px] opacity-50 animate-[spin_15s_linear_infinite_reverse]"></div>
            </div>
            <div className="absolute inset-0 m-auto w-24 h-24 rounded-full bg-primary/20 blur-xl filter"></div>
          </div>
          <div className="absolute top-10 right-20 text-[10px] text-primary/40 font-mono animate-pulse">SYNC_RT: 45ms</div>
          <div className="absolute bottom-16 left-16 text-[10px] text-primary/40 font-mono animate-pulse delay-700">MEM_ALLOC: 84%</div>
        </div>
        <div className="mt-8 flex flex-col items-center gap-3 text-center z-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white chromatic-aberration animate-pulse font-display">
            Initializing Neural Pathways...
          </h2>
          <div className="flex items-center gap-4 mt-4">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
            <p className="text-primary/60 text-xs uppercase tracking-widest font-mono">
              Loading Core Modules <span className="animate-ping inline-flex h-1 w-1 rounded-full bg-primary opacity-75 ml-1"></span>
            </p>
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
          </div>
        </div>
      </main>
      <footer className="relative z-20 py-6 text-center">
        <div className="flex flex-col gap-1 items-center opacity-40 hover:opacity-80 transition-opacity">
          <span className="material-symbols-outlined text-2xl text-primary animate-bounce">keyboard_double_arrow_down</span>
          <p className="text-[10px] uppercase tracking-[0.3em] text-primary/80">Scroll to Explore</p>
        </div>
        <div className="absolute bottom-4 left-4 flex gap-2">
          <div className="w-1 h-1 bg-primary/30 rounded-full"></div>
          <div className="w-1 h-1 bg-primary/30 rounded-full"></div>
          <div className="w-1 h-1 bg-primary/30 rounded-full"></div>
        </div>
        <div className="absolute bottom-4 right-4 text-[10px] text-primary/30 font-mono text-right leading-tight">
          SYS_ID: 8X-92<br/>
          SECURE CONNECTION
        </div>
      </footer>
    </div>
  );
}

export default Preloader;