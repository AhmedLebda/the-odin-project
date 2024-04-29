import ProductReviews from "./ProductReviews";
import ProductColors from "./ProductColors";
import ProductSizes from "./ProductSizes";
const ProductOptions = ({
    price,
    reviews,
    selectedColor,
    setSelectedColor,
    colors,
    selectedSize,
    setSelectedSize,
    sizes,
}) => {
    return (
        <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            {/* Price */}
            <p className="text-3xl tracking-tight text-gray-900">{price}</p>

            {/* Reviews */}
            <ProductReviews reviews={reviews} />

            <form className="mt-10">
                {/* Colors */}
                <ProductColors
                    selectedColor={selectedColor}
                    setSelectedColor={setSelectedColor}
                    colors={colors}
                />

                {/* Sizes */}
                <ProductSizes
                    selectedSize={selectedSize}
                    setSelectedSize={setSelectedSize}
                    sizes={sizes}
                />

                <button
                    type="submit"
                    className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    Add to cart
                </button>
            </form>
        </div>
    );
};

export default ProductOptions;
