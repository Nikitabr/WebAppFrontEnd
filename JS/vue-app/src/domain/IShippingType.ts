import type { IShippingInfo } from "./IShippingInfo";

export interface IShippingType{
    id?: string,
    title: string,
    shippingInfos?: IShippingInfo[]
}