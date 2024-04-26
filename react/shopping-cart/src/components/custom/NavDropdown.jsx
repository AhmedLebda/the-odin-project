import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { NavLink } from "react-router-dom";
const NavDropdown = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>Shop</DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem className="py-4">
                    <NavLink to="shop?category=men">
                        men&apos;s clothing
                    </NavLink>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="py-4">
                    <NavLink to="shop?category=women">
                        women&apos;s clothing
                    </NavLink>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default NavDropdown;
