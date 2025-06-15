export default function About() {
  return (
    <section className="bg-white py-16 min-h-screen">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Main title */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">קצת עלינו</h2>
          <div className="w-20 h-1 bg-green-700 mx-auto"></div>
        </div>

        {/* Main content - About Yonatan */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
          {/* Image section */}
          <div className="flex justify-center lg:order-2">
            <div className="w-80 h-80 rounded-lg overflow-hidden shadow-lg">
              <img
                src="/images/yonatan-profile.jpg"
                alt="יונתן בן שבת"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* About text */}
          <div className="space-y-8 lg:order-1">
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-4">
                מי זה יונתן בן שבת?
              </h3>
              <p className="text-xl text-gray-600 font-medium leading-relaxed">
                יזם, מרצה ומאמן מנטלי – לוחם ומפקד בסיירת חרוב
              </p>
            </div>

            {/* Quote */}
            <div className="bg-gray-50 p-8 rounded-lg border-r-4 border-green-700">
              <blockquote className="text-lg text-gray-700 leading-relaxed">
                "הבית שבו גדלתי היה מלא בכאוס – אלימות, צעקות וביקורים דחופים של
                שוטרים. אבל במקום לתת לכאוס לשבור אותי, הפכתי אותו לדלק. הוא
                לימד אותי לקחת שליטה, ולהפוך את הכאב – לכוח."
              </blockquote>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                רקע מקצועי
              </h4>
              <p className="text-gray-700 leading-relaxed">
                בעלים של אינפיניטי – קבוצות כושר קרבי ותנועת נוער. מרצה ברחבי
                הארץ ומלווה אנשים בתהליכי התפתחות אישית, לשליטה בחיים ולהגשמת
                מטרות.
              </p>
            </div>
          </div>
        </div>

        {/* Lecture section */}
        <div className="bg-green-800 text-white rounded-lg p-12 mb-24">
          <h3 className="text-3xl font-bold text-center mb-12">
            רוצים הרצאה משנה חיים?
          </h3>

          <p className="text-lg text-center mb-12 max-w-4xl mx-auto leading-relaxed opacity-90">
            הרגלים מכווני תוצאה. ההרצאה שתעזור לך לראות ולתכנן הכל אחרת ולתת לך
            נקודות זכות משאר החברה שמנסים להתקבל ליחידות המובחרות
          </p>

          <h4 className="text-2xl font-semibold text-center mb-10">
            מה מחכה לך בהרצאה?
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-8">
              <div>
                <h5 className="text-xl font-semibold mb-3">כישרון או הצלחה</h5>
                <p className="leading-relaxed opacity-90">
                  למה כישרון הוא תירוץ - והצלחה היא בחירה
                </p>
              </div>

              <div>
                <h5 className="text-xl font-semibold mb-3">הרגלים מנצחים</h5>
                <p className="leading-relaxed opacity-90">
                  הדרך להפוך משמעת לתוצאות מוחשיות
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h5 className="text-xl font-semibold mb-3">אמונות מגבילות</h5>
                <p className="leading-relaxed opacity-90">
                  איך לזהות ולפרוץ את מה שמעכב אותך
                </p>
              </div>

              <div>
                <h5 className="text-xl font-semibold mb-3">משמעות ה"למה"</h5>
                <p className="leading-relaxed opacity-90">
                  למצוא את הדלק הפנימי שיחזיק אותך גם ברגעים הקשים
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Founder section - Different design */}
        <div className="bg-black text-white rounded-lg p-16">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">יונתן בן שבת - המייסד</h3>
            <div className="w-16 h-1 bg-green-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content first on mobile */}
            <div className="space-y-6 lg:order-1">
              <h4 className="text-2xl font-bold text-green-400">
                החזון של InFiniTy
              </h4>

              <p className="text-lg leading-relaxed opacity-90">
                יונתן בן שבת הקים את InFiniTy מתוך חזון ברור: לחנך דור של לוחמים
                שמצוינים לא רק פיזית, אלא גם מנטלית ורוחנית.
              </p>

              <p className="text-lg leading-relaxed opacity-90">
                לאחר שירותו בסיירת חרוב והצטברות של שנות ניסיון בהכנה לגיבושים
                ויחידות מובחרות, יונתן זיהה את הצורך בגישה שונה - גישה שמשלבת
                אימון פיזי מתקדם עם חיזוק מנטלי ופיתוח אישיות.
              </p>

              {/* Stats */}
              <div className="bg-gray-900 p-6 rounded-lg">
                <h5 className="text-xl font-semibold text-green-400 mb-4">
                  הישגי InFiniTy
                </h5>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-green-400">
                      120+
                    </div>
                    <div className="text-sm opacity-75">
                      חניכים ליחידות מובחרות
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-400">88%</div>
                    <div className="text-sm opacity-75">שיעור הצלחה</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-400">3</div>
                    <div className="text-sm opacity-75">שנות פעילות</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-400">
                      100%
                    </div>
                    <div className="text-sm opacity-75">מדריכים מוסמכים</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image second */}
            <div className="flex justify-center lg:order-2">
              <div className="w-80 h-80 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/images/yonatan-founder.jpg"
                  alt="יונתן בן שבת - המייסד"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
