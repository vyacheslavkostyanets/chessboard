import React, { useState, useEffect } from 'react'
import './App.css';
import { Rectangle } from './Rectangle'
import { BlackBishop } from './figures/blackbishop'
import { Blacking } from './figures/blackking'
import { BlackRook } from './figures/blackrook'
import { BlackHorse } from './figures/blackhorse'
import { BlackQueen } from './figures/blackqueen'
import { BlackPawns } from './figures/blackpawns'
import { WhitePawns } from './figures/whitepawns'
import { WhiteKing } from './figures/whiteking'
import { WhiteQueen } from './figures/whitequeen'
import { WhiteBishop } from './figures/whitebishop'
import { WhiteHorse } from './figures/whitehorse'
import { WhiteRook } from './figures/whiterook'
import { WhiteHorseSymbol } from './figures/whiteHorseSymbol'


function ChessDesk() {
    const [PiecesLocation, setPiecesLocation] = useState([]);
    const [darkPieces, setdarkPieces] = useState([]);
    const [whitePieces, setwhitePieces] = useState([]);


    const board = [];
    const pieces = [];
    const verticalCoordinates = ['1', '2', '3', '4', '5', '6', '7', '8'];
    const horizontalCoordinates = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    // verticalCoordinates.forEach((elV, index) => {
    //     pieces.push([]);
    //     horizontalCoordinates.forEach((elH, i) => {
    //         let isPieceDark = false;
    //         let isPieceWhite = false;
    //         let PieceDark = undefined;
    //         let PieceWhite = undefined;
    //         let locationDarkPiece = elV + elH;
    //         let locationWhitePiece = elV + elH;
    //         switch (locationWhitePiece) {
    //             case '1a':
    //                 isPieceWhite = true
    //                 PieceWhite = <WhiteRook />
    //                 break;
    //             case '1h':
    //                 isPieceWhite = true
    //                 PieceWhite = <WhiteRook />
    //                 break;
    //             case '1b':
    //                 isPieceWhite = true
    //                 PieceWhite = <WhiteHorse />
    //                 break;
    //             case '1g':
    //                 isPieceWhite = true
    //                 PieceWhite = <WhiteHorse />
    //                 break;
    //             case '1c':
    //                 isPieceWhite = true
    //                 PieceWhite = <WhiteBishop />
    //                 break;
    //             case '1f':
    //                 isPieceWhite = true
    //                 PieceWhite = <WhiteBishop />
    //                 break;
    //             case '1d':
    //                 isPieceWhite = true
    //                 PieceWhite = <WhiteQueen />
    //                 break;
    //             case '1e':
    //                 isPieceWhite = true
    //                 PieceWhite = <WhiteKing />
    //                 break;
    //             case '2a':
    //                 isPieceWhite = true
    //                 PieceWhite = <WhitePawns />
    //                 break;
    //             case '2h':
    //                 isPieceWhite = true
    //                 PieceWhite = <WhitePawns />
    //                 break;
    //             case '2b':
    //                 isPieceWhite = true
    //                 PieceWhite = <WhitePawns />
    //                 break;
    //             case '2g':
    //                 isPieceWhite = true
    //                 PieceWhite = <WhitePawns />
    //                 break;
    //             case '2c':
    //                 isPieceWhite = true
    //                 PieceWhite = <WhitePawns />
    //                 break;
    //             case '2f':
    //                 isPieceWhite = true
    //                 PieceWhite = <WhitePawns />
    //                 break;
    //             case '2d':
    //                 isPieceWhite = true
    //                 PieceWhite = <WhitePawns />
    //                 break;
    //             case '2e':
    //                 isPieceWhite = true
    //                 PieceWhite = <WhitePawns />
    //                 break;
    //             default: isPieceWhite = false
    //         }
    //         switch (locationDarkPiece) {
    //             case '8a':
    //                 isPieceDark = true
    //                 PieceDark = <BlackRook />
    //                 break;
    //             case '8b':
    //                 isPieceDark = true
    //                 PieceDark = <BlackHorse />
    //                 break;
    //             case '8c':
    //                 isPieceDark = true
    //                 PieceDark = <BlackBishop />
    //                 break;
    //             case '8d':
    //                 isPieceDark = true
    //                 PieceDark = <BlackQueen />
    //                 break;
    //             case '8e':
    //                 isPieceDark = true
    //                 PieceDark = <Blacking />
    //                 break;
    //             case '8f':
    //                 isPieceDark = true
    //                 PieceDark = <BlackBishop />
    //                 break;
    //             case '8g':
    //                 isPieceDark = true
    //                 PieceDark = <BlackHorse />
    //                 break;
    //             case '8h':
    //                 isPieceDark = true
    //                 PieceDark = <BlackRook />
    //                 break;
    //             case '7a':
    //                 isPieceDark = true
    //                 PieceDark = <BlackPawns />
    //                 break;
    //             case '7b':
    //                 isPieceDark = true
    //                 PieceDark = <BlackPawns />
    //                 break;
    //             case '7c':
    //                 isPieceDark = true
    //                 PieceDark = <BlackPawns />
    //                 break;
    //             case '7d':
    //                 isPieceDark = true
    //                 PieceDark = <BlackPawns />
    //                 break;
    //             case '7e':
    //                 isPieceDark = true
    //                 PieceDark = <BlackPawns />
    //                 break;
    //             case '7f':
    //                 isPieceDark = true
    //                 PieceDark = <BlackPawns />
    //                 break;
    //             case '7g':
    //                 isPieceDark = true
    //                 PieceDark = <BlackPawns />
    //                 break;
    //             case '7h':
    //                 isPieceDark = true
    //                 PieceDark = <BlackPawns />
    //                 break;
    //             default: isPieceDark = false
    //         }

    //         pieces[index].push({
    //             isPieceDark: isPieceDark,
    //             isPieceWhite: isPieceWhite,
    //             PieceDark: PieceDark,
    //             PieceWhite: PieceWhite,
    //             x: elH,
    //             y: elV,
    //         })
    //     }
    //     )
    // });
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
        <WhiteHorseSymbol />
        {board}
        <WhiteHorse x="150" y="250" width="100" height="100" />
        {/* <Blacking />
            <BlackBishop />

            <BlackRook />
            <BlackHorse />
            <BlackQueen />
            <BlackPawns />
            <WhiteBishop />
            <WhitePawns />
            <WhiteKing />
            <WhiteQueen />
            <WhiteHorse />
            <WhiteRook /> */}
        {/* <WhiteRook /> */}
    </svg >
}

export { ChessDesk }