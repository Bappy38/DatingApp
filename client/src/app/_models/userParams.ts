import { User } from "./user";

export class UserParams {
    gender: string;
    minAge: number = 18;
    maxAge: number = 99;
    pageNumber: number = 1;
    pageSize: number = 10;
    orderBy: string = 'lastActive';

    constructor (user: User) {
        this.gender = (user.gender === 'male')? 'female': 'male';
    }
}