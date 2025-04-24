import {motion} from 'framer-motion';

export function Eye(){

    return <div className='h-8 w-10 flex justify-center items-center bg-white rounded-full'>

        <motion.div
        className='h-4 w-4 rounded-full bg-sky-200 border-6 border-black'
        initial={{
            x:0,
            y:0
        }}
        animate={{
            x:[6,-6,6],
            
        }}
        transition={{
            repeat:Infinity,
            ease:"anticipate",
            duration:1
        }}
        />

    </div>
    
}