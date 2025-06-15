import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { useRef, useState } from "react";

const Recommendations = () => {
  // Only 8 recommendations as requested
  const recommendations = [
    {
      id: 1,
      name: "מ׳ מראש העין",
      text: "התקבל לשייטת אחרי שנה בתוכנית. התמיכה פה זה משהו שלא רואים בשום מקום.",
    },
    {
      id: 2,
      name: "י׳ מצוות אשדוד",
      text: "עבר תהליך עוצמתי והתקבל לדובדבן – תודה על הכול!",
    },
    {
      id: 3,
      name: "א׳ מאשקלון",
      text: "התקבל לסיירת חרוב עם ביטחון עצמי שלא היה לי קודם.",
    },
    {
      id: 4,
      name: "ל׳ מבאר שבע",
      text: "עבר הכנה לראיונות והתקבל לטיס. פשוט מקצוענים.",
    },
    {
      id: 5,
      name: "ר׳ מהרצליה",
      text: "עברתי מאפס כושר לתותח תוך 4 חודשים. עכשיו בדרך לעוקץ.",
    },
    {
      id: 6,
      name: "ת׳ מקריית שמונה",
      text: "הגעתי בלי כיוון והיום אני מפקד בקורס לוחמה בטרור.",
    },
    {
      id: 7,
      name: "ש׳ מנתניה",
      text: "עשיתי שינוי אמיתי – קיבלתי ביטחון, כלים, והתקבלתי לשייטת.",
    },
    {
      id: 8,
      name: "ק׳ מחיפה",
      text: "הפכתי להיות מנהיג אמיתי, היום אני בקומנדו הימי.",
    },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [_currentIndex, setCurrentIndex] = useState(0);
  const [currentVisibleId, setCurrentVisibleId] = useState(1);

  // Simple function to detect which ID is most visible
  const detectCurrentId = () => {
    const elements = recommendations
      .map((recommendation) =>
        document.getElementById(`recommendation-${recommendation.id}`)
      )
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

    const idString =
      mostVisibleElement?.id?.replace("recommendation-", "") || "1";
    const detectedId = parseInt(idString);

    setCurrentVisibleId(detectedId);
    return detectedId;
  };

  // Function to scroll to specific ID
  const scrollToId = (targetId: number) => {
    const element = document.getElementById(`recommendation-${targetId}`);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });

      // Update both states immediately
      const newIndex = recommendations.findIndex(
        (recommendation) => recommendation.id === targetId
      );
      if (newIndex !== -1) {
        setCurrentIndex(newIndex);
        setCurrentVisibleId(targetId);
      }
    }
  };

  const scrollRight = () => {
    const currentId = detectCurrentId();
    const nextId = currentId + 1;

    if (nextId <= recommendations.length) {
      scrollToId(nextId);
    }
  };

  const scrollLeft = () => {
    const currentId = detectCurrentId();
    const prevId = currentId - 1;

    if (prevId >= 1) {
      scrollToId(prevId);
    }
  };

  return (
    <section className="text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Updated title as requested */}
        <h2 className="text-center text-4xl font-bold mb-8 text-black">
          מה החניכים שבתכנית מספרים עלינו
        </h2>

        <div className="relative">
          {/* Left arrow - black without background */}
          {currentVisibleId > 1 && (
            <button
              onClick={scrollLeft}
              className="absolute bg-white right-4 top-1/4 -translate-y-1/2 translate-x-1/2 z-10 text-black p-1 w-10 h-10 flex items-center justify-center"
              style={{ borderRadius: "50%" }}
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          )}

          {/* Right arrow - black without background */}
          {currentVisibleId < recommendations.length && (
            <button
              onClick={scrollRight}
              className="absolute bg-white left-4 top-1/4 -translate-y-1/2 -translate-x-1/2 z-10 text-black p-1 w-10 h-10 flex items-center justify-center"
              style={{ borderRadius: "50%" }}
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          )}

          <div
            ref={scrollRef}
            className="overflow-x-auto snap-x snap-mandatory flex space-x-6 px-4 pb-6 scrollbar-hide"
            onScroll={detectCurrentId}
          >
            {recommendations.map((rec) => (
              <div
                key={rec.id}
                id={`recommendation-${rec.id}`}
                className="snap-center snap-always shrink-0 w-full max-w-md h-auto bg-black/80 backdrop-blur-sm border border-gray-600 rounded-2xl p-6 shadow-2xl flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-cyan-400 font-bold text-lg">
                    {rec.name}
                  </h4>
                  <div className="h-0.5 bg-gradient-to-l from-green-400 to-green-600 my-2" />
                </div>
                <p className="text-cyan-200 font-semibold text-right leading-relaxed">
                  "{rec.text}"
                </p>
                <div className="flex justify-end border-t border-gray-600 pt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current ml-1"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center max-w-4xl mx-auto px-4">
            <div className="bg-gradient-to-r from-green-700 to-green-800 text-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-3xl font-bold mb-4">רוצה להיות הבא?</h3>
              <p className="text-green-100 mb-6 text-lg">
                הצטרף אלינו וקבל את הכלים להגשים את החלום שלך
              </p>
              <div className="flex justify-center items-center space-x-4">
                <div className="w-3 h-3 bg-white rounded-full animate-bounce"></div>
                <div className="w-3 h-3 bg-green-200 rounded-full animate-bounce delay-100"></div>
                <div className="w-3 h-3 bg-white rounded-full animate-bounce delay-200"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
