export default function About() {
  return (
    <section className="bg-white py-8 md:py-16 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        {/* Main title */}
        <div className="text-center mb-4 md:mb-5">
          <h2 className="text-3xl md:text-5xl font-bold text-black ">
            קצת עלינו
          </h2>
          <div className="w-20 h-1 bg-green-700 mx-auto"></div>
        </div>

        {/* Main content - About Yonatan */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-20 items-center mb-16 md:mb-24">
          {/* Image section */}
          <div className="flex justify-center lg:order-2">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 duration-300">
              <img
                src="/images/yoni-about.jpg"
                alt="יונתן בן שבת"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* About text */}
          <div className="space-y-6 md:space-y-8 lg:order-1">
            <div>
              <h3 className="text-2xl md:text-4xl font-bold text-black mb-3 md:mb-4">
                מי זה יונתן בן שבת?
              </h3>
              <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed">
                יזם, מרצה ומאמן מנטלי – לוחם ומפקד בסיירת חרוב
              </p>
            </div>

            {/* Quote - Shorter version */}
            <div className="bg-gray-300 p-4 md:p-8 rounded-lg border-r-4 border-green-700 shadow-sm hover:shadow-md transition-shadow duration-300">
              <blockquote className="text-base md:text-lg text-gray-700 leading-relaxed">
                <span className="hidden md:block">
                  "הבית שבו גדלתי היה מלא בכאוס – אלימות, צעקות וביקורים דחופים
                  של שוטרים. אבל במקום לתת לכאוס לשבור אותי, הפכתי אותו לדלק.
                  הוא לימד אותי לקחת שליטה, ולהפוך את הכאב – לכוח."
                </span>
                <span className="md:hidden">
                  "הפכתי את הכאוס בבית לדלק. הוא לימד אותי לקחת שליטה ולהפוך את
                  הכאב לכוח."
                </span>
              </blockquote>
            </div>

            <div className="bg-gray-300 p-4 md:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <h4 className="text-lg md:text-xl font-semibold text-black mb-3 md:mb-4">
                רקע מקצועי
              </h4>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                בעלים של אינפיניטי – קבוצות כושר קרבי ותנועת נוער. מעל ל600 יום
                במילואים תוך הובלת לוחמים בשטח רצועת עזה ופעילות מבצעים באיוש,
                מרצה ברחבי הארץ ומלווה אנשים בתהליכי התפתחות אישית.
              </p>
            </div>
          </div>
        </div>

       <div className="bg-gradient-to-r from-black via-gray-900 to-black text-white rounded-2xl p-6 md:p-16 shadow-2xl">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
    
    {/* טקסט בצד שמאל במסך גדול */}
    <div className="space-y-6 order-2 lg:order-1">
      <h4 className="text-2xl md:text-3xl font-bold text-green-400">
        החזון של אינפיניטי
      </h4>

      <p className="text-base md:text-lg leading-relaxed opacity-95">
        יונתן בן שבת הקים את InFiniTy מתוך חזון ברור: לחנך דור של לוחמים
        שמצוינים לא רק פיזית, אלא גם מנטלית ורוחנית.
      </p>

      <p className="text-base md:text-lg leading-relaxed opacity-80 hidden md:block">
        לאחר שירותו בסיירת חרוב והצטברות של שנות ניסיון בהכנה לגיבושים
        ויחידות מובחרות, יונתן זיהה את הצורך בגישה שונה – גישה שמשלבת
        אימון פיזי מתקדם עם חיזוק מנטלי ופיתוח אישיות.
      </p>
    </div>

    {/* תמונה בצד ימין במסך גדול */}
    <div className="order-1 lg:order-2">
      <img
        className="w-full h-52 md:h-72 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
        src="/images/vision.jpg"
        alt="חזון אינפיניטי"
      />
    </div>
  </div>
</div>


    </div>
    </section>
  );
}
