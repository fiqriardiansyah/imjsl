export const DEFAULT_ERROR_MESSAGE = "Ooops something wrong!";
export const INTERNAL_SERVER_ERROR = "Internal Server Error";

export const toBase64 = (val: any) =>
    typeof window === "undefined" ? Buffer.from(typeof val === "object" ? "" : val).toString("base64") : window.btoa(val);
