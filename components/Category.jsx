import { useState } from "react";
import Card from "@/components/Card";
import SortSelect from "@/components/SortSelect";

const Category = ({ category }) => {
    const [sortBy, setSortBy] = useState("default");

    const sortedProducts = [...category.products].sort((a, b) => {
        switch (sortBy) {
            case "price-low":
                return a.price - b.price;
            case "price-high":
                return b.price - a.price;
            case "name-asc":
                return a.title.localeCompare(b.title);
            case "name-desc":
                return b.title.localeCompare(a.title);
            default:
                return 0;
        }
    });

    return (
        <>
            <div className="z-10 flex justify-between px-10 py-4 bg-white border-b border-black">
                <h4 className="h1">{category.products.length} items</h4>
                <SortSelect value={sortBy} onChange={setSortBy} />
            </div>

            <div className="grid grid-cols-1 gap-1 m-1 md:grid-cols-2">
                {sortedProducts.map((product) => (
                    <Card
                        key={product.id}
                        product={product}
                        category={category.slug}
                    />
                ))}
            </div>
        </>
    );
};

export default Category;
