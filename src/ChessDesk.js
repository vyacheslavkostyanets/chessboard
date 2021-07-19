import React, { useState, useEffect } from 'react'

import './App.css';
import { Rectangle } from './Rectangle'
import { BlackBishop } from './figures/blackBishop'
import { BlacKing } from './figures/blackKing'
import { BlackPawn } from './figures/blackPawn'
import { WhitePawn } from './figures/whitePawn'
import { BlackRook } from './figures/blackRook'
import { BlackKnight } from './figures/blackKnight'
import { BlackQueen } from './figures/blackQueen'
import { WhiteKing } from './figures/whiteKing'
import { WhiteBishop } from './figures/whiteBishop'
import { WhiteRook } from './figures/whiteRook'
import { WhiteKnight } from './figures/whiteKnight'
import { WhiteQueen } from './figures/whiteQueen'
import { WhiteKnightSymbol } from './symbolPieces/whiteKnightSymbol'
import { WhiteRookSymbol } from './symbolPieces/whiteRookSymbol'
import { WhiteQueenSymbol } from './symbolPieces/whiteQueenSymbol'
import { BlackBishopSymbol } from './symbolPieces/blackBishopSymbol'
import { BlacKingSymbol } from './symbolPieces/blackKingSymbol'
import { BlackRookSymbol } from './symbolPieces/blackRookSymbol'
import { BlackKnightSymbol } from './symbolPieces/blackKnightSymbol'
import { BlackQueenSymbol } from './symbolPieces/blackQueenSymbol'
import { BlackPawnSymbol } from './symbolPieces/blackPawnSymbol'
import { WhitePawnSymbol } from './symbolPieces/whitePawnSymbol'
import { WhiteKingSymbol } from './symbolPieces/whiteKingSymbol'
import { WhiteBishopSymbol } from './symbolPieces/whiteBishopSymbol'
import { Pawn } from './figures/pawn'

