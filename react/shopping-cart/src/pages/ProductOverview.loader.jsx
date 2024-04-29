export const loader = async ({ params }) => {
    const productId = params.id;
    const request = await fetch(
        `https://fakestoreapi.com/products/${productId}`
    );
    const data = await request.json();

    return data;
};
