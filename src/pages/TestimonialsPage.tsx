import "../App.css";
import { testimonialsData } from "../data/TestimonialsData";
import { Link } from "react-router-dom";

const TestimonialsPage = () => {
  const testimonials = testimonialsData;

  return (
    <div className="min-h-screen bg-gray-50">
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
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        {/* Introduction */}
        <div className="text-center mb-12 md:mb-16">
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
            חוות דעת מחניכים שהתקבלו ליחידות המובחרות בצה"ל
          </p>
        </div>

        {/* Testimonials Cards */}
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
                  className="text-green-600 font-semibold text-sm mb-2"
                  style={{ fontFamily: "Heebo, sans-serif" }}
                >
                  {testimonial.unit}
                </p>
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
