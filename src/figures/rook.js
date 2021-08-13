import { WhiteRook } from "./whiterook";
import { BlackRook } from "./blackrook"

export function Rook(props) {
    return props.side === "black" ? <BlackRook {...props} /> : <WhiteRook {...props} />
}