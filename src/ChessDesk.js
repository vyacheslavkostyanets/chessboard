import React, { useState, useEffect, useRef } from 'react'

import './App.css';
import { getAllPiecesBlack } from './figures/getAllPiecesBlack'
import { getAllPiecesWhite } from './figures/getAllPiecesWhite'
import { Rectangle } from './Rectangle'
import { BlackBishop } from './figures/blackBishop'
import { BlacKing } from './figures/blackKing'
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
    const [boardState, setBoardState] = useState({ x: 0, y: 100, moving: false, moveY: 0, yCoordinateStartClick: 0 });
    const board = [];
    const [pieces, setPieces] = useState([])
    const verticalCoordinates = ['1', '2', '3', '4', '5', '6', '7', '8'];
    const horizontalCoordinates = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

    // let x = 200;
    // let y = 200;
    // let moving = false;

    const getHardPieces = (i, j, sideHardPieces, location) => {
        (sideHardPieces === "black") ? pieces[i].push({ Pieces: getAllPiecesBlack[location] }) : pieces[i].push({ Pieces: getAllPiecesWhite[location] })
    }

    const getPawn = (i, j, sidePawn) => {
        pieces[i].push({
            Pawn: <Pawn side={sidePawn} key={`${horizontalCoordinates[j]}${verticalCoordinates[i]}`}
                x={j * 100} y="100" width="100" height="100" />
        })
    }

    for (let i = 0; i < 8; i++) {
        pieces.push([])
        for (let j = 0; j < 8; j++) {
            switch (i) {
                case 0:
                    getHardPieces(i, j, "black", (`${horizontalCoordinates[j]}${verticalCoordinates[i]}`))
                    break;
                case 1:
                    getPawn(i, j, "black");
                    break;
                case 2:
                    pieces[i].push(false);
                    break;
                case 3:
                    pieces[i].push(false);
                    break;
                case 4:
                    pieces[i].push(false);
                    break;
                case 5:
                    pieces[i].push(false);
                    break;
                case 6:
                    getPawn(i, j, "white");
                    break;
                case 7:
                    getHardPieces(i, j, "white", (`${horizontalCoordinates[j]}${verticalCoordinates[i]}`))
                    break;
                default:
                    break;
            }
        }

        // whitePawns.push(<WhitePawn x={i * 100} y="600" width="100" height="100" />)
    }
    console.log(pieces, "pieces right")

    pieces.map((item) => {

    })

    const pieceMouseUp = (e) => {
        // console.log(e)
        // let state = boardState
        setBoardState({ ...boardState, moving: false, moveY: 50 })

        console.log('MOUSE UP')
    }
    const pieceMouseDown = (e) => {
        // console.log(e)
        // console.log(`${e.clientX}, ${e.clientY}`)
        // const x = e.clientY - 100;
        // e.clientY = x;
        setBoardState({
            ...boardState, moving: true, moveY: 100, yCoordinateStartClick: e.clientY
        })
            ;
        console.log('MOUSE DOWN')
    }
    const pieceMouseMove = (e) => {
        console.log(e.clientX, "e.target.clientX")

        console.log(e.clientY, "e.target.clientY")


        if (boardState.moving) {


            if (boardState.yCoordinateStartClick + 25 >= e.clientX) {
                setBoardState({
                    ...boardState, x: 0, y: 300
                })
            }


        }
    }

    //     whitePawns.push(<Pawn side="white" key={`${i}w`}
    //         onMouseUp={onMouseUp}
    //         onMouseMove={pieceMouseMove}
    //         onMouseDown={pieceMouseDown}
    //         x={i * 100} y="600" width="100" height="100" />)
    //     blackPawns.push(<Pawn side="black" key={`${i}b`}
    //         onMouseUp={onMouseUp}
    //         onMouseMove={pieceMouseMove}
    //         onMouseDown={pieceMouseDown}
    //         x={i * 100} y="100" width="100" height="100" />)
    //     // whitePawns.push(<WhitePawn x={i * 100} y="600" width="100" height="100" />)
    // }

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
        {/* {whitePawns} */}


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
        {/* {blackPawns} */}
        <BlackQueen x="400" y="0" width="100" height="100" />
    </svg >
}

export { ChessDesk }