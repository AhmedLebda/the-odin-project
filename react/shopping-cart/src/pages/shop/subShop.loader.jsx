import { defer } from "react-router-dom";
import { getProductByCategory } from "../../api";

export const loader = async ({ request }) => {
    const url = new URL(request.url);
    const path = url.pathname.split("/").slice(-1).join();
    const category =
        path === "men" || path === "women" ? `${path}'s clothing` : path;
    const dataPromise = getProductByCategory(category);

    return defer({ category: path, data: dataPromise });
};
