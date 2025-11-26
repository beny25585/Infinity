import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { useRef, useState } from "react";
import { recommendationsData } from "../data/recommendationData";

const Recommendations = () => {
  const recommendations = recommendationsData;

  const scrollRef = useRef<HTMLDivElement>(null);
  const [_currentIndex, setCurrentIndex] = useState(0);
  const [_currentVisibleId, setCurrentVisibleId] = useState(1);

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
    } else {
      scrollToId(recommendations[0].id);
    }
  };

  const scrollLeft = () => {
    const currentId = detectCurrentId();
    const prevId = currentId - 1;

    if (prevId >= 1) {
      scrollToId(prevId);
    } else {
      scrollToId(recommendations[recommendations.length - 1].id);
    }
  };

  return (
    <section className="text-white">
      <div className="max-w-6xl mx-auto mt-3">
        {/* Updated title as requested */}

        <div className="text-center mb-8">
          <h2 className="  text-slate-900 mb-6 text-4xl md:text-4xl lg:text-5xl font-bold  bg-green-800 py-6 px-10 rounded-2xl shadow-2xl inline-block border border-green-600">
            מה החניכים שבתכנית מספרים עלינו
          </h2>
        </div>

        <div className="relative">
          {/* Left arrow - black without background */}
          <button
            onClick={scrollLeft}
            className="absolute bg-white right-4 top-2/4 -translate-y-1/2 translate-x-1/3 z-10 text-black p-2 md:p-3 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center hover:bg-gray-100 transition-colors duration-300"
            style={{ borderRadius: "50%" }}
          >
            <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Right arrow - black without background */}
          <button
            onClick={scrollRight}
            className="absolute bg-white left-4 top-2/4 -translate-y-1/2 -translate-x-1/3 z-10 text-black p-2 md:p-3 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center hover:bg-gray-100 transition-colors duration-300"
            style={{ borderRadius: "50%" }}
          >
            <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <div
            ref={scrollRef}
            className="overflow-x-auto snap-x snap-mandatory flex space-x-6 md:space-x-8 px-4 md:px-6  scrollbar-hide"
            onScroll={detectCurrentId}
          >
            {recommendations.map((rec) => (
              <div
                key={rec.id}
                id={`recommendation-${rec.id}`}
                className="snap-center snap-always shrink-0 w-full max-w-lg md:max-w-xl lg:max-w-2xl h-auto bg-black/80  rounded-2xl md:rounded-3xl p-8 md:p-10 lg:p-12  flex flex-col justify-between "
              >
                <div>
                  <h4 className="text-cyan-400 font-bold text-xl md:text-2xl lg:text-3xl mb-3">
                    {rec.name}
                  </h4>
                  <div className="h-1 bg-gradient-to-l from-green-400 to-green-600 my-4" />
                </div>
                <p className="text-cyan-200 font-semibold text-right leading-relaxed text-lg md:text-xl lg:text-2xl mb-6">
                  "{rec.text}"
                </p>
                <div className="flex justify-end border-t border-gray-600 pt-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 md:w-6 md:h-6 text-yellow-400 fill-current ml-1"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