function ChessDesk() {
    const [boardState, setBoardState] = useState({ x: null, y: null, moving: false });
    const board = [];
    const pieces = [];
    const verticalCoordinates = ['1', '2', '3', '4', '5', '6', '7', '8'];
    const horizontalCoordinates = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const whitePawns = [];
    const blackPawns = [];
    // let x = 200;
    // let y = 200;
    // let moving = false;

    const pieceMouseUp = (e) => {
        console.log(e)
        // let state = boardState
        setBoardState({ ...boardState, moving: false })

    }
    const pieceMouseDown = (e) => {
        console.log(e)
        // console.log(`${e.clientX}, ${e.clientY}`)
        // const x = e.clientY - 100;
        // e.clientY = x;
        setBoardState({
            ...boardState, moving: true,

        })
    }
    const pieceMouseMove = (e) => {
        console.log(e)
        if (boardState.moving) {
            setBoardState({
                ...boardState, x: e.clientX, y: e.clientY, animate: { y: 100 },
                transition: {
                    type: "spring",
                    stiffness: 100
                }
            })
        }
    }

    for (let i = 0; i < 8; i++) {
        // setBoardState({ ...boardState, x: i * 100, y: "600" });

        whitePawns.push(<Pawn side="white" key={`${i}w`} onMouseMove={pieceMouseMove} onMouseDown={pieceMouseDown} x={i * 100} y="600" width="100" height="100" />)
        blackPawns.push(<Pawn side="black" key={`${i}b`} onMouseMove={pieceMouseMove} onMouseDown={pieceMouseDown} x={i * 100} y="100" width="100" height="100" />)
        // whitePawns.push(<WhitePawn x={i * 100} y="600" width="100" height="100" />)
    }
    // for (let i = 0; i < 8; i++) {
    //     blackPawns.push(<BlackPawn x={i * 100} y="100" width="100" height="100" />)
    // }

    // blackPawns.push(<Pawn side="black" key="1"

    //     onMouseUp={pieceMouseUp}
    //     onMouseDown={pieceMouseDown}
    //     onMouseMove={pieceMouseMove}
    //     x={boardState.x} y={boardState.y} width="100" height="100" />)


    console.log(pieces, 'pieces')
    for (let v = 0; v < verticalCoordinates.length; v++) {
        for (let h = 0; h < horizontalCoordinates.length; h++) {
            const number = v + h;

            let x = horizontalCoordinates.indexOf(horizontalCoordinates[h]) * 100;
            let y = verticalCoordinates.indexOf(verticalCoordinates[v]) * 100;

            if (number % 2 === 0) {
                board.push(<Rectangle x={x} y={y} width="100" height="100" fill="#769656" stoke="#769656" strokeWidth="5" key={verticalCoordinates[v] + horizontalCoordinates[h]}> </Rectangle>)
            }
            else {
                board.push(<Rectangle x={x} y={y} width="100" height="100" fill="#EEEED2" stoke="#EEEED2" strokeWidth="5" key={verticalCoordinates[v] + horizontalCoordinates[h]}></Rectangle>)
            }
            // for (let p = 0; p < 8; p++) {
            //     if (verticalСhessPieces[h] + horizontalСhessPieces[h] === verticalСhessPieces[p] + horizontalСhessPieces[0]) {
            //         console.log(verticalСhessPieces[p] + horizontalСhessPieces[0])
            //     }
            // }

        }
    }

    // useEffect(() => {
    //     setPiecesLocation(pieces)
    // }, []);

    console.log(board, 'board')

    return <svg width="800" height="800" version="1.1">
        <WhiteQueenSymbol />
        <WhiteKnightSymbol />
        <WhiteRookSymbol />
        <WhiteBishopSymbol />
        <WhiteKingSymbol />
        <WhitePawnSymbol />
        <BlackBishopSymbol />
        <BlackKnightSymbol />
        <BlackRookSymbol />
        <BlacKingSymbol />
        <BlackPawnSymbol />
        <BlackQueenSymbol />

        {board}
        <BlackBishop x="200" y="0" width="100" height="100" />
        <BlackBishop x="500" y="0" width="100" height="100" />

        <WhiteKnight x="100" y="700" width="100" height="100" />
        <WhiteKnight x="600" y="700" width="100" height="100" />
        <WhiteRook x="0" y="700" width="100" height="100" />
        <WhiteRook x="700" y="700" width="100" height="100" />
        <WhiteBishop x="200" y="700" width="100" height="100" />
        <WhiteBishop x="500" y="700" width="100" height="100" />
        <WhiteKing x="300" y="700" width="100" height="100" />
        <WhiteQueen x="400" y="700" width="100" height="100" />
        {/* <WhitePawn x="0" y="600" width="100" height="100" />
        <WhitePawn x="100" y="600" width="100" height="100" />
        <WhitePawn x="200" y="600" width="100" height="100" />
        <WhitePawn x="300" y="600" width="100" height="100" />
        <WhitePawn x="400" y="600" width="100" height="100" />
        <WhitePawn x="500" y="600" width="100" height="100" />
        <WhitePawn x="600" y="600" width="100" height="100" />
        <WhitePawn x="700" y="600" width="100" height="100" /> */}
        {whitePawns}


        <BlackKnight x="100" y="0" width="100" height="100" />
        <BlackKnight x="600" y="0" width="100" height="100" />
        <BlackRook x="0" y="0" width="100" height="100" />
        <BlackRook x="700" y="0" width="100" height="100" />
        <BlacKing x="300" y="0" width="100" height="100" />




        {/* <BlackPawn x="0" y="100" width="100" height="100" />
        <BlackPawn x="100" y="100" width="100" height="100" />
        <BlackPawn x="200" y="100" width="100" height="100" />
        <BlackPawn x="300" y="100" width="100" height="100" />
        <BlackPawn x="400" y="100" width="100" height="100" />
        <BlackPawn x="500" y="100" width="100" height="100" />
        <BlackPawn x="600" y="100" width="100" height="100" />
        <BlackPawn x="700" y="100" width="100" height="100" /> */}
        {blackPawns}
        <BlackQueen x="400" y="0" width="100" height="100" />
    </svg >
}

export { ChessDesk }