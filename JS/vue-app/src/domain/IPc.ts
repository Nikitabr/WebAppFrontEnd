import type { IFeedback } from "./IFeedback";
import type { IOrder } from "./IOrder";
import type { IProductInPc } from "./IProductInPc";

export interface IPc {
    id?: string,
    title: string,
    price: number,
    description: string,
    orders?: IOrder[],
    feedbacks?: IFeedback[],
    productInPcs?: IProductInPc[]
}