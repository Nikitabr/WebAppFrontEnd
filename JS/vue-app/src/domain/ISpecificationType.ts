import type { ISpecification } from "./ISpecification";

export interface ISpecificationType{
    id?: string,
    title: string,
    productId: string,
    specifications?: ISpecification[]
}