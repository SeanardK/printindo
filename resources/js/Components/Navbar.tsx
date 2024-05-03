import { Link } from "@inertiajs/react";
import css from "./Navbar.module.css";
import Container from "./Container";

function Navbar() {
    const navbarMenu = [
        {
            name: "Home",
            href: "/",
        },
        {
            name: "About Us",
            href: "/about-us",
        },
        {
            name: "Services",
            href: "/services",
        },
        {
            name: "Contact Us",
            href: "/contact-us",
        },
        {
            name: "Activity",
            href: "/activity",
        },
    ];

    return (
        // h-[190px]
        <nav className=" py-[20px] bg-white sticky top-0">
            <Container>
                <div className="flex items-center justify-between">
                    <Link href="/">
                        <img
                            src="/assets/images/logo_printindo.png"
                            className="h-[78px]"
                        />
                    </Link>

                    <ul>
                        {navbarMenu.map((v) => (
                            <Link
                                className={`${
                                    window?.location?.pathname === v.href
                                        ? css.active
                                        : ""
                                } border border-transparent text-[17px] font-semibold px-[13px] py-[10px] mx-[20px] h-[40px] inline-flex justify-center items-center rounded-md last:mr-0`}
                                href={v.href}
                                key={v.name}
                            >
                                {v.name}
                            </Link>
                        ))}
                    </ul>
                </div>
            </Container>
        </nav>
    );
}

export default Navbar;
