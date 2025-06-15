import { Link } from "react-router-dom";
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
    <section className="text-center mb-4">
      <h2 className="text-4xl font-bold text-black mb-6">התכניות שלנו</h2>

      <div className="relative">
        {/* Left arrow - check by current ID */}
        {currentVisibleId > 1 && (
          <button
            onClick={scrollLeft}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white p-3 rounded-full"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        )}

        {/* Right arrow - check by current ID */}
        {currentVisibleId < items.length && (
          <button
            onClick={scrollRight}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white p-3 rounded-full"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
        )}

        {/* Gallery */}
        <div
          ref={scrollRef}
          className="overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory touch-pan-x"
        >
          <div className="flex space-x-6 w-max px-4">
            {items.map((item) => (
              <div
                key={item.id}
                id={`program-${item.id}`}
                className="snap-center snap-always flex-shrink-0 w-screen bg-cover bg-center overflow-hidden relative h-96 transition-all duration-500"
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
                    <div className="animate-spin rounded-full h-12 w-12 border-4 border-white border-t-transparent"></div>
                  </div>
                )}

                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 text-white text-right">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Statistics - Alternative Design */}
      <div className="py-16 bg-gradient-to-br from-gray-900 via-black to-gray-800 mb-2">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-white mb-4">
              למה לבחור ב<span className="text-green-400">InFiniTy</span>?
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              המספרים מדברים בעד עצמם - אנחנו לא רק מכינים, אנחנו מובילים להצלחה
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Stat 1 */}
            <div className="group relative overflow-hidden">
              <div className="bg-green-800 rounded-3xl p-8 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="absolute top-0 right-0 w-20 h-20 bg-green-600 rounded-full -mr-10 -mt-10 opacity-20"></div>
                <div className="relative z-10">
                  <div className="text-6xl font-black text-white mb-2">
                    500+
                  </div>
                  <div className="text-green-100 font-bold text-xl mb-2">
                    חניכים מוצלחים
                  </div>
                  <div className="text-green-200 text-sm">
                    שהתקבלו ליחידות מובחרות
                  </div>
                </div>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="group relative overflow-hidden">
              <div className="bg-white rounded-3xl p-8 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border-2 border-green-800">
                <div className="absolute top-0 right-0 w-20 h-20 bg-green-100 rounded-full -mr-10 -mt-10 opacity-30"></div>
                <div className="relative z-10">
                  <div className="text-6xl font-black text-green-800 mb-2">
                    88%
                  </div>
                  <div className="text-gray-800 font-bold text-xl mb-2">
                    שיעור הצלחה
                  </div>
                  <div className="text-gray-600 text-sm">
                    בקבלה ליחידות מיוחדות
                  </div>
                </div>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="group relative overflow-hidden">
              <div className="bg-gray-800 rounded-3xl p-8 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-green-500">
                <div className="absolute top-0 right-0 w-20 h-20 bg-green-500 rounded-full -mr-10 -mt-10 opacity-20"></div>
                <div className="relative z-10">
                  <div className="text-6xl font-black text-white mb-2">3+</div>
                  <div className="text-green-400 font-bold text-xl mb-2">
                    שנות ניסיון
                  </div>
                  <div className="text-gray-300 text-sm">בהדרכה מקצועית</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-16 bg-black">
        <div className="container mx-auto px-4 text-center">
          {/* Header */}
          <div className="mb-8">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
              מוכן להפוך ל<span className="text-green-400">לוחם</span>?
            </h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              הזמן שלך להתחיל את המסע. צור קשר עכשיו וקבל ייעוץ חינם ואישי
            </p>
          </div>

          {/* Main CTA Button */}
          <div className="mb-8">
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-green-700 to-green-600 hover:from-green-600 hover:to-green-500 text-white font-bold py-5 px-10 rounded-2xl text-xl shadow-2xl hover:shadow-green-500/30 transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              {/* Background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

              {/* Content */}
              <div className="relative flex items-center gap-3">
                <span>התחל את המסע שלך היום</span>
                <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
              </div>
            </Link>
          </div>

          {/* Secondary Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/about"
              className="text-green-400 hover:text-green-300 font-semibold underline decoration-2 underline-offset-4 transition-colors duration-300"
            >
              קרא עוד על InFiniTy
            </Link>

            <div className="hidden sm:block w-px h-6 bg-gray-600"></div>

            <a
              href="tel:+972555555555"
              className="text-white hover:text-green-400 font-semibold transition-colors duration-300"
            >
              📞 התקשר עכשיו: 055-555-5555
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <p className="text-gray-500 text-sm mb-4">מה מחכה לך:</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="text-green-400">✓ ייעוץ חינם</div>
              <div className="text-green-400">✓ תכנית אישית</div>
              <div className="text-green-400">✓ ליווי מקצועי</div>
              <div className="text-green-400">✓ תוצאות מוכחות</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
