import { Guid } from "guid-typescript";

export class Product {
    constructor(public id: Guid,
        public name: string,
        public price: number,
        public quantity: number,
        public categoriyIds: Guid[]){}
}