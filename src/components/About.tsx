import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="py-20 bg-[var(--bg-dark)]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 relative">
            <div className="w-full h-[450px] relative overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&q=80&w=1000"
                alt="אימון כושר קרבי"
                className="w-full h-full object-cover hover-scale"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[var(--primary)] rounded-lg hidden md:block">
              <div className="absolute top-0 left-0 w-full h-full bg-[var(--bg-dark)] rounded-lg transform translate-x-4 translate-y-4 flex items-center justify-center">
                <div className="text-center">
                  <span className="block text-4xl font-bold">10+</span>
                  <span className="block text-lg">שנות ניסיון</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="gradient-text">אינפיניטי פיטנס</span> - מי אנחנו?
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              אנחנו מאמינים שכל אחד יכול להגיע לרמות ביצוע גבוהות יותר ממה שהוא חושב שהוא מסוגל. 
              בכושר קרבי Infinity, אנחנו שמים דגש על פיתוח מנטלי לצד פיתוח פיזי.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              האימונים שלנו נבנו על ידי יוצאי יחידות מובחרות ומשלבים שיטות מתקדמות 
              שמטרתן לדחוף אתכם הרחק מאזור הנוחות. כל אחד מתאמן בקצב שלו, אבל אף אחד לא נשאר במקום.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-[var(--primary)] flex items-center justify-center mr-2">1</span>
                  מגוון אימונים
                </h3>
                <p className="text-gray-400">אימונים מותאמים לכל רמה, מתחילים ועד מתקדמים.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-[var(--primary)] flex items-center justify-center mr-2">2</span>
                  צוות מקצועי
                </h3>
                <p className="text-gray-400">מאמנים בעלי ניסיון רב והסמכות מקצועיות.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-[var(--primary)] flex items-center justify-center mr-2">3</span>
                  קהילה תומכת
                </h3>
                <p className="text-gray-400">קהילה של מתאמנים שעוזרים אחד לשני להתקדם.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-[var(--primary)] flex items-center justify-center mr-2">4</span>
                  תוצאות מוכחות
                </h3>
                <p className="text-gray-400">תוכניות אימון שהוכיחו את עצמן עם תוצאות אמיתיות.</p>
              </div>
            </div>
            
            <Link
              to="./About"
              className="inline-flex items-center gap-2 hover:gap-3 px-6 py-3 bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-bold rounded-md transition-all duration-300"
            >
              קרא עוד עלינו
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}