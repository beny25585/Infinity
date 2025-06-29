import "../App.css";
import { testimonialsData } from "../data/testimonialsData";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

const TestimonialsPage = () => {
  const testimonials = testimonialsData;

  return (
    <div className="min-h-screen bg-gray-100 ">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1
              className=" text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-6 leading-tight"
              style={{
                fontFamily: "Heebo, sans-serif",
                fontWeight: "900",
              }}
            >
              חניכים שעברו את תהליך{" "}
              <span className="text-green-400">InFiniTy</span>
            </h1>
            <p
              className="text-gray-300 text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto px-4"
              style={{
                fontFamily: "Heebo, sans-serif",
                fontWeight: "400",
              }}
            >
              מה חניכי InFiniTy מספרים על החוויה שלהם
            </p>
          </div>
        </div>
      </div>
      {/* Testimonials Grid */}
      {/* Introduction */}
      <div className="text-center mt-5 mb-12 md:mb-16">
        <h2
          className="text-black text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
          style={{
            fontFamily: "Heebo, sans-serif",
            fontWeight: "700",
          }}
        >
          מה החניכים שלנו אומרים?
        </h2>
        <p
          className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto"
          style={{
            fontFamily: "Heebo, sans-serif",
            fontWeight: "400",
          }}
        >
          חוות דעת מחניכים בתכנית אינפיניטי
        </p>
      </div>

      {/* Images Gallery Section */}
      <div className="bg-gray-200 py-12 md:py-16">
        <div className="relative w-full">
          {/* Left arrow */}
          <button
            onClick={() => {
              const container = document.getElementById("images-container");
              if (container) {
                container.scrollBy({
                  left: window.innerWidth,
                  behavior: "smooth",
                });
              }
            }}
            className="absolute bg-white right-4 bottom-0 translate-y-9 -translate-y-1/2 z-10 text-black p-2 md:p-3 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center hover:bg-gray-100 transition-colors duration-300"
            style={{ borderRadius: "50%" }}
          >
            <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Right arrow */}
          <button
            onClick={() => {
              const container = document.getElementById("images-container");
              if (container) {
                container.scrollBy({
                  left: -window.innerWidth,
                  behavior: "smooth",
                });
              }
            }}
            className="absolute bg-white left-4 bottom-0 translate-y-9  -translate-y-1/2 z-10 text-black p-2 md:p-3 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center hover:bg-gray-100 transition-colors duration-300"
            style={{ borderRadius: "50%" }}
          >
            <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <div
            id="images-container"
            className="overflow-x-auto snap-x snap-mandatory flex scrollbar-hide"
            style={{ scrollBehavior: "smooth" }}
          >
            {[
              "/images-for-testimonal/photo1.jpg",
              "/images-for-testimonal/photo2.jpg",
              "/images-for-testimonal/photo3.jpg",
              "/images-for-testimonal/photo4.jpg",
              "/images-for-testimonal/photo5.jpg",
              "/images-for-testimonal/photo6.jpg",
              "/images-for-testimonal/photo7.jpg",
              "/images-for-testimonal/photo8.jpg",
              "/images-for-testimonal/photo9.jpg",
              "/images-for-testimonal/photo10.jpg",
              "/images-for-testimonal/photo11.jpg",
              "/images-for-testimonal/photo12.jpg",
            ].map((imageSrc, index) => (
              <div
                key={index}
                className="snap-center flex-shrink-0 w-screen h-64 md:h-80 lg:h-96 flex items-center justify-center"
              >
                <img
                  src={imageSrc}
                  alt={`תמונה מהתכנית ${index + 1}`}
                  className="max-w-full max-h-full object-contain rounded-2xl md:rounded-3xl shadow-xl"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Cards */}
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative h-64 md:h-72 lg:h-80">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className={`w-full h-full ${testimonial.image_style}`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              </div>

              <div className="p-4">
                <h3
                  className="text-black text-lg md:text-xl font-bold text-gray-900 mb-2"
                  style={{ fontFamily: "Heebo, sans-serif" }}
                >
                  {testimonial.name}
                </h3>

                <p
                  className="text-gray-600 text-sm leading-relaxed"
                  style={{ fontFamily: "Heebo, sans-serif" }}
                >
                  "{testimonial.text}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2
            className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-4 md:mb-6"
            style={{
              fontFamily: "Heebo, sans-serif",
              fontWeight: "800",
            }}
          >
            רוצה להיות הבא?
          </h2>
          <p
            className="text-gray-300 text-lg md:text-xl mb-8 md:mb-10 max-w-2xl mx-auto"
            style={{
              fontFamily: "Heebo, sans-serif",
              fontWeight: "400",
            }}
          >
            הצטרף לתכנית InFiniTy והפוך גם אתה לסיפור הצלחה
          </p>
          <Link
            to="/Contact"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-4 md:py-5 px-8 md:px-12 rounded-2xl md:rounded-3xl text-lg md:text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            style={{
              fontFamily: "Heebo, sans-serif",
              fontWeight: "700",
            }}
          >
            להרשמה לחצו כאן
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
