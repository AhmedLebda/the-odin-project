import { getProductById } from "../api";

export const loader = async ({ params }) => {
    const productId = params.id;

    return getProductById(productId);
};
