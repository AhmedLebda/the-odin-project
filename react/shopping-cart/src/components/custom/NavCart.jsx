import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { ShoppingCart } from "lucide-react";
const NavCart = () => {
    return (
        <Popover>
            <PopoverTrigger>
                <ShoppingCart />
            </PopoverTrigger>
            <PopoverContent>Cart content here.</PopoverContent>
        </Popover>
    );
};

export default NavCart;
