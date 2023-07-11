export interface PageProps {
    params?: { [key: string]: string };
    searchParams?: { [key: string]: string | string[] | undefined };
}

export interface BaseResponse<T = any> {
    data: T;
    status: number;
    message: string;
}

export interface Brand {
    brand_id: number;
    brand_name: string;
}

export interface Product {
    brand_name: string;
    product_images?: string[];
    product_name: string;
    slug: string;
}

export interface ProductDetail {
    slug?: string;
    brand_name?: string;
    category_name?: string;
    product_name?: string;
    product_code?: string;
    product_model?: string;
    product_description?: string;
    product_images?: string[];
}
