import React from "react";
import Image from "next/image";
import Price from "../components/Price";

const PDP = ({ product }) => {
    return (
        <div className="grid grid-cols-3 gap-20 ">
            <div className="col-span-2">
                <div className="grid grid-cols-2 gap-1">
                    {product.images.map((image, idx) => (
                        <div
                            key={idx}
                            className="relative overflow-hidden transition bg-gray-100 aspect-square"
                        >
                            <Image
                                src={image.url}
                                alt={image.alt || `${product.title} ${idx + 1}`}
                                fill
                                sizes="(max-width: 1024px) 25vw, 12vw"
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>
                {product.specs && product.specs.length > 0 && (
                    <div className="mt-10">
                        <dl className="space-y-2">
                            {product.specs.map((spec) => (
                                <div
                                    key={spec.id}
                                    className="flex py-2 border-b border-black h3"
                                >
                                    <dt className="w-[200px]">{spec.title}</dt>
                                    <dd>{spec.value}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                )}
            </div>
            <div>
                <h1 className="h2">{product.title}</h1>
                <p className="mt-4 mb-10 opacity-70">{product.description}</p>
                <Price amount={product.price} className="h1" />
            </div>
        </div>
    );
};

export default PDP;
