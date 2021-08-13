import { WhitePawn } from "./whitepawn";
import { BlackPawn } from "./blackpawn"

export function Pawn(props) {
    return props.side === "black" ? <BlackPawn {...props} /> : <WhitePawn {...props} />
}