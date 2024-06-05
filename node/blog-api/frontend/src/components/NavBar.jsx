import Button from "@mui/material/Button";

const NavBar = () => {
    return (
        <header className="py-4 px-6 flex justify-between items-center shadow-md ">
            <p className="font-bold text-3xl">Blog</p>
            <nav>
                <Button variant="contained">logout</Button>
            </nav>
        </header>
    );
};

export default NavBar;
