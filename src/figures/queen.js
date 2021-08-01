import { WhiteQueen } from "./whiteQueen";
import { BlackQueen } from "./blackQueen"

export function Queen(props) {
    return props.side === "black" ? <BlackQueen {...props} /> : <WhiteQueen {...props} />
}