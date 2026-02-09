
import React from "react";
import { Heart, ShoppingBag } from 'lucide-react'; // Using lucide-react for icons


const ProductCard = ({ img, title, price, tag }) => {
  return (
    /* Added z-0 and relative to keep the card at the base level */
    <div className="relative  z-10 group  max-w-75 font-sans group bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300 ease-in-out cursor-pointer">
      
      {/* Image Container */}
      <div className="relative overflow-hidden">
      
        <img 
          src={img} 
          alt="Product"
          className="w-full h-auto object-cover"
        />
        
        {/* The "New" badge stays on top of the image only */}
        <span className="absolute bottom-2 right-2 bg-[#80333a] text-white text-[10px] px-2 py-1 z-10">
          {tag ? tag : 'New'}
        </span>
      </div>

      {/* Details Section */}
      <div className="mt-3 p-2">
        <div className="flex justify-between items-center mb-2">
          <span className="border border-black px-4 py-1 text-xs uppercase tracking-widest">
            Ikat
          </span>
          <div className="flex gap-3 text-gray-500">
            <Heart size={18} />
            <ShoppingBag size={18} />
          </div>
        </div>

        <h3 className="text-sm font-normal text-gray-800">
          {title}
        </h3>
        <p className="text-base font-bold mt-1">
          ₹ {price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;