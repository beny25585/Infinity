import { useState, useEffect } from "react";
import "../App.css";
import CTAButton from "../components/CTAButton";
import { productsData } from "../data/productsData";

const ProductsPage = () => {
  const items = productsData;

  // Track loaded images for lazy loading
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  // Preload images when they come into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(
              entry.target.getAttribute("data-item-id") || "0"
            );
            if (id && !loadedImages.has(id)) {
              setLoadedImages((prev) => new Set([...prev, id]));
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "200px", // Start loading 200px before element is visible
        threshold: 0.1,
      }
    );

    // Observe all program elements
    const elements = document.querySelectorAll("[data-item-id]");
    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [loadedImages]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-4 md:mb-6"
              style={{
                fontFamily: "Heebo, sans-serif",
                fontWeight: "900",
              }}
            >
              תכניות <span className="text-green-400">InFiniTy</span>
            </h1>
            <p
              className="text-gray-300 text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto px-4"
              style={{
                fontFamily: "Heebo, sans-serif",
                fontWeight: "400",
              }}
            >
              מגוון תכניות מקצועיות להכנה מובחרת ליחידות העלית בצה״ל
            </p>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          {items.map((item) => (
            <div
              key={item.id}
              data-item-id={item.id}
              className="group relative bg-white rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Image Section */}
              <div className="relative h-64 md:h-72 lg:h-80 xl:h-96 overflow-hidden">
                {loadedImages.has(item.id) ? (
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{
                      backgroundImage: `url(${item.image})`,
                    }}
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 animate-pulse">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="animate-spin rounded-full h-8 w-8 md:h-12 md:w-12 border-4 border-gray-400 border-t-transparent"></div>
                    </div>
                  </div>
                )}

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              </div>

              {/* Content Section */}
              <div className="p-6 md:p-8 lg:p-10">
                <h3
                  className="text-black text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight"
                  style={{
                    fontFamily: "Heebo, sans-serif",
                    fontWeight: "700",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed mb-6 md:mb-8"
                  style={{
                    fontFamily: "Heebo, sans-serif",
                    fontWeight: "400",
                  }}
                >
                  {item.description}
                </p>
                <div className="flex justify-center">
                  <CTAButton
                    variant="primary"
                    size="medium"
                    text="להשארת פרטים"
                    className="block md:hidden"
                    action="contact"
                  />
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Statistics - Better sized section */}
      <div className="py-8 md:py-12 lg:py-16 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-8 md:mb-10 lg:mb-12">
            <h2
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-3 md:mb-4 lg:mb-6"
              style={{
                fontFamily: "Heebo, sans-serif",
                fontWeight: "800",
              }}
            >
              למה לבחור ב<span className="text-green-400">InFiniTy</span>?
            </h2>
            <p
              className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-2xl lg:max-w-4xl mx-auto px-2"
              style={{
                fontFamily: "Heebo, sans-serif",
                fontWeight: "400",
              }}
            >
              המספרים מדברים בעד עצמם - אנחנו מובילים להצלחה
            </p>
          </div>

          {/* Stats Cards - Better proportions */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 lg:gap-8 xl:gap-10 mb-8 md:mb-10 max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto">
            {/* Stat 1 */}
            <div className="group relative">
              <div className="bg-green-800 rounded-2xl md:rounded-3xl lg:rounded-[2rem] p-6 md:p-8 lg:p-10 xl:p-12 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="relative z-10">
                  <div
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-2 lg:mb-4"
                    style={{
                      fontFamily: "Heebo, sans-serif",
                      fontWeight: "900",
                    }}
                  >
                    120+
                  </div>
                  <div
                    className="text-green-100 font-bold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-1 lg:mb-2"
                    style={{
                      fontFamily: "Heebo, sans-serif",
                      fontWeight: "600",
                    }}
                  >
                    חניכים מוצלחים
                  </div>
                  <div
                    className="text-green-200 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-tight"
                    style={{
                      fontFamily: "Heebo, sans-serif",
                      fontWeight: "400",
                    }}
                  >
                    התקבלו ליחידות מובחרות
                  </div>
                </div>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="group relative overflow-hidden">
              <div className="bg-white rounded-2xl md:rounded-3xl lg:rounded-[2rem] p-6 md:p-8 lg:p-10 xl:p-12 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 border-green-800">
                <div className="relative z-10">
                  <div
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-green-800 mb-2 lg:mb-4"
                    style={{
                      fontFamily: "Heebo, sans-serif",
                      fontWeight: "900",
                    }}
                  >
                    88%
                  </div>
                  <div
                    className="text-gray-800 font-bold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-1 lg:mb-2"
                    style={{
                      fontFamily: "Heebo, sans-serif",
                      fontWeight: "600",
                    }}
                  >
                    שיעור הצלחה
                  </div>
                  <div
                    className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-tight"
                    style={{
                      fontFamily: "Heebo, sans-serif",
                      fontWeight: "400",
                    }}
                  >
                    בקבלה ליחידות מיוחדות
                  </div>
                </div>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="group relative overflow-hidden">
              <div className="bg-gray-800 rounded-2xl md:rounded-3xl lg:rounded-[2rem] p-6 md:p-8 lg:p-10 xl:p-12 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-green-500">
                <div className="relative z-10">
                  <div
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-2 lg:mb-4"
                    style={{
                      fontFamily: "Heebo, sans-serif",
                      fontWeight: "900",
                    }}
                  >
                    3+
                  </div>
                  <div
                    className="text-green-400 font-bold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-1 lg:mb-2"
                    style={{
                      fontFamily: "Heebo, sans-serif",
                      fontWeight: "600",
                    }}
                  >
                    שנות ניסיון
                  </div>
                  <div
                    className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-tight"
                    style={{
                      fontFamily: "Heebo, sans-serif",
                      fontWeight: "400",
                    }}
                  >
                    בהדרכה מקצועית
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
