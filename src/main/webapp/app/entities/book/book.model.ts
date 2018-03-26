import { BaseEntity } from '../../shared';
import {Author} from "../author/author.model";

export class Book implements BaseEntity {
    constructor(
        public id?: number,
        public title?: string,
        public publicationDate?: Date,
        public author?: Author,
        public description?: string,
        public price?: number
    ) {
    }
}
