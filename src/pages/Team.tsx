const Team = () => {
  return (
    <section className="bg-white py-8 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header - Mobile First */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black mb-4 text-black">הצוות שלנו</h2>
          <div className="w-16 h-1 bg-green-800 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 leading-relaxed px-2">
            הצוות שלנו מורכב ממדריכים מנוסים עם רקע צבאי עשיר, שמביאים איתם שנות
            ניסיון בהכנה פיזית ומנטלית ליחידות מובחרות בצה"ל.
          </p>
        </div>

        {/* Team Grid - Mobile Stack */}
        <div className="space-y-8">
          {/* Team Member 1 */}
          <div className="bg-black rounded-2xl shadow-xl overflow-hidden">
            {/* Image */}
            <div className="relative h-64">
              <img
                src="https://images.unsplash.com/photo-1628935291759-bbaf33a66dc6?w=500&auto=format&fit=crop&q=60"
                alt="דניאל חסון"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="p-6 text-white">
              <h3 className="text-2xl font-bold mb-1 text-white">דניאל חסון</h3>
              <div className="text-green-400 text-base font-semibold mb-4">
                מאמן ראשי
              </div>

              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                מאמן ותיק בתחום הכושר הקרבי, מנהל מרכזים להכנה לגיבושים ויוצא
                יחידה קרבית. מתמחה בהכנה פיזית ומנטלית מתקדמת.
              </p>

              {/* Stats */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-white text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span>15+ שנות ניסיון</span>
                </div>
                <div className="flex items-center text-white text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span>מעל 300 חניכים מוצלחים</span>
                </div>
              </div>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="bg-black rounded-2xl shadow-xl overflow-hidden">
            {/* Image */}
            <div className="relative h-64">
              <img
                src="https://images.unsplash.com/photo-1667890786327-d28da55b0e57?w=500&auto=format&fit=crop&q=60"
                alt="יובל עילם"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="p-6 text-white">
              <h3 className="text-2xl font-bold mb-1 text-white">יובל עילם</h3>
              <div className="text-green-400 text-base font-semibold mb-4">
                מאמן בכיר • חלוץ בתחום
              </div>

              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                מראשוני התחום בארץ, הכין מאות צעירים ליחידות עילית, עם גישה
                מנטלית ופיזית ייחודית. מתמחה בפיתוח חוסן נפשי וכושר גופני.
              </p>

              {/* Stats */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-white text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span>מומחה לאימון מנטלי</span>
                </div>
                <div className="flex items-center text-white text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span>מעל 20 שנות ניסיון</span>
                </div>
              </div>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="bg-black rounded-2xl shadow-xl overflow-hidden">
            {/* Image */}
            <div className="relative h-64">
              <img
                src="https://images.unsplash.com/photo-1518609571773-39b7d303a87b?w=500&auto=format&fit=crop&q=60"
                alt="נועה דביר"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="p-6 text-white">
              <h3 className="text-2xl font-bold mb-1 text-white">נועה דביר</h3>
              <div className="text-green-400 text-base font-semibold mb-4">
                מאמנת כושר קרבי
              </div>

              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                מאמנת כושר קרבי עם ניסיון של מעל 8 שנים בהכנה לגיבושים ויחידות
                מיוחדות. מוסמכת באימון פונקציונלי ואימון מנטלי ללחץ.
              </p>

              {/* Stats */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-white text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span>מומחית לאימון נשים</span>
                </div>
                <div className="flex items-center text-white text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span>אימון פונקציונלי מתקדם</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center bg-black rounded-2xl p-6 shadow-xl">
          <h3 className="text-2xl font-bold text-white mb-4">
            מוכנים להצטרף למשפחת
            <span className="text-green-400"> InFiniTy</span>?
          </h3>
          <p className="text-base text-gray-300 mb-6 leading-relaxed">
            הצוות שלנו כאן כדי להוביל אותך למסע של גדילה, חוזק ופריצת גבולות.
          </p>
          <button className="w-full bg-green-800 text-white font-bold py-4 px-6 rounded-lg text-base">
            בואו נתחיל
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;
