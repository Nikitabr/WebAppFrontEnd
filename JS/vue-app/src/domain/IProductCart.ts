import type {IProduct} from "@/domain/IProduct";
import type { IPc } from "./IPc";
import type { IService } from "./IService";


export interface IProductCart {
    id: string,
    product?: IProduct,
    service?: IService,
    pc?: IPc,
    quantity: number
}