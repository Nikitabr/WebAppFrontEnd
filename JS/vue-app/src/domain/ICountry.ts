import type { IShippingInfo } from "./IShippingInfo";

export interface ICountry {
    id?: string,
    countryName: string,
    shippingInfos?: IShippingInfo[]
}