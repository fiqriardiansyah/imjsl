import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiArrowBack } from "react-icons/bi";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar className="flex justify-center">
                <Link href="/">
                    <BiArrowBack className="text-white text-2xl absolute left-4 active:text-gray-300" />
                </Link>
                <Image src="./jsl-catalogue.svg" alt="jsl e-catalogue" height={25} width={150} />
            </Navbar>
            <div className="min-h-screen mt-[50px] p-3">{children}</div>
        </>
    );
}
