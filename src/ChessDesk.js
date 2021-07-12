import React from 'react'
import { Rectangle } from './Rectangle'
import { Blackbishop } from './figures/blackbishop'

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



import './App.css';



function ChessDesk() {
    const pieces = [];
    const board = [];
    let xFigureLocation = 0;
    let yFigureLocation = 0;
    const verticalСhessPieces = ['1', '2', '3', '4', '5', '6', '7', '8'];
    const horizontalСhessPieces = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];


    verticalСhessPieces.forEach((elV, index) => {
        pieces.push([]);
        horizontalСhessPieces.forEach((elH, i) =>



            pieces[index].push({
                isPieces: false,
                namePieces: String,
                x: elH,
                y: elV,
            })
        )
    });



    console.log(pieces, 'pieces')
    for (let v = verticalСhessPieces.length - 1; v >= 0; v--) {
        for (let h = 0; h < horizontalСhessPieces.length; h++) {
            const number = v + h + 2;
            xFigureLocation = horizontalСhessPieces.indexOf(horizontalСhessPieces[h]) * 100;
            yFigureLocation = verticalСhessPieces[v] * 100;

            if (number % 2 === 0) {
                board.push(<Rectangle color="#769656" xFigureLocation={xFigureLocation} yFigureLocation={yFigureLocation} key={verticalСhessPieces[v] + horizontalСhessPieces[h]} />)
            }
            else {
                board.push(<Rectangle color="#EEEED2" xFigureLocation={xFigureLocation} yFigureLocation={yFigureLocation} key={verticalСhessPieces[v] + horizontalСhessPieces[h]} />)
            }
            // for (let p = 0; p < 8; p++) {
            //     if (verticalСhessPieces[h] + horizontalСhessPieces[h] === verticalСhessPieces[p] + horizontalСhessPieces[0]) {
            //         console.log(verticalСhessPieces[p] + horizontalСhessPieces[0])
            //     }
            // }

        }
    }

    console.log(board[0].key)
    console.log(board)

    return <svg width={xFigureLocation + 100} height={xFigureLocation + 200} version="1.1">
        {board}
        <Blacking />
        <Blackbishop />
        <WhiteBishop />
        <BlackRook />
        <BlackHorse />
        <BlackQueen />
        <BlackPawns />
        <WhitePawns />
        <WhiteKing />
        <WhiteQueen />
        <WhiteHorse />
        {/* <WhiteRook /> */}


    </svg >




}

export { ChessDesk }