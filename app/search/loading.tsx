import CardProduct from "@/components/card-product";

export default function Loading() {
    return (
        <>
            <div className="grid grid-cols-2 gap-2">
                {[...new Array(5)].map((_, i) => (
                    <CardProduct.Loading key={i} />
                ))}
            </div>
        </>
    );
}
