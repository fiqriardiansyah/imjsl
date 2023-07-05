const LoadingProduct = () => {
    return (
        <div className="w-full">
            <div className="h-[300px] bg-gray-200 w-full" />
            <div className="grid grid-cols-3 gap-5 p-3">
                <div className="h-[100px] bg-gray-200 rounded w-full"></div>
                <div className="h-[100px] bg-gray-200 rounded w-full"></div>
            </div>
            <div className="container mx-auto px-4 mb-10">
                <div className="w-full bg-gray-200 my-5" style={{ height: "1px" }} />
                <div className="w-[200px] h-[16px] bg-gray-200"></div>
                <div className="w-[300px] mt-4 h-[10px] bg-gray-200"></div>
            </div>
        </div>
    );
};

export default LoadingProduct;
