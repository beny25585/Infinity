

const testimonials = [
  {
    name: "יואב מ.",
    text: "לא האמנתי כמה רחוק אפשר להגיע. התוכנית שינתה לי את החיים, פשוטו כמשמעו.",
  },
  {
    name: "אדם ש.",
    text: "הגעתי בלי כושר ובלי ביטחון, ויצאתי מוכן לצבא ולחיים. תודה אינפיניטי!",
  },
  {
    name: "דניאל ג.",
    text: "המאמנים מקצועיים בטירוף. כל אימון היה חוויה. ממליץ מכל הלב!",
  },
];

export default function TestimonialsCarousel() {
  return (
    <section className="bg-white py-8 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">
        מה החניכים בתוכנית מספרים עלינו
      </h2>

      <div className="overflow-x-auto scroll-smooth snap-x snap-mandatory px-4">
        <div className="flex space-x-6 w-max">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="snap-center flex-shrink-0 w-80 bg-green-100 border border-green-300 rounded-2xl shadow-lg p-6"
            >
              <p className="text-xl text-gray-700 italic mb-4">“{t.text}”</p>
              <p className="font-semibold text-green-900">– {t.name}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="text-sm text-gray-500 mt-4">החלק שמאלה וימינה לצפייה</p>
    </section>
  );
}

