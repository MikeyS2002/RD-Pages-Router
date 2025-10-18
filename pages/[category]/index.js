import { getProductsByCategory } from "../../lib/datocms";
import Category from "@/components/Category";

export default function CategoryPage({ category }) {
    return (
        <main>
            <Category category={category} />
        </main>
    );
}

export async function getServerSideProps({ params }) {
    const category = await getProductsByCategory(params.category);

    if (!category) {
        return { notFound: true };
    }

    return {
        props: { category },
    };
}
