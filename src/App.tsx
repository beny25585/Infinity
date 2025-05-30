import "./index.css";
import Team from "./components/Team";
import Recommendations from "./components/Recommendations";
import FAQs from "./components/FAQs";
import Contact from "./components/Contact";
import About from "./components/About";
import MotivationVideo from "./components/MotivtionVideo";
import Home from "./components/Home";
import Products from "./components/Products";
import PromoBanner from "./components/PromoBanner";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black font-hebrew direction-rtl">
      <main className="mx-auto flex-grow">
        <div className="container-fluid">
          {/* logo/home */}
          <section className="bg-green-100 shadow-lg p-4 sm:p-6 lg:p-10">
            <Home />
          </section>
        </div>

        <PromoBanner />

        <div className="container-fluid">
          {/* סרטון מוטיבציה */}
          <section className="bg-green-100 shadow-lg p-4 sm:p-6 lg:p-10">
            <MotivationVideo />
          </section>
        </div>

        <section className="bg-green-100 shadow-lg p-6 sm:p-8 lg:p-10">
          <Products />
        </section>

        <div className="container-fluid">
          {/* הצוות שלנו */}
          <section className="bg-white shadow-lg p-6 sm:p-8 lg:p-10">
            <Team />
          </section>
        </div>

        <div className="container-fluid">
          {/* המלצות */}
          <section className="bg-green-100 shadow-lg p-6 sm:p-8 lg:p-10">
            <Recommendations />
          </section>
        </div>

        <div className="container-fluid">
          {/* שאלות נפוצות */}
          <section className="bg-white shadow-lg p-6 sm:p-8 lg:p-10">
            <FAQs />
          </section>
        </div>

        <div className="container-fluid">
          {/* אודות */}
          <section className="bg-green-50 shadow-lg p-6 sm:p-8 lg:p-10">
            <About />
          </section>
        </div>

        <div className="container-fluid">
          {/* צור קשר */}
          <section className="bg-green shadow-lg p-6 sm:p-8 lg:p-10">
            <Contact />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
