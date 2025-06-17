import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="pt-6 md:pt-8 pb-8 md:pb-12 text-black">
      <div className="container max-w-7xl px-4 md:px-6 lg:px-12">
        {/* Logo section */}
        <div className="flex justify-center items-center mb-6 md:mb-8">
          <img
            src="/logos/logo-without-bg.png"
            alt="InFinity Logo"
            className="h-32 sm:h-40 md:h-50 lg:h-60 w-auto object-cover -translate-x-2 md:-translate-x-6 transition-transform hover:scale-105 duration-300"
          />
        </div>

        {/* Main content */}
        <div className="text-center space-y-4 md:space-y-6 border-b border-green-600 max-w-xl mx-auto pb-6 md:pb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight drop-shadow-md">
            <span className="block text-black font-serif">InFinity</span>
            <span className="block font-sans text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-1 md:mt-2">
              אינפיניטי כושר קרבי מנטלי
            </span>
            <span className="block text-sm sm:text-base md:text-lg lg:text-xl mt-2 md:mt-3 font-medium opacity-90">
              אינפיניטי ! לא רק כושר קרבי גם הכנה לחיים
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed px-2 md:px-0">
            כאן תוכלו למצוא את כל המידע על האימונים שלנו, המאמנים, והפעילויות
            המיוחדות. זה המקום להתחיל בו את השינוי שלכם.
          </p>
        </div>

        {/* CTA Button */}
        <div className="mt-8 md:mt-12 flex justify-center px-4 md:px-0">
          <Link
            to="/Contact"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 md:py-4 bg-green-800 text-center text-white font-semibold rounded-lg shadow-lg hover:bg-gray-800 hover:scale-105 transition-all duration-300 text-sm sm:text-base md:text-lg"
          >
            להצטרפות למשפחת אינפיניטי
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
