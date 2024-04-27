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
                <NavLink to="shop" className="py-2 capitalize font-bold">
                    <DropdownMenuItem>all products</DropdownMenuItem>
                </NavLink>
                <DropdownMenuSeparator />
                <NavLink
                    to="shop?category=men's clothing"
                    className="py-2 capitalize font-bold"
                >
                    <DropdownMenuItem>men&apos;s clothing</DropdownMenuItem>
                </NavLink>
                <DropdownMenuSeparator />
                <NavLink
                    to="shop?category=women's clothing"
                    className="py-2 capitalize font-bold"
                >
                    <DropdownMenuItem>women&apos;s clothing</DropdownMenuItem>
                </NavLink>
                <DropdownMenuSeparator />
                <NavLink
                    to="shop?category=electronics"
                    className="py-2 capitalize font-bold"
                >
                    <DropdownMenuItem>electronics</DropdownMenuItem>
                </NavLink>
                <DropdownMenuSeparator />
                <NavLink
                    to="shop?category=jewelery"
                    className="py-2 capitalize font-bold"
                >
                    <DropdownMenuItem>jewelery</DropdownMenuItem>
                </NavLink>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default NavDropdown;
