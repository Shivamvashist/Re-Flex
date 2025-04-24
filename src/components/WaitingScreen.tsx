import { motion, scale } from "framer-motion"
import { Eye } from "./Eye"


export function WaitingScreen(){

    return <div>
        <motion.div className="text-4xl text-bold font-mono mb-6 flex flex-row">
            Wait for it... <Eye/><Eye/>
        </motion.div>
        
    </div>

}