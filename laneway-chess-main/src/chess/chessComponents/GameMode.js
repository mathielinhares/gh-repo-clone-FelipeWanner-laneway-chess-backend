import React, { useState } from 'react';
import ChessTimer from './Timer'; // Your normal timer component
import BlitzTimer from './BlitzTimer'; // Your blitz timer component
import Chessboard from './Chessboard'; // Assuming you're using a chessboard library

const GameModeSelector = () => {
  // State to manage the selected game mode
  const [gameMode, setGameMode] = useState('blitz'); // Default to blitz mode

  // Handle mode change
  const handleModeChange = (event) => {
    setGameMode(event.target.value);
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Chess Game</h1>

      {/* Game mode selector */}
      <div className="mb-4">
        <label className="mr-2">Select Game Mode: </label>
        <select
          value={gameMode}
          onChange={handleModeChange}
          className="px-2 py-1 border border-gray-300 rounded"
        >
          <option value="blitz">Blitz</option>
          <option value="normal">Normal</option>
        </select>
      </div>

      <hr className="my-4 w-full" />

      {/* Main container for chessboard and timers */}
      <div className="flex items-start justify-between w-full max-w-5xl">
        {/* Chessboard container */}
        <div className="flex-1 flex justify-center">
          <Chessboard
            id="chessboard"
            arePiecesDraggable={true}
            // Include your move handler here
          />
        </div>

        {/*Timer container*/}
        <div className="w-60 pl-4 flex flex-col justify-evenly">
          {gameMode === 'blitz' ? <BlitzTimer /> : <ChessTimer />}
        </div>
      </div>
    </div>
  );
};

export default GameModeSelector;
