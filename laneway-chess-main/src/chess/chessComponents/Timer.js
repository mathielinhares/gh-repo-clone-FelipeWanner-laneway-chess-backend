import React, { useState, useEffect, useRef } from 'react';

const ChessTimer = () => {
  // Time in seconds
  const [player1Time, setPlayer1Time] = useState(300);
  const [player2Time, setPlayer2Time] = useState(300);
  const [currentPlayer, setCurrentPlayer] = useState(1); // 1 for Player 1, 2 for Player 2

  // Ref for intervals so we can clear them
  const player1IntervalRef = useRef(null);
  const player2IntervalRef = useRef(null);

  // Start Player 1's timer on initial render
  useEffect(() => {
    startTimer(1);
    return () => {
      stopAllTimers(); // Cleanup timers on unmount
    };
  }, []);

  // Timer updater function
  const startTimer = (player) => {
    if (player === 1) {
      player1IntervalRef.current = setInterval(() => {
        setPlayer1Time((prev) => {
          if (prev <= 0) {
            clearInterval(player1IntervalRef.current);
            alert("Player 1's time is up!");
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
            alert("Player 2's time is up!");
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
  };

  // Function to stop a timer
  const stopTimer = (player) => {
    if (player === 1 && player1IntervalRef.current) {
      clearInterval(player1IntervalRef.current);
    } else if (player === 2 && player2IntervalRef.current) {
      clearInterval(player2IntervalRef.current);
    }
  };

  // Stop all timers (useful for cleanup)
  const stopAllTimers = () => {
    clearInterval(player1IntervalRef.current);
    clearInterval(player2IntervalRef.current);
  };

  // Format time in minutes:seconds
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  // When a move is made on the board, automatically switch timers
  const handleMove = (sourceSquare, targetSquare, piece) => {
    // Stop the current player's timer
    stopTimer(currentPlayer);

    // Switch to the other player
    const nextPlayer = currentPlayer === 1 ? 2 : 1;
    setCurrentPlayer(nextPlayer);

    // Start the other player's timer
    startTimer(nextPlayer);
  };

  return (
    <div>
      <h1>Chess Timer</h1>
      <div>
        <p>
          Player 1: <strong>{formatTime(player1Time)}</strong>
        </p>
        <p>
          Player 2: <strong>{formatTime(player2Time)}</strong>
        </p>
      </div>
    </div>
  );
};

export default ChessTimer;
