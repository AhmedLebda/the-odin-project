import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "lucide-react";
import { ShoppingCart as CartIcon } from "lucide-react";
import { useContext } from "react";
import { cartContext } from "../../../contexts/contexts";
import CartProduct from "./CartProduct";
import { Link } from "react-router-dom";

export default function ShoppingCart() {
    const { cartItems, getTotalPrice } = useContext(cartContext);
    const [open, setOpen] = useState(false);

    return (
        <div>
            <button className="relative" onClick={() => setOpen(!open)}>
                <CartIcon className="h-8 pt-2" />

                {cartItems.length > 0 && (
                    <span className="text-xs py-1 px-2 rounded-full bg-red-600 text-white absolute bottom-4 left-4">
                        {cartItems.length}
                    </span>
                )}
            </button>
            <Transition.Root show={open} as={Fragment}>
                <Dialog className="relative z-10" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>
                    <div className="fixed inset-0 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                                <Transition.Child
                                    as={Fragment}
                                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                                    enterFrom="translate-x-full"
                                    enterTo="translate-x-0"
                                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                                    leaveFrom="translate-x-0"
                                    leaveTo="translate-x-full"
                                >
                                    <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                                        <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                            <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                                <div className="flex items-start justify-between">
                                                    <Dialog.Title className="text-lg font-medium text-gray-900">
                                                        Shopping cart
                                                    </Dialog.Title>
                                                    <div className="ml-3 flex h-7 items-center">
                                                        <button
                                                            type="button"
                                                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                                                            onClick={() =>
                                                                setOpen(false)
                                                            }
                                                        >
                                                            <span className="absolute -inset-0.5" />
                                                            <span className="sr-only">
                                                                Close panel
                                                            </span>
                                                            <XIcon
                                                                className="h-6 w-6"
                                                                aria-hidden="true"
                                                            />
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="mt-8">
                                                    <div className="flow-root">
                                                        <ul
                                                            role="list"
                                                            className="-my-6 divide-y divide-gray-200"
                                                        >
                                                            {cartItems.map(
                                                                (product) => (
                                                                    <CartProduct
                                                                        key={
                                                                            product.id
                                                                        }
                                                                        product={
                                                                            product
                                                                        }
                                                                        open={
                                                                            open
                                                                        }
                                                                        setOpen={
                                                                            setOpen
                                                                        }
                                                                    />
                                                                )
                                                            )}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                                                <div className="flex justify-between text-base font-medium text-gray-900">
                                                    <p>Subtotal</p>
                                                    <p>
                                                        $
                                                        {getTotalPrice(
                                                            cartItems
                                                        )}
                                                    </p>
                                                </div>
                                                <p className="mt-0.5 text-sm text-gray-500">
                                                    Shipping and taxes
                                                    calculated at checkout.
                                                </p>
                                                <div className="mt-6">
                                                    <Link
                                                        to="checkout"
                                                        onClick={() =>
                                                            setOpen(!open)
                                                        }
                                                        href="#"
                                                        className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                                                    >
                                                        Checkout
                                                    </Link>
                                                </div>
                                                <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                                    <p>
                                                        or{" "}
                                                        <button
                                                            type="button"
                                                            className="font-medium text-indigo-600 hover:text-indigo-500"
                                                            onClick={() =>
                                                                setOpen(false)
                                                            }
                                                        >
                                                            Continue Shopping
                                                            <span aria-hidden="true">
                                                                {" "}
                                                                &rarr;
                                                            </span>
                                                        </button>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </div>
    );
}
