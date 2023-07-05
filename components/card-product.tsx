import { Product } from "@/models";
import ImageError from "@/public/image-error.png";
import Image from "next/image";
import Link from "next/link";

interface Props {
    product?: Product;
}

const Loading = () => {
    return <div className="rounded-lg bg-gray-100 h-[150px] w-full"></div>;
};

const CardProduct = ({ product }: Props) => {
    return (
        <Link href={"/" + product?.slug}>
            <div
                itemType="https://schema.org/Product"
                itemScope
                className="flex flex-col active:bg-gray-100 p-1 rounded-lg hover:bg-gray-100 focus:bg-gray-100"
            >
                <link itemProp="url" href={"/" + product?.slug} />
                <meta itemProp="name" content={product?.product_name} />
                {product?.product_images?.map((img) => (
                    <link itemProp="image" href={img} key={img} />
                ))}
                <meta itemProp="description" content={product?.brand_name + " " + product?.product_name} />
                <div className="h-[150px] relative">
                    <Image
                        src={product?.product_images?.length ? product?.product_images[0] : ImageError}
                        className="object-cover rounded-lg bg-gray-100 w-auto h-auto"
                        alt={product?.product_name || ""}
                        loading="lazy"
                        fill
                        quality={50}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
                <p itemProp="name" className="!text-xs text-gray-400 capitalize m-0 leading-none font-light">
                    {product?.brand_name?.CapitalizeEachFirstLetter()}
                </p>
                <span className="text-black capitalize m-0 leading-none text-xs font-medium">
                    {product?.product_name?.CapitalizeEachFirstLetter()}
                </span>
            </div>
        </Link>
    );
};

CardProduct.Loading = Loading;

export default CardProduct;
