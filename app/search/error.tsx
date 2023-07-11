"use client";

import Image from "next/image";

const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center h-[400px]">
            <Image src="/empty.png" alt="not found" width={300} height={300} />
            <h1 className="text-gray-400 m-0 text-center text-xs mt-10">Maaf hasil pencarian tidak ditemukan</h1>
        </div>
    );
};

export default Error;
