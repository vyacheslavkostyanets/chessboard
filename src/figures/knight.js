import { WhiteKnight } from "./whiteknight";
import { BlackKnight } from "./blackknight"

export function Knight(props) {
    return props.side === "black" ? <BlackKnight {...props} /> : <WhiteKnight {...props} />
}