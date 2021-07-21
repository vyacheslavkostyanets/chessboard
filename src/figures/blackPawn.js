import { motion } from "framer-motion"

export function BlackPawn(props) {
    return <use
        // animate={{ y: 100 }}
        // transition={{ type: "spring", stiffness: 20 }}
        href="#black-pawns"

        {...props}></use>
}
