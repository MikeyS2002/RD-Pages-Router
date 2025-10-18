const DATOCMS_API_TOKEN = process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN;
const DATOCMS_API_URL = "https://graphql.datocms.com/";

/**
 * Fetches data from DatoCMS GraphQL API
 * Works in both Pages Router (getServerSideProps) and App Router (Server Components)
 */
async function fetchDatoCMS(query, variables = {}) {
    const response = await fetch(DATOCMS_API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${DATOCMS_API_TOKEN}`,
        },
        body: JSON.stringify({
            query,
            variables,
        }),
        // App Router: enable caching
        // Pages Router: this option is ignored
        next: { revalidate: 60 }, // Cache for 60 seconds in App Router
    });

    const json = await response.json();

    if (json.errors) {
        console.error("DatoCMS Error:", json.errors);
        throw new Error("Failed to fetch data from DatoCMS");
    }

    return json.data;
}

/**
 * Get all products for homepage
 */
export async function getAllProducts() {
    const query = `
    query {
      allProducts {
        id
        title
        slug
        price
        _firstPublishedAt
        category {
          slug
        }
        images {
          url
          alt
        }
      }
    }
  `;

    const data = await fetchDatoCMS(query);
    return data.allProducts;
}

/**
 * Get products by category
 */
export async function getProductsByCategory(categorySlug) {
    const query = `
    query GetProductsByCategory($categorySlug: String!) {
      category(filter: { slug: { eq: $categorySlug } }) {
        slug
        title
        products {
          id
          title
          slug
          price
          category {
            slug
          }
          images {
            url
            alt
          }
        }
      }
    }
  `;

    const data = await fetchDatoCMS(query, { categorySlug });
    return data.category;
}

/**
 * Get single product by slug
 */
export async function getProductBySlug(slug) {
    const query = `
    query GetProduct($slug: String!) {
      product(filter: { slug: { eq: $slug } }) {
        id
        title
        slug
        price
        description
        _firstPublishedAt
        category {
          slug
          title
        }
        images {
          url
          alt
        }
        specs {
          id
          title
          value
        }
      }
    }
  `;

    const data = await fetchDatoCMS(query, { slug });
    return data.product;
}

/**
 * Get all categories (for navigation)
 */
export async function getAllCategories() {
    const query = `
    query {
      allCategories {
        id
        slug
        title
      }
    }
  `;

    const data = await fetchDatoCMS(query);
    return data.allCategories;
}
