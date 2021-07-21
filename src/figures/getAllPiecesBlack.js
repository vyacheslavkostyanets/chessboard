import { BlackBishop } from './blackBishop'
import { BlacKing } from './blackKing'
import { BlackRook } from './blackRook'
import { BlackKnight } from './blackKnight'
import { BlackQueen } from './blackQueen'

function getAllPiecesBlack() {
    return {
        a8: <BlackRook />,
        b8: <BlackKnight />,
        c8: <BlackBishop />,
        d8: <BlacKing />,
        e8: <BlackQueen />,
        f8: <BlackBishop />,
        g8: <BlackKnight />,
        h8: <BlackRook />,
    }
}

export { getAllPiecesBlack }