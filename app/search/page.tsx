import CardProduct from "@/components/card-product";
import { PageProps } from "@/models";
import { getBrand, search } from "@/service";
import Error from "./error";
import { Metadata } from "next";
import Link from "next/link";
import LoadMoreProduct from "@/components/load-more";
import { ITEM_PER_PAGE } from "@/utils";

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
    const query = searchParams?.query || "";

    return {
        title: `Hasil pencarian ${query} | JSL`,
        description: `${query} | JSL`,
    };
}

const Search = async ({ searchParams }: PageProps) => {
    const searchReq = search({ query: searchParams?.query, brand: searchParams?.brand });
    const brandReq = getBrand();

    const [searchRes, brandRes] = await Promise.all([searchReq, brandReq]);

    const brandName = brandRes?.data?.find((brand) => brand?.brand_id?.toString() === (searchParams?.brand as any))?.brand_name || "";

    return (
        <>
            {searchRes?.data?.product_list?.length ? (
                <h1 className="text-gray-400 mb-5">
                    Hasil pencarian untuk <br />
                    <span className="capitalize text-black font-semibold">
                        {brandName?.CapitalizeEachFirstLetter() + " " + (searchParams?.query || "")?.toString()?.CapitalizeEachFirstLetter()}
                    </span>
                </h1>
            ) : null}
            <div className="grid grid-cols-2 gap-2">
                {searchRes?.data?.product_list?.map((product, i) => (
                    <Link href={"/" + encodeURIComponent(product?.slug)} key={product.product_name + i}>
                        <CardProduct product={product} />
                    </Link>
                ))}
                {searchRes?.data?.product_list?.length >= ITEM_PER_PAGE ? <LoadMoreProduct searchParams={searchParams} /> : null}
            </div>
            {!searchRes?.data?.product_list?.length ? <Error /> : null}
        </>
    );
};

export default Search;
