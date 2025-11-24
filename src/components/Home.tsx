import { Link } from "react-router-dom";

const bgPattern =
  "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

const Home = () => {
  return (
    <section className=" text-black">
      <div className="container max-w-7xl px-2 py-4 md:px-6 lg:px-12 bg-gradient-to-br from-slate-900 via-green-900 to-slate-800 relative overflow-hidden ">
        {/* Animated background overlay */}
        <div
          className="absolute inset-0 opacity-30 "
          style={{
            backgroundImage: `url("${bgPattern}")`,
            animation: "moveBackgroundReverse 5s linear infinite",
          }}
        />

        {/* Content wrapper with relative positioning */}
        <div className="relative z-10">
          {/* Logo section */}
          <div className="flex justify-center items-center mb-6 md:mb-8">
            <img
              src="/logos/IMG-20250516-WA0003-Photoroom.png"
              alt="InFinity Logo"
              className="h-32  sm:h-40 md:h-50 lg:h-60 w-auto object-cover -translate-x-2 md:-translate-x-6 transition-transform hover:scale-105 duration-300"
            />
          </div>

          {/* Main content */}
          <div className="text-center space-y-4 md:space-y-6 border-b border-green-600 max-w-xl mx-auto pb-6 md:pb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight drop-shadow-md">
              <span className="block text-black text-white font-serif">
                InFinity
              </span>
              <span className="block font-sans text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-1 md:mt-2">
                ארגון נוער בשילוב כושר קרבי מנטלי להכנה ליחידות מובחרות בצה״ל
              </span>
              <span className="block text-white text-sm sm:text-base md:text-lg lg:text-xl mt-2 md:mt-3 font-medium opacity-90">
                אינפיניטי ! לא רק כושר קרבי גם הכנה לחיים!
              </span>
            </h1>

            <p className="text-base text-white sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed px-2 md:px-0">
              אאינפיניטי הוא ארגון נוער שנוסד בשנת 2024 שמשלב בתוכו כושר קרבי ,
              אומנויות לחימה , תכנית דיבור בפני קהל ושפת גוף הכנה לראיונות
              גיבושים וימי סיירות , באינפיניטי המיקוד שלנו הוא על הפן המנטלי של
              החניך כך שחשוב לנו שחניך שייצא מאיתנו יוכל להתמודד עם כל קושי פיזי
              ומנטלי שיפגוש אנחנו לא מבטיחים לך תוצאות אנחנו מבטיחים לך
              איכות חיים יוצאת דופן.
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
      </div>

      {/* CSS Animation Styles */}
      <style>{`
        @keyframes moveBackground {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 60px 60px;
          }
        }

        @keyframes moveBackgroundReverse {
          0% {
            background-position: 60px 60px;
          }
          100% {
            background-position: 0 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Home;
