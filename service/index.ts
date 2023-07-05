import { BaseResponse, Brand, Product, ProductDetail } from "@/models";
import { DEFAULT_ERROR_MESSAGE } from "@/utils";

export const getProduct = async (slug: any): Promise<BaseResponse<ProductDetail>> => {
    try {
        const res = await fetch(`https://api-dev.autoloka.id/api/v1/imjsl/get-product-detail/${slug}`, {
            headers: {
                Authorization: "gg7fioPFP2gqkVF0LbAHjOOsBEjn0mL0jA",
            },
        });
        const data = await res.json();
        return data;
    } catch (e: any) {
        throw new Error(e?.message || DEFAULT_ERROR_MESSAGE);
    }
};

export const getBrand = async (): Promise<BaseResponse<Brand[]>> => {
    try {
        const res = await fetch("https://api-dev.autoloka.id/api/v1/imjsl/get-brand", {
            headers: {
                Authorization: "gg7fioPFP2gqkVF0LbAHjOOsBEjn0mL0jA",
            },
        });
        const data = await res.json();
        return data;
    } catch (e: any) {
        throw new Error(e?.message || DEFAULT_ERROR_MESSAGE);
    }
};

export const search = async (query: any, brand: any): Promise<BaseResponse<{ product_list: Product[] }>> => {
    try {
        const res = await fetch(`https://api-dev.autoloka.id/api/v1/imjsl/search?brand_id=${brand || ""}&query=${query || ""}`, {
            headers: {
                Authorization: "gg7fioPFP2gqkVF0LbAHjOOsBEjn0mL0jA",
            },
        });

        const data = await res.json();
        return data;
    } catch (e: any) {
        throw new Error(e?.message || DEFAULT_ERROR_MESSAGE);
    }
};
