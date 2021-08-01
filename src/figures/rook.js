import { WhiteRook } from "./whiteRook";
import { BlackRook } from "./blackRook"

export function Rook(props) {
    return props.side === "black" ? <BlackRook {...props} /> : <WhiteRook {...props} />
}