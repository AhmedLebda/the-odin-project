import { buttonVariants } from "../components/ui/button";
import { Link } from "react-router-dom";
import ckLogo from "../Images/ck-logo.png";
import gucciLogo from "../Images/gucci-logo.png";
import pradaLogo from "../Images/prada-logo.png";
import versaceLogo from "../Images/versace-logo.png";
import zaraLogo from "../Images/zara-logo.png";
const Home = () => {
    return (
        <div className=" bg-slate-50 flex flex-col">
            <header className="p-8 flex flex-col gap-8 lg:px-40 ">
                <h1 className="font-extrabold text-5xl uppercase">
                    find clothes that match your style
                </h1>
                <p className="md:w-2/3 ">
                    Browse through our diverse range of meticulously crafted
                    garments, designed to bring out your individuality and cater
                    to your sense of style.
                </p>
                <Link
                    to="shop/all"
                    className={`self-start rounded-2xl px-8 capitalize ${buttonVariants(
                        {
                            variant: "default",
                        }
                    )}`}
                >
                    shop now
                </Link>
                <div className="flex gap-4">
                    <div className="border-r-2 pr-4">
                        <h2 className="font-bold text-3xl">200+</h2>
                        <p className="text-gray-600 capitalize">
                            international brands
                        </p>
                    </div>
                    <div className="border-r-2 pr-4">
                        <h2 className="font-bold text-3xl">2,000+</h2>
                        <p className="text-gray-600 capitalize">
                            hight-quality products
                        </p>
                    </div>
                    <div>
                        <h2 className="font-bold text-3xl">30,000+</h2>
                        <p className="text-gray-600 capitalize">
                            happy customers
                        </p>
                    </div>
                </div>
            </header>
            <footer className="bg-black p-4 mt-auto hidden sm:flex justify-around items-center gap-4">
                <img src={versaceLogo} alt="versace logo" className="w-20" />
                <img src={zaraLogo} alt="zara logo" className="w-16" />
                <img src={gucciLogo} alt="gucci logo" className="w-20" />
                <img src={pradaLogo} alt="prada logo" className="w-20" />
                <img src={ckLogo} alt="calvin klein logo" className="w-24" />
            </footer>
        </div>
    );
};

export default Home;
