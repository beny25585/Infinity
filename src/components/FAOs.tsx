const FAOs = () => {
  const faqs = [
    { q: "איך מצטרפים?", a: "ניתן להירשם דרך טופס צור קשר או להתקשר." },
    { q: "האם מתאים גם למתחילים?", a: "כן, התכנית מותאמת לרמות שונות." },
    { q: "האם יש ליווי אישי?", a: "בוודאי. כל משתתף מקבל מלווה אישי." },
  ];

  return (
    <section className="bg-[var(--bg-dark)] text-white px-6">
      <h2 className="text-center text-4xl font-extrabold text-[var(--primary)] mb-12 gradient-text">
        שאלות נפוצות
      </h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {faqs.map((item, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl p-6 shadow-lg hover:bg-[var(--primary-dark)] hover:shadow-[0_10px_30px_rgb(37,99,235,0.7)] transition-all duration-300 cursor-pointer"
          >
            <h3 className="text-xl font-semibold text-[var(--primary)] mb-2">
              {item.q}
            </h3>
            <p className="text-gray-300 leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAOs;
