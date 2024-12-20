import ProductsView from "@/components/ProductsView";
import { getAllProducts } from "@/sanity/lib/products/getAllProducts";
import { getAllCategories } from "@/sanity/lib/products/getAllCategories";

export default async function Home() {
  const produtcs = await getAllProducts();
  const categories = await getAllCategories();

  return (
    <div>
      <div className="flex flex-col items-center justify-top min-h-screen gb-gray-100 p-4">
        <ProductsView products={produtcs} categories={categories} />
      </div>
    </div>
  );
}
