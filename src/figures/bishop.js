import { WhiteBishop } from "./whiteBishop";
import { BlackBishop } from "./blackBishop"

export function Bishop(props) {
    return props.side === "black" ? <BlackBishop {...props} /> : <WhiteBishop {...props} />
}