import type { IInvoice } from "./IInvoice";
import type { IProductInOrder } from "./IProductInOrder";
import type { IShippingInfo } from "./IShippingInfo";

export interface IOrder{
    id?: string,
    appUserId: string,
    paymentTypeId: string,
    shippingInfoId: string,
    price?: number,
    description: string,
    invoices?: IInvoice[],
    productInOrders?:  IProductInOrder[]

}