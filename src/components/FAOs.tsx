import Footer from './Footer';
import Navbar from './Navbar';

const FAOs = () => {
  return (
    <section className="bg-black text-white p-6 rounded-lg shadow-lg mb-8">
      {/* שאלות נפוצות */}
      <Navbar />
          <h2 className="text-4xl text-green-500 font-bold mb-6">שאלות נפוצות</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { q: "איך מצטרפים?", a: "ניתן להירשם דרך טופס צור קשר או להתקשר." },
              { q: "האם מתאים גם למתחילים?", a: "כן, התכנית מותאמת לרמות שונות." },
              { q: "האם יש ליווי אישי?", a: "בוודאי. כל משתתף מקבל מלווה אישי." },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-800 text-white p-6 rounded-lg shadow-md transition hover:scale-105 hover:bg-green-700"
              >
                <h3 className="text-lg font-bold mb-2">{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </div>
          <Footer />
     </section>
  )
}

export default FAOs