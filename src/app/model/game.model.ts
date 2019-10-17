import { Period } from './period.model';

export class Game {
    id: number;
    roundId: number;
    arenaId: number;
    homeTeamId: number;
    guestTeamId: number;
    gameDate: string;
    gameState: string;
    homeTeamGamePoints: number;
    guestTeamGamePoints: number;
    periods: Period[];
}
