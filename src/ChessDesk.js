import React from 'react'
import { Rectangle } from './Rectangle'
import './App.css';

function ChessDesk() {
    const board = []
    const verticalСhessPieces = ['1', '2', '3', '4', '5', '6', '7', '8']
    const horizontalСhessPieces = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
    for (let v = verticalСhessPieces.length - 1; v >= 0; v--) {
        for (let h = 0; h < horizontalСhessPieces.length; h++) {
            const number = v + h + 2;
            if (number % 2 === 0) {
                board.push(<div className="black">{[verticalСhessPieces[v] + horizontalСhessPieces[h]]} <Rectangle /></div>)
            }
            else {
                board.push(<div className="white">{[verticalСhessPieces[v] + horizontalСhessPieces[h]]} <Rectangle /></div>)
            }
        }
    }
    console.log(board)

    return <div className="board">

        {board}

    </div>




}

export { ChessDesk }