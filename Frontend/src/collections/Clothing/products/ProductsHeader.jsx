const ProductsHeader = ({ total }) => {
  return (
    <div className="flex justify-between items-center mb-6 max-w-[1100px]">
      <p className="text-sm">{total} Products</p>

      <select className="border px-4 py-2 text-sm">
        <option>Featured</option>
        <option>New Arrivals</option>
        <option>Price: Low to High</option>
        <option>Price: High to Low</option>
        <option>Rating</option>
      </select>
    </div>
  );
};

export default ProductsHeader;
