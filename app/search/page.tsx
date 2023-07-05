import CardProduct from "@/components/card-product";
import Head from "next/head";
import { PageProps } from "@/models";
import { getBrand, search } from "@/service";
import Error from "./error";
import { Metadata } from "next";

export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
    const query = params?.query || "";

    return {
        title: `Hasil pencarian ${query} | JSL`,
        description: `${query} | JSL`,
    };
}

export default async function Search({ searchParams }: PageProps) {
    const searchReq = search(searchParams?.query, searchParams?.brand);
    const brandReq = getBrand();

    const [searchRes, brandRes] = await Promise.all([searchReq, brandReq]);

    const brandName = brandRes?.data?.find((brand) => brand?.brand_id?.toString() === (searchParams?.brand as any))?.brand_name || "";

    return (
        <>
            <Head>
                <title>Hasil pencarian {searchParams?.query} | JSL</title>
                <meta name="description" content={searchParams?.query + " | JSL"} />
            </Head>
            {searchRes?.data?.product_list?.length ? (
                <h1 className="text-gray-400">
                    Hasil pencarian untuk <br />
                    <span className="capitalize text-black font-semibold">
                        {brandName?.CapitalizeEachFirstLetter() + " " + (searchParams?.query || "")?.toString()?.CapitalizeEachFirstLetter()}
                    </span>
                </h1>
            ) : null}
            <div className="grid grid-cols-2 gap-2">
                {searchRes.data?.product_list?.map((product, i) => (
                    <CardProduct product={product} key={product.slug + i} />
                ))}
            </div>
            {!searchRes.data?.product_list?.length ? <Error /> : null}
        </>
    );

    // const router = useRouter();
    // const { query, brand } = router.query;

    // const searchQuery = useQuery(["query", query, brand], () => search(query, brand));
    // const brandQuery = useQuery(["get-brand"], getBrand, { enabled: !!brand });

    // const brandName = brandQuery.data?.data?.find((el) => el.brand_id?.toString() === (brand as any))?.brand_name || "";

    // return (
    //     <>
    //         <div className="min-h-screen mt-[50px]">
    //             <div className="flex flex-col gap-5 container mx-auto px-4 py-4">
    //                 <StateRender
    //                     data={searchQuery.data?.data?.product_list?.length}
    //                     isLoading={searchQuery.isLoading}
    //                     isError={searchQuery.isError}
    //                     isEmpty={searchQuery.data?.data?.product_list?.length === 0}
    //                 >
    //                     <StateRender.Data>

    //                     </StateRender.Data>
    //                     <StateRender.Loading>
    //                         <div className="grid grid-cols-2 gap-2">
    //                             {[...new Array(5)].map((_, i) => (
    //                                 <CardProduct.Loading key={i} />
    //                             ))}
    //                         </div>
    //                     </StateRender.Loading>
    //                     <StateRender.Empty>
    //                         <div className="flex flex-col items-center justify-center h-[400px]">
    //                             <Image src={Empty} alt="not found" />
    //                             <h1 className="text-gray-400 m-0 text-center text-xs mt-10">Maaf hasil pencarian tidak ditemukan</h1>
    //                         </div>
    //                     </StateRender.Empty>
    //                 </StateRender>
    //             </div>
    //         </div>
    //     </>
    // );
}
