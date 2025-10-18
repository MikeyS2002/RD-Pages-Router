import React from "react";
import Image from "next/image";

const FullImage = ({ url, alt, priority }) => {
    return (
        <section className="relative w-full h-[800px] overflow-hidden">
            <Image
                src={url}
                alt={alt}
                fill
                className="object-cover"
                priority={priority}
                sizes="100vw"
            />
        </section>
    );
};

export default FullImage;
