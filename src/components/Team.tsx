const Team = () => {
  return (
    <section className=" text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold mb-12 text-center gradient-text">
          הצוות שלנו
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* מאמן 1 */}
          <div className="  flex flex-col items-center">
            <img
              src="https://images.unsplash.com/photo-1628935291759-bbaf33a66dc6?w=500&auto=format&fit=crop&q=60"
              alt="דניאל חסון"
              className="w-80 h-48 object-cover mb-6  "
            />
            <h3 className="text-2xl font-semibold mb-2 text-center">
              דניאל חסון
            </h3>
            <p className=" text-center mb-4 leading-relaxed">
              מאמן ותיק בתחום הכושר הקרבי, מנהל מרכזים להכנה לגיבושים ויוצא
              יחידה קרבית.
            </p>
            <a
              href="#"
              className="px-6 py-2 bg-[var(--primary)] rounded-full text-white font-semibold hover:bg-[var(--primary-dark)] transition"
            >
              פרטים נוספים
            </a>
          </div>

          {/* מאמן 2 */}
          <div className=" flex flex-col items-center">
            <img
              src="https://images.unsplash.com/photo-1667890786327-d28da55b0e57?w=500&auto=format&fit=crop&q=60"
              alt="יובל עילם"
              className="w-80 h-48 object-cover object-top mb-6   "
            />
            <h3 className="text-2xl font-semibold mb-2 text-center">
              יובל עילם
            </h3>
            <p className=" text-center mb-4 leading-relaxed">
              מראשוני התחום בארץ, הכין מאות צעירים ליחידות עילית, עם גישה מנטלית
              ופיזית ייחודית.
            </p>
          </div>

          {/* מאמן 3 */}
          <div className=" flex flex-col items-center">
            <img
              src="https://images.unsplash.com/photo-1518609571773-39b7d303a87b?w=500&auto=format&fit=crop&q=60"
              alt="נועה דביר"
              className=" w-80 h-48 object-cover object-top mb-6 "
            />
            <h3 className="text-2xl font-semibold mb-2 text-center">
              נועה דביר
            </h3>
            <p className=" text-center mb-4 leading-relaxed">
              מאמנת כושר קרבי עם ניסיון של מעל 8 שנים בהכנה לגיבושים ויחידות
              מיוחדות. בוגרת יחידת חי"ר לוחמת, מוסמכת באימון פונקציונלי ואימון
              מנטלי ללחץ.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
