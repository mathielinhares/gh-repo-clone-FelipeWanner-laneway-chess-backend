// Componente responsavel por buscar os SVG e a cor das peças
import React from 'react';

import whitePawn from './assets/white-pawn.svg';
import blackPawn from './assets/black-pawn.svg';

const pieceImages = {
  white: {
    pawn: whitePawn,
    rook: './assets/white-rook.svg',
    knight: './assets/white-knight.svg',
    bishop: './assets/white-bishop.svg',
    queen: './assets/white-queen.svg',
    king: './assets/white-king.svg',
  },
  black: {
    pawn: blackPawn,
    rook: './assets/black-rook.svg',
    knight: './assets/black-knight.svg',
    bishop: './assets/black-bishop.svg',
    queen: './assets/black-queen.svg',
    king: './assets/black-king.svg',
  },
};

const Piece = ({ type, color }) => {
  const pieceSrc = pieceImages[color][type];
  return (
    <img src={pieceSrc} alt={`${color} ${type}`} className="chess-piece" />
  );
};

export default Piece;
