import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import MainContent from './components/MainContent';
import MovieMenu from './components/MovieMenu';
import MusicMenu from './components/MusicMenu'; // Import the new music component

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [view, setView] = useState('home'); 

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <Preloader />;

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Noto+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100..700&display=swap" rel="stylesheet" />

      {/* The 3-way switch */}
      {view === 'home' && (
        <MainContent 
          onFindMovies={() => setView('movies')} 
          onDiscoverMusic={() => setView('music')} 
        />
      )}
      {view === 'movies' && <MovieMenu onBack={() => setView('home')} />}
      {view === 'music' && <MusicMenu onBack={() => setView('home')} />}
    </>
  );
}

export default App;