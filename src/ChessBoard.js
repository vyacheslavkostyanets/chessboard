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

  const [currentX, setCurrentX] = useState(600)
  const [currentY, setCurrentY] = useState(0)

  const [startX, setStartX] = useState(0)
  const [startY, setStartY] = useState(0)

  const [x, setX] = useState(currentX)
  const [y, setY] = useState(currentY)

  const [mouseDown, setMouseDown] = useState(false)

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

  return <svg width="800" height="800" version="1.1" onMouseMove={(e) => {
    if (mouseDown) {
      setX(currentX + e.clientX - startX)
      setY(currentY + e.clientY - startY)
    }
  }}
  >
    <PieceSymbols></PieceSymbols>

    {background}

    <Knight side={side}

      onMouseDown={(e) => {
        setMouseDown(true)

        setStartX(e.clientX);
        setStartY(e.clientY);

        console.log(e);
      }}

      onMouseUp={(e) => {
        setMouseDown(false)

        let cx = currentX + (e.clientX - startX) // 523
        let cy = currentY + (e.clientY - startY) // 423

        setCurrentX(cx - (cx % 100))
        setCurrentY(cy - (cy % 100))

        setX(x - (cx % 100))
        setY(y - (cy % 100))

        console.log(e);
      }}
      x={x} y={y} width="100" height="100" />
  </svg >
}

export { ChessBoard }