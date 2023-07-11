import LoadingProduct from "@/components/loading-product";

const Loading = () => {
    return (
        <>
            <div className="grid grid-cols-2 gap-2">
                {[...new Array(5)].map((_, i) => (
                    <LoadingProduct.LoadingCard key={i} />
                ))}
            </div>
        </>
    );
};

export default Loading;
