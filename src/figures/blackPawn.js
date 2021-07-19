import { motion } from "framer-motion"

export function BlackPawn(props) {
    return <motion.use
        animate={{ y: 100 }}
        transition={{ type: "spring", stiffness: 20 }}
        href="#black-pawns" {...props}></motion.use>
}
