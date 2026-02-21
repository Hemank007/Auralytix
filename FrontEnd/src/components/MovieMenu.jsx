import React from 'react';

function MovieMenu({ onBack }) {
  const movies = [
    { title: "Inception", year: "2010", duration: "2H 28M", rating: "8.8", genre: "SCI-FI", desc: "A thief who steals corporate secrets through the use of dream-sharing technology..." },
    { title: "Blade Runner 2049", year: "2017", duration: "2H 44M", rating: "8.0", genre: "CYBERPUNK", desc: "Young Blade Runner K's discovery of a long-buried secret leads him to track down former..." },
    { title: "Interstellar", year: "2014", duration: "2H 49M", rating: "8.6", genre: "ADVENTURE", desc: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival." }
  ];

  return (
    <div className="min-h-screen bg-background-dark text-white p-8 font-display">
      {/* Header */}
      <div className="flex justify-between items-center max-w-7xl mx-auto mb-12">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">hive</span>
          <span className="font-bold tracking-widest uppercase">Auralytix</span>
        </div>
        <button onClick={onBack} className="flex items-center gap-2 text-xs text-slate-400 hover:text-primary transition-colors">
          <span className="material-symbols-outlined text-sm">arrow_back</span> BACK TO HOME
        </button>
      </div>

      <div className="max-w-5xl mx-auto text-center space-y-6">
        <h2 className="text-5xl font-bold tracking-tight text-glow">CINEMATIC DISCOVERY</h2>
        <p className="text-primary/60 text-xs tracking-[0.3em] uppercase">AI-Powered Movie Matching</p>

        {/* Search Bar */}
        <div className="relative max-w-3xl mx-auto mt-10">
          <div className="absolute inset-0 bg-primary/10 blur-xl rounded-full opacity-20"></div>
          <div className="relative flex items-center bg-black/60 border border-primary/30 rounded-xl p-4">
            <span className="material-symbols-outlined text-primary mr-4">search</span>
            <input className="bg-transparent border-none focus:ring-0 w-full text-slate-300" placeholder="Describe the cinematic mood..." />
            <span className="material-symbols-outlined text-primary">mic</span>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto mt-20">
        <div className="flex justify-between items-center mb-8 border-l-2 border-primary pl-4">
          <h3 className="text-sm font-bold tracking-widest uppercase">Top Matches</h3>
          <span className="text-[10px] text-primary/50 tracking-widest">3 RESULTS FOUND</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {movies.map((movie, i) => (
            <div key={i} className="glass-card rounded-xl p-6 flex flex-col justify-between h-[450px] group border-primary/10">
              <div className="flex justify-between items-start">
                <span className="text-[10px] bg-primary/10 text-primary border border-primary/20 px-2 py-1 rounded">{movie.genre}</span>
                <span className="text-xs text-yellow-500 flex items-center gap-1">★ {movie.rating}</span>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-2xl font-bold group-hover:text-primary transition-colors">{movie.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{movie.desc}</p>
                <div className="flex justify-between items-center text-[10px] text-slate-500 font-mono pt-4 border-t border-white/5">
                  <span>{movie.duration} • {movie.year}</span>
                  <span className="material-symbols-outlined text-primary text-lg">play_circle</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieMenu;