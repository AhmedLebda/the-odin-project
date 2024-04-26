import PaymentImages from "../../Images/pay-methods.png";

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer className=" p-8 bg-gray-200 text-gray-700 text-sm flex flex-col gap-4 sm:flex-row justify-between items-center capitalize">
            <p className="pb-2">
                Osiris Outlet &copy; {year}, all rights reserved{" "}
            </p>
            <img src={PaymentImages} alt="Payment Methods" />
        </footer>
    );
};
export default Footer;
