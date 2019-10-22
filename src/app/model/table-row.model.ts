import { Team } from './team.model';

export class TableRow {
    team: Team;
    gamesPlayed : number;
    wins : number;
    ties : number;
    losses : number;
    suddenWins : number;
    backwardGoal : number;
    forwardGoal : number;
    goalDiff : number;
    points : number;
}
