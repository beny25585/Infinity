import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "האם זה מתאים גם למי שלא רוצה להיות קרבי?",
    a: "כן! אינפיניטי בונה תכנית לחיים – לא רק לצבא. תכנית מנטלית שמשפיעה על כל אורח החיים.",
  },
  {
    q: "האם באמת התקבלו חניכים ליחידות מיוחדות?",
    a: "כן, מעל 120 חניכים התקבלו לטיס, שייטת, סיירות, דובדבן ועוד.",
  },
  {
    q: "מאיזה גיל אפשר להצטרף?",
    a: "מגיל 14 עד 18.",
  },
  {
    q: "מדריכים מוכשרים?",
    a: "כן. כלל המדריכים באינפיניטי הם בעלי תעודת מאמן כושר מוסמך מטעם מכון וינגייט, ולוחמים לשעבר ביחידות מובחרות בצה״ל. כיום הם ממשיכים לתרום כמדריכים מקצועיים וכמילואימניקים פעילים.",
  },
  {
    q: "האם יש קבוצות בכל הארץ?",
    a: "כן. אם הגעתם קבוצה של 10 חניכים – נפתח קבוצה חדשה במקום מגוריכם.",
  },
  {
    q: "יש התחייבות?",
    a: "לא. ניתן להודיע על הפסקת הפעילות בהתראה של 14 ימי עסקים.",
  },
  {
    q: "המדריכים עברו הכשרה?",
    a: "בוודאי. כולם לוחמים לשעבר או מפקדים פעילים במילואים ביחידות מובחרות.",
  },
  {
    q: "מקבלים גם תכנית תזונה ואימונים?",
    a: "כן, כל חניך מקבל מעטפת מלאה כולל תזונה ואימונים.",
  },
  {
    q: "אפשר להצטרף לקהילה בלי להירשם?",
    a: "כן. יש תקופת ניסיון של שבועיים להכיר את המקום והאנשים.",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="max-w-4xl mx-auto p-6" dir="rtl">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 mt-4">
          שאלות נפוצות
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-800 mx-auto rounded-full"></div>
      </div>

      {/* FAQ Items */}
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = index === openIndex;

          return (
            <div
              key={index}
              className={`
                relative overflow-hidden rounded-2xl transition-all duration-200 ease-in-out
                ${
                  isOpen
                    ? "bg-white shadow-xl shadow-green-900/10 border-2 border-green-600"
                    : "bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl border border-gray-200"
                }
              `}
            >
              {/* Question Button */}
              <button
                onClick={() => toggle(index)}
                className={`
                  w-full text-right p-6 font-semibold text-lg transition-colors duration-200
                  flex items-center justify-start group
                  ${
                    isOpen
                      ? "text-green-800 bg-gradient-to-r from-green-50 to-transparent"
                      : "text-gray-800 hover:text-green-700 hover:bg-gray-50"
                  }
                `}
                aria-expanded={isOpen}
                aria-controls={`faq-${index}`}
              >
                <ChevronDown
                  className={`
                    w-6 h-6 transition-transform duration-200 flex-shrink-0 ml-4
                    ${
                      isOpen
                        ? "rotate-180 text-green-600"
                        : "text-gray-400 group-hover:text-green-500"
                    }
                  `}
                />
                <span className="leading-relaxed flex-1 text-right">
                  {faq.q}
                </span>
              </button>

              {/* Answer Content */}
              <div
                className={`
                  transition-all duration-400 ease-in-out overflow-hidden
                  ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
                `}
              >
                <div className="px-6 pb-6">
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-green-200 to-transparent mb-4"></div>
                  <div className="text-gray-700 leading-relaxed text-base bg-gradient-to-br from-green-50/50 to-transparent p-4 rounded-xl border border-green-100">
                    {faq.a}
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              {isOpen && (
                <div className="absolute top-0 left-0 w-32 h-32 opacity-5">
                  <div className="w-full h-full bg-gradient-to-br from-green-600 to-green-800 rounded-full transform -translate-x-16 -translate-y-16"></div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQs;
