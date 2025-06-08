import { Star, Quote } from "lucide-react";

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
  {
    name: "ק׳ מחיפה",
    text: "הפכתי להיות מנהיג אמיתי, היום אני בקומנדו הימי.",
  },
  {
    name: "ד׳ מראשון לציון",
    text: "עזרתם לי להפוך כל פחד לאנרגיה. התקבלתי ליחידת מודיעין מיוחדת.",
  },
  {
    name: "ע׳ מתל אביב",
    text: "הגעתי רק בשביל כושר ויצאתי עם משפחה. תודה!",
  },
];

const Recommendations = () => {
  return (
    <section className="max-w-7xl mx-auto p-6  min-h-screen" dir="rtl">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          המלצות חניכים
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto rounded-full mb-4"></div>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          סיפורי הצלחה אמיתיים של חניכים שהשיגו את חלומותיהם
        </p>
      </div>

      {/* Recommendations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recommendations.map((rec, index) => (
          <div
            key={index}
            className="group relative bg-black  backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-gray-700 hover:border-green-400 transition-all duration-300 hover:-translate-y-2"
          >
            {/* Quote Icon */}
            <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-30 transition-opacity duration-300">
              <Quote className="w-8 h-8 text-green-400" />
            </div>
               {/* Name with decorative line */}
              <div className=" text-cyan-400">
                <h4 className="text-lg font-bold text-cyan-400 group-hover:text-green-400 transition-colors duration-300">
                  {rec.name}
                </h4>
                <div className="w-12 h-0.5 bg-gradient-to-l from-green-400 to-green-600 mt-2 group-hover:w-20 transition-all duration-300"></div>
              </div>

            

            {/* Content */}
            <div className="relative z-10">
              <p className="text-cyan-400 font-bold leading-relaxed mb-4 text-base group-hover:text-white transition-colors duration-300">
                "{rec.text}"
              </p>
           
            </div>
            {/* Stars */}
            <div className="flex justify-start mb-4 border-t border-gray-600 ">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 text-yellow-400 fill-current"
                />
              ))}
            </div>

            {/* Hover Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse"></div>
            <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gray-600 rounded-full opacity-0 group-hover:opacity-80 transition-all duration-300 delay-100"></div>
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="mt-16 text-center">
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
  );
};

export default Recommendations;