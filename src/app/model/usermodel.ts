import { publishFacade } from "@angular/compiler";

export class User {
    constructor(
        public name:string,
        public email:string,
        public _id?:string,
        public type?:string,
        public status?:string,
        public password?:string
    ){}
}