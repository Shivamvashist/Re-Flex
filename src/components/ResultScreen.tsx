import { motion } from 'framer-motion';
import resultAudio1 from '../assets/audios/result.wav'
import clickAudio1 from '../assets/audios/click.wav'
 
export function ResultScreen(){

    const resultAudio = new Audio(resultAudio1)
    const clickAudio = new Audio(clickAudio1)

    resultAudio.play()

    function playClickSound() {
        const clone = clickAudio.cloneNode() as HTMLAudioElement;
        clone.play(); //Fo short audios
        // clickAudio.currentTime = 0; // Mostly with long audios
        // clickAudio.play(); 
        //
      }

    return <div>
        <motion.div initial={{opacity:0,scale:0}} animate={{opacity:1,scale:1}} className='w-[22rem] p-8 rounded-3xl shadow-[0_0_20px_rgba(255,255,255,0.1)] bg-white/10 backdrop-blur-md border border-white/20 max-w-sm mx-auto space-y-4 flex flex-col items-center'>
            <h1 className='font-mono font-bold text-center mt-5 text-2xl '>⏱️ Your Reaction Time: </h1>
            <motion.h1 initial={{opacity:0,scale:0}} animate={{opacity:1,scale:1}}  className='font-mono font-bold text-center  text-2xl text-amber-200 '>100ms</motion.h1>
            <HighScore/>
            <motion.button initial={{opacity:0,scale:0}} animate={{opacity:1,scale:1}} whileHover={{scale:1.1}} whileTap={{scale:0.9}} onClick={()=>{playClickSound()}} className='bg-blue-600 text-lg font-bold px-6 py-3 w-48 rounded-2xl'>Replay</motion.button>
        </motion.div>
        <motion.div className='bg-white/10 rounded-3xl shadow-[0_0_10px_rgba(255,255,255,0.1)] border border-white/20 mt-3 flex items-center p-4'>
        <h1 className='font-mono font-bold ml-6 text-2xl py-4 '>LeaderBoard:</h1>
        </motion.div>
    </div>
}


function HighScore(){
    return <motion.div initial={{opacity:0,scale:0}} animate={{opacity:1,scale:[1.2,1]}} transition={{ease:"anticipate", duration:0.5}} className='font-mono font-bold text-center  text-2xl text-amber-400'>
        🏆 New High Score!
    </motion.div>
}