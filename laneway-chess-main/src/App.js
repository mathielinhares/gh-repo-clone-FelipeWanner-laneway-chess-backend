import React from 'react';
import GameModeSelector from './chess/chessComponents/GameMode';

const App = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-red-300">
      <GameModeSelector/>      
    </div>
  );
};

export default App;
