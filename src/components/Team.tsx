const Team = () => {
  return (
    <section className="bg-gray-50 py-8 min-h-screen">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-extrabold mb-16 text-center text-black">
          הצוות שלנו
        </h2>

        {/* הוספת תיאור כללי */}
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto leading-relaxed">
          הצוות שלנו מורכב ממדריכים מנוסים עם רקע צבאי עשיר, שמביאים איתם שנות
          ניסיון בהכנה פיזית ומנטלית ליחידות מובחרות בצה"ל.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* מאמן 1 */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1628935291759-bbaf33a66dc6?w=500&auto=format&fit=crop&q=60"
                alt="דניאל חסון"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-3 text-gray-800">
                דניאל חסון
              </h3>
              <div className="text-sm text-gray-500 mb-4 font-medium">
                מאמן ראשי • יוצא יחידה קרבית
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                מאמן ותיק בתחום הכושר הקרבי, מנהל מרכזים להכנה לגיבושים ויוצא
                יחידה קרבית. מתמחה בהכנה פיזית ומנטלית מתקדמת.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  15+ שנות ניסיון
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  מעל 300 חניכים מוצלחים
                </div>
              </div>
              <a
                href="#"
                className="w-full inline-block text-center px-6 py-3 bg-gray-800 rounded-lg text-white font-semibold hover:bg-gray-700 transition-colors duration-300"
              >
                פרטים נוספים
              </a>
            </div>
          </div>

          {/* מאמן 2 */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1667890786327-d28da55b0e57?w=500&auto=format&fit=crop&q=60"
                alt="יובל עילם"
                className="w-full h-64 object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-3 text-gray-800">
                יובל עילם
              </h3>
              <div className="text-sm text-gray-500 mb-4 font-medium">
                מאמן בכיר • חלוץ בתחום
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                מראשוני התחום בארץ, הכין מאות צעירים ליחידות עילית, עם גישה
                מנטלית ופיזית ייחודית. מתמחה בפיתוח חוסן נפשי וכושר גופני.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  יוצא יחידת עילית
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  מומחה לאימון מנטלי
                </div>
              </div>
              <a
                href="#"
                className="w-full inline-block text-center px-6 py-3 bg-gray-800 rounded-lg text-white font-semibold hover:bg-gray-700 transition-colors duration-300"
              >
                פרטים נוספים
              </a>
            </div>
          </div>

          {/* מאמן 3 */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1518609571773-39b7d303a87b?w=500&auto=format&fit=crop&q=60"
                alt="נועה דביר"
                className="w-full h-64 object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-3 text-gray-800">
                נועה דביר
              </h3>
              <div className="text-sm text-gray-500 mb-4 font-medium">
                מאמנת כושר קרבי • בוגרת חי"ר לוחמת
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                מאמנת כושר קרבי עם ניסיון של מעל 8 שנים בהכנה לגיבושים ויחידות
                מיוחדות. מוסמכת באימון פונקציונלי ואימון מנטלי ללחץ.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  מומחית לאימון נשים
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  אימון פונקציונלי מתקדם
                </div>
              </div>
              <a
                href="#"
                className="w-full inline-block text-center px-6 py-3 bg-gray-800 rounded-lg text-white font-semibold hover:bg-gray-700 transition-colors duration-300"
              >
                פרטים נוספים
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
