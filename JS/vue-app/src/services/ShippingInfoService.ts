import type { IShippingInfo } from "@/domain/IShippingInfo";
import httpCLient from "@/http-client";
import { BaseService } from "./BaseService";

export class ShippingInfoService extends BaseService<IShippingInfo> {
    constructor() {
        super("shippinginfos");
    }
}