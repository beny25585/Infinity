import { useState } from "react";

const videos = [
  {
    src: "/videos/אינפיניטי 1 - עם כתוביות.mp4",
    title: "אימון כוח",
    text: "סרטון ממוטב לאימון כוח",
  },
  {
    src: "/videos/אינפיניטי 2 - עם כתוביות.mp4",
    title: "סיבולת לב ריאה",
    text: "וידאו מוטיבציה לסיבולת",
  },
  {
    src: "/videos/אינפיניטי 3 - עם כתוביות.mp4",
    title: "ריצה קרבית",
    text: "הכנה לריצה מבצעית",
  },
  {
    src: "/videos/אינפיניטי 4 - עם כתוביות.mp4",
    title: "אימון כוח",
    text: "סרטון ממוטב לאימון כוח",
  },
];

const VideoCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div id="carouselExampleCaptions" className="relative">
      {/* אינדיקטורים דינמיים */}
      <div className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex justify-center p-0">
        {videos.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goToSlide(i)}
            className={`mx-[3px] box-content h-[3px] w-[30px] cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none ${
              activeIndex === i ? "opacity-100" : "opacity-50"
            }`}
            aria-label={`Slide ${i + 1}`}
            aria-current={activeIndex === i ? "true" : undefined}
          />
        ))}
      </div>

      {/* השקופיות */}
      <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
        {videos.map((video, index) => (
          <div
            key={index}
            className={`relative float-left -mr-[100%] w-full !transform-none transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none ${
              index === activeIndex ? "opacity-100 block" : "opacity-0 hidden"
            }`}
          >
            <video className="w-full" autoPlay loop playsInline>
              <source src={video.src} type="video/mp4" />
              דפדפן זה אינו תומך בניגון וידאו.
            </video>
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
              <h5 className="text-xl">{video.title}</h5>
              <p>{video.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* כפתור קודם */}
      <button
        className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <span className="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </span>
        <span className="sr-only">Previous</span>
      </button>

      {/* כפתור הבא */}
      <button
        className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <span className="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
        <span className="sr-only">Next</span>
      </button>
    </div>
  );
};

export default VideoCarousel;
