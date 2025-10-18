import React from "react";
import Link from "next/link";

const Breadcrumbs = ({ product }) => {
    return (
        <nav className="mb-4 body">
            <Link href="/">Home</Link>
            <span className="mx-2">/</span>
            <Link href={`/${product.category.slug}`}>
                {product.category.title}
            </Link>
            <span className="mx-2">/</span>
            <span className="opacity-70">{product.title}</span>
        </nav>
    );
};

export default Breadcrumbs;
