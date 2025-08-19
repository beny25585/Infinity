import React from "react";

const TermsOfUse: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 text-right bg-white text-black" dir="rtl">
      <h1 className="text-2xl font-bold mb-4">תנאי שימוש – אינפיניטי כושר קרבי</h1>

      <p className="mb-3">
        ברוך הבא לאתר אינפיניטי כושר קרבי. השימוש באתר כפוף לתנאים המפורטים להלן. 
        גלישה באתר מהווה הסכמה לתנאי השימוש.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">1. תוכן האתר</h2>
      <p className="mb-3">
        האתר מציג מידע כללי על פעילות הכושר הקרבי שלנו. התכנים באתר נועדו למידע בלבד 
        ואינם מהווים ייעוץ מקצועי או רפואי. השימוש במידע הוא על אחריות המשתמש בלבד.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">2. השארת פרטים</h2>
      <p className="mb-3">
        השארת פרטים בטופס באתר מיועדת ליצירת קשר בלבד. השימוש בפרטים כפוף למדיניות הפרטיות שלנו.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">3. קניין רוחני</h2>
      <p className="mb-3">
        כל זכויות היוצרים בתכנים, תמונות, לוגו ועיצוב האתר שמורות לאינפיניטי כושר קרבי. 
        אין להעתיק, לשכפל או לעשות שימוש מסחרי ללא אישור מראש ובכתב.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">4. אחריות</h2>
      <p className="mb-3">
        האתר והשירותים ניתנים כפי שהם (AS IS). אינפיניטי כושר קרבי לא ישא באחריות 
        לכל נזק ישיר או עקיף שייגרם משימוש באתר או מהסתמכות על המידע שבו.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">5. שינוי בתנאים</h2>
      <p className="mb-3">
        אנו רשאים לשנות או לעדכן תנאי שימוש אלה בכל עת. נוסח מעודכן יפורסם בעמוד זה.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">6. יצירת קשר</h2>
      <p className="mb-3">
        לשאלות ניתן לפנות אלינו בדוא"ל:{" "}
        <a href="mailto:Infinitykosherkravi@gmail.com" className="text-green-700 underline">
          Infinitykosherkravi@gmail.com
        </a>
      </p>
    </div>
  );
};

export default TermsOfUse;
