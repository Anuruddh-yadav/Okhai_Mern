/*export const allWomenProducts = [
  {
    id: "okhai-hibiscus-kurta",
    slug: "okhai-hibiscus-hand-embroidered-pure-cotton-kurta",
    name: "Okhai 'Hibiscus' Hand Embroidered Pure Cotton Kurta",
    price: 2600,
    rating: 5,
    reviews: 12,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    images: [
      "https://okhai.org/cdn/shop/files/DSC_3379_1024x1024.png?v=1738954632",
      "https://okhai.org/cdn/shop/files/DSC_3384_1024x1024.png?v=1738954632", 
      "https://okhai.org/cdn/shop/files/DSC_3386_1024x1024.png?v=1738954632",
      "https://okhai.org/cdn/shop/files/DSC_3383_1024x1024.png?v=1738954632"
    ],
    description: "Embrace effortless elegance with this soft pink kurta, beautifully handcrafted with delicate embroidery on the front and back yoke. Made from pure cotton, this kurta offers breathable comfort perfect for all-day wear. The intricate handwork adds a touch of traditional charm to the contemporary silhouette.",
    details: [
      "Material: Pure Cotton",
      "Color: Pink",
      "Fit: Regular Fit", 
      "Care: Hand Wash Separately",
      "Origin: Handcrafted in India"
    ]
  }
];*/

import hibiscus1 from './hibiscus/hibiscus1.png';
import hibiscus2 from './hibiscus/hibiscus2.png';
import hibiscus3 from './hibiscus/hibiscus3.png';
import hibiscus4 from './hibiscus/hibiscus4.png';

export const allWomenProducts = [
  
  {
    id: "okhai-hibiscus-kurta",
    slug: "okhai-hibiscus-hand-embroidered-pure-cotton-kurta",
    name: "Okhai 'Hibiscus' Hand Embroidered Pure Cotton Kurta",
    price: 2600,
    rating: 5,
    reviews: 12,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    images: [hibiscus1, hibiscus2, hibiscus3, hibiscus4], // ✅ Imported images!
    description: "Embrace effortless elegance with this soft pink kurta, beautifully handcrafted with delicate embroidery on the front and back yoke. Made from pure cotton, this kurta offers breathable comfort perfect for all-day wear. The intricate handwork adds a touch of traditional charm to the contemporary silhouette.",
    details: [
      "Material: Pure Cotton",
      "Color: Pink",
      "Fit: Regular Fit",
      "Care: Hand Wash Separately",
      "Origin: Handcrafted in India"
    ]
  }
];
