import axios from "axios";

export const httpCLient = axios.create({
    baseURL: "https://localhost:7254/api/v1.0",
    headers: {
        "Content-type": "application/json"
    }
});

export default httpCLient;
