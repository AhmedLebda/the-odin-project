import { useLoaderData } from "react-router-dom";
import ProductInfo from "../components/custom/product-overview/ProductInfo";
import ProductContextProvider from "../contexts/ProductContextProvider";

export default function ProductOverview() {
    const productData = useLoaderData();

    return (
        <div className="bg-white">
            <div className="pt-6 grid grid-cols-1 md:grid-cols-2">
                {/* product image */}
                <img
                    src={productData.image}
                    alt={productData.title}
                    className=" w-2/3 mx-auto  object-cover object-center"
                />

                {/* Product info */}
                <ProductContextProvider productData={productData}>
                    <ProductInfo />
                </ProductContextProvider>
            </div>
        </div>
    );
}
