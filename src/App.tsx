import FAQs from "./components/FAQs";
import Contact from "./components/Contact";
import About from "./components/About";
import MotivationVideo from "./components/MotivationVideo";
import Home from "./components/Home";
import ProductsHome from "./components/ProductsHome";
import PromoBanner from "./components/PromoBanner";
import TeamInApp from "./components/TeamInApp";
import TestimonialsHome from "./components/TestimonialsHome"; 
import GroupsOfTenBanner from "./components/GroupsOfTenBanner";

function App() {
  return (
    <div className="min-h-screen flex flex-col text-black font-hebrew direction-rtl">
      <main className=" ">
        <MotivationVideo />
        <div className="max-w-screen">
          <Home />
        </div>
        <PromoBanner />
        <GroupsOfTenBanner/>

        <div className="max-w-screen">
          <ProductsHome />
        </div>

        <TeamInApp />
        <div className="max-w-screen">
          <TestimonialsHome />
        </div>
        <FAQs />

        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
