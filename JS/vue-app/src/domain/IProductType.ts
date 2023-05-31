import type { IProduct } from "./IProduct";

export interface IProductType {
    id?: string,
    title: string,
    products?: IProduct[]
}