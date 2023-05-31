import type { IProductType } from "@/domain/IProductType";
import httpCLient from "@/http-client";
import { BaseService } from "./BaseService";

export class ProductTypeService extends BaseService<IProductType> {
    constructor() {
        super("producttypes");
    }
}