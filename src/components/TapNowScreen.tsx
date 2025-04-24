import { motion } from 'framer-motion' ;

export function TapNowScreen(){
    
    return <div className="h-[100vh] w-[100vw] bg-amber-300 flex items-center justify-center">
        <motion.div className='text-4xl font-bold font-mono ' exit={{scale:0}}>
            Click NOW!🖱️
        </motion.div>
    </div>

}