import { WhiteQueen } from "./whitequeen";
import { BlackQueen } from "./blackqueen"

export function Queen(props) {
    return props.side === "black" ? <BlackQueen {...props} /> : <WhiteQueen {...props} />
}