import ProductOptions from "./ProductOptions";

const ProductInfo = ({
    name,
    price,
    reviews,
    selectedColor,
    setSelectedColor,
    colors,
    selectedSize,
    setSelectedSize,
    sizes,
    description,
}) => {
    return (
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-1 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
            {/* Product Name */}
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                    {name}
                </h1>
            </div>

            {/* Product Options */}
            <ProductOptions
                price={price}
                reviews={reviews}
                selectedColor={selectedColor}
                setSelectedColor={setSelectedColor}
                colors={colors}
                selectedSize={selectedSize}
                setSelectedSize={setSelectedSize}
                sizes={sizes}
            />

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                {/* Description */}
                <div>
                    <h3 className="sr-only">Description</h3>

                    <div className="space-y-6">
                        <p className="text-base text-gray-900">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;
