import { useLoaderData } from "react-router-dom";
import ProductCard from "../../components/custom/ProductCard";
const Shop = () => {
    const { category, data } = useLoaderData();
    console.log(data);
    return (
        <div className="p-8">
            <h1 className="text-4xl font-extrabold capitalize">
                {category}&apos;s collection
            </h1>
            <div className="p-8 grid grid-cols-1 sm:grid-cols-2 gap-10 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
                {data.map((cardData) => (
                    <ProductCard key={cardData.id} data={cardData} />
                ))}
            </div>
        </div>
    );
};

export default Shop;
