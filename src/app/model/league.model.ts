import { Season } from './season.model';

export class League {
    id: number;
    name: string;
    sportId: number;
    seasons: Season[];
}
