"use client";

import CardProduct from "@/components/card-product";
import { PageProps } from "@/models";
import { SearchPaging, SearchQuery } from "@/service";
import "@/utils/extension";
import Link from "next/link";
import { QueryClient, QueryClientProvider, UseMutationResult } from "react-query";
import VisibilitySensor from "react-visibility-sensor";
import LoadMoreQuery from "./load-more-query";
import LoadingProduct from "./loading-product";
import { DEFAULT_PAGE } from "@/utils";

const queryClient = new QueryClient();

const LoadMoreProduct = ({ searchParams }: PageProps) => {
    const onChangeVisibility = (fetcher: UseMutationResult<SearchPaging, unknown, SearchQuery, unknown>) => {
        return (visible: boolean) => {
            if (visible) {
                if (fetcher.isLoading) return;
                if ((fetcher.data?.current_page || DEFAULT_PAGE) > 1 && !fetcher.data?.product_list.length) return;
                fetcher.mutate({ query: searchParams?.query, brand: searchParams?.brand, page: (fetcher.data?.current_page || DEFAULT_PAGE) + 1 });
            }
        };
    };

    return (
        <QueryClientProvider client={queryClient}>
            <LoadMoreQuery>
                {(fetcher, products) => {
                    return (
                        <>
                            {products?.map((product, i) => (
                                <Link href={"/" + encodeURIComponent(product?.slug)} key={product.product_name + i}>
                                    <CardProduct product={product} />
                                </Link>
                            ))}
                            {fetcher.isLoading ? [...new Array(5)].map((_, i) => <LoadingProduct.LoadingCard key={i} />) : null}
                            <VisibilitySensor onChange={onChangeVisibility(fetcher)}>
                                <div className="w-full h-[10px]"></div>
                            </VisibilitySensor>
                        </>
                    );
                }}
            </LoadMoreQuery>
        </QueryClientProvider>
    );
};

export default LoadMoreProduct;
