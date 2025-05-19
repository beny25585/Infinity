import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="relative py-28 bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden text-white">
      {/* רקע טקסטורה עדינה */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>

      <div className="relative container mx-auto px-6 max-w-7xl z-10">
        <div className="flex flex-col md:flex-row items-center gap-20">
          {/* צד תמונה עם אפקטים */}
          <div className="md:w-1/2 relative group perspective-1000">
            <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-700 group-hover:rotate-y-6 group-hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&q=80&w=1000"
                alt="אימון כושר קרבי"
                className="w-full h-full object-cover"
              />
            </div>

            {/* בלוק שנות ניסיון עם אנימציה */}
            <div className="absolute -bottom-14 -right-14 w-56 h-56 bg-gradient-to-tr from-purple-600 to-pink-500 rounded-3xl shadow-lg flex items-center justify-center animate-pulse">
              <div className="bg-black bg-opacity-70 rounded-3xl w-52 h-52 flex flex-col items-center justify-center text-center text-white">
                <span className="text-6xl font-extrabold tracking-tight drop-shadow-lg">
                  10+
                </span>
                <span className="text-xl mt-1 font-semibold">שנות ניסיון</span>
              </div>
            </div>
          </div>

          {/* צד טקסט */}
          <div className="md:w-1/2 space-y-10">
            <h2 className="text-5xl font-extrabold leading-tight tracking-wide select-none">
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-gradient-x">
                אינפיניטי פיטנס
              </span>{" "}
              - מי אנחנו?
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed max-w-xl drop-shadow-md">
              אנחנו מאמינים שכל אחד יכול להגיע לרמות ביצוע גבוהות יותר ממה שהוא
              חושב שהוא מסוגל. בכושר קרבי Infinity, אנחנו שמים דגש על פיתוח
              מנטלי לצד פיתוח פיזי.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed max-w-xl drop-shadow-md">
              האימונים שלנו נבנו על ידי יוצאי יחידות מובחרות ומשלבים שיטות
              מתקדמות שמטרתן לדחוף אתכם הרחק מאזור הנוחות. כל אחד מתאמן בקצב
              שלו, אבל אף אחד לא נשאר במקום.
            </p>

            {/* כרטיסי יתרונות */}
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
                  className="flex flex-col p-6 bg-gradient-to-br from-black/70 to-black/50 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-500 cursor-default group"
                >
                  <h3 className="flex items-center gap-4 text-2xl font-bold text-white mb-3 select-none">
                    <span className="flex items-center justify-center w-12 h-12 rounded-full bg-pink-500 text-white font-extrabold text-xl drop-shadow-lg group-hover:scale-110 transform transition-transform duration-300">
                      {id}
                    </span>
                    {title}
                  </h3>
                  <p className="text-gray-300 text-base leading-relaxed drop-shadow-sm">
                    {desc}
                  </p>
                </div>
              ))}
            </div>

            {/* כפתור קריאה לפעולה */}
            <Link
              to="./About"
              className="inline-block mt-8 px-10 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full text-white font-extrabold text-lg shadow-lg hover:scale-105 hover:shadow-2xl transform transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-pink-400 focus:ring-opacity-50"
            >
              קרא עוד עלינו
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
