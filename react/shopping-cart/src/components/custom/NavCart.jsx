import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { ShoppingCart } from "lucide-react";
import { buttonVariants } from "../ui/button";
import { Link } from "react-router-dom";

const NavCart = () => {
    return (
        <Popover>
            <PopoverTrigger>
                <ShoppingCart />
            </PopoverTrigger>
            <PopoverContent className="p-4">
                <div>items added to cart...</div>
                <Link
                    to="checkout"
                    className={`mt-8 w-full rounded-2xl px-8 capitalize ${buttonVariants(
                        {
                            variant: "default",
                        }
                    )}`}
                >
                    shop now
                </Link>
            </PopoverContent>
        </Popover>
    );
};

export default NavCart;
