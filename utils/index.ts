export const DEFAULT_ERROR_MESSAGE = "Ooops something wrong!";
export const INTERNAL_SERVER_ERROR = "Internal Server Error";
export const BASE_URL = process.env.NODE_ENV === "development" ? "https://api-dev.autoloka.id/api/v1" : "https://api.autoloka.id/api/v1";
export const AUTHORIZATION = "gg7fioPFP2gqkVF0LbAHjOOsBEjn0mL0jA";

export const toBase64 = (val: any) =>
    typeof window === "undefined" ? Buffer.from(typeof val === "object" ? "" : val).toString("base64") : window.btoa(val);
