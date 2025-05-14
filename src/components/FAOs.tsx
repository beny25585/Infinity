const FAOs = () => {
  return (
    <section className="bg-gray-900 text-white p-6  shadow-lg">
      {/* שאלות נפוצות */}

      <h2 className="text-center text-3xl font-bold text-[#2563EB] mb-4">שאלות נפוצות</h2>
      <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:bg-[#1E3A8A] hover:scale-100 transition duration-300">
        {[
          { q: "איך מצטרפים?", a: "ניתן להירשם דרך טופס צור קשר או להתקשר." },
          { q: "האם מתאים גם למתחילים?", a: "כן, התכנית מותאמת לרמות שונות." },
          { q: "האם יש ליווי אישי?", a: "בוודאי. כל משתתף מקבל מלווה אישי." },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-gray-800 text-white p-6 rounded-lg shadow-md transition hover:scale-105 hover:bg-[#1D4ED8] hover:shadow-xl"
          >
            <h3 className="text-lg font-bold text-[#2563EB]">{item.q}</h3>
            <p className="text-gray-400">{item.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAOs;
