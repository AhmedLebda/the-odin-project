import { defer } from "react-router-dom";
import { getAllProducts } from "../../api";

export const loader = async () => {
    const dataPromise = getAllProducts();
    return defer({ data: dataPromise });
};
