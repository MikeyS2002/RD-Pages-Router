import React from "react";

const Text = () => {
    return (
        <section className="w-[650px] mx-auto my-20">
            <h1 className="mt-4 h3">Our story</h1>
            <p>
                Mikes Bikes is a demonstration ecommerce platform created to
                explore the future of web performance. We&apos;re not just
                building a bike shop—we&apos;re conducting real-world research
                on how modern web technologies can deliver faster, more
                efficient online shopping experiences.
            </p>
            <h2 className="mt-4 h3">The Research Behind the Store</h2>
            <p>
                This website serves as a practical case study comparing Next.js
                App Router versus the traditional Pages Router. Our goal is to
                answer a critical question facing web developers today: Does the
                new App Router actually deliver better performance?
            </p>
            <h3 className="mt-4 h3">What We&apos;re Testing</h3>
            <p>
                We&apos;re measuring real performance metrics that affect your
                browsing experience:
            </p>
            <ul className="ml-4 list-disc body">
                <li>
                    Bundle Size - How much JavaScript your browser needs to
                    download
                </li>
                <li>
                    Page Load Speed - How quickly pages become visible and
                    interactive
                </li>
                <li>
                    Web Vitals - Google&apos;s core metrics for user experience
                    (LCP, FCP, TTI)
                </li>
                <li>
                    Network Conditions - Performance across 3G, 4G, and fast
                    WiFi connections
                </li>
            </ul>
            <h3 className="mt-4 h3">Why It Matters</h3>
            <p>
                When Next.js 13 launched in October 2022, it introduced React
                Server Components and a completely new way to build
                applications. The developer community had mixed reactions—some
                praised the innovation, while others struggled with unexpected
                complexity and bugs.
                <br />
                <br />
                Vercel marked the App Router as &quot;stable,&quot; but
                questions remained: Does the added complexity translate to real
                performance benefits for users?
            </p>
        </section>
    );
};

export default Text;
