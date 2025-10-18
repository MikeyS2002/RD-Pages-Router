import FullImage from "@/components/FullImage";
import dynamic from "next/dynamic";

import { getAllProducts } from "@/lib/datocms";

const Slider = dynamic(() => import("../components/Slider"), {
    ssr: false,
});

export default function Home({ products }) {
    return (
        <main>
            <FullImage
                url="/home-1.jpg"
                alt="Mike's Bikes Home Image One"
                priority
            />
            <Slider products={products} />
            <FullImage url="/home-2.jpg" alt="Mike's Bikes Home Image Two" />
        </main>
    );
}

export async function getServerSideProps() {
    const products = await getAllProducts();

    return {
        props: {
            products,
        },
    };
}
