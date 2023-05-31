import type { ISpecificationType } from "@/domain/ISpecificationType";
import httpCLient from "@/http-client";
import { BaseService } from "./BaseService";

export class SpecificationTypeService extends BaseService<ISpecificationType> {
    constructor() {
        super("specificationtypes");
    }
}