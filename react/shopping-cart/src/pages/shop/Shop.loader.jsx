export const loader = async ({ request }) => {
    const category = new URL(request.url).searchParams.get("category");

    if (!category) {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        return { category: null, data };
    }
    const response = await fetch(
        `https://fakestoreapi.com/products/category/${category}`
    );
    const data = await response.json();
    return { category, data };
};
