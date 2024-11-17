import React, { useState, useEffect, useRef } from 'react';

const BlitzTimer = () => {
  const [player1Time, setPlayer1Time] = useState(180); // 3 minutes
  const [player2Time, setPlayer2Time] = useState(180); // 3 minutes
  const [currentPlayer, setCurrentPlayer] = useState(1); // 1 for Player 1, 2 for Player 2

  const player1IntervalRef = useRef(null);
  const player2IntervalRef = useRef(null);

  // Start timers
  const startTimer = (player) => {
    if (player === 1) {
      player1IntervalRef.current = setInterval(() => {
        setPlayer1Time((prev) => {
          if (prev <= 0) {
            clearInterval(player1IntervalRef.current);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      player2IntervalRef.current = setInterval(() => {
        setPlayer2Time((prev) => {
          if (prev <= 0) {
            clearInterval(player2IntervalRef.current);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
  };

  // Stop timers
  const stopTimer = (player) => {
    if (player === 1 && player1IntervalRef.current) {
      clearInterval(player1IntervalRef.current);
    } else if (player === 2 && player2IntervalRef.current) {
      clearInterval(player2IntervalRef.current);
    }
  };

  // Handle move detection
  const handleMove = () => {
    stopTimer(currentPlayer);
    const nextPlayer = currentPlayer === 1 ? 2 : 1;
    setCurrentPlayer(nextPlayer);
    startTimer(nextPlayer);
  };

  // Format time
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  useEffect(() => {
    startTimer(1); //Start Player 1's timer at the beginning
    return () => {
      clearInterval(player1IntervalRef.current);
      clearInterval(player2IntervalRef.current);
    };
  }, []);

  return (
    <div>
      <h1>Blitz Timer</h1>
      <div>
        <p>Player 1: <strong>{formatTime(player1Time)}</strong></p>
        <p>Player 2: <strong>{formatTime(player2Time)}</strong></p>
      </div>
    </div>
  );
};

export default BlitzTimer;