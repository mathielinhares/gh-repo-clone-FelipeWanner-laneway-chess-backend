import React from 'react';
import { ReactComponent as Pawn } from '../../assets/standardSet/Pawn.svg';
import { ReactComponent as Rook } from '../../assets/standardSet/Rook.svg';
import { ReactComponent as Knight } from '../../assets/standardSet/Knight.svg';
import { ReactComponent as Bishop } from '../../assets/standardSet/Bishop.svg';
import { ReactComponent as Queen } from '../../assets/standardSet/Queen.svg';
import { ReactComponent as King } from '../../assets/standardSet/King.svg';


const pieceComponents = {
  pawn: Pawn,
  rook: Rook,
  knight: Knight,
  bishop: Bishop,
  queen: Queen,
  king: King,
};

const initialBoardState = [
  ["rook", "knight", "bishop", "queen", "king", "bishop", "knight", "rook"],
  ["pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn"],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  ["pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn"],
  ["rook", "knight", "bishop", "queen", "king", "bishop", "knight", "rook"],
];

const Chessboard = () => {
  const rows = 8;
  const cols = 8;
  const board = [];
  const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']; // Chessboard columns
  const rowNumbers = [8, 7, 6, 5, 4, 3, 2, 1]; // Chessboard row numbers

  // Create the squares with keys and alternating colors
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      // Create algebraic notation for each square
      const squareKey = `${columns[col]}${8 - row}`; // ex: A1, B2, etc.
      
      // Alternate colors between white and black
      const isBlack = (row + col) % 2 === 1;
      const PieceComponent = initialBoardState[row][col] ? pieceComponents[initialBoardState[row][col]] : null;
      board.push(
        <div
          key={squareKey}
          className={`w-12 h-12 flex items-center justify-center ${isBlack ? 'bg-gray-700' : 'bg-gray-200'}`}
          data-square={squareKey} // Store the square key in a data attribute for future use
        >
          {PieceComponent && <PieceComponent />}
        </div>
      );
    }
  }

  return (
    <div className="flex justify-center items-center space-x-2">
      {/* Row numbers on the left */}
      <div className="flex flex-col justify-between">
        {rowNumbers.map((number) => (
          <div key={number} className="h-12 flex items-center justify-center">
            {number}
          </div>
        ))}
      </div>

      {/* Chessboard with column letters */}
      <div>
        {/* Column letters on the top */}
        <div className="flex justify-center">
          {columns.map((letter) => (
            <div key={letter} className="w-12 h-12 flex items-center justify-center">
              {letter}
            </div>
          ))}
        </div>

        {/* Chessboard grid */}
        <div className="grid grid-cols-8">
          {board}
        </div>

        {/* Column letters on the bottom */}
        <div className="flex justify-center">
          {columns.map((letter) => (
            <div key={letter} className="w-12 h-12 flex items-center justify-center">
              {letter}
            </div>
          ))}
        </div>
      </div>

      {/* Row numbers on the right */}
      <div className="flex flex-col justify-between">
        {rowNumbers.map((number) => (
          <div key={number} className="h-12 flex items-center justify-center">
            {number}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chessboard;
