"use client";

import { ProductDetail } from "@/models";
import "@/utils/extension";
import HTMLReactParser from "html-react-parser";
import Image from "next/image";
import { useState } from "react";
import Lightbox from "react-18-image-lightbox";

const DetailProduct = ({ product }: { product?: ProductDetail }) => {
    const [activeImage, setActiveImage] = useState<any>(product?.product_images?.length ? product?.product_images[0] : "/image-empty.png");
    const [showImage, setShowImage] = useState({ show: false, random: 0 });

    const onSetActiveImage = (img: any) => {
        return () => {
            setActiveImage(img);
        };
    };

    const onShowImage = () => {
        setShowImage((prev) => ({ ...prev, show: true }));
    };

    return (
        <>
            {showImage.show && (
                <Lightbox
                    onImageLoad={() => setShowImage((prev) => ({ ...prev, random: Math.random() }))}
                    imageLoadErrorMessage="Gambar gagal dimuat"
                    mainSrc={showImage.show ? activeImage : null}
                    onCloseRequest={() => setShowImage((prev) => ({ ...prev, show: false }))}
                    clickOutsideToClose
                    animationDisabled
                    onAfterOpen={() => setShowImage((prev) => ({ ...prev, random: Math.random() }))}
                />
            )}
            <div itemType="https://schema.org/Product" itemScope className="mt-[50px] flex flex-col items-center">
                <link itemProp="url" href={"/" + product?.slug} />
                <meta itemProp="name" content={product?.product_name} />
                {product?.product_images?.map((img) => (
                    <link itemProp="image" href={img} key={img} />
                ))}
                <meta itemProp="description" content={product?.product_description} />
                <div className="w-full h-[300px] relative">
                    <Image
                        onClick={onShowImage}
                        key={activeImage}
                        src={activeImage}
                        className="object-contain bg-gray-200 w-full cursor-pointer"
                        alt={product?.product_name || ""}
                        priority
                        fill
                        quality={100}
                    />
                </div>
                <div className="grid grid-cols-3 gap-3 w-full p-3">
                    {product?.product_images?.map((img) => (
                        <button
                            className={`relative w-full h-[100px] cursor-pointer rounded ${
                                img === activeImage ? "border-2 border-solid border-primary-dark" : ""
                            }`}
                            key={img}
                            onClick={onSetActiveImage(img)}
                        >
                            <Image src={img} className="object-cover rounded bg-gray-200 w-auto h-auto" alt={img} quality={30} fill />
                        </button>
                    ))}
                </div>
                <div className="container mx-auto px-4 mb-10">
                    <div className="w-full bg-gray-200 my-5" style={{ height: "1px" }}></div>
                    <span className="text-gray-400 text-sm">{product?.category_name?.CapitalizeEachFirstLetter()}</span>
                    <h2 className="m-0 text-lg font-semibold text-black mb-7">{product?.product_name?.CapitalizeEachFirstLetter()}</h2>

                    <span className="text-gray-400 text-sm">Jenis Mobil</span>
                    <h2 className="m-0 text-base font-medium text-black mb-7">
                        {product?.brand_name?.CapitalizeEachFirstLetter()} - {product?.product_model?.CapitalizeEachFirstLetter()}
                    </h2>

                    <span className="text-gray-400 text-sm">Kode Produk</span>
                    <h2 className="m-0 text-base font-medium text-black mb-7">{product?.product_code}</h2>

                    <div className="w-full bg-gray-200 my-5" style={{ height: "1px" }}></div>

                    <span className="text-gray-400 text-sm">Deskripsi Produk</span>
                    <h2 className="text-gray-500 m-0 font-medium mt-1">{HTMLReactParser(product?.product_description || "-")}</h2>
                </div>
            </div>
        </>
    );
};

export default DetailProduct;
