import "./index.css";
import Team from "./components/Team";
import Recommendations from "./components/Recommendations";
import FAQs from "./components/FAOs";
import Contact from "./components/Contact";
import About from "./components/About";
import MotivationVideo from "./components/MotivtionVideo";

function App() {
  return (
    <div className="bg-black text-white font-hebrew direction-rtl">
      <main className="max-w-7xl mx-auto px-4 py-8 space-y-12">
        {/* סרטון מוטיבציה */}
        <section className="bg-gray-900 rounded-xl shadow-lg p-6 sm:p-8 lg:p-10">
          <MotivationVideo />
        </section>

        {/* הצוות שלנו */}
        <section className="bg-black rounded-xl shadow-lg p-6 sm:p-8 lg:p-10">
          <Team />
        </section>

        {/* המלצות */}
        <section className="bg-gray-900 rounded-xl shadow-lg p-6 sm:p-8 lg:p-10">
          <Recommendations />
        </section>

        {/* שאלות נפוצות */}
        <section className="bg-black rounded-xl shadow-lg p-6 sm:p-8 lg:p-10">
          <FAQs />
        </section>

        {/* אודות */}
        <section className="bg-gray-900 rounded-xl shadow-lg p-6 sm:p-8 lg:p-10">
          <About />
        </section>

        {/* צור קשר */}
        <section className="bg-black rounded-xl shadow-lg p-6 sm:p-8 lg:p-10">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
