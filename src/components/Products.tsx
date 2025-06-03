

const Products = () => {
  const items = [
    {
      title: "אימוני חוף",
      description: "פיתוח כישורים פיזיים וביטחון עצמי דרך היאבקות מקצועית.",
      image: "/images/אימוני חוף.jpg",
      style: "w-full h-40 object-cover object-center rounded-3xl",
    },
    {
      title: "איגרוף",
      description: "אימוני קואורדינציה, קצב, וכוח מנטלי.",
      image: "/images/קרב מגע.jpg",
      style: "w-full h-40 object-cover object-center rounded-3xl",
    },
    {
      title: "דיבור בפני קהל",
      description: "איך לעמוד בביטחון מול קהל ולרתק אנשים.",
      image: "/images/דיבור מול קהל 2.jpg",
      style: "w-full h-40 object-cover object-[30%_30%] rounded-3xl",
    },
    {
      title: "שפת גוף והכנה לראיונות",
      description: "הכנה לראיונות ושפת גוף מנצחת.",
      image: "/images/דיבור מול קהל.jpg",
      style: "w-full h-40 object-cover object-top rounded-3xl",
    },
    {
      title: "ערבי גיבוש",
      description: "חוויות קבוצתיות שמגבשות ובונות אופי.",
      image: "/images/ערבי גיבוש.jpg",
      style: "w-full h-40 object-cover object-center  rounded-3xl",
    },
    {
      title: "קרב מגע",
      description: "לימוד טכניקות הגנה עצמית מתקדמות.",
      image: "",
    },
    {
      title: "טיפים למנהיגות והשפעה",
      description: "איך להפוך לאדם שהסביבה מקשיבה לו ורוצה ללכת אחריו.",
      image: "/images/leadership.jpg",
    },
    {
      title: "ניסיון בהדרכה והובלה אישית",
      description: "ליווי אישי ממדריכים מנוסים – בלי דיסטנס.",
      image: "/images/support.jpg",
    },
    {
      title: "הכנה ליחידות מיוחדות",
      description: "סיוע והכנה ליחידות: טיס, שייטת, סיירות ועוד.",
      image: "/images/special_units.jpg",
    },
  ];

  return (
    <section>
  <h2 className="text-4xl font-bold text-center text-white mb-12">
    המוצרים שלנו
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
    {items.map((item, index) => (
      <div
        key={index}
        className="bg-stone-900 rounded-3xl shadow-xl  text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-gray-100"
      >
        <div className="flex justify-center mb-6 ">
           <img
            src={item.image} 
            className={item.style || "w-1/2"}           
          />
            
        </div>
        <h3 className="text-2xl font-semibold text-white mb-3">
          {item.title}
        </h3>
        <p className="text-white leading-relaxed">{item.description}</p>
      </div>
    ))}
  </div>
</section>

  );
};

export default Products;
