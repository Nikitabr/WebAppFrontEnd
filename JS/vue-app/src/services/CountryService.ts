import type { ICountry } from "@/domain/ICountry";
import httpCLient from "@/http-client";
import { BaseService } from "./BaseService";

export class CountryService extends BaseService<ICountry> {
    constructor() {
        super("countries");
    }
}