import { Target } from "lucide-react";

const features = [
  {
    id: 1,
    title: "חזון אינפיניטי",
    desc: "לגדל דור חזק – מנטלית, פיזית וערכית.",
    icon: <Target className="w-6 h-6 text-white" />,
  },
];

export default function About() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">
      <div className="relative container mx-auto px-6 max-w-7xl z-10">
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* תמונה של יונתן */}
          <div className="md:w-1/2 w-full flex justify-center">
            <div className="w-full h-64 md:h-[450px] max-w-sm rounded-2xl overflow-hidden shadow-2xl border border-green-600">
              <img
                src="/images/yonatan-profile.jpg"
                alt="יונתן בן שבת"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* טקסט אודות */}
          <div className="md:w-1/2 space-y-8">
            <h2 className="text-4xl font-extrabold leading-tight tracking-wide select-none text-white">
              מי זה יונתן בן שבת?
            </h2>

            <p className="text-lg leading-relaxed text-white">
              יונתן בן שבת הוא מייסד תוכנית אינפיניטי לחינוך מנטלי וכושר קרבי,
              לוחם ומפקד לשעבר בסיירת חרוב, מרצה מבוקש ואיש השראה לבני נוער בכל
              הארץ.
            </p>
            <p className="text-lg leading-relaxed text-white">
              מהילד שסבל מחוסר ביטחון וקשיי קשב – ועד למנהיג שמעביר תהליכים
              עוצמתיים של העצמה, משמעת, אמונה עצמית ופריצת גבולות. עם ניסיון של
              מעל 4 שנים בליווי נוער, יונתן מאמין שכל אחד יכול להשתנות – אם רק
              יאמין בעצמו.
            </p>
          </div>
        </div>
      </div>
      {features.map(({ id, title, desc, icon }) => (
        <div
          key={id}
          className="relative group flex flex-col px-3 py-4 rounded-3xl bg-white border border-green-300 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1"
        >
          {/* רקע פנימי זז ב-hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-green-100 opacity-0 group-hover:opacity-30 transition-opacity duration-500 z-0" />

          <div className="relative z-10 ">
            {/* אייקון + כותרת בשורה */}
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center shadow-lg shadow-green-800/30 transition-transform duration-300 group-hover:scale-110">
                {icon}
              </div>
              <h3 className="text-xl font-bold text-black">{title}</h3>
            </div>

            {/* תיאור */}
            <p className="text-gray-700  leading-relaxed">{desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
