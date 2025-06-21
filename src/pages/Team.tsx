const Team = () => {
  return (
    <section className="bg-gray-300 py-6 md:py-8 min-h-screen">
      <div>
        {/* Header with styled title */}
        <div className="text-center mb-8 md:mb-12">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-xl md:text-3xl lg:text-4xl w-full font-bold text-white bg-green-800 py-4 md:py-6 px-6 md:px-10 rounded-2xl  inline-block border border-white">
              הצוות שלנו
            </h2>
          </div>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed px-2 max-w-3xl mx-auto">
            הצוות שלנו מורכב ממדריכים מנוסים עם רקע צבאי עשיר, שמביאים איתם שנות
            ניסיון בהכנה פיזית ומנטלית ליחידות מובחרות בצה"ל.
          </p>
        </div>
        <div className="container mx-auto px-4">
          {/* Team Grid - Mobile optimized */}
          <div className="space-y-6 md:space-y-8">
            {/* Team Member 1 */}
            <div className="bg-black rounded-xl md:rounded-2xl shadow-xl overflow-hidden">
              {/* Image */}
              <div className="relative h-48 md:h-64">
                <img
                  src="/images/מדרך אגרוף.jpg"
                  alt="דניאל חסון"
                  className="w-full h-full object-cover object-[50%_20%]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-4 md:p-6 text-white">
                <h3 className="text-xl md:text-2xl font-bold mb-1 text-white">
                  דניאל חסון
                </h3>
                <div className="text-green-400 text-sm md:text-base font-semibold mb-3 md:mb-4">
                  מאמן אגרוף
                </div>

                <p className="text-gray-300 mb-3 md:mb-4 leading-relaxed text-sm md:text-base">
                  מאמן ותיק בתחום הכושר הקרבי, מנהל מרכזים להכנה לגיבושים ויוצא
                  יחידה קרבית. מתמחה בהכנה פיזית ומנטלית מתקדמת.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-black rounded-xl md:rounded-2xl shadow-xl overflow-hidden">
              {/* Image */}
              <div className="relative h-48 md:h-64">
                <img
                  src="/images/trainer2.jpg"
                  alt="יובל עילם"
                  className="w-full h-full object-cover object-[30%_20%]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-4 md:p-6 text-white">
                <h3 className="text-xl md:text-2xl font-bold mb-1 text-white">
                  יובל עילם
                </h3>
                <div className="text-green-400 text-sm md:text-base font-semibold mb-3 md:mb-4">
                  מאמן בכיר • חלוץ בתחום
                </div>

                <p className="text-gray-300 mb-3 md:mb-4 leading-relaxed text-sm md:text-base">
                  מראשוני התחום בארץ, הכין מאות צעירים ליחידות עילית, עם גישה
                  מנטלית ופיזית ייחודית. מתמחה בפיתוח חוסן נפשי וכושר גופני.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-black rounded-xl md:rounded-2xl shadow-xl overflow-hidden">
              {/* Image */}
              <div className="relative h-48 md:h-64">
                <img
                  src="https://images.unsplash.com/photo-1518609571773-39b7d303a87b?w=500&auto=format&fit=crop&q=60"
                  alt="נועה דביר"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-4 md:p-6 text-white">
                <h3 className="text-xl md:text-2xl font-bold mb-1 text-white">
                  נועה דביר
                </h3>
                <div className="text-green-400 text-sm md:text-base font-semibold mb-3 md:mb-4">
                  מאמנת כושר קרבי
                </div>

                <p className="text-gray-300 mb-3 md:mb-4 leading-relaxed text-sm md:text-base">
                  מאמנת כושר קרבי עם ניסיון של מעל 8 שנים בהכנה לגיבושים ויחידות
                  מיוחדות. מוסמכת באימון פונקציונלי ואימון מנטלי ללחץ.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-8 md:mt-12 text-center bg-black rounded-xl md:rounded-2xl p-5 md:p-6 shadow-xl">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
              מוכנים להצטרף למשפחת
              <span className="text-green-400"> InFiniTy</span>?
            </h3>
            <p className="text-sm md:text-base text-gray-300 mb-4 md:mb-6 leading-relaxed">
              הצוות שלנו כאן כדי להוביל אותך למסע של גדילה, חוזק ופריצת גבולות.
            </p>
            <button className="w-full bg-green-800 hover:bg-green-700 text-white font-bold py-3 md:py-4 px-4 md:px-6 rounded-lg text-sm md:text-base transition-colors duration-300">
              בואו נתחיל
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
