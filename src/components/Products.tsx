import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const Products = () => {
  const items = [
    {
      id: 1,
      title: 'הכנה לכלל היחידות בצה"ל',
      description: "סיוע והכנה ליחידות: טיס, שייטת, סיירות ועוד.",
      image: "/images/special_units.jpg",
    },
    {
      id: 2,
      title: "תכנית דיבור בפני קהל",
      description: "נלמד אותך איך לדבר נכון מול קהל ולהפוך למרצה מקצועי",
      image: "/images/public-speaking.jpg",
    },
    {
      id: 3,
      title: "אימוני אגרוף, היאבקות וקרב מגע",
      description: "לוחם אמיתי שולט בגוף ובנפש, עם ובלי נשק",
      image: "/images/krav-maga.jpg",
    },
    {
      id: 4,
      title: "שפת גוף נכונה והכנה לראיונות מקיפים",
      description: "הכנה לראיונות ושפת גוף מנצחת - כולל תוכנית קצינים",
      image: "/images/public-speaking2.jpg",
    },
    {
      id: 5,
      title: "סימולציות ימי סיירות וימי גיבוש",
      description: "לימוד טכניקות הגנה עצמית מתקדמות.",
      image: "/images/krav-maga.jpg",
    },
    {
      id: 6,
      title: "אימון מנטלי עם יונתן בן שבת של שעה",
      description:
        "יונתן מאמן מנטלי מוסמך מבית וואן לייף בית ספר להכשרת מאמנים מנטליים, פגישה זאת מכינה אותך מנטלית לכל מבחן או כל אירוע משמעותי בחיים, וככלל מאפסת אותך ובונה לך מסלול ייחודי להמשך",
      image: "/images/leadership.jpg",
    },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [_currentIndex, setCurrentIndex] = useState(0);
  const [currentVisibleId, setCurrentVisibleId] = useState(1);
  // Track loaded images for lazy loading
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set([1])); // Load first image immediately

  // Preload images when they come into view
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
      console.log(`🚫 Cannot go right - already at last item`);
    }
  };

  const scrollLeft = () => {
    const currentId = detectCurrentId();
    const prevId = currentId - 1;

    if (prevId >= 1) {
      scrollToId(prevId);
    } else {
      console.log(`🚫 Cannot go left - already at first item`);
    }
  };

  return (
    <section className="text-center">
      {/* Main title - responsive */}
      <h2 className="text-2xl md:text-4xl font-bold text-black mb-4 md:mb-6 px-4">
        התכניות שלנו
      </h2>

      <div className="relative">
        {/* Left arrow - smaller on mobile */}
        {currentVisibleId > 1 && (
          <button
            onClick={scrollLeft}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 md:p-3 rounded-full transition-all duration-300"
          >
            <ArrowRight className="w-4 h-4 md:w-6 md:h-6" />
          </button>
        )}

        {/* Right arrow - smaller on mobile */}
        {currentVisibleId < items.length && (
          <button
            onClick={scrollRight}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 md:p-3 rounded-full transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4 md:w-6 md:h-6" />
          </button>
        )}

        {/* Gallery - adjusted height for mobile */}
        <div
          ref={scrollRef}
          className="overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory"
        >
          <div className="flex space-x-3 md:space-x-6 w-max px-2 md:px-4">
            {items.map((item) => (
              <div
                key={item.id}
                id={`program-${item.id}`}
                className="snap-center snap-always flex-shrink-0 w-screen bg-cover bg-center relative h-80 sm:h-96 md:h-[500px] transition-all duration-500"
                style={{
                  backgroundImage: loadedImages.has(item.id)
                    ? `url(${item.image})`
                    : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", // Gradient placeholder
                  backgroundColor: loadedImages.has(item.id)
                    ? "transparent"
                    : "#f3f4f6",
                }}
              >
                {/* Loading placeholder */}
                {!loadedImages.has(item.id) && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-8 w-8 md:h-12 md:w-12 border-4 border-white border-t-transparent"></div>
                  </div>
                )}

                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 md:p-6 text-white text-right">
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-3 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                    {/* Shorter description on mobile for long items */}
                    {item.id === 6 ? (
                      <>
                        <span className="md:hidden">
                          פגישה אישית עם יונתן למיפוי מנטלי ובניית מסלול אישי
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
            ))}
          </div>
        </div>
      </div>

      {/* Statistics - Better sized section */}
      <div className="py-8 md:py-12 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-3 md:mb-4">
              למה לבחור ב<span className="text-green-400">InFiniTy</span>?
            </h2>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
              המספרים מדברים בעד עצמם - אנחנו מובילים להצלחה
            </p>
          </div>

          {/* Stats Cards - Better proportions */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10 max-w-5xl mx-auto">
            {/* Stat 1 */}
            <div className="group relative ">
              <div className="bg-green-800 rounded-2xl md:rounded-3xl p-6 md:p-8 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="relative z-10">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-2">
                    120+
                  </div>
                  <div className="text-green-100 font-bold text-sm sm:text-base md:text-lg mb-1">
                    חניכים מוצלחים
                  </div>
                  <div className="text-green-200 text-xs sm:text-sm md:text-base leading-tight">
                    התקבלו ליחידות מובחרות
                  </div>
                </div>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="group relative overflow-hidden">
              <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 border-green-800">
                <div className="relative z-10">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-black text-green-800 mb-2">
                    88%
                  </div>
                  <div className="text-gray-800 font-bold text-sm sm:text-base md:text-lg mb-1">
                    שיעור הצלחה
                  </div>
                  <div className="text-gray-600 text-xs sm:text-sm md:text-base leading-tight">
                    בקבלה ליחידות מיוחדות
                  </div>
                </div>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="group relative overflow-hidden">
              <div className="bg-gray-800 rounded-2xl md:rounded-3xl p-6 md:p-8 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-green-500">
                <div className="relative z-10">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-2">
                    3+
                  </div>
                  <div className="text-green-400 font-bold text-sm sm:text-base md:text-lg mb-1">
                    שנות ניסיון
                  </div>
                  <div className="text-gray-300 text-xs sm:text-sm md:text-base leading-tight">
                    בהדרכה מקצועית
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
