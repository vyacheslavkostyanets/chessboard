import { WhiteBishop } from "./whitebishop";
import { BlackBishop } from "./blackbishop"

export function Bishop(props) {
    return props.side === "black" ? <BlackBishop {...props} /> : <WhiteBishop {...props} />
}