import DetailProduct from "@/components/detail-product";
import { PageProps } from "@/models";
import { getProduct } from "@/service";
import "@/utils/extension";
import { Metadata } from "next";
import "react-18-image-lightbox/style.css";

export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
    const slug = params?.slug?.split("-").join(" ") || "";
    const product = await getProduct(params?.slug);

    return {
        title: `${slug} | JSL`?.CapitalizeEachFirstLetter(),
        description: `${slug} | JSL`?.CapitalizeEachFirstLetter(),
        openGraph: {
            title: product?.data?.product_name,
            description: product?.data?.product_model + ", " + product?.data?.product_description,
            url: "https://imjsl.com/" + slug,
            siteName: "JSL",
            images: product.data?.product_images?.map((img) => ({
                url: img,
                width: 300,
                height: 300,
            })),
            locale: "id",
            type: "website",
        },
    };
}

export default async function Slug({ params }: PageProps) {
    const product = await getProduct(params?.slug);
    return <DetailProduct product={product?.data} />;
}
