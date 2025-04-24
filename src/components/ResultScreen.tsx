import { motion } from 'framer-motion';
 
export function ResultScreen(){
    return <div>
        <motion.div className='min-h-72 w-92  p-8 rounded-2xl shadow-2xl bg-white/10 backdrop-blur-md border border-white/20 max-w-sm mx-auto space-y-4'>
            <h1 className='font-mono font-bold text-center mt-5 text-2xl '>⏱️ Your Reaction Time: </h1>
            <h1 className='font-mono font-bold text-center mt-5 text-2xl text-amber-200 '>100ms</h1>
            <HighScore/>
        </motion.div>
        <motion.div className='bg-white/10 rounded-2xl border border-white/20 mt-3 flex items-center p-4'>
        <h1 className='font-mono font-bold ml-6 text-2xl py-4 '>LeaderBoard:</h1>
        </motion.div>
    </div>
}


function HighScore(){
    return <div className='font-mono font-bold text-center mt-5 text-2xl text-amber-400'>
        🏆 New High Score!
    </div>
}