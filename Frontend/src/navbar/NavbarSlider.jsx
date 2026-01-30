import React, { useEffect, useState } from "react";

const NavbarSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const taglines = [
    {
      text: "Meticulously Designed & Handmade in Hierloom Indian Crafts.",
      bg: "bg-orange-300",
    },
    {
      text: 'Get 10% off on your first purchase with code "WelcomeOkhai". T&C',
      bg: "bg-red-600",
    },
    {
      text: "Look Fabulous while Empowering Artisans.",
      bg: "bg-blue-700",
    },
    {
      text: "This season choose handmade.",
      bg: "bg-sky-700",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % taglines.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [taglines.length]);

  return (
    <nav className="fixed top-0 z-50 w-full bg-white shadow-sm">
      {/* Tagline Slider */}
      <div className="relative h-8 sm:h-9 overflow-hidden">
        {taglines.map((tagline, index) => (
          <div
            key={index}
            className={`
              absolute inset-0 flex items-center justify-center
              text-xs sm:text-sm font-medium text-white tracking-wide
              transition-all duration-500 ease-in-out
              ${tagline.bg}
              ${
                index === currentIndex
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-full"
              }
            `}
            aria-hidden={index !== currentIndex}
          >
            {tagline.text}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default NavbarSlider;
