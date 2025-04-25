import { motion } from 'framer-motion';
import resultAudio1 from '../assets/audios/result.wav'
import clickAudio1 from '../assets/audios/click.wav'
import { useRecoilValue,useSetRecoilState, useRecoilState } from 'recoil';
import { gamePhaseState,timerStartState,timerEndState,leaderBoardState } from '../store/gamePhase';
import { useEffect, useState } from 'react';


export function ResultScreen(){

    const resultAudio = new Audio(resultAudio1)
    const clickAudio = new Audio(clickAudio1)

    const [isHighest,setIsHighest] = useState(false);

    const setGamePhase = useSetRecoilState(gamePhaseState);
    const endTime = useRecoilValue(timerEndState);
    const startTime = useRecoilValue(timerStartState);

    const [leaderBoard,setLeaderBoard] = useRecoilState(leaderBoardState);

    function playClickSound() {
        const clone = clickAudio.cloneNode() as HTMLAudioElement;
        clone.play(); //For short audios
        // clickAudio.currentTime = 0; // Mostly with long audios
        // clickAudio.play(); 
        //
    }
    
    const reactionTime= (endTime ?? 0)-(startTime ?? 0);

    

    useEffect(()=>{
        if (reactionTime < leaderBoard[0] || leaderBoard[0]===undefined ){
            setIsHighest(true);
            resultAudio.play()
        }
        const updated = [...leaderBoard,reactionTime];
        const top10 = updated.sort((a,b)=>a-b).slice(0,10);
        setLeaderBoard(top10);
    },[reactionTime])

    function replayGame(){
        playClickSound();
        setGamePhase('start');
        // const updated = [...leaderBoard,reactionTime]
        // const top10 = updated.sort((a,b)=>(a-b)).slice(0,10);
        // setLeaderBoard(top10);
    }
    function resetGame(){
        playClickSound();
        localStorage.clear();
        setLeaderBoard([]);
    }

    return <div>
        <motion.div initial={{opacity:0,scale:0}} animate={{opacity:1,scale:1}} className='min-w-[22rem] p-8 rounded-3xl shadow-[0_0_20px_rgba(255,255,255,0.1)] bg-white/10 backdrop-blur-md border border-white/20 max-w-sm mx-auto space-y-4 flex flex-col items-center'>
            <h1 className='font-mono font-bold text-center mt-5 text-2xl '>⏱️ Your Reaction Time: </h1>
            <motion.h1 initial={{opacity:0,scale:0}} animate={{opacity:1,scale:1}}  className='font-mono font-bold text-center  text-2xl text-amber-200 '>{reactionTime}ms</motion.h1>
            {isHighest && <HighScore/>}
            <motion.button 
            initial={{opacity:0,scale:0}} 
            animate={{opacity:1,scale:1}} 
            whileHover={{scale:1.1}} 
            whileTap={{scale:0.9}}
            onClick={replayGame}
            className='bg-blue-600 text-lg font-bold px-6 py-3 w-48 rounded-2xl'
            >
                Replay
            </motion.button>
            <motion.button 
            initial={{opacity:0,scale:0}} 
            animate={{opacity:1,scale:1}} 
            whileHover={{scale:1.1}} 
            whileTap={{scale:0.9}}
            onClick={resetGame}
            className='bg-gray-600 text-lg font-bold px-6 py-3 w-48 rounded-2xl'
            >
                Reset
            </motion.button>
        </motion.div>
        <motion.div className='flex-col bg-white/10 rounded-3xl shadow-[0_0_10px_rgba(255,255,255,0.1)] border border-white/20 mt-3 flex items-center p-4'>
        <h1 className='font-mono font-bold ml-6 text-2xl py-4 '>LeaderBoard:</h1>
        <ul className='gap-2'>
               {leaderBoard.slice(0,3).map((score,index)=>(
                <li key={`${score}-${index}`} className='text-2xl font-mono text-amber-200'>
                #{index+1}:{score}ms
                </li>))}
        </ul>
        </motion.div>
    </div>
}


function HighScore(){
    return <motion.div initial={{opacity:0,scale:0}} animate={{opacity:1,scale:[1.2,1]}} transition={{ease:"anticipate", duration:0.5}} className='font-mono font-bold text-center  text-2xl text-amber-400'>
        🏆 New High Score!!!
    </motion.div>
}