import { BaseEntity } from './../../shared';

export class Author implements BaseEntity {
    constructor(
        public id?: number,
        public lastName?: string,
        public firstName?: string,
        public age?: number,
        public birthDate?: Date
    ) {
    }
}
