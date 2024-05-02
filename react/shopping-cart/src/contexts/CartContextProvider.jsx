import { useState } from "react";
import { cartContext } from "./contexts";

const CartContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addProductToCart = (product) =>
        setCartItems((prevItems) => [...prevItems, product]);

    const removeProductFromCart = (product) =>
        setCartItems((prevItems) =>
            prevItems.filter((item) => item.id !== product.id)
        );

    const value = { cartItems, addProductToCart, removeProductFromCart };
    return (
        <cartContext.Provider value={value}>{children}</cartContext.Provider>
    );
};

export default CartContextProvider;
