import React, { useState, useEffect } from "react";
import { Heart, Share2, Ruler } from "lucide-react";
import { Products } from "../products/data/products.js"; // Ensure this path is correct
import { useParams } from "react-router-dom";
import { useCart } from "../../../hooks/useCart";

const ProductView = () => {
  // 1. Get the dynamic ID or slug from the URL
  const { slug } = useParams();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [qty, setQty] = useState(1);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(true);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    // 2. Logic to find the clicked product
    // We check against ID (converted to Number) or Slug depending on your Route setup
    const found = Products.find(item =>
      item.id === Number(slug) || item.slug === slug
    );

    if (found) {
      setProduct(found);
      setActiveImage(0);
      if (found.sizes && found.sizes.length > 0) {
        setSelectedSize(found.sizes[0]); // Default to first available size
      }
    }
    // Always scroll to top when a new product loads
    window.scrollTo(0, 0);
  }, [slug]);

  // Handle Add to Cart
  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size before adding to cart");
      return;
    }

    addToCart({
      id: product.id,
      name: product.title,
      price: product.price,
      image: product.images[0],
      size: selectedSize,
      qty: qty,
    });

    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  // 3. Loading state if product isn't found yet
  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Finding your product...</h2>
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-orange-500"></div>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-32 font-sans text-gray-800 bg-gray-50 min-h-screen pt-39">

      {/* Breadcrumbs - uses product.title to match your data */}
      <div className="text-xs text-gray-500 mb-8 uppercase tracking-wide">
        Home / Clothing / <span className="text-gray-900 font-medium">{product.title}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

        {/* LEFT: IMAGE GALLERY */}
        <div className="space-y-6">
          <div className="relative bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
            <div className="w-full h-[500px] md:h-[600px] flex items-center justify-center p-4">
              <img
                src={product.images[activeImage]}
                alt={product.title}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Thumbnails */}
          <div className="flex gap-3 overflow-x-auto pb-2">
            {product.images.map((img, i) => (
              <div
                key={i}
                className={`shrink-0 w-20 h-24 rounded-lg overflow-hidden cursor-pointer border-2 transition-all ${activeImage === i ? "border-orange-500" : "border-transparent hover:border-gray-300"
                  }`}
                onClick={() => setActiveImage(i)}
              >
                <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: PRODUCT DETAILS */}
        <div className="lg:sticky lg:top-32 self-start">
          <h1 className="text-2xl md:text-4xl font-serif font-medium mb-4">{product.title}</h1>

          <div className="flex items-center gap-2 mb-6">
            <div className="flex text-yellow-400">
              {"★".repeat(product.rating || 5)}
              <span className="text-gray-300">{"★".repeat(5 - (product.rating || 5))}</span>
            </div>
            <span className="text-sm text-gray-500">({product.reviews || 0} reviews)</span>
          </div>

          <div className="mb-8">
            <div className="text-3xl font-bold text-gray-900 mb-1">
              ₹ {product.price.toLocaleString()}
            </div>
            <p className="text-sm text-gray-500">Inclusive of all taxes</p>
          </div>

          {/* Quantity */}
          <div className="mb-8">
            <label className="block text-sm font-medium mb-3">Quantity</label>
            <div className="flex items-center w-32 border border-gray-300 rounded-lg">
              <button className="w-10 h-10 hover:bg-gray-100" onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
              <span className="flex-1 text-center font-semibold">{qty}</span>
              <button className="w-10 h-10 hover:bg-gray-100" onClick={() => setQty(qty + 1)}>+</button>
            </div>
          </div>

          {/* Size Selection */}
          <div className="mb-8">
            <div className="flex justify-between mb-4">
              <label className="text-sm font-medium">Size</label>
              <button className="flex items-center gap-1 text-xs text-gray-500"><Ruler size={14} /> Size Chart</button>
            </div>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-2 px-6 border rounded-lg transition-all ${selectedSize === size ? "bg-black text-white border-black" : "bg-white hover:border-orange-500"
                    }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <button 
              onClick={handleAddToCart}
              className={`text-white py-4 rounded-lg font-bold transition-all ${
                addedToCart
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-orange-500 hover:bg-orange-600"
              }`}
            >
              {addedToCart ? "✓ ADDED" : "ADD TO CART"}
            </button>
            <button className="bg-black text-white py-4 rounded-lg font-bold hover:bg-gray-800 transition-colors">BUY NOW</button>
          </div>

          {/* Description Accordion */}
          <div className="border-t pt-4">
            <button
              className="flex justify-between w-full py-2 font-bold text-lg"
              onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
            >
              Description <span>{isDescriptionOpen ? "−" : "+"}</span>
            </button>
            {isDescriptionOpen && (
              <div className="text-sm text-gray-600 space-y-4 pt-2">
                <p>{product.description}</p>
                {/* Check if details is an array (map it) or an object (display keys) */}
                {Array.isArray(product.details) ? (
                  <ul className="list-disc pl-5 space-y-1">
                    {product.details.map((d, i) => <li key={i}>{d}</li>)}
                  </ul>
                ) : (
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <p><strong>Material:</strong> {product.details?.material_desc}</p>
                    <p><strong>Care:</strong> {product.details?.care}</p>
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