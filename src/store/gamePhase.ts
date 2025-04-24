import {atom} from 'recoil';

export type GamePhase = 'start' | 'waiting' | 'tap' | 'result';

export const gamePhaseState = atom<GamePhase>({
    key:"gamePhaseState",
    default:'start'
});