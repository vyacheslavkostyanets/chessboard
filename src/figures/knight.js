import { WhiteKnight } from "./whiteKnight";
import { BlackKnight } from "./blackKnight"

export function Knight(props) {
    return props.side === "black" ? <BlackKnight {...props} /> : <WhiteKnight {...props} />
}