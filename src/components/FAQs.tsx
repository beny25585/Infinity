import { useState, useRef,  } from "react";

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
]


const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section>
      <h2 className="text-3xl font-bold text-center mb-6">שאלות נפוצות</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = index === openIndex;

          return (
            <div
              key={index}
              className="border border-green-300 rounded-xl p-4 bg-green-50 text-black transition-shadow"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full text-right font-bold text-base sm:text-lg p-3 rounded-md bg-white border border-green-400 text-green-800 shadow-sm active:bg-green-100 transition"
                aria-expanded={isOpen}
                aria-controls={`faq-${index}`}
              >
                {faq.q}
              </button>

            <div
                ref={(el) => {
                  contentRefs.current[index] = el;
                  // לא מחזירים ערך כדי למנוע שגיאת טיפוס
                }}
                id={`faq-${index}`}
                className="transition-all duration-500 overflow-hidden"
                style={{
                  maxHeight: isOpen
                    ? `${contentRefs.current[index]?.scrollHeight}px`
                    : "0px",
                }}
              >
                <div className="p-3 text-sm leading-relaxed text-black">
                  {faq.a}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQs;

