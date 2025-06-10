import { Star } from "lucide-react";

const recommendations = [
  {
    name: "מ׳ מראש העין",
    text: "התקבל לשייטת אחרי שנה בתוכנית. התמיכה פה זה משהו שלא רואים בשום מקום.",
  },
  {
    name: "י׳ מצוות אשדוד",
    text: "עבר תהליך עוצמתי והתקבל לדובדבן – תודה על הכול!",
  },
  {
    name: "א׳ מאשקלון",
    text: "התקבל לסיירת חרוב עם ביטחון עצמי שלא היה לי קודם.",
  },
  {
    name: "ל׳ מבאר שבע",
    text: "עבר הכנה לראיונות והתקבל לטיס. פשוט מקצוענים.",
  },
  {
    name: "ר׳ מהרצליה",
    text: "עברתי מאפס כושר לתותח תוך 4 חודשים. עכשיו בדרך לעוקץ.",
  },
  {
    name: "ת׳ מקריית שמונה",
    text: "הגעתי בלי כיוון והיום אני מפקד בקורס לוחמה בטרור.",
  },
  {
    name: "ש׳ מנתניה",
    text: "עשיתי שינוי אמיתי – קיבלתי ביטחון, כלים, והתקבלתי לשייטת.",
  },
  { name: "ק׳ מחיפה", text: "הפכתי להיות מנהיג אמיתי, היום אני בקומנדו הימי." },
  {
    name: "ד׳ מראשון לציון",
    text: "עזרתם לי להפוך כל פחד לאנרגיה. התקבלתי ליחידת מודיעין מיוחדת.",
  },
  { name: "ע׳ מתל אביב", text: "הגעתי רק בשביל כושר ויצאתי עם משפחה. תודה!" },
];

const Recommendations = () => {
  return (
    <div className="  text-white">
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-center text-4xl font-bold mb-8 text-black">המלצות חניכים</h2>

        <div className="overflow-x-auto snap-x snap-mandatory flex  space-x-6 px4 pb-6 scrollbar-hide">
          {recommendations.map((rec, index) => (
            <div
              key={index}
              className="snap-center snap-always shrink-0 w-full h-auto bg-black/80 backdrop-blur-sm border border-gray-600 rounded-2xl p-6 shadow-2xl flex flex-col justify-between"
            >
              <div>
                <h4 className="text-cyan-400 font-bold text-lg">{rec.name}</h4>
                <div className="h-0.5 bg-gradient-to-l from-green-400 to-green-600 my-2" />
              </div>
              <p className="text-cyan-200 font-semibold text-right leading-relaxed ">
                "{rec.text}"
              </p>
              <div className="flex border-t border-gray-600 pt-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-current mr-1"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-r from-green-500 to-green-700 text-white rounded-2xl p-8 shadow-xl border border-green-400">
            <h3 className="text-2xl font-bold mb-4">רוצה להיות הבא?</h3>
            <p className="text-green-100 mb-6">
              הצטרף אלינו וקבל את הכלים להגשים את החלום שלך
            </p>
            <div className="flex justify-center items-center space-x-4">
              <div className="w-3 h-3 bg-white rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-gray-200 rounded-full animate-bounce delay-100"></div>
              <div className="w-3 h-3 bg-white rounded-full animate-bounce delay-200"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Recommendations;
