import { WhiteBishop } from './whiteBishop'
import { WhiteRook } from './whiteRook'
import { WhiteKnight } from './whiteKnight'
import { WhiteQueen } from './whiteQueen'
import { WhiteKing } from './whiteKing'

function getAllPiecesWhite() {
    return {
        a1: <WhiteRook />,
        b1: <WhiteKnight />,
        c1: <WhiteBishop />,
        d1: <WhiteKing />,
        e1: <WhiteQueen />,
        f1: <WhiteBishop />,
        g1: <WhiteKnight />,
        h1: <WhiteRook />,
    }
}

export { getAllPiecesWhite }