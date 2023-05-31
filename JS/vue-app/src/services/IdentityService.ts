import type { IJWTResponse } from "@/domain/IJWTResponse";
import httpCLient from "@/http-client";
import { useIdentityStore } from "@/stores/identity";
import type { AxiosError } from "axios";
import { data } from "jquery";
import type { IServiceResult } from "./IServiceResult";

export class IdentityService {
    identityStore = useIdentityStore();

    async login(email: string, password: string): Promise<IServiceResult<IJWTResponse>> {
        try {
            let loginInfo = {
                email,
                password
            }
            console.log(email + password);
            let response = await httpCLient.post("/identity/account/login", loginInfo);
            console.log("Logged in");
            console.log(response);
            return {
                status: response.status,
                data: response.data as IJWTResponse
            };

        } catch (e) {

            console.log(e);
            let response = {
                status: (e as AxiosError).response!.status, 
                errorMsg: (e as AxiosError).response!.data.error,
            }

            console.log(response);

            return response;
        }
    }

    async logout(): Promise<IServiceResult<IJWTResponse>> {
        try {
            return {
                status: 200,
            };

        } catch (e) {

            console.log(e);
            let response = {
                status: (e as AxiosError).response!.status, 
                errorMsg: (e as AxiosError).response!.data.error,
            }

            console.log(response);

            return response;
        }
    }

    async register(firstname: string, lastname: string, email: string, password: string): Promise<IServiceResult<IJWTResponse>> {
        try {
            let registerInfo = {
                firstname,
                lastname,
                email,
                password
            }
            console.log(registerInfo);
            let response = await httpCLient.post("/identity/account/register", registerInfo);
            console.log(response);
            return {
                status: response.status,
                data: response.data as IJWTResponse
            };

        } catch (e) {

            console.log(e);
            let response = {
                status: (e as AxiosError).response!.status, 
                errorMsg: (e as AxiosError).response!.data.error,
            }

            console.log(response);

            return response;
        }
    }

    

    async refreshIdentity(): Promise<IServiceResult<IJWTResponse>> {
        try {
            console.log(this.identityStore.$state.jwt);

            let response = await httpCLient.post("/identity/account/refreshtoken",
                {
                    jwt: this.identityStore.$state.jwt?.token,
                    refreshToken: this.identityStore.$state.jwt?.refreshToken
                }
            );
            return {
                status: response.status,
                data: response.data as IJWTResponse
            };

        } catch (e) {
            let response = {
                status: (e as AxiosError).response!.status,
                errorMsg: (e as AxiosError).response!.data.error,
            }

            console.log(response);

            console.log((e as AxiosError).response);

            return response;
        }
    }
}