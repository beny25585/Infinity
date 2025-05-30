
const recommendations = [
  {
    name: "מ׳ מראש העין",
    text: "התקבל לשייטת אחרי שנה בתוכנית. התמיכה פה זה משהו שלא רואים בשום מקום.",
  },
  {
    name: "י׳ מצוות אשדוד",
    text: "עבר תהליך עוצמתי והתקבל לדובדבן – תודה על הכול!",
  },
  {
    name: "א׳ מאשקלון",
    text: "התקבל לסיירת חרוב עם ביטחון עצמי שלא היה לי קודם.",
  },
  {
    name: "ל׳ מבאר שבע",
    text: "עבר הכנה לראיונות והתקבל לטיס. פשוט מקצוענים.",
  },
  {
    name: "ר׳ מהרצליה",
    text: "עברתי מאפס כושר לתותח תוך 4 חודשים. עכשיו בדרך לעוקץ.",
  },
  {
    name: "ת׳ מקריית שמונה",
    text: "הגעתי בלי כיוון והיום אני מפקד בקורס לוחמה בטרור.",
  },
  {
    name: "ש׳ מנתניה",
    text: "עשיתי שינוי אמיתי – קיבלתי ביטחון, כלים, והתקבלתי לשייטת.",
  },
  {
    name: "ק׳ מחיפה",
    text: "הפכתי להיות מנהיג אמיתי, היום אני בקומנדו הימי.",
  },
  {
    name: "ד׳ מראשון לציון",
    text: "עזרתם לי להפוך כל פחד לאנרגיה. התקבלתי ליחידת מודיעין מיוחדת.",
  },
  {
    name: "ע׳ מתל אביב",
    text: "הגעתי רק בשביל כושר ויצאתי עם משפחה. תודה!",
  },
];

const Recommendations = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-center mb-8">המלצות חניכים</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recommendations.map((rec, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-xl p-6 shadow-md"
          >
            <h4 className="text-xl font-semibold mb-2">{rec.name}</h4>
            <p>{rec.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Recommendations;
