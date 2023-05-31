import type { IInvoice } from "@/domain/IInvoice";
import httpCLient from "@/http-client";
import { BaseService } from "./BaseService";

export class InvoiceService extends BaseService<IInvoice> {
    constructor() {
        super("invoices");
    }
}