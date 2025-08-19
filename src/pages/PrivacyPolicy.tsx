import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 text-right bg-white text-black" dir="rtl">
      <h1 className="text-2xl font-bold mb-4">מדיניות פרטיות – אינפיניטי כושר קרבי</h1>

      <p className="mb-3">
        באתר אינפיניטי כושר קרבי אנו מכבדים את פרטיות הגולשים ופועלים בהתאם לחוק הגנת הפרטיות, התשמ"א–1981 ותיקוניו.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">1. מידע שנאסף</h2>
      <p className="mb-3">
        בעת השארת פרטים בטפסי יצירת הקשר אנו אוספים: שם מלא, עיר, מספר טלפון והודעה חופשית מטעמך.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">2. מטרת השימוש</h2>
      <p className="mb-3">
        המידע נאסף אך ורק לצורך יצירת קשר בהתאם לפנייתך. לא נעשה שימוש אחר במידע ללא הסכמתך המפורשת.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">3. אחסון ושיתוף מידע</h2>
      <p className="mb-3">
        המידע נשלח ישירות לכתובת הדוא"ל של בעלי האתר באמצעות השירות החיצוני{" "}
        <a href="https://formsubmit.co/privacy" target="_blank" rel="noopener noreferrer" className="text-green-700 underline">
          formsubmit.co
        </a>. המידע לא מועבר לצדדים נוספים, אלא אם נדרש על פי דין.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">4. אבטחת מידע</h2>
      <p className="mb-3">
        האתר משתמש בפרוטוקול מאובטח (HTTPS) להעברת המידע. אנו נוקטים באמצעי זהירות סבירים למניעת גישה לא מורשית לנתונים.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">5. זכויות המשתמש</h2>
      <p className="mb-3">
        בהתאם לחוק, אתה רשאי לעיין במידע שנשמר אודותיך, לבקש את תיקונו או את מחיקתו. 
        לפניות יש לפנות אלינו בדוא"ל:{" "}
        <a href="mailto:Infinitykosherkravi@gmail.com" className="text-green-700 underline">
          Infinitykosherkravi@gmail.com
        </a>
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">6. עוגיות (Cookies)</h2>
      <p className="mb-3">
        האתר עשוי לעשות שימוש בעוגיות (Cookies) לצרכים טכניים ושיפור חוויית המשתמש. 
        ניתן לחסום שימוש זה באמצעות הגדרות הדפדפן.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">7. שינויים במדיניות</h2>
      <p className="mb-3">
        אנו שומרים לעצמנו את הזכות לעדכן מדיניות זו מעת לעת. נוסח מעודכן יתפרסם בעמוד זה.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
