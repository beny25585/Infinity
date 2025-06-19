import Recommendations from "./components/Recommendations";
import FAQs from "./components/FAQs";
import Contact from "./components/Contact";
import About from "./components/About";
import MotivationVideo from "./components/MotivationVideo";
import Home from "./components/Home";
import Products from "./components/Products";
import PromoBanner from "./components/PromoBanner";
import TeamInApp from "./components/TeamInApp";

function App() {
  return (
    <div className="min-h-screen flex flex-col text-black font-hebrew direction-rtl">
      <main className=" ">
        <MotivationVideo />
        <div className="max-w-screen">
          <Home />
          </div>
        <PromoBanner />

        <div className="max-w-screen">
          <Products />
        </div>

        <TeamInApp />
        <div className="max-w-screen">
          <Recommendations />
        </div>
        <FAQs />

        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
