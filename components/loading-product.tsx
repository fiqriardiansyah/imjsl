const Loading = () => {
    return (
        <div className="w-full mb-4">
            <div className="h-[150px] rounded-lg w-full animate-shimmer"></div>
            <div className="w-[80%] h-[10px] animate-shimmer mt-2"></div>
        </div>
    );
};

const LoadingProduct = () => {
    return (
        <div className="w-full">
            <div className="h-[300px] animate-shimmer w-full" />
            <div className="grid grid-cols-3 gap-5 p-3">
                <div className="h-[100px] animate-shimmer rounded w-full"></div>
                <div className="h-[100px] animate-shimmer rounded w-full"></div>
            </div>
            <div className="container mx-auto px-4 mb-10">
                <div className="w-full animate-shimmer my-5" style={{ height: "1px" }} />
                <div className="w-[200px] h-[16px] animate-shimmer"></div>
                <div className="w-[300px] mt-4 h-[10px] animate-shimmer"></div>
            </div>
        </div>
    );
};

LoadingProduct.LoadingCard = Loading;

export default LoadingProduct;
