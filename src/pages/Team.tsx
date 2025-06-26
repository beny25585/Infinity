const Team = () => {
  return (
    <section className="bg-gray-300 py-6 md:py-8 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header with styled title */}
        <div className="text-center mb-8 md:mb-12">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-white bg-green-800 py-4 md:py-6 px-6 md:px-10 rounded-2xl inline-block border border-white">
              הצוות שלנו
            </h2>
          </div>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed px-2 max-w-3xl mx-auto">
            הצוות שלנו כולל מדריכים מנוסים, בעלי רקע קרבי עשיר ושנות ניסיון רבות
            בהכנה מקצועית ליחידות המובחרות בצה״ל, תוך שילוב בין אימון פיזי מתקדם
            לפיתוח חוסן מנטלי, יכולות מנטליות מתקדמות, ועמידה באתגרים תחת לחץ –
            כבסיס להצלחה בשירות הקרבי ובחיים בכלל{" "}
          </p>
        </div>

        {/* Team Grid - Responsive layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
          {/* Team Member 1 - יונתן */}
          <div className="bg-black rounded-xl md:rounded-2xl shadow-xl overflow-hidden h-full">
            {/* Image */}
            <div className="relative h-48 md:h-56 lg:h-48">
              <img
                src="/images/yoni-about.jpg"
                alt="יונתן"
                className="w-full h-full object-cover "
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="p-4 md:p-5 text-white">
              <h3 className="text-lg md:text-xl font-bold mb-1 text-white">
                יונתן
              </h3>
              <div className="text-green-400 text-sm font-semibold mb-3">
                מייסד אינפיניטי
              </div>
              <p className="text-gray-300 leading-relaxed text-sm">
                בוגר סיירת חרוב, מפקד ולוחם במילואים פעיל, יזם מאמן מנטלי, מנחה
                סדנאות והרצאות על פיתוח חוסן והצלחה בשיטת הרגלים "מכווני תוצאה"
              </p>
            </div>
          </div>
          {/* Team Member 2 - נתנאל */}
          <div className="bg-black rounded-xl md:rounded-2xl shadow-xl overflow-hidden h-full">
            {/* Image */}
            <div className="relative h-48 md:h-56 lg:h-48">
              <img
                src="/images/מדרך אגרוף.jpg"
                alt="נתנאל"
                className="w-full h-full object-cover object-[50%_20%]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="p-4 md:p-5 text-white">
              <h3 className="text-lg md:text-xl font-bold mb-1 text-white">
                נתנאל
              </h3>
              <div className="text-green-400 text-sm font-semibold mb-3">
                מדריך ומנהל מערך מדריכים איגרוף / קרב מגע
              </div>
              <p className="text-gray-300 leading-relaxed text-sm">
                לוחם במילואים פעיל + מדריך לוטר לשעבר, יחידת אם סיירת חרוב
              </p>
            </div>
          </div>

          {/* Team Member 3 - יקיר */}
          <div className="bg-black rounded-xl md:rounded-2xl shadow-xl overflow-hidden h-full">
            {/* Image */}
            <div className="relative h-48 md:h-56 lg:h-48">
              <img
                src="https://images.unsplash.com/photo-1518609571773-39b7d303a87b?w=500&auto=format&fit=crop&q=60"
                alt="יקיר"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="p-4 md:p-5 text-white">
              <h3 className="text-lg md:text-xl font-bold mb-1 text-white">
                יקיר
              </h3>
              <div className="text-green-400 text-sm font-semibold mb-3">
                רכז הקבוצות
              </div>
              <p className="text-gray-300 leading-relaxed text-sm">
                מנהל את כל מערך הקבוצות בפריסה ארצית, מערך לוגיסטי
              </p>
            </div>
          </div>

          {/* Team Member 4 - יורן */}
          <div className="bg-black rounded-xl md:rounded-2xl shadow-xl overflow-hidden h-full">
            {/* Image */}
            <div className="relative h-48 md:h-56 lg:h-48">
              <img
                src="/images/trainer2.jpg"
                alt="יורן"
                className="w-full h-full object-cover object-[30%_20%]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="p-4 md:p-5 text-white">
              <h3 className="text-lg md:text-xl font-bold mb-1 text-white">
                יורן
              </h3>
              <div className="text-green-400 text-sm font-semibold mb-3">
                מדריך בכיר מתמחה בהכנת נערים לגיבושים וימי סיירות
              </div>
              <p className="text-gray-300 leading-relaxed text-sm">
                לוחם מילואים פעיל, עם גישה מנטלית פיזית ייחודית, מתמחה בפיתוח
                חוסן נפשי וכושר גופני
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
