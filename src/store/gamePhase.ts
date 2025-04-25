import {atom} from 'recoil';
import { recoilPersist } from 'recoil-persist';

export type GamePhase = 'start' | 'waiting' | 'tap' | 'result';

export const gamePhaseState = atom<GamePhase>({
    key:"gamePhaseState",
    default:'start'
});

export const timerStartState = atom<number|null>({
    key:"timerStartState",
    default:null
})

export const timerEndState = atom<number|null>({
    key:"timerEndState",
    default:null
})

const { persistAtom } = recoilPersist({
    key:"leaderboard",
    storage:localStorage
})

export const leaderBoardState = atom<number[]>({
    key:"resultState",
    default:[],
    effects_UNSTABLE:[persistAtom],
});