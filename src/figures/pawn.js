import { WhitePawn } from "./whitePawn";
import { BlackPawn } from "./blackPawn"

export function Pawn(props) {
    return props.side === "black" ? <BlackPawn {...props} /> : <WhitePawn {...props} />
}