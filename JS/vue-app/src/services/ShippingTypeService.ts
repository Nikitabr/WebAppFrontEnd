import type { IShippingType } from "@/domain/IShippingType";
import httpCLient from "@/http-client";
import { BaseService } from "./BaseService";

export class ShippingTypeService extends BaseService<IShippingType> {
    constructor() {
        super("shippingtypes");
    }
}