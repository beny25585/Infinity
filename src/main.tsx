import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import Gallery from "./pages/Gallery";
import Videos from "./pages/Videos";
import About from "./components/About";
import Contact from "./components/Contact";
import Team from "./pages/Team";
import FAQs from "./components/FAQs";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import Home from "./components/Home";
import ProductsPage from "./pages/ProductsPage";
import ScrollToTop from "./components/ScrollToTop";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ScrollToTop />
    <NavBar />
    <Layout>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/ProductsPage" element={<ProductsPage />} />
        <Route path="/Videos" element={<Videos />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/FAQs" element={<FAQs />} />
      </Routes>
    </Layout>
    <Footer />
  </BrowserRouter>
);
