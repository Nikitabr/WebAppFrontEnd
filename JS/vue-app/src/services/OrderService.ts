import type { IOrder } from "@/domain/IOrder";
import type { IProduct } from "@/domain/IProduct";
import type { IServiceResult } from "./IServiceResult";
import type { AxiosError } from "axios";
import httpCLient from "@/http-client";
import { BaseService } from "./BaseService";

export class OrderService extends BaseService<IOrder> {
    constructor() {
        super("orders");
    }

    async addOrder(order: IOrder, products: String[]): Promise<IServiceResult<IOrder>> {
        console.log("add");

        let response;
        try {
            response = await httpCLient.post(`/${"orders"}`, 
            {
                order,
                products  
            }, 
                {
                    headers: {
                        "Authorization": "bearer " + this.identityStore.$state.jwt?.token
                    }
                }
            );
        } catch (e) {
            let res = {
                status: (e as AxiosError).response!.status,
                errorMsg: (e as AxiosError).response!.data.error,
            }
            console.log(res);
            return res;
        }

        return { status: response.status,
        data: response.data };
    }
}