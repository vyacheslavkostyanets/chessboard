import React, { useState, useRef } from 'react'

import './App.css';
import { Rectangle } from './Rectangle';
import { PieceSymbols } from './symbolPieces/piecesSymbol';
import { Piece } from './figures/piece';
import { Rook } from './figures/rook'
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
  const pieces = [];
  const background = [];

  const [mouseDown, setMouseDown] = useState(false)
  const [start, setStart] = useState({ startX: 0, startY: 0, cellX: 0, cellY: 0, initialX: 0, initialY: 0, index: 0 })

  const [pieceStates, setPieceStates] = useState([{
    type: "rook",
    side: "black",
    x: 0,
    y: 0,
  }, {
    type: "knight",
    side: "black",
    x: 100,
    y: 0,
  }, {
    type: "bishop",
    side: "black",
    x: 200,
    y: 0,
  }, {
    type: "king",
    side: "black",
    x: 300,
    y: 0,
  }, {
    type: "queen",
    side: "black",
    x: 400,
    y: 0,
  }, {
    type: "bishop",
    side: "black",
    x: 500,
    y: 0,
  }, {
    type: "knight",
    side: "black",
    x: 600,
    y: 0,
  }, {
    type: "rook",
    side: "black",
    x: 700,
    y: 0,
  }, {
    type: "pawn",
    side: "black",
    x: 0,
    y: 100,
  }, {
    type: "pawn",
    side: "black",
    x: 100,
    y: 100,
  }, {
    type: "pawn",
    side: "black",
    x: 200,
    y: 100,
  }, {
    type: "pawn",
    side: "black",
    x: 300,
    y: 100,
  }, {
    type: "pawn",
    side: "black",
    x: 400,
    y: 100,
  }, {
    type: "pawn",
    side: "black",
    x: 500,
    y: 100,
  }, {
    type: "pawn",
    side: "black",
    x: 600,
    y: 100,
  }, {
    type: "pawn",
    side: "black",
    x: 700,
    y: 100,
  }, {
    type: "rook",
    side: "white",
    x: 0,
    y: 700,
  }, {
    type: "knight",
    side: "white",
    x: 100,
    y: 700,
  }, {
    type: "bishop",
    side: "white",
    x: 200,
    y: 700,
  }, {
    type: "king",
    side: "white",
    x: 400,
    y: 700,
  }, {
    type: "queen",
    side: "white",
    x: 300,
    y: 700,
  }, {
    type: "bishop",
    side: "white",
    x: 500,
    y: 700,
  }, {
    type: "knight",
    side: "white",
    x: 600,
    y: 700,
  }, {
    type: "rook",
    side: "white",
    x: 700,
    y: 700,
  }, {
    type: "pawn",
    side: "white",
    x: 0,
    y: 600,
  }, {
    type: "pawn",
    side: "white",
    x: 100,
    y: 600,
  }, {
    type: "pawn",
    side: "white",
    x: 200,
    y: 600,
  }, {
    type: "pawn",
    side: "white",
    x: 300,
    y: 600,
  }, {
    type: "pawn",
    side: "white",
    x: 400,
    y: 600,
  }, {
    type: "pawn",
    side: "white",
    x: 500,
    y: 600,
  }, {
    type: "pawn",
    side: "white",
    x: 600,
    y: 600,
  }, {
    type: "pawn",
    side: "white",
    x: 700,
    y: 600,
  }
  ])

  const verticalCoordinates = ['1', '2', '3', '4', '5', '6', '7', '8'];
  const horizontalCoordinates = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

  for (let v = 0; v < verticalCoordinates.length; v++) {
    for (let h = 0; h < horizontalCoordinates.length; h++) {
      const number = v + h;

      let x = horizontalCoordinates.indexOf(horizontalCoordinates[h]) * 100;
      let y = verticalCoordinates.indexOf(verticalCoordinates[v]) * 100;

      if (number % 2 === 0) {
        background.push(<Rectangle x={x} y={y} width="100" height="100" fill="#EEEED2" stoke="#EEEED2" strokeWidth="5" key={verticalCoordinates[v] + horizontalCoordinates[h]}> </Rectangle>)
      }
      else {
        background.push(<Rectangle x={x} y={y} width="100" height="100" fill="#769656" stoke="#769656" strokeWidth="5" key={verticalCoordinates[v] + horizontalCoordinates[h]}></Rectangle>)
      }
    }
  }


  const onMouseDown = (e, pieceState, i) => {
    const { x, y } = myRef.current.getBoundingClientRect()
    let xBoard = (Math.floor(((e.clientX - x) / 100))) * 100;
    let yBoard = (Math.floor(((e.clientY - y) / 100))) * 100;
    console.log(e.target, "target")
    setStart({ startX: e.clientX, startY: e.clientY, cellX: xBoard, cellY: yBoard, initialX: pieceState.x, initialY: pieceState.y, index: i })
    setMouseDown(true)
  }


  // const onMouseMove = (e, pieceState, i) => {
  //   if (mouseDown) {

  //     let x = start.initialX + e.clientX - start.startX;
  //     let y = start.initialY + e.clientY - start.startY;

  //     setPieceStates(prev => {
  //       let states = prev.slice();
  //       states[i] = {
  //         ...pieceState,
  //         x: x,
  //         y: y,

  //       }
  //       return states;
  //     });
  //   }
  // }

  const onMouseUp = (e, pieceState, i) => {


    setPieceStates(prev => {
      let states = prev.slice();

      console.log(start.cellX, "отжимаем start.cellX")

      states[i] = {
        ...pieceState,

        x: start.cellX,
        y: start.cellY,

      }
      return states;
    });

    setMouseDown(false)
  }


  for (let i = 0; i < pieceStates.length; i++) {
    let pieceState = pieceStates[i];
    pieces.push(<Piece key={i}
      onMouseUp={(e) => onMouseUp(e, pieceState, i)}
      onMouseDown={(e) => onMouseDown(e, pieceState, i)}
      // onMouseMove={(e) => onMouseMove(e, pieceState, i)}
      side={pieceState.side} type={pieceState.type} x={pieceState.x} y={pieceState.y} width="100" height="100" />)
  }

  // const setKnightNewPosition = (startSellPositionX, startSellPositionY, setPositionX, setPositionY) => {
  //   let newPositionX = 0
  //   let newPositionY = 0


  //   if (setPositionX - startSellPositionX === -1 && setPositionY - startSellPositionY === 2) {
  //     newPositionY = setPositionY;
  //     newPositionX = setPositionX;
  //   }
  //   else if (setPositionX - startSellPositionX === 1 && setPositionY - startSellPositionY === 2) {
  //     newPositionY = setPositionY;
  //     newPositionX = setPositionX;
  //   }
  //   else if (setPositionX - startSellPositionX === -2 && setPositionY - startSellPositionY === 1) {
  //     newPositionY = setPositionY;
  //     newPositionX = setPositionX;
  //   }
  //   else if (setPositionX - startSellPositionX === 2 && setPositionY - startSellPositionY === 1) {
  //     newPositionY = setPositionY;
  //     newPositionX = setPositionX;
  //   }
  //   else if (setPositionX - startSellPositionX === -1 && setPositionY - startSellPositionY === -2) {
  //     newPositionY = setPositionY;
  //     newPositionX = setPositionX;
  //   }
  //   else if (setPositionX - startSellPositionX === 1 && setPositionY - startSellPositionY === -2) {
  //     newPositionY = setPositionY;
  //     newPositionX = setPositionX;
  //   }
  //   else if (setPositionX - startSellPositionX === -2 && setPositionY - startSellPositionY === -1) {
  //     newPositionY = setPositionY;
  //     newPositionX = setPositionX;
  //   }
  //   else if (setPositionX - startSellPositionX === 2 && setPositionY - startSellPositionY === -1) {
  //     newPositionY = setPositionY;
  //     newPositionX = setPositionX;
  //   }
  //   else {
  //     newPositionY = startSellPositionY;
  //     newPositionX = startSellPositionX;
  //   }
  //   console.log(newPositionY, "newPositionY")
  //   console.log(newPositionX, "newPositionX")
  //   return setPieceStates((prevState => {
  //     return {
  //       ...prevState,
  //       x: newPositionX * 100,
  //       y: newPositionY * 100,
  //       mouseDown: false,
  //       knightStep: []
  //     };
  //   }))

  // }

  const nextKnightPosition = (xBoard, yBoard) => {
    let knightPosition = []

    if (xBoard + 2 < 8 && yBoard + 1 < 8) {
      knightPosition.push(<Rectangle x={(xBoard + 2) * 100} y={(yBoard + 1) * 100} width="100" height="100" fill="#152640" stoke="#FFDD00" strokeWidth="5" key={`${xBoard + 2}, ${yBoard + 1} `}> </Rectangle>)
    }
    if (xBoard + 1 < 8 && yBoard + 2 < 8) {
      knightPosition.push(<Rectangle x={(xBoard + 1) * 100} y={(yBoard + 2) * 100} width="100" height="100" fill="#152640" stoke="#FFDD00" strokeWidth="5" key={`${xBoard + 1}, ${yBoard + 2} `}> </Rectangle>)
    }
    if (xBoard - 2 >= 0 && yBoard - 1 >= 0) {
      knightPosition.push(<Rectangle x={(xBoard - 2) * 100} y={(yBoard - 1) * 100} width="100" height="100" fill="#152640" stoke="#FFDD00" strokeWidth="5" key={`${xBoard - 1}, ${yBoard - 2} `}> </Rectangle>)
    }
    if (xBoard - 1 >= 0 && yBoard - 2 >= 0) {
      knightPosition.push(<Rectangle x={(xBoard - 1) * 100} y={(yBoard - 2) * 100} width="100" height="100" fill="#152640" stoke="#FFDD00" strokeWidth="5" key={`${xBoard - 2}, ${yBoard - 2} `}> </Rectangle>)
    }
    if (xBoard + 2 < 8 && yBoard - 1 >= 0) {
      knightPosition.push(<Rectangle x={(xBoard + 2) * 100} y={(yBoard - 1) * 100} width="100" height="100" fill="#152640" stoke="#FFDD00" strokeWidth="5" key={`${xBoard + 2}, ${yBoard - 1} `}> </Rectangle>)
    }
    if (xBoard - 1 >= 0 && yBoard + 2 < 8) {
      knightPosition.push(<Rectangle x={(xBoard - 1) * 100} y={(yBoard + 2) * 100} width="100" height="100" fill="#152640" stoke="#FFDD00" strokeWidth="5" key={`${xBoard - 1}, ${yBoard + 2} `}> </Rectangle>)
    }
    if (xBoard - 2 >= 0 && yBoard + 1 < 8) {
      knightPosition.push(<Rectangle x={(xBoard - 2) * 100} y={(yBoard + 1) * 100} width="100" height="100" fill="#152640" stoke="#FFDD00" strokeWidth="5" key={`${xBoard - 2}, ${yBoard + 1} `}> </Rectangle>)
    }
    if (xBoard + 1 < 8 && yBoard - 2 >= 0) {
      knightPosition.push(<Rectangle x={(xBoard + 1) * 100} y={(yBoard - 2) * 100} width="100" height="100" fill="#152640" stoke="#FFDD00" strokeWidth="5" key={`${xBoard + 1}, ${yBoard - 2} `}> </Rectangle>)
    }
    return knightPosition
  }

  // console.log(pieceStates.knightStep, "knightStep")
  return <svg ref={myRef} width="800" height="800" version="1.1"
    onMouseMove={(e) => {

      // if (mouseDown) {
      //   const { x, y } = myRef.current.getBoundingClientRect()
      //   console.log(x, "x svg")
      //   console.log(y, "y svg")
      //   setStart((prev) => {
      //     return { ...prev, cellX: Math.floor(((e.clientX - x) / 100)), cellY: Math.floor(((e.clientY - y) / 100)) }
      //   })
      // }


      if (mouseDown) {

        const { x, y } = myRef.current.getBoundingClientRect()
        let axisSvgX = (Math.floor((e.clientX - x) / 100)) * 100
        let axisSvgY = (Math.floor((e.clientY - y) / 100)) * 100
        console.log(axisSvgX, "x svg")
        console.log(axisSvgY, "y svg")

        let axisX = start.initialX + e.clientX - start.startX;
        let axisY = start.initialY + e.clientY - start.startY;

        setPieceStates(pieceStatesPrev => {
          let piceStatesNext = pieceStatesPrev.slice();
          let pieceState = pieceStatesPrev[start.index]
          piceStatesNext[start.index] = {
            ...pieceState,
            x: axisX,
            y: axisY,
          }
          return piceStatesNext;
        });
        setStart((prevState) => {
          return { ...prevState, cellX: axisSvgX, cellY: axisSvgY }
        })
      }


    }
    }
  >
    <PieceSymbols></PieceSymbols>

    {background}
    {pieces}

    {/* <Piece side={pieceStates[0].side} type="knight" x={250} y={300} width="100" height="100" />
    <Piece side={pieceStates[0].side} type="rook" x={250} y={300} width="100" height="100" />
    <Piece side={pieceStates[0].side} type="rook" x={400} y={400} width="100" height="100" />
    <Piece side={pieceStates[0].side} type="knight" x={pieceStates.x} y={pieceStates.y} width="100" height="100"

      onMouseDown={(e) => {

        const { x, y } = myRef.current.getBoundingClientRect()
        let xBoard = Math.floor(((e.clientX - x) / 100))
        let yBoard = Math.floor(((e.clientY - y) / 100))
        console.log(xBoard, "xxx")
        console.log(yBoard, "yyy")



        setPieceStates((prevState => {
          return {
            ...prevState, startX: e.clientX, startY: e.clientY, mouseDown: true,
            startCellX: xBoard,
            startCellY: yBoard,
            knightStep: nextKnightPosition(xBoard, yBoard)
          };
        }))
      }
      }

      onMouseUp={(e) => {
        console.log(setKnightNewPosition(pieceStates.startCellX, pieceStates.startCellY, pieceStates.cellX, pieceStates.cellY), "setKnightNewPosition(position.startX, position.startY)");

        setKnightNewPosition(pieceStates.startCellX, pieceStates.startCellY, pieceStates.cellX, pieceStates.cellY);

        // setPosition((prevState => {
        //   return {
        //     ...prevState,
        //     x: position.cellX * 100,
        //     y: position.cellY * 100,
        //     mouseDown: false,
        //     // knightStep: []
        //   };
        // }))
      }}
    /> */}

  </svg >
}

export { ChessBoard }

