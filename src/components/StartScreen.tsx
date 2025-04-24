import { motion} from 'framer-motion';
import {gamePhaseState} from '../store/gamePhase';
import {useSetRecoilState} from 'recoil';

export function StartScreen(){

    const setGamePhase = useSetRecoilState(gamePhaseState);

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
            damping: 8
          }}
          exit={{opacity: 0, y: 30 }}
          className="flex flex-col items-center"
        >
          <h1 className="text-4xl font-bold mb-6">Welcome to Re-Flex ⚡</h1>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleStart}
            className="bg-blue-600 px-6 py-3 text-lg rounded-lg shadow-md hover:bg-blue-700"
          >
            Start Game
          </motion.button>
        </motion.div>
      
      );

}