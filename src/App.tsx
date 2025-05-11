import './index.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Team from './components/Team';
import Recommendations from './components/Recommendations';
import FAQs from './components/FAOs'
import Contact from './components/Contact';
import About from './components/About';
import MotivationVideo from './components/MotivtionVideo';

function App() {
  return (
    <div className="bg-black text-white min-h-screen font-hebrew direction-rtl">
      <Navbar />
      <main className="p-8 mt-8 mx-auto">
        {/* סרטון מוטיבציה עם רקע כהה פחות */}
        <section className="bg-gray-900 p-8 rounded-lg shadow-lg mb-8">
          <MotivationVideo />
        </section>

        {/* הצוות עם רקע שחור מלא */}
        <section className="bg-black p-8 rounded-lg shadow-lg mb-8">
          <Team />
        </section>

        {/* המלצות */}
        <section className="bg-gray-900 p-8 rounded-lg shadow-lg mb-8">
          <Recommendations />
        </section>

        {/* שאלות נפוצות */}
        <section className="bg-black p-8 rounded-lg shadow-lg mb-8">
          <FAQs />
        </section>

        {/* אודות */}
        <section className="bg-gray-900 p-8 rounded-lg shadow-lg mb-8">
          <About />
        </section>

        {/* צור קשר */}
        <section className="bg-black p-8 rounded-lg shadow-lg">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
