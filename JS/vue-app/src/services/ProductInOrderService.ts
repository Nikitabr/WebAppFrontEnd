import type { IProductInOrder } from "@/domain/IProductInOrder";
import httpCLient from "@/http-client";
import { BaseService } from "./BaseService";

export class ProductInOrderService extends BaseService<IProductInOrder> {
    constructor() {
        super("productinorder");
    }
}