import React from 'react';

function MusicMenu({ onBack }) {
  const tracks = [
    { title: "Neon Horizon", artist: "Synthwave Collective", album: "Nightcall Vol. 2", duration: "03:42" },
    { title: "Cybernetic Pulse", artist: "Digital Soul", album: "Mainframe Access", duration: "04:15" },
    { title: "Void Echoes", artist: "The Null Pointer", album: "Exception", duration: "02:58" },
    { title: "Glitch Protocol", artist: "Binary Beats", album: "System Reboot", duration: "03:21" }
  ];

  return (
    <div className="min-h-screen bg-background-dark text-white font-display flex flex-col relative overflow-hidden">
      {/* Ambient Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -mr-64 -mt-64"></div>
      
      {/* Header */}
      <header className="relative z-10 w-full px-8 py-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-primary text-3xl">graphic_eq</span>
          <h1 className="text-xl font-bold tracking-[0.2em] uppercase">Auralytix</h1>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 px-3 py-1 border border-primary/30 rounded-full bg-primary/5">
             <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
             <span className="text-[10px] font-bold tracking-widest uppercase text-primary">System Online</span>
          </div>
          <button onClick={onBack} className="material-symbols-outlined text-slate-400 hover:text-primary transition-colors">settings</button>
        </div>
      </header>

      <main className="relative z-10 flex-1 flex flex-col items-center px-4 max-w-4xl mx-auto w-full pt-12">
        {/* Search Section */}
        <div className="w-full relative group mb-12">
          <div className="absolute inset-0 bg-primary/10 blur-xl rounded-xl opacity-0 group-hover:opacity-40 transition-opacity"></div>
          <div className="relative flex items-center bg-black/40 border border-primary/20 rounded-xl p-4 focus-within:border-primary/60 transition-all">
            <span className="material-symbols-outlined text-primary/60 mr-4">search</span>
            <input className="bg-transparent border-none focus:ring-0 w-full text-lg placeholder-slate-600" placeholder="Initialize rhythmic frequency..." />
            <span className="material-symbols-outlined text-primary cursor-pointer">mic</span>
          </div>
          
          <div className="flex gap-8 mt-6 items-center">
            <div className="flex gap-2">
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest pt-1">Mood Protocol:</span>
                {['CHILL', 'HYPE', 'SAD'].map(mood => (
                    <button key={mood} className={`px-4 py-1 rounded-full text-[10px] font-bold tracking-widest border transition-all ${mood === 'HYPE' ? 'bg-primary/20 border-primary text-primary shadow-glow-sm' : 'border-slate-800 text-slate-500 hover:border-primary/40'}`}>
                        {mood}
                    </button>
                ))}
            </div>
            <div className="ml-auto flex items-center gap-2">
                 <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Linguistic Data:</span>
                 <select className="bg-transparent border border-slate-800 text-[10px] font-bold tracking-widest rounded-lg px-2 py-1 text-slate-400 outline-none">
                    <option>ENGLISH</option>
                 </select>
            </div>
          </div>
        </div>

        {/* Tracks List */}
        <div className="w-full space-y-4">
          <div className="flex justify-between items-center px-2 mb-4">
            <h3 className="text-xs font-bold tracking-widest uppercase text-primary flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">library_music</span> Detected Frequencies
            </h3>
            <span className="text-[10px] text-slate-600 tracking-widest uppercase">4 Matches Found</span>
          </div>

          {tracks.map((track, i) => (
            <div key={i} className="glass-card group flex items-center p-4 rounded-xl border-white/5 hover:border-primary/30 transition-all cursor-pointer">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center mr-6 group-hover:shadow-glow-sm transition-all">
                 <span className="material-symbols-outlined text-slate-600 group-hover:text-primary">album</span>
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-bold tracking-wide group-hover:text-primary transition-colors">{track.title}</h4>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">{track.artist} • {track.album}</p>
              </div>
              <div className="flex items-center gap-6">
                <span className="text-xs font-mono text-slate-600">{track.duration}</span>
                <span className="material-symbols-outlined text-slate-600 hover:text-primary transition-colors text-xl">favorite</span>
                <span className="material-symbols-outlined text-slate-600 hover:text-primary transition-colors text-xl">more_vert</span>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Mini Player Bottom Bar */}
      <footer className="relative z-10 w-full bg-black/80 backdrop-blur-xl border-t border-white/5 p-4 mt-auto">
         <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4 w-1/3">
                <div className="size-10 rounded bg-slate-800"></div>
                <div>
                    <div className="text-xs font-bold">Neon Horizon</div>
                    <div className="text-[10px] text-slate-500 uppercase">Synthwave Collective</div>
                </div>
            </div>
            <div className="flex flex-col items-center gap-2 w-1/3">
                <div className="flex items-center gap-6">
                    <span className="material-symbols-outlined text-slate-400 hover:text-white cursor-pointer text-sm">skip_previous</span>
                    <button className="size-8 rounded-full border border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-black transition-all shadow-glow-sm">
                        <span className="material-symbols-outlined text-lg">play_arrow</span>
                    </button>
                    <span className="material-symbols-outlined text-slate-400 hover:text-white cursor-pointer text-sm">skip_next</span>
                </div>
                <div className="w-full max-w-xs h-1 bg-slate-800 rounded-full overflow-hidden">
                    <div className="w-1/3 h-full bg-primary"></div>
                </div>
            </div>
            <div className="w-1/3 flex justify-end items-center gap-4">
                <span className="text-[10px] text-primary font-bold uppercase tracking-widest flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div> Terminal Ready
                </span>
                <button onClick={onBack} className="text-[10px] text-slate-500 hover:text-white border border-slate-800 px-3 py-1 rounded">EXIT</button>
            </div>
         </div>
      </footer>
    </div>
  );
}

export default MusicMenu;