import ProductsView from "@/components/ProductsView";
import { getAllProducts } from "@/sanity/lib/products/getAllProducts";
import { getAllCategories } from "@/sanity/lib/products/getAllCategories";
import BlackFridayBanner from "@/components/BlackFridayBanner";

export const dynamic = "force-static";
export const revalidate = 60; // revalidate every 60 seconds

export default async function Home() {
  const produtcs = await getAllProducts();
  const categories = await getAllCategories();

  console.log(
    crypto.randomUUID().slice(0, 5) +
      `>>> Rendered the home page for cache with ${produtcs.length} products and ${categories.length} categories`
  );

  return (
    <div>
      <BlackFridayBanner />
      <div className="flex flex-col items-center justify-top min-h-screen gb-gray-100 p-4">
        <ProductsView products={produtcs} categories={categories} />
      </div>
    </div>
  );
}
