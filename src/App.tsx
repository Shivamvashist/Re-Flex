import { useRecoilValue } from 'recoil';
import { gamePhaseState } from './store/gamePhase';
import { StartScreen } from './components/StartScreen';
import { WaitingScreen } from './components/WaitingScreen';
import { TapNowScreen } from './components/TapNowScreen';
import { ResultScreen } from './components/ResultScreen';
import { AnimatePresence } from 'framer-motion';

function App() {

  const phase = useRecoilValue(gamePhaseState);


  return <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
    
    <AnimatePresence mode='wait'>
      {phase === 'start' && <ResultScreen key={'start'}/>}
      {phase === 'waiting' && <WaitingScreen key={'waiting'}/>}
      {phase === 'tap' && <TapNowScreen/>}
      {phase === 'result' && <ResultScreen/>}
    </AnimatePresence>
  
  </div>
}

export default App
