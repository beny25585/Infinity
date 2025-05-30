export default function About() {
  return (
    <section className="relative py-5 bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden text-gray-800">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>

      <div className="relative container mx-auto px-6 max-w-7xl z-10">
        <div className="flex flex-col md:flex-row items-center gap-20">
          <div className="md:w-1/2 w-full flex justify-center relative group perspective-1000">
            <div className="w-full h-64 md:h-[450px] max-w-md rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-700 group-hover:rotate-y-6 group-hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&q=80&w=1000"
                alt="אימון כושר קרבי"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="hidden md:flex absolute -bottom-14 -right-14 w-56 h-56 bg-gradient-to-tr from-blue-400 to-blue-600 rounded-3xl shadow-lg items-center justify-center animate-pulse">
              <div className="bg-white bg-opacity-90 rounded-3xl w-52 h-52 flex flex-col items-center justify-center text-center text-blue-800">
                <span className="text-6xl font-extrabold tracking-tight drop-shadow-lg">
                  10+
                </span>
                <span className="text-xl mt-1 font-semibold">שנות ניסיון</span>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 space-y-10">
            <h2 className="text-5xl font-extrabold leading-tight tracking-wide select-none">
              <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-teal-400 bg-clip-text text-transparent animate-gradient-x">
                אינפיניטי פיטנס
              </span>{" "}
              - מי אנחנו?
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed max-w-xl drop-shadow-sm">
              אנחנו מאמינים שכל אחד יכול להגיע לרמות ביצוע גבוהות יותר ממה שהוא
              חושב שהוא מסוגל. בכושר קרבי Infinity, אנחנו שמים דגש על פיתוח
              מנטלי לצד פיתוח פיזי.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed max-w-xl drop-shadow-sm">
              האימונים שלנו נבנו על ידי יוצאי יחידות מובחרות ומשלבים שיטות
              מתקדמות שמטרתן לדחוף אתכם הרחק מאזור הנוחות. כל אחד מתאמן בקצב
              שלו, אבל אף אחד לא נשאר במקום.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              {[
                {
                  id: 1,
                  title: "מגוון אימונים",
                  desc: "אימונים מותאמים לכל רמה, מתחילים ועד מתקדמים.",
                },
                {
                  id: 2,
                  title: "צוות מקצועי",
                  desc: "מאמנים בעלי ניסיון רב והסמכות מקצועיות.",
                },
                {
                  id: 3,
                  title: "קהילה תומכת",
                  desc: "קהילה של מתאמנים שעוזרים אחד לשני להתקדם.",
                },
                {
                  id: 4,
                  title: "תוצאות מוכחות",
                  desc: "תוכניות אימון שהוכיחו את עצמן עם תוצאות אמיתיות.",
                },
              ].map(({ id, title, desc }) => (
                <div
                  key={id}
                  className="flex flex-col p-6 bg-white bg-opacity-90 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-500 cursor-default group"
                >
                  <h3 className="flex items-center gap-4 text-2xl font-bold text-blue-800 mb-3 select-none">
                    <span className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white font-extrabold text-xl drop-shadow-lg group-hover:scale-110 transform transition-transform duration-300">
                      {id}
                    </span>
                    {title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed drop-shadow-sm">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
