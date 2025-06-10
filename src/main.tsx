import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import Gallery from "./pages/Gallery";
import Videos from "./pages/Videos";
import About from "./components/About";
import Contact from "./components/Contact";
import Team from "./components/Team";
import FAOs from "./components/FAQs";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Products from "./components/Products";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <NavBar />
    <Layout>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Videos" element={<Videos />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/FAQs" element={<FAOs />} />
      </Routes>
    </Layout>
    <Footer />
  </BrowserRouter>
);
