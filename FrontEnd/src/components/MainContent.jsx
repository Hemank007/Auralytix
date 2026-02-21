import React from 'react';
import logo from '../assets/logo.png';

// We add onDiscoverMusic here so the component can receive the instruction
function MainContent({ onFindMovies, onDiscoverMusic }) {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display antialiased overflow-x-hidden min-h-screen flex flex-col">
      <div className="fixed inset-0 pointer-events-none ambient-bg z-0"></div>
      <div className="relative z-10 flex flex-col min-h-screen w-full">
        <header className="w-full pl-2 px-6 py-6 md:px-12 md:pl-2 flex justify-between items-center">
          <div className="flex items-center select-none">
            <img src={logo} alt="Auralytix Logo" className="h-24 md:h-24 drop-shadow-[0_0_8px_rgba(0,243,255,0.4)]" />
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a className="text-xs font-semibold tracking-widest uppercase text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors" href="#">About</a>
            <a className="text-xs font-semibold tracking-widest uppercase text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors" href="#">History</a>
            <a className="text-xs font-semibold tracking-widest uppercase text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors" href="#">Settings</a>
            <button className="bg-surface-dark border border-slate-800 hover:border-primary text-white rounded-full p-2 transition-all duration-300 hover:shadow-glow-sm group">
              <span className="material-symbols-outlined text-[20px] block group-hover:text-primary transition-colors">person</span>
            </button>
          </nav>
        </header>

        <main className="flex-1 flex flex-col items-center justify-center px-4 w-full max-w-7xl mx-auto py-10 md:py-16 gap-12">
          <div className="text-center space-y-4 max-w-3xl animate-fade-in-up">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-slate-200 to-slate-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
              WHAT'S YOUR VIBE?
            </h2>
            <p className="text-lg text-slate-500 dark:text-primary/80 font-display font-light tracking-wide uppercase">
              Choose a path or describe your mood to the Neural Core.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
            {/* MOVIE CARD */}
            <div 
              onClick={onFindMovies} 
              className="group relative glass-card rounded-xl p-8 cursor-pointer transition-all duration-300 flex flex-col items-center justify-center gap-6 h-64 md:h-80 overflow-hidden transform hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 size-24 rounded-full border border-primary/30 flex items-center justify-center group-hover:scale-110 group-hover:border-primary group-hover:shadow-glow transition-all duration-300 bg-black/40">
                <span className="material-symbols-outlined text-5xl text-primary group-hover:drop-shadow-[0_0_10px_rgba(0,243,255,0.8)] transition-all" style={{ fontSize: '48px' }}>movie</span>
              </div>
              <div className="relative z-10 text-center space-y-2">
                <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors tracking-widest uppercase text-glow">Find Movies</h3>
                <p className="text-xs text-slate-400 font-display tracking-widest uppercase group-hover:text-slate-300">Cinematic journeys</p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 group-hover:opacity-100 shadow-[0_0_10px_#00f3ff] transition-opacity"></div>
            </div>

            {/* MUSIC CARD - ADDED onClick={onDiscoverMusic} HERE */}
            <div 
              onClick={onDiscoverMusic} 
              className="group relative glass-card rounded-xl p-8 cursor-pointer transition-all duration-300 flex flex-col items-center justify-center gap-6 h-64 md:h-80 overflow-hidden transform hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-bl from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 size-24 rounded-full border border-primary/30 flex items-center justify-center group-hover:scale-110 group-hover:border-primary group-hover:shadow-glow transition-all duration-300 bg-black/40">
                <span className="material-symbols-outlined text-5xl text-primary group-hover:drop-shadow-[0_0_10px_rgba(0,243,255,0.8)] transition-all" style={{ fontSize: '48px' }}>graphic_eq</span>
              </div>
              <div className="relative z-10 text-center space-y-2">
                <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors tracking-widest uppercase text-glow">Discover Music</h3>
                <p className="text-xs text-slate-400 font-display tracking-widest uppercase group-hover:text-slate-300">Rhythmic frequencies</p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 group-hover:opacity-100 shadow-[0_0_10px_#00f3ff] transition-opacity"></div>
            </div>
          </div>

          <div className="w-full max-w-2xl flex flex-col gap-4 mt-4">
            <div className="relative flex items-center bg-black border border-primary/30 rounded-xl p-1 focus-within:border-primary focus-within:shadow-glow transition-all duration-300">
                <div className="pl-4 pr-3 text-primary/50">
                  <span className="material-symbols-outlined text-xl">search</span>
                </div>
                <input className="w-full bg-transparent border-none focus:ring-0 text-white placeholder-slate-600 font-display text-lg h-14 tracking-wide caret-primary" placeholder="Initialize search query..." type="text"/>
            </div>
          </div>
        </main>

        <footer className="w-full py-8 text-center border-t border-slate-900 bg-black/80 backdrop-blur-sm relative z-20">
          <p className="text-xs text-slate-600 dark:text-slate-500 font-display tracking-widest uppercase">
            Powered by <span className="text-primary/70 font-semibold drop-shadow-[0_0_5px_rgba(0,243,255,0.3)]">Auralytix AI</span>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default MainContent;