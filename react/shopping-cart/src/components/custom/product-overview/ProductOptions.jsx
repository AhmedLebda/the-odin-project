import ProductReviews from "./ProductReviews";
import ProductColors from "./ProductColors";
import ProductSizes from "./ProductSizes";
import { cartContext } from "../../../contexts/contexts";
import { useContext } from "react";
import { productOverviewContext } from "../../../contexts/contexts";
import { Toaster, toast } from "sonner";

const ProductOptions = () => {
    const { addProductToCart, removeProductFromCart } = useContext(cartContext);
    const { productData, selectedColor, selectedSize } = useContext(
        productOverviewContext
    );

    const cartProduct = {
        ...productData,
        color: selectedColor.name,
        size: selectedSize.name,
    };
    let renderOptions = null;

    if (
        productData.category === "women's clothing" ||
        productData.category === "men's clothing"
    ) {
        renderOptions = (
            <div className="mt-10">
                <ProductColors />

                <ProductSizes />
            </div>
        );
    }

    return (
        <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            {/* Price */}
            <p className="text-3xl tracking-tight text-gray-900">
                ${productData.price}
            </p>

            {/* Reviews */}
            <ProductReviews />

            {renderOptions}

            <button
                type="submit"
                onClick={() => {
                    addProductToCart(cartProduct);
                    toast.success("Item is added to cart", {
                        action: {
                            label: "Undo",
                            onClick: () => removeProductFromCart(productData),
                        },
                    });
                }}
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent px-8 py-3 text-base font-medium  bg-stone-900 text-stone-50 hover:bg-stone-900/90 dark:bg-stone-50 dark:text-stone-900 dark:hover:bg-stone-50/90"
            >
                Add to cart
            </button>
            <Toaster position="bottom-left" richColors closeButton />
        </div>
    );
};

export default ProductOptions;
