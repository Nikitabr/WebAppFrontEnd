import type { IPc } from "@/domain/IPc";
import httpCLient from "@/http-client";
import { BaseService } from "./BaseService";

export class PcService extends BaseService<IPc> {
    constructor() {
        super("pcs");
    }
}