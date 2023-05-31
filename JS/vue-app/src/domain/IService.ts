import type { IOrder } from "./IOrder";

export interface IService{
    id?: string,
    appUserId: string,
    serviceTypeId: string,
    description: string,
    orders?: IOrder[]
}