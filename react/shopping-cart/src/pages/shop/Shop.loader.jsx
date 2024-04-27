export const loader = async ({ request }) => {
    const category = new URL(request.url).searchParams.get("category");
    const response = await fetch(
        `https://fakestoreapi.com/products/category/${category}'s clothing`
    );
    const data = await response.json();
    return { category, data };
};
