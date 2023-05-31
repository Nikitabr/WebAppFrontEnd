import type { IProductInPc } from "@/domain/IProductInPc";
import httpCLient from "@/http-client";
import { BaseService } from "./BaseService";

export class ProductInPcService extends BaseService<IProductInPc> {
    constructor() {
        super("productinpcs");
    }
}