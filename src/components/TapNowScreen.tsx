import { motion } from 'framer-motion' ;
import { gamePhaseState,timerEndState } from '../store/gamePhase';
import { useSetRecoilState } from 'recoil';
import tapAudio1 from '../assets/audios/tapped.wav';

export function TapNowScreen(){

    const tapAudio = new Audio(tapAudio1);

    const setGamePhase = useSetRecoilState(gamePhaseState);
    const setTimerEnd = useSetRecoilState(timerEndState);

    function reflexClick(){
        tapAudio.play()
        const endTime = performance.now();
        setTimerEnd(endTime);
        setGamePhase('result');
    }

    return <div onClick={reflexClick} className="h-[100vh] w-[100vw] bg-amber-300 flex items-center justify-center">
        <motion.div className='text-4xl font-bold font-mono ' exit={{scale:0}}>
            Click NOW!🖱️
        </motion.div>
    </div>

}