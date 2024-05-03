import { cartContext } from "../contexts/contexts";
import { useContext } from "react";
import CartProduct from "../components/custom/cart/CartProduct";
import { Toaster, toast } from "sonner";
import { Link } from "react-router-dom";
import { buttonVariants } from "../components/ui/button";

const Checkout = () => {
    const { cartItems, getTotalPrice } = useContext(cartContext);
    const subTotal = getTotalPrice(cartItems);
    const ShippingFees = 5;
    const TAX = 6.24;
    const TOTAL = subTotal + ShippingFees + TAX;

    if (cartItems.length === 0) {
        return (
            <div className="flex flex-col gap-8 py-24 items-center">
                <h1 className="text-4xl font-bold">Your cart is empty </h1>
                <Link
                    to="../shop/all"
                    className={`rounded-2xl text-xl py-6 px-24 capitalize ${buttonVariants(
                        {
                            variant: "default",
                        }
                    )}`}
                >
                    shop now
                </Link>
            </div>
        );
    }

    return (
        <div className="p-8 max-w-3xl mx-auto">
            <div className="flow-root">
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                    {cartItems.map((product) => (
                        <CartProduct key={product.id} product={product} />
                    ))}
                </ul>
            </div>
            <div className="flex flex-col gap-4 py-4 my-8 border border-l-0 border-r-0 font-bold">
                <div className="flex justify-between text-base  text-gray-900">
                    <p>Subtotal</p>
                    <p>${subTotal}</p>
                </div>
                <div className="flex justify-between text-base  text-gray-900">
                    <p>Shipping</p>
                    <p>${ShippingFees}</p>
                </div>
                <div className="flex justify-between text-base  text-gray-900">
                    <p>Taxes</p>
                    <p>${TAX}</p>
                </div>
            </div>
            <div className="flex justify-between text-base  text-gray-900 font-bold">
                <p>Total</p>
                <p>${TOTAL}</p>
            </div>

            <button
                type="submit"
                onClick={() => {
                    toast.success("Order Placed");
                }}
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent px-8 py-3 text-base font-medium  bg-stone-900 text-stone-50 hover:bg-stone-900/90 dark:bg-stone-50 dark:text-stone-900 dark:hover:bg-stone-50/90"
            >
                Confirm order
            </button>
            <Toaster position="bottom-left" richColors />
        </div>
    );
};

export default Checkout;
