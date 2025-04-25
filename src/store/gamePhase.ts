import {atom} from 'recoil';

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

// export const resultState = atom<number|null>({
//     key:"resultState",
//     default:null
// })