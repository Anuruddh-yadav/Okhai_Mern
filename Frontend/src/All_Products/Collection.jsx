
// Collection.jsx file 

import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { Products } from '../collections/Clothing/products/data/products'; // Import your database

import Kurta1 from "../assets/company/clothingPageImages/kurta1.png";
import Dress1 from "../assets/company/clothingPageImages/dress1.png";
import Dress2 from "../assets/company/clothingPageImages/dress2.png";
import Dress3 from "../assets/company/clothingPageImages/dress3.png";
import ProductCard from "../collections/Clothing/products/ProductCard";

const Collection = () => {
  // OPEN / CLOSE STATES (boolean only)
  const [price, setPrice] = useState(false);
  const [productTypes, setProductTypes] = useState(false);
  const [size, setSize] = useState(false);
  const [material, setMaterial] = useState(false);
  const [ocassion, setOcassion] = useState(false);
  const [gender, setGender] = useState(false);
  const [fit, setFit] = useState(false);




  // SELECTED VALUES
  const [selectedRange, setSelectedRange] = useState("");
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedMaterial, setSelectedMaterial] = useState([]);
  const [selectedOcassion, setSelectedOcassion] = useState([]);
  const [selectedGender, setSelectedGender] = useState([]);
  const [selectedFit, setSelectedFit] = useState([]);

  // Sorting state
  const [sortBy, setSortBy] = useState("Featured");



  const priceOptions = [
    { label: "Upto 2000", min: 0, max: 2000, id: "r1" },
    { label: "Rs. 2000-5000", min: 2000, max: 5000, id: "r2" },
    { label: "Rs. 5000-10000", min: 5000, max: 10000, id: "r3" },
    { label: "Above 10000", min: 10000, max: 100000, id: "r4" },
  ];

  const clearFilter = (e) => {
    setSelectedRange(e.target.value);
  };

  const resetAllFilters = () => {
    setSelectedRange("");
    setSelectedTypes([]);
    setSelectedSizes([]);
    setSelectedMaterial([]);
    setSelectedOcassion([]);
    setSelectedGender([]);
    setSelectedFit([]);
  };

  const ProductSelected = (value) => {
    setSelectedTypes((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const SizeSelected = (value) => {
    setSelectedSizes((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };



  const MaterialSelected = (value) => {
    setSelectedMaterial((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };
  const OcassionSelected = (value) => {
    setSelectedOcassion((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };


  const GenderSelected = (value) => {
    setSelectedGender((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };
  const FitSelected = (value) => {
    setSelectedFit((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };


  const ProductType = [
    { id: "1", title: "Apparel", },
    { id: "2", title: "Dress" },
    { id: "3", title: "Kurta" },
    { id: "4", title: "Top" },
    { id: "5", title: "Pant Set" },
    { id: "6", title: "Jacket" },
    { id: "7", title: "Kurta set" },
    { id: "8", title: "Night suite" },
    { id: "9", title: "Night suits" },
    { id: "10", title: "Kurta Pant Dupatta Set" },
    { id: "11", title: "Jump suits" },
    { id: "12", title: "Blouse" },
    { id: "13", title: "Kaftan" },
    { id: "14", title: "Saree" },
  ];

  const Size = [
    { id: "XS", title: "XS" },
    { id: "S", title: "S" },
    { id: "M", title: "M" },
    { id: "L", title: "L" },
    { id: "XL", title: "XL" },
    { id: "XXL", title: "XXL" },
  ];

  const MaterialType = [
    { id: "1", title: "cotton" },
    { id: "2", title: "silk" },
    { id: "3", title: "chanderi" },
    { id: "4", title: "mul" },
  ]

  const OcassionType = [
    { id: "1", title: "casual" },
    { id: "2", title: "work" },
    { id: "3", title: "festive" },
    { id: "4", title: "party" },
    { id: "5", title: "travel" },
    { id: "6", title: "lounge" },
  ]
  const GenderType = [
    { id: "1", title: "Women" },
    { id: "2", title: "Men" },

  ]
  const FitType = [
    { id: "1", title: "straight" },
    { id: "2", title: "a-line" },
    { id: "3", title: "relaxed" },
    { id: "4", title: "fit and flare" },
    { id: "5", title: "anti fit" },
  ]

  const { categoryName } = useParams();

  // --- 1. UPDATED FILTER LOGIC (Includes Price, Size, Material, etc.) ---
  // --- 1. FILTER LOGIC ---
  // --- 1. FILTER LOGIC ---
  const filteredProducts = Products.filter(product => {
    // 1. URL Category Filter
    const urlCategory = categoryName?.toLowerCase() || "";
    const matchesCategory = !categoryName || product.productType?.some(type => {
      const formattedType = type.toLowerCase();
      return formattedType === urlCategory ||
        urlCategory === `${formattedType}s` ||
        urlCategory.replace(/-/g, ' ') === formattedType ||
        urlCategory.replace(/-/g, ' ') === `${formattedType}s`;
    });

    // 2. Price Filter
    let matchesPrice = true;
    if (selectedRange) {
      // Handling the "Above 10000" case where max is very high
      const [min, max] = selectedRange.split("-").map(Number);
      matchesPrice = product.price >= min && product.price <= max;
    }

    // 3. Sidebar Filters
    // We use .toLowerCase() on BOTH sides to ensure "Women" matches "women"
    const matchesType = selectedTypes.length === 0 ||
      product.productType?.some(t => selectedTypes.map(st => st.toLowerCase()).includes(t.toLowerCase()));

    const matchesSize = selectedSizes.length === 0 ||
      product.sizes?.some(s => selectedSizes.includes(s));

    const matchesMaterial = selectedMaterial.length === 0 ||
      product.material?.some(m => selectedMaterial.map(sm => sm.toLowerCase()).includes(m.toLowerCase()));

    const matchesOcassion = selectedOcassion.length === 0 ||
      product.occasion?.some(o => selectedOcassion.map(so => so.toLowerCase()).includes(o.toLowerCase()));

    // FIX: Added toLowerCase() here to match your GenderType data
    const matchesGender = selectedGender.length === 0 ||
      selectedGender.map(g => g.toLowerCase()).includes(product.gender?.toLowerCase());

    const matchesFit = selectedFit.length === 0 ||
      selectedFit.map(f => f.toLowerCase()).includes(product.fit?.toLowerCase());

    // IMPORTANT: The final check
    return matchesCategory && matchesPrice && matchesType && matchesSize &&
      matchesMaterial && matchesOcassion && matchesGender && matchesFit;
  });
  // --- 2. SORTING LOGIC ---
  const finalDisplayProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "Price: Low To High") return a.price - b.price;
    if (sortBy === "Price: High To Low") return b.price - a.price;
    if (sortBy === "New Arrivals") return b.id - a.id; // Newest ID first
    return 0; // Featured
  });



  return (

    <section className="relative flex px-6 py-50 max-w-400 mx-auto">
      <aside className="w-64 sticky top-32 h-[calc(100vh-140px)] overflow-y-auto hidden md:block">
        <div className="flex flex-wrap justify-between items-center">
          <h2 className="text-sm font-bold tracking-widest text-[#B48B39] mb-8">
            FILTERS
          </h2>

          {(selectedRange ||
            selectedTypes.length > 0 ||
            selectedSizes.length > 0 ||
            selectedMaterial.length > 0 ||
            selectedOcassion.length > 0 ||
            selectedGender.length > 0 ||
            selectedFit.length > 0) && (
              <button
                onClick={resetAllFilters}
                className="text-sm text-left text-red-700 underline"
              >
                Clear Filter
              </button>
            )}
        </div>

        <div className="space-y-6 text-sm uppercase font-medium max-h-80">
          {/* PRICE */}
          <div
            className="flex justify-between cursor-pointer hover:text-yellow-700"
            onClick={() => setPrice(!price)}
          >
            <span>Price</span>
            <span
              className={`transition-transform duration-300 ${price ? "rotate-180" : "rotate-0"
                }`}
            >
              ▲
            </span>
          </div>

          {price &&
            priceOptions.map((option) => (
              <div key={option.id} className="flex justify-between items-center">
                <label htmlFor={option.id}>{option.label}</label>
                <input
                  id={option.id}
                  type="radio"
                  name="priceRange"
                  value={`${option.min}-${option.max}`}
                  checked={selectedRange === `${option.min}-${option.max}`}
                  onChange={clearFilter}
                />
              </div>
            ))}

          {/* PRODUCT TYPE */}
          <div>
            <div
              className="flex justify-between cursor-pointer hover:text-yellow-700"
              onClick={() => setProductTypes(!productTypes)}
            >
              <span>Product Type</span>
              <span
                className={`transition-transform duration-300 ${productTypes ? "rotate-180" : ""
                  }`}
              >
                ▲
              </span>
            </div>

            {productTypes && (
              <div className="max-h-56 mb-5 overflow-y-auto">
                {ProductType.map((item) => (
                  <label key={item.id} className="flex items-center mt-2">
                    <input
                      type="checkbox"
                      checked={selectedTypes.includes(item.title)}
                      onChange={() => ProductSelected(item.title)}
                    />
                    <span className="ml-3">{item.title}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* SIZE */}
          <div
            className="flex justify-between cursor-pointer hover:text-yellow-700"
            onClick={() => setSize(!size)}
          >
            <span>Size</span>
            <span
              className={`transition-transform duration-300 ${size ? "rotate-180" : "rotate-0"
                }`}
            >
              ▲
            </span>
          </div>

          {size &&
            <div className="max-h-40 mb-3 overflow-y-auto">{
              Size.map((item) => (
                <label key={item.id} className="flex items-center mt-2">
                  <input
                    type="checkbox"
                    checked={selectedSizes.includes(item.title)}
                    onChange={() => SizeSelected(item.title)}
                  />
                  <span className="ml-3">{item.title}</span>
                </label>
              ))
            }
            </div>
          }


          {/* Material    Material    Material*/}
          <div
            className="flex justify-between cursor-pointer hover:text-yellow-700"
            onClick={() => setMaterial(!material)}
          >
            <span>Material</span>
            <span
              className={`transition-transform duration-300 ${material ? "rotate-180" : "rotate-0"
                }`}
            >
              ▲
            </span>
          </div>

          {material && (
            <div className="max-h-40 mb-3 overflow-y-auto">
              {MaterialType.map((item) => (
                <label key={item.id} className="flex items-center mt-2">
                  <input
                    type="checkbox"
                    checked={selectedMaterial.includes(item.title)}
                    onChange={() => MaterialSelected(item.title)}
                  />
                  <span className="ml-3">{item.title}</span>
                </label>
              ))}
            </div>
          )}


          {/* Occasion    Occasion    Occasion */}
          <div
            className="flex justify-between cursor-pointer hover:text-yellow-700"
            onClick={() => setOcassion(!ocassion)}
          >
            <span>Ocassion</span>
            <span
              className={`transition-transform duration-300 ${ocassion ? "rotate-180" : "rotate-0"
                }`}
            >
              ▲
            </span>
          </div>

          {ocassion && (
            <div className="max-h-40 mb-3 overflow-y-auto">
              {OcassionType.map((item) => (
                <label key={item.id} className="flex items-center mt-2">
                  <input
                    type="checkbox"
                    checked={selectedOcassion.includes(item.title)}
                    onChange={() => OcassionSelected(item.title)}
                  />
                  <span className="ml-3">{item.title}</span>
                </label>
              ))}
            </div>
          )}

          {/* Gender  Gender  Gender  Gender */}
          <div
            className="flex justify-between cursor-pointer hover:text-yellow-700"
            onClick={() => setGender(!gender)}
          >
            <span>Gender</span>
            <span
              className={`transition-transform duration-300 ${gender ? "rotate-180" : "rotate-0"
                }`}
            >
              ▲
            </span>
          </div>

          {gender && (
            <div className="max-h-40 mb-3 overflow-y-auto">
              {GenderType.map((item) => (
                <label key={item.id} className="flex items-center mt-2">
                  <input
                    type="checkbox"
                    checked={selectedGender.includes(item.title)}
                    onChange={() => GenderSelected(item.title)}
                  />
                  <span className="ml-3">{item.title}</span>
                </label>
              ))}
            </div>
          )}

          {/* Fit   Fit       Fit */}
          <div
            className="flex justify-between cursor-pointer hover:text-yellow-700"
            onClick={() => setFit(!fit)}
          >
            <span>Fit</span>
            <span
              className={`transition-transform duration-300 ${fit ? "rotate-180" : "rotate-0"
                }`}
            >
              ▲
            </span>
          </div>

          {fit && (
            <div className="max-h-40 mb-3 overflow-y-auto">
              {FitType.map((item) => (
                <label key={item.id} className="flex items-center mt-2">
                  <input
                    type="checkbox"
                    checked={selectedFit.includes(item.title)}
                    onChange={() => FitSelected(item.title)}
                  />
                  <span className="ml-3">{item.title}</span>
                </label>
              ))}
            </div>
          )}



        </div>
      </aside>


      {/* PRODUCTS main content */}
      <main className="flex-1 ml-10">
        {/* Header Section: Product Count and Sorting Dropdown */}
        <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-100">
          {/* Dynamic Product Count */}
          <div className="text-gray-600 font-medium">
            {finalDisplayProducts.length} Products Found
          </div>

          {/* Sorting Dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold">Sort By:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent border-none text-sm font-bold text-gray-800 focus:outline-none cursor-pointer uppercase tracking-tighter"
            >
              <option value="Featured">Featured</option>
              <option value="New Arrivals">New Arrivals</option>
              <option value="Price: Low To High">Price: Low To High</option>
              <option value="Price: High To Low">Price: High To Low</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        {finalDisplayProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-10">
            {finalDisplayProducts.map((product) => (
              <Link
                key={product.id}
                to={'/product/${product.id}'} // Use slug here to match your route
              >

                <ProductCard
                  id={product.id}
                  img={product.images[0]} // Correctly pulls first image from array
                  title={product.title}
                  price={product.price}
                />
              </Link>

            ))}
          </div>
        ) : (
          /* --- PRODUCT NOT FOUND MESSAGE --- */
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <h2 className="text-2xl font-serif text-gray-800 mb-2">No products found</h2>
            <p className="text-gray-500 mb-6">Try adjusting your filters to find what you're looking for.</p>
            <button
              onClick={resetAllFilters}
              className="px-6 py-2 bg-[#B48B39] text-white font-bold hover:bg-yellow-600 transition-colors"
            >
              No Product in Stock
            </button>
          </div>
        )}
      </main>
    </section >

  );
};

export default Collection;