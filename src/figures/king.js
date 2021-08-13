import { WhiteKing } from "./whiteking";
import { BlackKing } from "./blackking"

export function King(props) {
    return props.side === "black" ? <BlackKing {...props} /> : <WhiteKing {...props} />
}