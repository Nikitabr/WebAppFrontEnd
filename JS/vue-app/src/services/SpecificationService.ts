import type { ISpecification } from "@/domain/ISpecification";
import httpCLient from "@/http-client";
import { BaseService } from "./BaseService";

export class SpecificationService extends BaseService<ISpecification> {
    constructor() {
        super("specifications");
    }
}