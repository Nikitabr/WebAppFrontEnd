import type { IPerson } from "@/domain/IPerson";
import httpCLient from "@/http-client";
import { BaseService } from "./BaseService";

export class PersonService extends BaseService<IPerson> {
    constructor() {
        super("persons");
    }
}
