import { buttonVariants } from "../components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <section className="p-8 max-w-screen-sm flex flex-col gap-8 items-center text-center mx-auto">
            <h1 className="text-5xl font-extrabold">About Us</h1>
            <p className="text-lg">
                Osiris Outlet was born of a simple mission - to create
                high-quality, stylish clothes that would empower people to
                express themselves with confidence.
            </p>
            <p className="text-lg">
                Founded by a group of passionate designers and fashion
                enthusiasts
            </p>
            <p className="text-lg">
                Today, we continue to build on that legacy by designing unique
                and trendsetting clothes that reflect the spirit and creativity
                of our brand. Join us as we continue to redefine fashion and
                bring our vision to life.
            </p>
            <Link
                to="../shop/all"
                className={`rounded-2xl px-12 capitalize ${buttonVariants({
                    variant: "default",
                })}`}
            >
                shop now
            </Link>
        </section>
    );
};

export default About;
