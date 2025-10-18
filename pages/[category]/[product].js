import PDP from "@/components/PDP";
import { getProductBySlug } from "../../lib/datocms";

import Breadcrumbs from "@/components/Breadcrumbs";

export default function ProductPage({ product }) {
    return (
        <main className="m-20">
            <Breadcrumbs product={product} />
            <PDP product={product} />
        </main>
    );
}

export async function getServerSideProps({ params }) {
    const product = await getProductBySlug(params.product);

    if (!product) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            product,
        },
    };
}
