import { WhiteKing } from "./whiteKing";
import { BlackKing } from "./blackKing"

export function King(props) {
    return props.side === "black" ? <BlackKing {...props} /> : <WhiteKing {...props} />
}