import { motion} from 'framer-motion';
import {gamePhaseState} from '../store/gamePhase';
import {useSetRecoilState} from 'recoil';
import clickAudio1 from '../assets/audios/click.wav';

export function StartScreen(){

    const setGamePhase = useSetRecoilState(gamePhaseState);

    const clickAudio = new Audio(clickAudio1)

    function playClickSound(){
      const clickClone = clickAudio.cloneNode() as HTMLAudioElement;
      clickClone.play();
    }

    function handleStart(){
        setGamePhase('waiting');
    }

    return (

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 60,
            damping: 8,
            delay:0.2
          }}
          exit={{opacity: 0, y: 30 }}
          className="flex flex-col items-center"
        >
          <h1 className="text-4xl font-bold mb-6">Welcome to Re-Flex ⚡</h1>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onMouseDown={playClickSound}
            onClick={()=>{handleStart()}}
            className="bg-blue-600 px-6 py-3 text-lg rounded-lg shadow-md hover:bg-blue-700"
          >
            Start Game
          </motion.button>
        </motion.div>
      
      );

}