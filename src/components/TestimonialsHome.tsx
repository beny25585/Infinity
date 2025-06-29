import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import "../App.css";
import { testimonialsData } from "../data/testimonialsData";

const TestimonialsHome = () => {
  const testimonials = testimonialsData;

  const scrollRef = useRef<HTMLDivElement>(null);
  const [_currentIndex, setCurrentIndex] = useState(0);
  const [_currentVisibleId, setCurrentVisibleId] = useState(1);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set([1])); // Load first image immediately

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.id.replace("testimonial-", ""));
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

    // Observe all testimonial elements
    testimonials.forEach((testimonial) => {
      const element = document.getElementById(`testimonial-${testimonial.id}`);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [testimonials]);

  // Simple function to detect which ID is most visible
  const detectCurrentId = () => {
    const elements = testimonials
      .map((testimonial) =>
        document.getElementById(`testimonial-${testimonial.id}`)
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

    const idString = mostVisibleElement?.id?.replace("testimonial-", "") || "1";
    const detectedId = parseInt(idString);

    setCurrentVisibleId(detectedId);
    return detectedId;
  };

  // Function to scroll to specific ID
  const scrollToId = (targetId: number) => {
    const element = document.getElementById(`testimonial-${targetId}`);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });

      // Update both states immediately
      const newIndex = testimonials.findIndex(
        (testimonial) => testimonial.id === targetId
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

    if (nextId <= testimonials.length) {
      scrollToId(nextId);
    } else {
      scrollToId(testimonials[0].id);
    }
  };

  const scrollLeft = () => {
    const currentId = detectCurrentId();
    const prevId = currentId - 1;

    if (prevId >= 1) {
      scrollToId(prevId);
    } else {
      scrollToId(testimonials[testimonials.length - 1].id);
    }
  };

  return (
    <section className="text-center">
      {/* Main title */}
      <div className="bg-gray-800 py-4 lg:py-6">
        <h2 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold">
          מה חניכים אומרים עלינו
        </h2>
        <p
          className="text-white text-sm md:text-base lg:text-lg max-w-2xl lg:max-w-4xl mx-auto px-4 mt-2"
          style={{
            fontFamily: "Heebo, sans-serif",
            fontWeight: "400",
          }}
        >
          חוות דעת מחניכים בתכנית אינפיניטי
        </p>
      </div>

      <div className="relative">
        {/* Left arrow */}
        <button
          onClick={scrollLeft}
          className="absolute right-2 md:right-4 lg:right-6 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 md:p-3 lg:p-4 rounded-full transition-all duration-300"
        >
          <ArrowRight className="w-4 h-4 md:w-6 md:h-6 lg:w-7 lg:h-7" />
        </button>

        {/* Right arrow */}
        <button
          onClick={scrollRight}
          className="absolute left-2 md:left-4 lg:left-6 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 md:p-3 lg:p-4 rounded-full transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4 md:w-6 md:h-6 lg:w-7 lg:h-7" />
        </button>

        {/* Gallery */}
        <div
          ref={scrollRef}
          className="overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory"
        >
          <div className="flex space-x-3 md:space-x-6 lg:space-x-8 w-max px-2 md:px-4 lg:px-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                id={`testimonial-${testimonial.id}`}
                className="snap-center snap-always flex-shrink-0 w-screen lg:w-[85vw] xl:w-[80vw] 2xl:w-[75vw] bg-cover bg-center relative h-80 sm:h-96 md:h-[500px] lg:h-[600px] xl:h-[650px] transition-all duration-500 max-w-7xl"
                style={{
                  backgroundImage: loadedImages.has(testimonial.id)
                    ? `url(${testimonial.image})`
                    : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  backgroundSize: "contain",
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {/* Loading placeholder */}
                {!loadedImages.has(testimonial.id) && (
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
                      {testimonial.name}
                    </h3>
                    <p
                      className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed"
                      style={{
                        fontFamily: "Heebo, sans-serif",
                        fontWeight: "400",
                      }}
                    >
                      "{testimonial.text}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
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

export default TestimonialsHome;
