import React, { useState, useRef } from 'react'

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
  const myRef = useRef()
  const background = [];

  const [position, setPosition] = useState({
    cellX: 0,
    cellY: 0,
    startX: 0,
    startY: 0,
    x: 600,
    y: 0,
    mouseDown: false
  })

  const [side, setSide] = useState('black')

  // const [currentX, setCurrentX] = useState(600)
  // const [currentY, setCurrentY] = useState(0)

  // const [startX, setStartX] = useState(0)
  // const [startY, setStartY] = useState(0)

  // const [x, setX] = useState(currentX)
  // const [y, setY] = useState(currentY)

  // const [newPositionX, setNewPositionX] = useState(0)
  // const [newPositionY, setNewPositionY] = useState(0)


  // const [mouseDown, setMouseDown] = useState(false)

  const verticalCoordinates = ['8', '7', '6', '5', '4', '3', '2', '1'];
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

  return <svg ref={myRef} width="800" height="800" version="1.1"
    onMouseMove={(e) => {
      const { x, y } = myRef.current.getBoundingClientRect()

      if (position.mouseDown) {
        setPosition((prevState => {
          return {
            ...prevState, startX: e.clientX, startY: e.clientY, mouseDown: true,
            x: position.x + e.clientX - position.startX,
            y: position.y + e.clientY - position.startY,
            cellX: Math.floor(((e.clientX - x) / 100)),
            cellY: Math.floor(((e.clientY - y) / 100)),
          };
        }))
      }
    }
    }
  >
    <PieceSymbols></PieceSymbols>

    {background}

    <Knight side={side} key="8g"


      onMouseDown={(e) => {
        setPosition((prevState => {
          return { ...prevState, startX: e.clientX, startY: e.clientY, mouseDown: true };
        }))
      }}

      onMouseUp={(e) => {

        setPosition((prevState => {
          return {
            ...prevState,
            x: position.cellX * 100,
            y: position.cellY * 100,
            mouseDown: false
          };
        }))


      }}
      x={position.x} y={position.y} width="100" height="100" />
  </svg >
}

export { ChessBoard }