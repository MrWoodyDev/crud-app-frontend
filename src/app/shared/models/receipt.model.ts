import { Guid } from "guid-typescript";

export class Receipt {
    constructor(public id: Guid, 
        public productIds: Guid[]) {}
}