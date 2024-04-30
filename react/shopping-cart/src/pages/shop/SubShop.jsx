import { useLoaderData, Await } from "react-router-dom";
import ProductCard from "../../components/custom/ProductCard";
import { Suspense } from "react";
import ShopSkeleton from "./ShopSkeleton";

const SubShop = () => {
    const { category, data } = useLoaderData();
    return (
        <div className="p-8">
            <h1 className="text-4xl font-extrabold capitalize">
                {category} collection
            </h1>
            <Suspense fallback={<ShopSkeleton />} key={Math.random()}>
                <Await resolve={data}>
                    {(loadedData) => {
                        return (
                            <div className="p-8 grid grid-cols-1 sm:grid-cols-2 gap-10 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
                                {loadedData.map((cardData) => (
                                    <ProductCard
                                        key={cardData.id}
                                        data={cardData}
                                    />
                                ))}
                            </div>
                        );
                    }}
                </Await>
            </Suspense>
        </div>
    );
};

export default SubShop;
