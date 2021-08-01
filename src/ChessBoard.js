import React, { useState } from 'react'

import './App.css';
import { Rectangle } from './Rectangle'
import { PieceSymbols } from './symbolPieces/piecesSymbol'
import { Knight } from './figures/knight'
// import { getAllPiecesBlack } from './figures/getAllPiecesBlack'
// import { getAllPiecesWhite } from './figures/getAllPiecesWhite'
// import { BlackBishop } from './figures/blackBishop'
// import { BlacKing } from './figures/blackKing'
// import { BlackRook } from './figures/blackRook'
// import { BlackKnight } from './figures/blackKnight'
// import { BlackQueen } from './figures/blackQueen'
// import { WhiteKing } from './figures/whiteKing'
// import { WhiteBishop } from './figures/whiteBishop'
// import { WhiteRook } from './figures/whiteRook'
// import { WhiteKnight } from './figures/whiteKnight'
// import { WhiteQueen } from './figures/whiteQueen'
// import { Pawn } from './figures/pawn'

function ChessBoard() {
  const background = [];
  const [side, setSide] = useState('black')

  const verticalCoordinates = ['1', '2', '3', '4', '5', '6', '7', '8'];
  const horizontalCoordinates = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

  for (let v = 0; v < verticalCoordinates.length; v++) {
    for (let h = 0; h < horizontalCoordinates.length; h++) {
      const number = v + h;

      let x = horizontalCoordinates.indexOf(horizontalCoordinates[h]) * 100;
      let y = verticalCoordinates.indexOf(verticalCoordinates[v]) * 100;

      if (number % 2 === 0) {
        background.push(<Rectangle x={x} y={y} width="100" height="100" fill="#769656" stoke="#769656" strokeWidth="5" key={verticalCoordinates[v] + horizontalCoordinates[h]}> </Rectangle>)
      }
      else {
        background.push(<Rectangle x={x} y={y} width="100" height="100" fill="#EEEED2" stoke="#EEEED2" strokeWidth="5" key={verticalCoordinates[v] + horizontalCoordinates[h]}></Rectangle>)
      }
    }
  }

  return <svg width="800" height="800" version="1.1">
    <PieceSymbols></PieceSymbols>

    {background}

    <Knight side={side} onClick={() => {
      setSide(side === 'black' ? 'white' : 'black');
    }} x="600" y="0" width="100" height="100" />

    {/* <BlackBishop x="200" y="0" width="100" height="100" />
    <BlackBishop x="500" y="0" width="100" height="100" />

    <WhiteKnight x="100" y="700" width="100" height="100" />
    <WhiteKnight x="600" y="700" width="100" height="100" />
    <WhiteRook x="0" y="700" width="100" height="100" />
    <WhiteRook x="700" y="700" width="100" height="100" />
    <WhiteBishop x="200" y="700" width="100" height="100" />
    <WhiteBishop x="500" y="700" width="100" height="100" />
    <WhiteKing x="300" y="700" width="100" height="100" />
    <WhiteQueen x="400" y="700" width="100" height="100" />
    <BlackKnight x="100" y="0" width="100" height="100" />
    <BlackKnight x="600" y="0" width="100" height="100" />
    <BlackRook x="0" y="0" width="100" height="100" />
    <BlackRook x="700" y="0" width="100" height="100" />
    <BlacKing x="300" y="0" width="100" height="100" /> */}

    {/* <BlackPawn x="0" y="100" width="100" height="100" />
        <BlackPawn x="100" y="100" width="100" height="100" />
        <BlackPawn x="200" y="100" width="100" height="100" />
        <BlackPawn x="300" y="100" width="100" height="100" />
        <BlackPawn x="400" y="100" width="100" height="100" />
        <BlackPawn x="500" y="100" width="100" height="100" />
        <BlackPawn x="600" y="100" width="100" height="100" />
        <BlackPawn x="700" y="100" width="100" height="100" /> */}
    {/* {blackPawns} */}

    {/* <BlackQueen x="400" y="0" width="100" height="100" /> */}
  </svg >
}

export { ChessBoard }