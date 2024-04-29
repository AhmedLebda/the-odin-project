import CardRating from "../CardRating";

const ProductReviews = ({ reviews }) => {
    return (
        <div className="mt-6">
            <h3 className="sr-only">Reviews</h3>
            <div className="flex items-center">
                <CardRating ratingValue={reviews.average} />
                <p className="sr-only">{reviews.average} out of 5 stars</p>
                <p className="ml-3 text-sm font-medium text-gray-900">
                    {reviews.totalCount} reviews
                </p>
            </div>
        </div>
    );
};

export default ProductReviews;
