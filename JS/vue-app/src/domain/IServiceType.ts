import type { IService } from "./IService";

export interface IServiceType{
    id?: string,
    title: string,
    services?: IService[]
}