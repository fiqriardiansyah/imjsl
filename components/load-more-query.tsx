"use client";

import { PageProps, Product } from "@/models";
import { SearchPaging, SearchQuery, search } from "@/service";
import { ReactNode, useState } from "react";
import { UseMutationResult, useMutation } from "react-query";

interface LoadMoreQueryProps extends PageProps {
    children: (fetcher: UseMutationResult<SearchPaging, unknown, SearchQuery, unknown>, products: Product[]) => ReactNode;
}

const LoadMoreQuery = ({ children }: LoadMoreQueryProps) => {
    const [products, setProducts] = useState<Product[]>([]);
    const searchMutation = useMutation(
        ["search"],
        async (data: SearchQuery) => {
            return (await search(data)).data;
        },
        {
            onSuccess(data) {
                setProducts((prev) => [...prev, ...(data.product_list || [])]);
            },
        }
    );

    return children(searchMutation, products);
};

export default LoadMoreQuery;
