// Example usage of the Cart Context in a Product Component
// You can use this pattern in ProductView.jsx or ProductCard.jsx

import React, { useState } from "react";
import { useCart } from "../hooks/useCart";

// Using actual products from your project
const sampleProduct = {
  _id: 'fjEarring',
  name: 'Samoolam Handmade Crescent Moon Beige, Brown Earrings',
  price: 650,
  image: [
    'https://okhai.org/cdn/shop/files/EAR064-A_1.jpg?v=1698667378&width=750',
    'https://okhai.org/cdn/shop/files/EAR064-A.jpg?v=1698667378&width=750',
    'https://okhai.org/cdn/shop/files/EAR064-A_2.jpg?v=1698667376&width=750'
  ],
  description: 'Discover our captivating collection of contemporary minimalist earrings designed with a minimalist touch to elevate your everyday style. These versatile pieces are the perfect pairing for both Indian and western wear, adding a head-turning allure to any occasion.',
  washCare: 'Hand wash separately. Dry clean recommended for delicate items.',
};

const ProductExample = () => {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }

    addToCart({
      id: sampleProduct._id,
      name: sampleProduct.name,
      price: sampleProduct.price,
      image: sampleProduct.image[0],
      size: selectedSize,
      qty: quantity,
    });

    alert("✓ Product added to cart!");
    setQuantity(1);
    setSelectedSize("");
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* IMAGE SECTION */}
        <div className="space-y-4">
          <div className="bg-gray-100 aspect-square overflow-hidden rounded">
            <img
              src={sampleProduct.image[currentImageIndex]}
              alt={sampleProduct.name}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* THUMBNAIL GALLERY */}
          <div className="flex gap-3">
            {sampleProduct.image.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`w-16 h-16 border-2 rounded overflow-hidden ${
                  currentImageIndex === idx
                    ? "border-orange-500"
                    : "border-gray-300 hover:border-gray-500"
                }`}
              >
                <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* PRODUCT DETAILS SECTION */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{sampleProduct.name}</h1>
            <p className="text-gray-600 mb-4">Product ID: {sampleProduct._id}</p>
          </div>

          {/* PRICE */}
          <div className="text-4xl font-bold text-orange-500">
            ₹ {sampleProduct.price.toLocaleString('en-IN')}
          </div>

          {/* DESCRIPTION */}
          <p className="text-gray-700 leading-relaxed">
            {sampleProduct.description}
          </p>

          {/* SIZE SELECTION */}
          <div>
            <label className="block text-sm font-semibold mb-3">Select Size:</label>
            <div className="flex flex-wrap gap-3">
              {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-6 py-3 font-medium border-2 rounded transition-all ${
                    selectedSize === size
                      ? "bg-orange-500 text-white border-orange-500"
                      : "border-gray-300 text-gray-800 hover:border-orange-500"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
            {selectedSize && (
              <p className="text-sm text-orange-600 mt-2 font-medium">
                ✓ Size {selectedSize} selected
              </p>
            )}
          </div>

          {/* QUANTITY SELECTION */}
          <div>
            <label className="block text-sm font-semibold mb-3">Quantity:</label>
            <div className="flex items-center gap-1 border border-gray-300 w-fit rounded">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-5 py-3 hover:bg-orange-100 font-bold text-lg transition"
              >
                −
              </button>
              <span className="px-6 py-3 font-bold text-lg min-w-[4rem] text-center">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-5 py-3 hover:bg-orange-100 font-bold text-lg transition"
              >
                +
              </button>
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="space-y-3 pt-4">
            <button
              onClick={handleAddToCart}
              disabled={!selectedSize}
              className={`w-full py-4 font-bold text-lg rounded transition ${
                selectedSize
                  ? "bg-orange-500 text-white hover:bg-orange-600 cursor-pointer"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              ADD TO CART
            </button>

            <button className="w-full border-2 border-orange-500 text-orange-500 py-4 font-bold text-lg rounded hover:bg-orange-50 transition">
              ❤ ADD TO WISHLIST
            </button>
          </div>

          {/* WASH CARE */}
          <details className="border-t pt-4">
            <summary className="cursor-pointer font-semibold text-sm hover:text-orange-500 transition">
              ℹ️ Wash Care Instructions
            </summary>
            <p className="text-sm text-gray-600 mt-3">{sampleProduct.washCare}</p>
          </details>

          {/* FREE SHIPPING INFO */}
          <div className="bg-orange-50 border border-orange-200 p-4 rounded">
            <p className="text-sm text-orange-700 font-medium">
              ✓ Free shipping on orders above ₹5000
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductExample;
