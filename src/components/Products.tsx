import {Link} from "react-router-dom";

const Products = () => {
  const items = [
    {
      title: "אימוני חוף",
      description: "פיתוח כישורים פיזיים וביטחון עצמי דרך היאבקות מקצועית.",
      image: "/images/beach-training.jpg",
    },
    {
      title: "אימוני אגרוף, היאבקות וקרב מגע",
      description: "לוחם אמיתי שוטל בגוף ובנפש, עם ובלי נשק",
      image: "/images/krav-maga.jpg",
    },
    {
      title: "תיכנית דיבור בפני קהל",
      description: "נלמד אותך איך לדבר נכון מול קהלולהפוך למרצה מקצועי",
      image: "/images/public-speaking.jpg",
    },
    {
      title: "שפת גוף נכונה והכנה לראיונות מקיפים ",
      description: "הכנה לראיונות ושפת גוף מנצחת.",
      image: "/images/public-speaking2.jpg",
    },
    {
      title: "ערבי גיבוש",
      description: "חוויות קבוצתיות שמגבשות ובונות אופי.",
      image: "/images/team-building.jpg",
    },
    {
      title: "סימולציות ימי סיירות וימי גיבוש",
      description: "לימוד טכניקות הגנה עצמית מתקדמות.",
      image: "/images/krav-maga.jpg",
    },
    {
      title: "אימון מנטלי עם יונתן בן שבת של שעה",
      description:
        "ונתן מאמן מנטלי מוסמך מבית וואן לייף בית ספר להכשרת מאמנים מנטליים , פגישה זאת מכינה אותך מנטלית לכל מבחן או כל אירוע משמעותי בחיים , וככלל  מאפסת אותך ובונה לך מסלול ייחודי להמשך",
      image: "/images/leadership.jpg",
    },
    {
      title: "ניסיון בהדרכה והובלה אישית",
      description: "ליווי אישי ממדריכים מנוסים – בלי דיסטנס.",
      image: "/images/support.jpg",
    },
    {
      title: 'הכנה לכלל היחידות בצ"ל',
      description: "סיוע והכנה ליחידות: טיס, שייטת, סיירות ועוד.",
      image: "/images/special_units.jpg",
    },
  ];

  return (
    <section className="text-center mb-4">
      <h2 className="text-4xl font-bold text-black mb-6">המוצרים שלנו</h2>

      <div className="overflow-x-auto scrollbar-hide px-4 scroll-smooth snap-x snap-mandatory  ">
        <div className="flex space-x-6 w-max ">
          {items.map((item, i) => (
            <div
              key={i}
              className="snap-center flex-shrink-0 w-screen bg-cover bg-center rounded-2xl overflow-hidden shadow-lg relative h-99"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 text-white text-right">
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
        {/* הוספת סטטיסטיקות */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 pt-8">
          <div className="bg-blue-500 p-8 rounded-xl">
            <h3 className="text-3xl font-bold text-blue-600 mb-2">500+</h3>
            <p className="text-white">משתתפים מוצלחים</p>
          </div>
          <div className="bg-green-500 p-8 rounded-xl">
            <h3 className="text-3xl font-bold text-green-600 mb-2">95%</h3>
            <p className="text-gray-700">שיעור הצלחה בקבלה ליחידות</p>
          </div>
          <div className="bg-orange-500 p-8 rounded-xl">
            <h3 className="text-3xl font-bold text-orange-600 mb-2">10+</h3>
            <p className="text-gray-700">שנות ניסיון בהדרכה</p>
          </div>
        </div>

        <div className="text-center">
          <Link 
            to="/contact" 
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
          >
            התחל את המסע שלך היום
          </Link>
        </div>
       
    </section>
  );
};

export default Products;
