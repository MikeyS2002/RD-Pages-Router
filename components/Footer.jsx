import React from "react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="flex justify-between p-20 mt-1 text-white bg-black">
            <Link href="/" className="h1">
                Home
            </Link>
            <p className=" w-[500px]">
                This website is a demo ecommerce platform developed as part of a
                Next.js performance research project comparing App Router vs
                Pages Router. All bike models, specifications, prices, and brand
                information are fictional. No actual products are available for
                purchase
            </p>
        </footer>
    );
};

export default Footer;
