import { Rook } from "./rook";
import { Knight } from "./knight";
import { Pawn } from "./pawn";
import { Bishop } from "./bishop";
import { Queen } from "./queen";
import { King } from "./king";



export function Piece(props) {
    // console.log(props.type, "props.type")
    // for (let i = 0; i < 8; i++) {
    //     for (let j = 0; j < 8; j++) {
    //         let cellX = x[j];
    //         let cellY = y[i];
    //         let posX = j * 100;
    //         let posY = i * 100;

    //         let PieceCell = cellX + cellY;
    //         console.log(PieceCell, "number")
    //         console.log(cellX, "cellX")
    //         console.log(cellY, "cellY")
    //         console.log(posX, "posX")
    //         console.log(posY, "posY")
    // switch(){

    // }

    if (props.type === "knight") {
        return <Knight {...props} />
    }
    if (props.type === "rook") {
        return <Rook {...props} />
    }
    if (props.type === "bishop") {
        return <Bishop {...props} />
    }
    if (props.type === "queen") {
        return <Queen {...props} />
    }
    if (props.type === "king") {
        return <King {...props} />
    }
    if (props.type === "pawn") {
        return <Pawn {...props} />
    }
    //         if (PieceCell === props.p) {
    //             return <Knight {...props} x={posX} y={posY} />
    //         }

    //         if (PieceCell === props.p) {
    //             return <Rook {...props} x={posX} y={posY} />
    //         }
    //         if (PieceCell === props.p) {
    //             return <Knight {...props} x={posX} y={posY} />
    //         }

    //     }
    // }


}