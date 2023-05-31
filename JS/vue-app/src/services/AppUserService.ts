import type { IAppUser } from "@/domain/IAppUser";
import httpCLient from "@/http-client";
import { BaseService } from "./BaseService";
import type { IServiceResult } from "./IServiceResult";

export class AppUserService extends BaseService<IAppUser> {
    constructor() {
        super("appUsers");
    }

    async getById(userId: string): Promise<IServiceResult<IAppUser>> {
        let response = await httpCLient.get(`/identity/Account/GetUserById/${userId}`);
        return {
            status: response.status,
            data: response.data as IAppUser
        };
    }
}