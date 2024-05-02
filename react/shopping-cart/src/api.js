export const getAllProducts = async () => {
    // await sleep(1000);
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();

    return data;
};

export const getProductByCategory = async (category) => {
    // await sleep(1000);
    const response = await fetch(
        `https://fakestoreapi.com/products/category/${category}`
    );
    const data = await response.json();
    return data;
};

export const getProductById = async (productId) => {
    const request = await fetch(
        `https://fakestoreapi.com/products/${productId}`
    );
    const data = await request.json();

    return data;
};

// function sleep(delay) {
//     return new Promise((resolve) => setTimeout(resolve, delay));
// }
