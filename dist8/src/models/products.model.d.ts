import { Entity } from '@loopback/repository';
export declare class Products extends Entity {
    id?: number;
    productname: string;
    price: number;
    getId(): number | undefined;
}
