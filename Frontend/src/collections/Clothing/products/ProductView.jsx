import React, { useState, useEffect } from "react";
import { Heart, Share2, Ruler } from "lucide-react";
import { allWomenProducts } from "./data/products"; // Adjust path as needed

const ProductView = () => {
  // Default to first product for standalone testing
  const defaultProduct = allWomenProducts[0];
  const [product, setProduct] = useState(defaultProduct);
  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("M");
  const [qty, setQty] = useState(1);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(true);

  // Simulate slug change for testing (optional)
  const [testSlug, setTestSlug] = useState("okhai-hibiscus-hand-embroidered-pure-cotton-kurta");

  useEffect(() => {
    // Load product based on test slug
    const found = allWomenProducts.find(item => item.slug === testSlug);
    if (found) {
      setProduct(found);
      setActiveImage(0);
    }
  }, []);

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Product Not Found</h2>
        <p className="text-gray-600">No products available in the data.</p>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-10 font-sans text-gray-800 bg-gray-50 min-h-screen">
      
      {/* Breadcrumbs */}
      <div className="text-xs text-gray-500 mb-8 uppercase tracking-wide">
        Home / Clothing / <span className="text-gray-900 font-medium">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        
        {/* LEFT: IMAGE GALLERY */}
<div className="space-y-6">
  {/* Main Image - FIXED CROPPING */}
  <div className="relative bg-linear-to-br from-orange-50 to-pink-50 rounded-xl shadow-sm overflow-hidden min-h-112.5 md:min-h-137.5 lg:min-h-162.5">
    <div className="w-full h-125 md:h-150 lg:h-175 flex items-start justify-center p-8 md:p-12">
      <img
        src={product.images[activeImage]}
        alt={product.name}
        className="w-full h-full object-contain max-w-full max-h-full" 
        // ↑ Changed from object-cover to object-contain
      />
    </div>
    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm p-3 rounded-2xl shadow-xl cursor-pointer hover:bg-white border">
      <span className="text-2xl">🔍</span>
    </div>
  </div>

  {/* Thumbnails - ALSO FIXED */}
  <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-300">
    {product.images.map((img, i) => (
      <div
        key={i}
        className={`shrink-0 w-20 h-24 md:w-24 md:h-32 rounded-xl overflow-hidden cursor-pointer border-4 transition-all hover:scale-105 shadow-sm ${
          activeImage === i 
            ? "border-orange-500 shadow-orange-200" 
            : "border-transparent hover:border-orange-300 hover:shadow-md"
        }`}
        onClick={() => setActiveImage(i)}
      >
        <div className="w-full h-full p-1 flex items-center justify-center">
          <img
            src={img}
            alt={`Thumbnail ${i + 1}`}
            className="w-full h-full object-contain max-w-full max-h-full" 
            // ↑ Changed from object-cover to object-contain
          />
        </div>
      </div>
    ))}
  </div>
</div>


        {/* RIGHT: PRODUCT DETAILS (Sticky) */}
        <div className="lg:sticky lg:top-24 self-start">
          
          {/* Product Title */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif font-medium leading-tight mb-4">
            {product.name}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-6">
            <div className="flex text-yellow-400 text-lg">
              {"★".repeat(product.rating)}
              {"☆".repeat(5 - product.rating)}
            </div>
            <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
          </div>

          {/* Artisan Link */}
          <div className="border-b border-gray-200 pb-6 mb-6">
            <p className="text-sm text-gray-600 hover:text-orange-600 cursor-pointer">
              View more from this artisan →
            </p>
          </div>

          {/* Price */}
          <div className="mb-8">
            <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
              ₹ {product.price.toLocaleString()}
            </div>
            <p className="text-sm text-gray-500">Inclusive of all taxes</p>
          </div>

          {/* Quantity */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-3">Quantity</label>
            <div className="flex items-center w-32 border border-gray-300 rounded-lg overflow-hidden">
              <button 
                className="w-12 h-12 flex items-center justify-center text-xl hover:bg-gray-50 transition-colors"
                onClick={() => setQty(Math.max(1, qty - 1))}
              >
                −
              </button>
              <span className="px-4 py-3 text-lg font-semibold border-x border-gray-200">
                {qty}
              </span>
              <button 
                className="w-12 h-12 flex items-center justify-center text-xl hover:bg-gray-50 transition-colors"
                onClick={() => setQty(qty + 1)}
              >
                +
              </button>
            </div>
          </div>

          {/* Size */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <label className="text-sm font-medium text-gray-700">Size</label>
              <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-gray-900 transition-colors">
                <Ruler size={14} /> Size Chart
              </button>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-3 px-4 border rounded-lg text-sm font-medium transition-all shadow-sm ${
                    selectedSize === size
                      ? "bg-orange-500 border-orange-500 text-white shadow-md"
                      : "bg-white border-gray-200 hover:border-orange-400 hover:shadow-sm text-gray-800"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <button className="bg-orange-500 hover:bg-orange-600 text-white py-4 px-6 font-semibold uppercase tracking-wide rounded-lg shadow-lg transition-all text-sm hover:shadow-xl transform hover:-translate-y-0.5">
              Add to Cart
            </button>
            <button className="bg-orange-500 hover:bg-orange-600 text-white py-4 px-6 font-semibold uppercase tracking-wide rounded-lg shadow-lg transition-all text-sm hover:shadow-xl transform hover:-translate-y-0.5">
              Buy Now
            </button>
          </div>

          {/* Social Actions */}
          <div className="flex items-center justify-center gap-8 py-6 border-y border-gray-100 mb-8">
            <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-orange-500 transition-colors">
              <Share2 size={18} /> Share
            </button>
            <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-orange-500 transition-colors">
              <Heart size={18} /> Add to Wishlist
            </button>
          </div>

          {/* Description */}
          <div className="space-y-4">
            <button 
              className="flex justify-between items-center w-full py-4 border-b-2 border-dashed border-gray-200"
              onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
            >
              <span className="text-lg font-semibold text-gray-900">Description</span>
              <span className="text-2xl transition-transform">{isDescriptionOpen ? "−" : "+"}</span>
            </button>
            
            {isDescriptionOpen && (
              <div className="text-sm text-gray-700 space-y-4 pt-4 animate-fade-in">
                <p>{product.description}</p>
                {product.details && (
                  <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
                    {product.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 shrink-0"></div>
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductView;
