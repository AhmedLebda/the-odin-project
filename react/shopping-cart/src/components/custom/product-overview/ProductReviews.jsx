import CardRating from "../CardRating";
import { useContext } from "react";
import { productOverviewContext } from "../../../contexts/contexts";

const ProductReviews = () => {
    const { productData } = useContext(productOverviewContext);

    return (
        <div className="mt-6">
            <h3 className="sr-only">Reviews</h3>
            <div className="flex items-center">
                <CardRating ratingValue={productData.rating.rate} />
                <p className="sr-only">
                    {productData.rating.rate} out of 5 stars
                </p>
                <p className="ml-3 text-sm font-medium text-gray-900">
                    {productData.rating.count} reviews
                </p>
            </div>
        </div>
    );
};

export default ProductReviews;
