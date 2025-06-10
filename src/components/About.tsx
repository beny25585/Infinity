export default function About() {
  return (
    <section className="bg-gray-300 py-8 min-h-screen">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* כותרת ראשית */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-black mb-4">קצת עלינו</h2>
          <div className="w-24 h-1 bg-gray-800 mx-auto"></div>
        </div>

        {/* תוכן ראשי */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* תמונה */}
          <div className="flex justify-center lg:order-2">
            <div className="relative">
              <div className=" w-80 h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="/images/yonatan-profile.jpg"
                  alt="יונתן בן שבת"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* אפקט דקורטיבי */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gray-800 rounded-2xl -z-10"></div>
            </div>
          </div>

          {/* טקסט אודות */}
          <div className="space-y-8 lg:order-1">
            <div>
              <h3 className="text-4xl font-bold text-black mb-4">
                מי זה יונתן בן שבת?
              </h3>
              <p className="text-xl text-gray-600 font-medium">
                יזם, מרצה ומאמן מנטלי – לוחם ומפקד בסיירת חרוב
              </p>
            </div>

            {/* ציטוט */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-r-4 border-gray-800">
              <blockquote className="text-lg text-gray-700 italic leading-relaxed">
                "הבית שבו גדלתי היה מלא בכאוס – אלימות, צעקות וביקורים דחופים של
                שוטרים. אבל במקום לתת לכאוס לשבור אותי, הפכתי אותו לדלק. הוא
                לימד אותי לקחת שליטה, ולהפוך את הכאב – לכוח."
              </blockquote>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h4 className="text-xl font-semibold text-black mb-3">
                  רקע מקצועי
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  בעלים של אינפיניטי – קבוצות כושר קרבי ותנועת נוער. מרצה ברחבי
                  הארץ ומלווה אנשים בתהליכי התפתחות אישית, לשליטה בחיים ולהגשמת
                  מטרות.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white  rounded-2xl  p-4 mb-8">
          <h3 className="text-3xl flex justify-center font-bold text-center text-black mb-8 ">
            מה מחכה לך בהרצאה שתשנה את המשחק?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-6">
              <div className="flex items-start space-x-4 rtl:space-x-reverse">
                <div>
                  <h4 className="text-xl font-semibold text-black mt-2 mb-2">
                    כישרון או הצלחה
                  </h4>
                  <p className="text-gray-600">
                    למה כישרון הוא תירוץ - והצלחה היא בחירה
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 rtl:space-x-reverse">
                <div>
                  <h4 className="text-xl font-semibold text-black mb-2">
                    הרגלים מנצחים
                  </h4>
                  <p className="text-gray-600">
                    הדרך להפוך משמעת לתוצאות מוחשיות
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 rtl:space-x-reverse">
                <div>
                  <h4 className="text-xl font-semibold text-black mb-2">
                    אמונות מגבילות
                  </h4>
                  <p className="text-gray-600">
                    איך לזהות ולפרוץ את מה שמעכב אותך
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 rtl:space-x-reverse">
                <div>
                  <h4 className="text-xl font-semibold text-black mb-2">
                    משמעות ה"למה"
                  </h4>
                  <p className="text-gray-600">
                    למצוא את הדלק הפנימי שיחזיק אותך גם ברגעים הקשים
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center bg-gray-800 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">מוכנים להתחיל את המסע?</h3>
          <p className="text-xl mb-8 text-gray-300">
            הצטרפו אלינו ותגלו את הפוטנציאל האמיתי שלכם
          </p>
          <div className="space-x-4 rtl:space-x-reverse">
            <a
              href="#contact"
              className="inline-block bg-white text-black px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              צרו קשר
            </a>
          
          </div>
        </div>
      </div>
    </section>
  );
}
