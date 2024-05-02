import { productOverviewContext } from "./contexts";
import { useState } from "react";

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

const ProductContextProvider = ({ children, productData }) => {
    const [selectedColor, setSelectedColor] = useState(colors[0]);
    const [selectedSize, setSelectedSize] = useState(sizes[3]);

    const value = {
        productData,
        selectedColor,
        selectedSize,
        setSelectedColor,
        setSelectedSize,
        colors,
        sizes,
    };

    return (
        <productOverviewContext.Provider value={value}>
            {children}
        </productOverviewContext.Provider>
    );
};

export default ProductContextProvider;
