import { Product } from "@/models";
import ImageEmpty from "@/public/image-empty.png";
import Image from "next/image";

interface Props {
    product?: Product;
}

const Loading = () => {
    return <div className="rounded-lg bg-gray-100 h-[150px] w-full"></div>;
};

const CardProduct = ({ product }: Props) => {
    return (
        <div
            itemType="https://schema.org/Product"
            itemScope
            className="flex flex-col active:bg-gray-100 p-1 rounded-lg hover:bg-gray-50 focus:bg-gray-100"
        >
            <link itemProp="url" href={"/" + product?.slug} />
            <meta itemProp="name" content={product?.product_name} />
            {product?.product_images?.map((img) => (
                <link itemProp="image" href={img} key={img} />
            ))}
            <meta itemProp="description" content={product?.brand_name + " " + product?.product_name} />
            <div className="h-[150px] relative">
                <Image
                    src={product?.product_images?.length ? product?.product_images[0] : ImageEmpty}
                    className="object-cover rounded-lg bg-gray-100 w-full h-full"
                    alt={product?.product_name || ""}
                    loading="lazy"
                    fill
                    quality={50}
                />
            </div>
            <p itemProp="name" className="!text-xs text-gray-400 capitalize m-0 leading-none font-light">
                {product?.brand_name?.CapitalizeEachFirstLetter()}
            </p>
            <span className="text-black capitalize m-0 leading-none text-xs font-medium line-clamp-2">
                {product?.product_name?.CapitalizeEachFirstLetter()}
            </span>
        </div>
    );
};

CardProduct.Loading = Loading;

export default CardProduct;
