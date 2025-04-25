import { motion } from "framer-motion"
import { Eye } from "./Eye"
import { gamePhaseState,timerStartState } from "../store/gamePhase";
import { useSetRecoilState } from "recoil";
import { useEffect } from "react";
import waitingAudio1 from '../assets/audios/waiting.wav';
import tapNow from '../assets/audios/tapNow.mp3';




export function WaitingScreen(){

    const waitingAudio = new Audio(waitingAudio1);
    const tapNowAudio = new Audio(tapNow);

    const setGamePhase = useSetRecoilState(gamePhaseState);
    const setTimerStart = useSetRecoilState(timerStartState);
    const switchTime = Math.floor((4)*Math.random()+2)*1000;

    useEffect(()=>{
        
        waitingAudio.play()

        const timeoutId = setTimeout(()=>{
            const startTime = performance.now()
            setGamePhase('tap');
            setTimerStart(startTime);
            tapNowAudio.play();
            waitingAudio.pause();
            waitingAudio.currentTime = 0;
            console.log(startTime)
        },switchTime);

        return()=>{clearTimeout(timeoutId)};
    });

    
    

    return <div>
        <motion.div className="text-4xl text-bold font-mono mb-6 flex flex-row">
            Wait for it... <Eye/><Eye/>
        </motion.div>
        
    </div>

}