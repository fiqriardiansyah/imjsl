import { BaseResponse, Brand, Product, ProductDetail } from "@/models";
import { AUTHORIZATION, BASE_URL, DEFAULT_ERROR_MESSAGE, DEFAULT_PAGE } from "@/utils";

export interface SearchQuery {
    query?: any;
    brand?: any;
    page?: any;
}
export interface SearchPaging {
    product_list: Product[];
    total_data: number;
    total_page: number;
    current_page: number;
}

export const getProduct = async (slug: any): Promise<BaseResponse<ProductDetail>> => {
    try {
        const res = await fetch(`${BASE_URL}/imjsl/get-product-detail/${slug}`, {
            headers: {
                Authorization: AUTHORIZATION,
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
        const res = await fetch(`${BASE_URL}/imjsl/get-brand`, {
            headers: {
                Authorization: AUTHORIZATION,
            },
        });
        const data = await res.json();
        return data;
    } catch (e: any) {
        throw new Error(e?.message || DEFAULT_ERROR_MESSAGE);
    }
};

export const search = async ({ query, brand, page }: SearchQuery): Promise<BaseResponse<SearchPaging>> => {
    try {
        const res = await fetch(`${BASE_URL}/imjsl/search?brand_id=${brand || ""}&query=${query || ""}&page=${page || DEFAULT_PAGE}`, {
            headers: {
                Authorization: AUTHORIZATION,
            },
        });
        const data = await res.json();
        return data;
    } catch (e: any) {
        throw new Error(e?.message || DEFAULT_ERROR_MESSAGE);
    }
};
