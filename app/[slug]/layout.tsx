"use client";

import Navbar from "@/components/navbar";
import { PageProps } from "@/models";
import { useRouter } from "next-nprogress-bar";
import React from "react";
import { BiArrowBack } from "react-icons/bi";

export default function Layout({ children, params }: PageProps & { children: React.ReactNode }) {
    const router = useRouter();
    return (
        <>
            <Navbar className="">
                <BiArrowBack
                    onClick={router.back}
                    className="text-white text-2xl absolute left-4 active:text-gray-300 hover:text-gray-300 cursor-pointer"
                    tabIndex={0}
                />
                <h1 className="m-0 text-white line-clamp-1 ml-10">{params?.slug?.split("-")?.join(" ")}</h1>
            </Navbar>
            <div className="min-h-screen mt-[50px]">{children}</div>
        </>
    );
}
