import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import "../App.css";
import { productsData } from "../data/productsData";

const ProductsHome = () => {
  const items = productsData;

  const scrollRef = useRef<HTMLDivElement>(null);
  const [_currentIndex, setCurrentIndex] = useState(0);
  const [_currentVisibleId, setCurrentVisibleId] = useState(1);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set([1])); // Load first image immediately

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.id.replace("program-", ""));
            if (!loadedImages.has(id)) {
              setLoadedImages((prev) => new Set([...prev, id]));
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "100px", // Start loading 100px before element is visible
        threshold: 0.1,
      }
    );

    // Observe all program elements
    items.forEach((item) => {
      const element = document.getElementById(`program-${item.id}`);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [items]);

  // Simple function to detect which ID is most visible
  const detectCurrentId = () => {
    const elements = items
      .map((item) => document.getElementById(`program-${item.id}`))
      .filter(Boolean);

    if (!elements.length) return 1;

    let mostVisibleElement = elements[0];
    let maxVisibility = 0;

    elements.forEach((element) => {
      if (element) {
        const rect = element.getBoundingClientRect();
        const containerRect = scrollRef.current?.getBoundingClientRect();

        if (containerRect) {
          // Calculate how much of the element is visible
          const left = Math.max(rect.left, containerRect.left);
          const right = Math.min(rect.right, containerRect.right);
          const visibleWidth = Math.max(0, right - left);
          const elementWidth = rect.width;
          const visibilityRatio = visibleWidth / elementWidth;

          // Update the most visible element
          if (visibilityRatio > maxVisibility) {
            maxVisibility = visibilityRatio;
            mostVisibleElement = element;
          }
        }
      }
    });

    const idString = mostVisibleElement?.id?.replace("program-", "") || "1";
    const detectedId = parseInt(idString);

    setCurrentVisibleId(detectedId);
    return detectedId;
  };

  // Function to scroll to specific ID
  const scrollToId = (targetId: number) => {
    const element = document.getElementById(`program-${targetId}`);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });

      // Update both states immediately
      const newIndex = items.findIndex((item) => item.id === targetId);
      if (newIndex !== -1) {
        setCurrentIndex(newIndex);
        setCurrentVisibleId(targetId);
      }
    } else {
      console.log(`❌ Element not found: program-${targetId}`);
    }
  };

  const scrollRight = () => {
    const currentId = detectCurrentId();
    const nextId = currentId + 1;

    if (nextId <= items.length) {
      scrollToId(nextId);
    } else {
      scrollToId(items[0].id);
    }
  };

  const scrollLeft = () => {
    const currentId = detectCurrentId();
    const prevId = currentId - 1;

    if (prevId >= 1) {
      scrollToId(prevId);
    } else {
      scrollToId(items[items.length - 1].id);
    }
  };

  return (
    <section className="text-center">
      {/* Main title - beautiful styled title */}
      <div className="bg-gray-800 py-4 lg:py-6">
        <h2 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold">
          מה מחכה לך אצלנו בתכנית?
        </h2>
        <p
          className="text-white text-sm md:text-base lg:text-lg max-w-2xl lg:max-w-4xl mx-auto px-4 mt-2"
          style={{
            fontFamily: "Heebo, sans-serif",
            fontWeight: "400",
          }}
        >
          מגוון תכניות מותאמות אישית להכנה מקצועית ומובחרת
        </p>
      </div>

      <div className="relative">
        {/* Left arrow - עם שיפור קל למסכים גדולים */}
        <button
          onClick={scrollLeft}
          className="absolute right-2 md:right-4 lg:right-6 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 md:p-3 lg:p-4 rounded-full transition-all duration-300"
        >
          <ArrowRight className="w-4 h-4 md:w-6 md:h-6 lg:w-7 lg:h-7" />
        </button>

        {/* Right arrow - עם שיפור קל למסכים גדולים */}
        <button
          onClick={scrollRight}
          className="absolute left-2 md:left-4 lg:left-6 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 md:p-3 lg:p-4 rounded-full transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4 md:w-6 md:h-6 lg:w-7 lg:h-7" />
        </button>

        {/* Gallery - שיפור קל למסכים גדולים */}
        <div
          ref={scrollRef}
          className="overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory"
        >
          <div className="flex space-x-3 md:space-x-6 lg:space-x-8 w-max px-2 md:px-4 lg:px-8">
            {items.map((item) => (
              <div
                key={item.id}
                id={`program-${item.id}`}
                className="snap-center snap-always flex-shrink-0 w-screen bg-cover bg-center relative h-80 sm:h-96 md:h-[500px] lg:h-[600px] xl:h-[650px] transition-all duration-500"
                style={{
                  backgroundImage: loadedImages.has(item.id)
                    ? `url(${item.image})`
                    : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  backgroundColor: loadedImages.has(item.id)
                    ? "transparent"
                    : "#f3f4f6",
                }}
              >
                {/* Loading placeholder */}
                {!loadedImages.has(item.id) && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-8 w-8 md:h-12 md:w-12 lg:h-16 lg:w-16 border-4 border-white border-t-transparent"></div>
                  </div>
                )}
                <div className="absolute inset-0 flex flex-col justify-end p-2 md:p-4 lg:p-6 xl:p-8 text-white text-center">
                  <div className="bg-black/50 p-1 md:p-4 lg:p-6 xl:p-8 rounded-lg lg:rounded-xl">
                    <h3
                      className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-2 md:mb-3 lg:mb-4 leading-tight"
                      style={{
                        fontFamily: "Heebo, sans-serif",
                        fontWeight: "600",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed"
                      style={{
                        fontFamily: "Heebo, sans-serif",
                        fontWeight: "400",
                      }}
                    >
                      {/* Shorter description on mobile for long items */}
                      {item.id === 6 ? (
                        <>
                          <span className="md:hidden">
                            אימון מנטלי אישי עם יונתן בן שבת - מיפוי יכולות
                            ובניית מסלול אישי להצלחה
                          </span>
                          <span className="hidden md:block">
                            {item.description}
                          </span>
                        </>
                      ) : (
                        item.description
                      )}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
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

      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default ProductsHome;
