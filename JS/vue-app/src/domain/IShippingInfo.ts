import type { IOrder } from "./IOrder";

export interface IShippingInfo{
    id?: string,
    shippingTypeId: string,
    countryId: string,
    city: string,
    address1: string,
    address2: string,
    postalCode: string,
    phoneNumber: string,
    MailAddress: string,
    orders?: IOrder[]
}