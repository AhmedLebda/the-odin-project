import { Skeleton } from "@mui/material";

const ShopSkeleton = () => {
    const renderSkeletons = () => {
        return [1, 2, 3, 4, 5].map((skeleton) => (
            <div key={skeleton}>
                <Skeleton variant="rounded" width={210} height={250} />
                <Skeleton variant="text" height={35} />
                <div className="flex gap-4">
                    <Skeleton variant="text" className="flex-1" />
                    <Skeleton variant="text" width={50} />
                </div>
                <Skeleton variant="text" width={100} />
            </div>
        ));
    };
    return (
        <div className="p-8 grid grid-cols-1 sm:grid-cols-2 gap-10 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
            {renderSkeletons()}
        </div>
    );
};

export default ShopSkeleton;
