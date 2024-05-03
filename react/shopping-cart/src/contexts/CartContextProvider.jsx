import { useState } from "react";
import { cartContext } from "./contexts";

const CartContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addProductToCart = (product) => {
        const exists = cartItems.find((item) => item.id === product.id);

        if (exists) {
            setCartItems((prevItems) =>
                prevItems.map((item) =>
                    item.id === exists.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            );
        } else {
            setCartItems((prevItems) => [
                ...prevItems,
                { ...product, quantity: 1 },
            ]);
        }
    };

    const removeProductFromCart = (product) =>
        setCartItems((prevItems) =>
            prevItems.filter((item) => item.id !== product.id)
        );

    const getTotalPrice = (items) => {
        return items.reduce((acc, curr) => {
            return acc + curr.price * curr.quantity;
        }, 0);
    };

    const value = {
        cartItems,
        addProductToCart,
        removeProductFromCart,
        getTotalPrice,
    };
    return (
        <cartContext.Provider value={value}>{children}</cartContext.Provider>
    );
};

export default CartContextProvider;
