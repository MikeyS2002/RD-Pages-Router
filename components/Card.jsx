import React from "react";
import Image from "next/image";
import Link from "next/link";

import Price from "./Price";

const Card = ({ product }) => {
    return (
        <Link
            href={`${product.category.slug}/${product.slug}`}
            className="w-full block relative group overflow-hidden aspect-[5/3] bg-red-50"
        >
            <Image
                src={product.images[0].url}
                alt={product.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 z-10 flex justify-between w-full p-4 h4">
                <h2 className="transition group-hover:-translate-y-2">
                    {product.title}
                </h2>
                <Price
                    className="transition delay-150 group-hover:-translate-y-2"
                    amount={product.price}
                />
            </div>
        </Link>
    );
};

export default Card;
