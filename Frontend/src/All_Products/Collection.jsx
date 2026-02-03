//All Clothing Jayam Part
import Kurta1 from "../assets/company/clothingPageImages/kurta1.png";
import Dress1 from "../assets/company/clothingPageImages/dress1.png";
import Dress2 from "../assets/company/clothingPageImages/dress2.png";
import Dress3 from "../assets/company/clothingPageImages/dress3.png";
import ProductCard from "../collections/Clothing/products/ProductCard";

import React, { useState } from "react";



const Collection = () => {
  const [price, setPrice] = useState(null);
  const [productType, setProductType] = useState(null);
  const [size, setSize] = useState(null);

  const [Craft, setCraft] = useState(null);
  const [Material, setMaterial] = useState(null);
  const [Ocassion, setOcassion] = useState(null);
  const [Gender, setGender] = useState(null);

  //price filter toggle function
  const [selectedRange, setSelectedRange] = useState("");
  // 1. Data structure for ranges
  const priceOptions = [
    { label: "Upto 2000", min: 0, max: 2000, id: "r1" },
    { label: "Rs. 2000-5000", min: 2000, max: 5000, id: "r2" },
    { label: "Rs. 5000-10000", min: 5000, max: 10000, id: "r3" },
    { label: "Above 10000", min: 10000, max: 100000, id: "r4" },
  ];
  const handleRadioChange = (e) => {
    setSelectedRange(e.target.value);
    console.log("Filtering products for range:", e.target.value);
    // Here you would call your filter function
  };




  return (
    /* Use flex here to put sidebar and content side-by-side */
    <section className="relative flex px-6 py-50 max-w-[1600px] mx-auto">

      {/* 1. LEFT SIDEBAR (Sticky is better than Fixed here so it stays in the flow) */}
      <aside className="w-64 sticky top-32 h-[calc(100vh-140px)] overflow-y-auto hidden md:block">
        <div className="flex flex-wrap justify-between items-center">

        <h2 className="text-sm font-bold tracking-widest text-[#B48B39] mb-8">FILTERS</h2>
        {selectedRange && (
          <button
            onClick={() => setSelectedRange("")}
            className="text-sm text-left text-red-700 underline "
          >
            Clear Filter
          </button>
        )}
        </div>

        {/* Example Filter Categories to match image */}
        <div className="space-y-6 text-sm uppercase font-medium ">
          <div className="flex justify-between pb-2 cursor-pointer hover:text-yellow-700" onClick={() => setPrice(!price)} >
            <span>Price</span>
            <span className={`transition-transform duration-300 ease-in-out ${price ? 'rotate-180' : 'rotate-0'}`}>
              ▲
            </span>
          </div>
          {price && (
            <>
              {priceOptions.map((option) => (
                <div key={option.id} className="flex justify-between items-center group cursor-pointer">
                  <label
                    htmlFor={option.id}
                    className="text-sm font-medium text-gray-600 group-hover:text-black cursor-pointer uppercase tracking-tight"
                  >
                    {option.label}
                  </label>
                  <input
                    id={option.id}
                    type="radio"
                    name="priceRange" // This "name" connects them as a group
                    value={`${option.min}-${option.max}`}
                    checked={selectedRange === `${option.min}-${option.max}`}
                    onChange={handleRadioChange}
                    className="w-4 h-4 accent-black cursor-pointer"
                  />
                </div>
              ))}
            </>

          )}



          <div className="flex justify-between  pb-2 cursor-pointer hover:text-yellow-700">
            <span>Product Type</span> <span>▼</span>
          </div>
          <div className="flex justify-between  pb-2 cursor-pointer">
            <span>Size</span> <span>▼</span>
          </div>
          <div className="flex justify-between  pb-2 cursor-pointer">
            <span>Craft</span> <span>▼</span>
          </div>
        </div>
      </aside>

      {/* 2. MAIN CONTENT AREA */}
      <main className="flex-1 ml-10">

        {/* Top Bar: Products count and Sort */}
        <div className="flex justify-between items-center mb-8">
          <span className="text-gray-700 font-medium">369 Products</span>
          <div className="flex items-center gap-2 border px-4 py-2 text-sm cursor-pointer">
            Sort <span className="text-[10px]">▼</span>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-10">
          <ProductCard img={Kurta1} title="Okhai 'Affection' Pure Cotton Dress" price="4,200" tag="Best Seller" />
          <ProductCard img={Dress1} title="Okhai 'Black Olive' Pure Linen Pant" price="3,500" />
          <ProductCard img={Dress2} title="Okhai 'Ishqiya' Hand-Embroidery" price="4,100" tag="Best Seller" />
          <ProductCard img={Dress3} title="Okhai 'Mighty' Hand Embroidered" price="4,200" tag="Best Seller" />
          <ProductCard img={Kurta1} title="Okhai 'Affection' Pure Cotton Dress" price="4,200" tag="Best Seller" />
          <ProductCard img={Dress1} title="Okhai 'Black Olive' Pure Linen Pant" price="3,500" />
          <ProductCard img={Dress2} title="Okhai 'Ishqiya' Hand-Embroidery" price="4,100" tag="Best Seller" />
          <ProductCard img={Dress3} title="Okhai 'Mighty' Hand Embroidered" price="4,200" tag="Best Seller" />
          <ProductCard img={Kurta1} title="Okhai 'Affection' Pure Cotton Dress" price="4,200" tag="Best Seller" />
          <ProductCard img={Dress1} title="Okhai 'Black Olive' Pure Linen Pant" price="3,500" />
          <ProductCard img={Dress2} title="Okhai 'Ishqiya' Hand-Embroidery" price="4,100" tag="Best Seller" />
          <ProductCard img={Dress3} title="Okhai 'Mighty' Hand Embroidered" price="4,200" tag="Best Seller" />
          <ProductCard img={Kurta1} title="Okhai 'Affection' Pure Cotton Dress" price="4,200" tag="Best Seller" />
          <ProductCard img={Dress1} title="Okhai 'Black Olive' Pure Linen Pant" price="3,500" />
          <ProductCard img={Dress2} title="Okhai 'Ishqiya' Hand-Embroidery" price="4,100" tag="Best Seller" />
          <ProductCard img={Dress3} title="Okhai 'Mighty' Hand Embroidered" price="4,200" tag="Best Seller" />
          <ProductCard img={Kurta1} title="Okhai 'Affection' Pure Cotton Dress" price="4,200" tag="Best Seller" />
          <ProductCard img={Dress1} title="Okhai 'Black Olive' Pure Linen Pant" price="3,500" />
          <ProductCard img={Dress2} title="Okhai 'Ishqiya' Hand-Embroidery" price="4,100" tag="Best Seller" />
          <ProductCard img={Dress3} title="Okhai 'Mighty' Hand Embroidered" price="4,200" tag="Best Seller" />
          <ProductCard img={Kurta1} title="Okhai 'Affection' Pure Cotton Dress" price="4,200" tag="Best Seller" />
          <ProductCard img={Dress1} title="Okhai 'Black Olive' Pure Linen Pant" price="3,500" />
          <ProductCard img={Dress2} title="Okhai 'Ishqiya' Hand-Embroidery" price="4,100" tag="Best Seller" />
          <ProductCard img={Dress3} title="Okhai 'Mighty' Hand Embroidered" price="4,200" tag="Best Seller" />
        </div>
      </main>
    </section>
  );
};

export default Collection;
