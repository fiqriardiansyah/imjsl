"use client";

import Navbar from "@/components/navbar";
import SelectBrand from "@/components/select";
import Image from "next/image";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import { useRouter } from "next-nprogress-bar";
import { QueryClient, QueryClientProvider } from "react-query";
import Logo from "../public/jsl-catalogue.svg";
import Jumbotron from "../public/jumbotron.png";
import Search from "../public/search.svg";

const queryClient = new QueryClient();

export default function Page() {
    const router = useRouter();

    const [brandId, setBrandId] = useState<any>();
    const [query, setQuery] = useState<any>();

    const onSearch = () => {
        router.push(`/search?query=${query || ""}&brand=${brandId || ""}`);
    };

    return (
        <div className="min-h-screen">
            <Navbar className="flex justify-center">
                <Image
                    src={Logo}
                    alt="jsl e-catalogue"
                    height={25}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
            </Navbar>
            <div className="mt-[50px] flex flex-col items-center">
                <div className="relative">
                    <Image priority src={Jumbotron} alt="JSL Jumbotron" height={300} />
                    <h1 className="text-white absolute z-10 right-5 bottom-10 w-[200px] leading-none text-right font-medium">
                        JSL e-Catalogue <br />
                        <span className="text-xs font-light">Cari produk JSL sesuai dengan jenis mobil</span>
                    </h1>
                </div>
                <div className="w-[80%] flex flex-col transform -translate-y-6 items-center">
                    <QueryClientProvider client={queryClient}>
                        <SelectBrand onChange={(val: any) => setBrandId(val?.value)} />
                    </QueryClientProvider>
                    <input
                        value={query}
                        onChange={(val) => setQuery(val.target.value)}
                        className="input-search mt-3 "
                        placeholder="Ketik Jenis Produk"
                    />
                    <button onClick={onSearch} className="button-search mt-10">
                        <BsSearch />
                        Cari
                    </button>
                    <Image src={Search} alt="Search Product" className="mt-10" />
                </div>
            </div>
        </div>
    );
}
