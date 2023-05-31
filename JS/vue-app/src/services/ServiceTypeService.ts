import type { IServiceType } from "@/domain/IServiceType";
import httpCLient from "@/http-client";
import { BaseService } from "./BaseService";

export class ServiceTypeService extends BaseService<IServiceType> {
    constructor() {
        super("servicetypes");
    }
}