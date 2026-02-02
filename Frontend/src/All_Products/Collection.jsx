//All Clothing Jayam Part
import FiltersSidebar from "../collections/Clothing/products/filters/FiltersSideBar";
import ProductsHeader from "../collections/CLothing/products/ProductsHeader";
import ProductGrid from "../collections/CLothing/products/ProductGrid";
import { allWomenProducts } from "../collections/CLothing/products/data/products";

const Collection = () => {
  return (
    <section className="flex px-10 py-6">
  {/* FIXED FILTER */}
  <aside className="w-64 fixed top-40 left-10 h-[calc(100vh-160px)] overflow-y-auto">
    <FiltersSidebar />
  </aside>

  {/* MAIN CONTENT */}
  <div className="ml-70 flex-1">
    <ProductsHeader total={allWomenProducts.totalCount} />
        <ProductGrid products={allWomenProducts.products} />
  </div>
</section>

  );
};

export default Collection;
