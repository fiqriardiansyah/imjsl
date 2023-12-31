import "@/utils/extension";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiArrowBack } from "react-icons/bi";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Navbar className="">
                <Link href="/">
                    <BiArrowBack className="text-white text-2xl absolute left-4 active:text-gray-300" />
                </Link>
                <Image
                    src="./jsl-catalogue.svg"
                    alt="jsl e-catalogue"
                    height={25}
                    width={150}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
            </Navbar>
            <div className="min-h-screen mt-[50px] p-3">{children}</div>
        </>
    );
};

export default Layout;
