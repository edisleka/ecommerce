import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const searchProductsByName = async (searchParam: string) => {
  const PRODUCT_SEARCH_QUERY = defineQuery(`
    *[_type == "product" && name match $searchParam] | order(name asc) `);

  try {
    // Use sanity to send the query to the database and pass the searchParam with a wildcard
    const products = await sanityFetch({
      query: PRODUCT_SEARCH_QUERY,
      params: {
        searchParam: `${searchParam}*`, // Append wildcard for partial match
      },
    });

    // Return the data or an empty array if no data is found in the database for the searchParam provided by the user in the search bar
    return products.data || [];
  } catch (error) {
    console.error("Error fetching products by name", error);
    return [];
  }
};
