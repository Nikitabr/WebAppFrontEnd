import type { IOrder } from "./IOrder";

export interface IPaymentType {
    id?: string,
    paymentName: string,
    description?: string,
    orders?: IOrder[]
}