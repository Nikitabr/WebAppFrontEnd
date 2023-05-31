import type { IFeedback } from "./IFeedback";
import type { IOrder } from "./IOrder";
import type { IProductInOrder } from "./IProductInOrder";
import type { IProductInPc } from "./IProductInPc";
import type { ISpecification } from "./ISpecification";
import type { ISpecificationType } from "./ISpecificationType";

export interface IProduct{
    id?: string,
    title: string,
    productTypeId: string,
    price: number,
    rating: number,
    quantity: number,
    picture: string,
    description: string,
    feedbacks?: IFeedback[],
    productInPcs?: IProductInPc[],
    specificationTypes?: ISpecificationType[],
    productInOrders?: IProductInOrder[]
}