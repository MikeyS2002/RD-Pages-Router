import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getAllCategories } from "../lib/datocms";

const Navbar = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showCategories, setShowCategories] = useState(false);

    useEffect(() => {
        async function fetchCategories() {
            try {
                const data = await getAllCategories();
                setCategories(data);
            } catch (error) {
                console.error("Failed to fetch categories:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchCategories();
    }, []);

    return (
        <div
            onMouseLeave={() => setShowCategories(false)}
            className="sticky top-0 z-10"
        >
            <nav className="flex justify-end bg-white border-b border-black">
                <Link
                    href="/"
                    className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h2"
                >
                    Mike&apos;s Bikes
                </Link>
                <ul className="flex justify-end gap-10 px-10 py-4 h1">
                    <li
                        onMouseEnter={() => setShowCategories(true)}
                        className="cursor-pointer"
                    >
                        <Link href="/">Shop</Link>
                    </li>
                    <li>
                        <Link href="/about-us">About us</Link>
                    </li>
                </ul>
            </nav>

            {/* Category dropdown */}
            <div className="h-0">
                {showCategories && (
                    <div className="flex justify-end w-full bg-white border-b border-black">
                        <ul className="flex justify-end gap-10 px-10 py-4 ">
                            {loading ? (
                                <li className="h1">Loading...</li>
                            ) : (
                                categories.map((category) => (
                                    <li key={category.id} className="h1">
                                        <Link href={`/${category.slug}`}>
                                            {category.title}
                                        </Link>
                                    </li>
                                ))
                            )}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
