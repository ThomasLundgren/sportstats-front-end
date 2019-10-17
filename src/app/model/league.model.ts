export class League {
    id: number;
    name: string;
    sportId: number;

    constructor(obj?: any) {
        Object.assign(this, obj);
    }

}
