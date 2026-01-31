import Kurta1 from "../../../assets/company/clothingPageImages/kurta1.jpg";
import Dress1 from "../../../assets/company/clothingPageImages/dress1.webp";


const imageMap = {
  "kurta1.jpg": Kurta1,
  "dress1.webp": Dress1
};

const ProductCard = ({ product }) => {
  return (
    <div className="cursor-pointer group">
      {/* IMAGE CONTAINER */}
      <div className="relative w-full h-[480px] overflow-hidden">
        <img
          src={imageMap[product.image]}
          alt={product.name}
          className="w-full h-full object-cover"
        />

        {/* LEFT ARROW */}
        <button className="absolute left-2 top-1/2 -translate-y-1/2 
          bg-white p-2 rounded-full shadow 
          opacity-0 group-hover:opacity-100 transition">
          ‹
        </button>

        {/* RIGHT ARROW */}
        <button className="absolute right-2 top-1/2 -translate-y-1/2 
          bg-white p-2 rounded-full shadow 
          opacity-0 group-hover:opacity-100 transition">
          ›
        </button>

        {product.isNew && (
          <span className="absolute bottom-2 right-2 bg-red-600 text-white text-xs px-2 py-0.5">
            New
          </span>
        )}
      </div>

      {/* TEXT (OUTSIDE IMAGE CONTAINER) */}
      <h4 className="mt-2 text-sm">{product.name}</h4>
      <p className="text-sm font-semibold">₹{product.price}</p>
    </div>
  );
};

export default ProductCard;
