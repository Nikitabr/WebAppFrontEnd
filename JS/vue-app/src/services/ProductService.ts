import type { IProduct } from "@/domain/IProduct";
import httpCLient from "@/http-client";
import type { AxiosError } from "axios";
import { BaseService } from "./BaseService";

export class ProductService extends BaseService<IProduct> {
    constructor() {
        super("products");
    }

    async minusOne(product: IProduct){
        console.log("add");

        product.quantity -= 1;

        let response;
        try {
            response = await httpCLient.put(`/products/${product.id}`, product,
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

        return { status: response.status };
    }
}