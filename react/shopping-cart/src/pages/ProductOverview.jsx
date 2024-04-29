import { useState } from "react";
import { useLoaderData } from "react-router-dom";

import ProductInfo from "../components/custom/product-overview/ProductInfo";

const colors = [
    {
        name: "White",
        class: "bg-white",
        selectedClass: "ring-gray-400",
    },
    {
        name: "Gray",
        class: "bg-gray-200",
        selectedClass: "ring-gray-400",
    },
    {
        name: "Black",
        class: "bg-gray-900",
        selectedClass: "ring-gray-900",
    },
];
const sizes = [
    { name: "XXS", inStock: false },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "2XL", inStock: true },
    { name: "3XL", inStock: true },
];

export default function ProductOverview() {
    const [selectedColor, setSelectedColor] = useState(colors[0]);
    const [selectedSize, setSelectedSize] = useState(sizes[3]);

    const productData = useLoaderData();

    const product = {
        name: productData.title,
        price: `$${productData.price}`,
        image: {
            src: productData.image,
            alt: productData.title,
        },
        description: productData.description,
    };
    const reviews = {
        average: productData.rating.rate,
        totalCount: productData.rating.count,
    };

    return (
        <div className="bg-white">
            <div className="pt-6 grid grid-cols-1 md:grid-cols-2">
                {/* product image */}
                <img
                    src={product.image.src}
                    alt={product.image.alt}
                    className=" w-2/3 mx-auto  object-cover object-center"
                />

                {/* Product info */}
                <ProductInfo
                    name={product.name}
                    price={product.price}
                    reviews={reviews}
                    selectedColor={selectedColor}
                    setSelectedColor={setSelectedColor}
                    colors={colors}
                    selectedSize={selectedSize}
                    setSelectedSize={setSelectedSize}
                    sizes={sizes}
                    description={product.description}
                />
            </div>
        </div>
    );
}
