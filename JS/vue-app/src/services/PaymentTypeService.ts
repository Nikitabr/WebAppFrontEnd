import type { IPaymentType } from "@/domain/IPaymentType";
import httpCLient from "@/http-client";
import { BaseService } from "./BaseService";

export class PaymentTypeService extends BaseService<IPaymentType> {
    constructor() {
        super("paymenttypes");
    }
}