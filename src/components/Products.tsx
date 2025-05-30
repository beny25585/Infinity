import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonRunning,
  faShieldHalved,
  faDumbbell,
  faMicrophone,
  faUserTie,
  faLightbulb,
  faUsers,
  faPeopleGroup,
  faMedal,
} from "@fortawesome/free-solid-svg-icons";

const Products = () => {
  const items = [
    {
      title: "שיעורי היאבקות",
      description: "פיתוח כישורים פיזיים וביטחון עצמי דרך היאבקות מקצועית.",
      image: "/images/wrestling.jpg",
      icon: faPersonRunning,
    },
    {
      title: "קרב מגע",
      description: "לימוד טכניקות הגנה עצמית מתקדמות.",
      image: "/images/kravmaga.jpg",
      icon: faShieldHalved,
    },
    {
      title: "איגרוף",
      description: "אימוני קואורדינציה, קצב, וכוח מנטלי.",
      image: "/images/boxing.jpg",
      icon: faDumbbell,
    },
    {
      title: "דיבור בפני קהל",
      description: "איך לעמוד בביטחון מול קהל ולרתק אנשים.",
      image: "/images/public_speaking.jpg",
      icon: faMicrophone,
    },
    {
      title: "שפת גוף והכנה לראיונות",
      description: "הכנה לראיונות ושפת גוף מנצחת.",
      image: "/images/body_language.jpg",
      icon: faUserTie,
    },
    {
      title: "טיפים למנהיגות והשפעה",
      description: "איך להפוך לאדם שהסביבה מקשיבה לו ורוצה ללכת אחריו.",
      image: "/images/leadership.jpg",
      icon: faLightbulb,
    },
    {
      title: "ניסיון בהדרכה והובלה אישית",
      description: "ליווי אישי ממדריכים מנוסים – בלי דיסטנס.",
      image: "/images/support.jpg",
      icon: faUsers,
    },
    {
      title: "ערבי גיבוש",
      description: "חוויות קבוצתיות שמגבשות ובונות אופי.",
      image: "/images/group.jpg",
      icon: faPeopleGroup,
    },
    {
      title: "הכנה ליחידות מיוחדות",
      description: "סיוע והכנה ליחידות: טיס, שייטת, סיירות ועוד.",
      image: "/images/special_units.jpg",
      icon: faMedal,
    },
  ];

  return (
    <section className="py-12 px-4 bg-gradient-to-br from-blue-50 to-white">
  <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">
    המוצרים שלנו
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
    {items.map((item, index) => (
      <div
        key={index}
        className="bg-white rounded-3xl shadow-xl p-8 text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-gray-100"
      >
        <div className="flex justify-center mb-6">
          <FontAwesomeIcon
            icon={item.icon}
            className="text-blue-600 text-6xl drop-shadow-sm"
          />
        </div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
          {item.title}
        </h3>
        <p className="text-gray-600 leading-relaxed">{item.description}</p>
      </div>
    ))}
  </div>
</section>

  );
};

export default Products;
