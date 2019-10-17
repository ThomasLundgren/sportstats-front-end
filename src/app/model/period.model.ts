import { Goal } from './goal.model';

export class Period {
    id: number;
    gameId: number;
    overtime: boolean;
    goals: Goal[];
}
